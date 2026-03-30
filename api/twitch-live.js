const TWITCH_TOKEN_URL = 'https://id.twitch.tv/oauth2/token';
const TWITCH_STREAMS_URL = 'https://api.twitch.tv/helix/streams';
const CACHE_TTL_MS = 60 * 1000;

let tokenCache = {
  accessToken: '',
  expiresAt: 0,
};

let liveCache = {
  key: '',
  data: [],
  expiresAt: 0,
};

const json = (res, status, payload) => {
  res.statusCode = status;
  res.setHeader('Content-Type', 'application/json; charset=utf-8');
  res.end(JSON.stringify(payload));
};

const getAppToken = async (clientId, clientSecret) => {
  const now = Date.now();
  if (tokenCache.accessToken && tokenCache.expiresAt > now + 10000) {
    return tokenCache.accessToken;
  }

  const tokenRes = await fetch(
    `${TWITCH_TOKEN_URL}?client_id=${encodeURIComponent(clientId)}&client_secret=${encodeURIComponent(clientSecret)}&grant_type=client_credentials`,
    { method: 'POST' }
  );

  if (!tokenRes.ok) {
    throw new Error(`Token request failed: ${tokenRes.status}`);
  }

  const tokenJson = await tokenRes.json();
  tokenCache = {
    accessToken: tokenJson.access_token,
    expiresAt: now + (Number(tokenJson.expires_in) || 3600) * 1000,
  };
  return tokenCache.accessToken;
};

module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    return json(res, 405, { error: 'Method not allowed' });
  }

  const clientId = process.env.TWITCH_CLIENT_ID;
  const clientSecret = process.env.TWITCH_CLIENT_SECRET;
  if (!clientId || !clientSecret) {
    return json(res, 500, { error: 'Twitch credentials are not configured' });
  }

  const channelsRaw = (req.body && Array.isArray(req.body.channels)) ? req.body.channels : [];
  const channels = Array.from(
    new Set(
      channelsRaw
        .map((c) => String(c || '').trim().toLowerCase())
        .filter(Boolean)
    )
  ).slice(0, 30);

  if (!channels.length) {
    return json(res, 200, { live: [] });
  }

  const cacheKey = channels.join(',');
  const now = Date.now();
  if (liveCache.key === cacheKey && liveCache.expiresAt > now) {
    return json(res, 200, { live: liveCache.data, cached: true });
  }

  try {
    const accessToken = await getAppToken(clientId, clientSecret);
    const query = channels.map((c) => `user_login=${encodeURIComponent(c)}`).join('&');
    const streamsRes = await fetch(`${TWITCH_STREAMS_URL}?${query}`, {
      headers: {
        'Client-Id': clientId,
        Authorization: `Bearer ${accessToken}`,
      },
    });

    if (!streamsRes.ok) {
      throw new Error(`Streams request failed: ${streamsRes.status}`);
    }

    const streamsJson = await streamsRes.json();
    const live = (streamsJson.data || []).map((s) => String(s.user_login || '').toLowerCase()).filter(Boolean);

    liveCache = {
      key: cacheKey,
      data: live,
      expiresAt: now + CACHE_TTL_MS,
    };

    return json(res, 200, { live });
  } catch (error) {
    return json(res, 500, { error: 'Unable to fetch Twitch live status' });
  }
};

