/* global theme */

const WIKI_SERVER_ID = '1';

const wikiUi = {
    en: {
        pageTitle: 'High Five Salvation Wiki',
        pageSubtitle: 'Guides, rates, client help, and detailed articles for Oasis High Five.',
        searchLabel: 'Search articles',
        searchPlaceholder: 'Type to filter…',
        allTopics: 'All topics',
        wrongServerTitle: 'This wiki is for High Five Salvation',
        wrongServerText: 'Switch to High Five in the world selector above, or open the main page to choose this world.',
        wrongServerLink: 'Go to main page',
        articleHint: 'Knowledge base',
        addedLabel: 'Added',
        updatedLabel: 'Updated',
    },
    pl: {
        pageTitle: 'Wiki High Five Salvation',
        pageSubtitle: 'Poradniki, stawki, klient i szczegółowe artykuły Oasis High Five.',
        searchLabel: 'Szukaj w artykułach',
        searchPlaceholder: 'Filtruj…',
        allTopics: 'Wszystkie tematy',
        wrongServerTitle: 'Ta wiki dotyczy High Five Salvation',
        wrongServerText: 'Wybierz High Five na liście światów powyżej albo wróć na stronę główną.',
        wrongServerLink: 'Strona główna',
        articleHint: 'Baza wiedzy',
        addedLabel: 'Dodano',
        updatedLabel: 'Aktualizacja',
    },
};

const wikiCategories = [
    { id: 'start', label: { en: 'Getting started', pl: 'Start' } },
    { id: 'server', label: { en: 'Server & rates', pl: 'Serwer i stawki' } },
    { id: 'gameplay', label: { en: 'Gameplay', pl: 'Rozgrywka' } },
    { id: 'client', label: { en: 'Client & tech', pl: 'Klient i technikalia' } },
    { id: 'community', label: { en: 'Community', pl: 'Społeczność' } },
];

const wikiArticleMetaById = {
    'olympiad-games-guide': { added: '2026-03-27', updated: '2026-03-27' },
    'epic-boss-spawn-guide': { added: '2026-03-26', updated: '2026-03-26' },
    'instance-entry-guide': { added: '2026-03-24', updated: '2026-03-24' },
    'steel-citadel-hellbound': { added: '2026-03-20', updated: '2026-03-24' },
    welcome: { added: '2026-03-01', updated: '2026-03-24' },
    rates: { added: '2026-03-01', updated: '2026-03-24' },
    economy: { added: '2026-03-01', updated: '2026-03-24' },
    'pvp-pve': { added: '2026-03-01', updated: '2026-03-24' },
    'client-install': { added: '2026-03-01', updated: '2026-03-24' },
    'discord-support': { added: '2026-03-01', updated: '2026-03-24' },
};

const wikiArticles = [
    {
        id: 'welcome',
        categoryId: 'start',
        title: {
            en: 'Welcome to the wiki',
            pl: 'Witamy w wiki',
        },
        excerpt: {
            en: 'What this knowledge base covers and how to use it.',
            pl: 'Czego dotyczy ta baza i jak z niej korzystać.',
        },
        body: {
            en: `
                <div class="un_featuresPageDetailSection">
                    <p>This wiki collects detailed articles about <strong>Oasis High Five Salvation</strong>: official rates, how to install the client, economy tips, and where to get help.</p>
                    <p>Use the sidebar to browse by topic or search by keyword. Article URLs use the hash (for example <code>wiki.html#rates</code>) so you can bookmark and share specific pages.</p>
                    <p>Content is maintained for the High Five world only. If something in-game changes, announcements usually appear on Discord first.</p>
                </div>`,
            pl: `
                <div class="un_featuresPageDetailSection">
                    <p>Ta wiki zbiera szczegółowe artykuły o <strong>Oasis High Five Salvation</strong>: oficjalne stawki, instalacja klienta, ekonomia i pomoc.</p>
                    <p>Korzystaj z panelu bocznego według tematu albo wpisz frazę w wyszukiwarce. Adresy artykułów używają hasha (np. <code>wiki.html#rates</code>), więc możesz zapisać lub wysłać link.</p>
                    <p>Treści dotyczą wyłącznie świata High Five. O zmianach w grze dowiesz się najczęściej najpierw na Discordzie.</p>
                </div>`,
        },
    },
    {
        id: 'rates',
        categoryId: 'server',
        title: {
            en: 'Server rates',
            pl: 'Stawki serwera',
        },
        excerpt: {
            en: 'Experience, drops, raids, and other multipliers for High Five Salvation.',
            pl: 'Doświadczenie, dropy, rajdy i mnożniki High Five Salvation.',
        },
        body: {
            en: `
                <div class="un_featuresPageDetailSection">
                    <p>These are the configured multipliers for the <strong>High Five Salvation</strong> world (Oasis). They may be adjusted for balance; watch Discord for changes.</p>
                    <div class="un_ratesTable">
                        <table>
                            <tr><td>Experience</td><td><strong>x5</strong></td></tr>
                            <tr><td>SP</td><td><strong>x5</strong></td></tr>
                            <tr><td>Adena</td><td><strong>x3</strong></td></tr>
                            <tr><td>Drop</td><td><strong>x5</strong></td></tr>
                            <tr><td>Spoil</td><td><strong>x5</strong></td></tr>
                            <tr><td>Quest</td><td><strong>x3</strong></td></tr>
                            <tr><td>Seal Stones</td><td><strong>x5</strong></td></tr>
                            <tr><td>Raid drop</td><td><strong>x5</strong></td></tr>
                            <tr><td>Epic drop</td><td><strong>x1</strong></td></tr>
                        </table>
                    </div>
                    <p>Subclass limits, buff caps, and other rules are documented in depth on the Features page for this world.</p>
                </div>`,
            pl: `
                <div class="un_featuresPageDetailSection">
                    <p>Poniżej mnożniki skonfigurowane dla świata <strong>High Five Salvation</strong> (Oasis). Mogą ulec zmianie – śledź Discord.</p>
                    <div class="un_ratesTable">
                        <table>
                            <tr><td>Doświadczenie</td><td><strong>x5</strong></td></tr>
                            <tr><td>SP</td><td><strong>x5</strong></td></tr>
                            <tr><td>Adena</td><td><strong>x3</strong></td></tr>
                            <tr><td>Drop</td><td><strong>x5</strong></td></tr>
                            <tr><td>Spoil</td><td><strong>x5</strong></td></tr>
                            <tr><td>Quest</td><td><strong>x3</strong></td></tr>
                            <tr><td>Kamienie pieczęci</td><td><strong>x5</strong></td></tr>
                            <tr><td>Drop z rajdów</td><td><strong>x5</strong></td></tr>
                            <tr><td>Drop z epików</td><td><strong>x1</strong></td></tr>
                        </table>
                    </div>
                    <p>Limity podklas, buffów i pozostałe zasady opisuje strona Funkcje dla tego świata.</p>
                </div>`,
        },
    },
    {
        id: 'economy',
        categoryId: 'gameplay',
        title: {
            en: 'Economy & progression',
            pl: 'Ekonomia i progres',
        },
        excerpt: {
            en: 'Adena flow, crafting, and how rates shape the market.',
            pl: 'Obieg adeny, craft i wpływ stawek na rynek.',
        },
        body: {
            en: `
                <div class="un_featuresPageDetailSection">
                    <p>With <strong>x3 Adena</strong> and <strong>x5</strong> on most drops, gear upgrades come faster than on retail, but rare and epic chase items still matter for endgame.</p>
                    <ul>
                        <li>Spoilers and crafters stay relevant—check auction house prices daily.</li>
                        <li>Quest rewards at <strong>x3</strong> help alts and new characters catch up.</li>
                        <li>Coordinate clan warehouse and party farms to avoid duplicate farming in the same spot during peak hours.</li>
                    </ul>
                </div>`,
            pl: `
                <div class="un_featuresPageDetailSection">
                    <p>Przy <strong>x3 Adena</strong> i <strong>x5</strong> na większości dropów ekwipunek rośnie szybciej niż na retailu, ale rzadkie i epickie przedmioty wciąż napędzają endgame.</p>
                    <ul>
                        <li>Spoile i rzemieślnicy mają sens – śledź ceny na aukcji.</li>
                        <li>Nagrody z questów (<strong>x3</strong>) pomagają altom i nowym postaciom.</li>
                        <li>Ustalcie w klanie magazyn i party farmy, żeby nie dublować farmy w tym samym miejscu w szczycie.</li>
                    </ul>
                </div>`,
        },
    },
    {
        id: 'pvp-pve',
        categoryId: 'gameplay',
        title: {
            en: 'PvP, sieges, and PvE',
            pl: 'PvP, oblężenia i PvE',
        },
        excerpt: {
            en: 'How Oasis balances open PvP with PvE progression on High Five.',
            pl: 'Balans otwartego PvP i progresu PvE na High Five.',
        },
        body: {
            en: `
                <div class="un_featuresPageDetailSection">
                    <p>High Five Salvation keeps core chronicle combat while modernizing the client. Expect contested spots, olympiad-style duels where enabled, and clan content tied to the project roadmap.</p>
                    <p>For <strong>siege schedules</strong>, boss windows, and event calendars, use Discord announcements—times are often timezone-specific.</p>
                    <p>Raid and epic drops use the rates listed in the <a href="#rates">Server rates</a> article; plan parties accordingly.</p>
                </div>`,
            pl: `
                <div class="un_featuresPageDetailSection">
                    <p>High Five Salvation zachowuje walkę chronicle przy nowoczesnym kliencie. Czekają walki o spoty, olimpijski styl pojedynków tam gdzie włączono oraz content klanowy z roadmapy projektu.</p>
                    <p><strong>Harmonogramy oblężeń</strong>, okna bossów i eventy – na Discordzie (uwaga na strefy czasowe).</p>
                    <p>Stawki rajdów i epików jak w artykule <a href="#rates">Stawki serwera</a> – planuj party pod to.</p>
                </div>`,
        },
    },
    {
        id: 'client-install',
        categoryId: 'client',
        title: {
            en: 'How to download and connect',
            pl: 'Jak pobrac klienta i polaczyc sie',
        },
        excerpt: {
            en: 'World switch, download links, launcher setup, and account login.',
            pl: 'Przelacznik swiata, linki pobierania, launcher i logowanie.',
        },
        body: {
            en: `
                <div class="un_featuresPageDetailSection">
                    <h3>1) Select the correct world first</h3>
                    <p>Use the <strong>server world switch</strong> in the <strong>top-left corner</strong> of the website and select <strong>High Five</strong>. This wiki and the Salvation H5 client files are for the High Five world.</p>
                    <p><img src="images/worldselect.png" alt="World selector set to High Five" style="max-width: 100%; height: auto; border-radius: 8px;" /></p>
                    <h3>2) Download the launcher</h3>
                    <p>After selecting <strong>High Five</strong>, you can start download in two ways:</p>
                    <ul>
                        <li>Click <strong>Download</strong> in the top navigation bar, or</li>
                        <li>Click <strong>Download</strong> on the title page.</li>
                    </ul>
                    <p>Both options provide the launcher from <strong>Mega</strong> (4.4 MB).</p>
                    <p><img src="images/downloadh5.png" alt="High Five Salvation download panel with Mega launcher option" style="max-width: 100%; height: auto; border-radius: 8px;" /></p>
                    <h3>3) Install and launch</h3>
                    <ul>
                        <li>Extract the downloaded files to your preferred folder.</li>
                        <li>Run the launcher and let it finish updates before starting the game.</li>
                        <li>If your antivirus blocks a file, verify with staff support first.</li>
                    </ul>
                    <h3>4) Accounts and login</h3>
                    <p><strong>Accounts are created automatically</strong> on first login in game. If you prefer, you can also create an account manually in the User Control Panel: <a href="https://account.oasis-world.eu/ucp/" target="_blank" rel="noopener noreferrer">https://account.oasis-world.eu/ucp/</a>.</p>
                </div>`,
            pl: `
                <div class="un_featuresPageDetailSection">
                    <h3>1) Najpierw wybierz poprawny swiat</h3>
                    <p>Na stronie uzyj <strong>przelacznika swiata serwera</strong> w <strong>lewym gornym rogu</strong> i wybierz <strong>High Five</strong>. Ta wiki oraz pliki klienta Salvation H5 dotycza tylko tego swiata.</p>
                    <p><img src="images/worldselect.png" alt="Przelacznik swiata ustawiony na High Five" style="max-width: 100%; height: auto; border-radius: 8px;" /></p>
                    <h3>2) Pobierz launcher</h3>
                    <p>Po wybraniu <strong>High Five</strong> pobieranie uruchomisz na dwa sposoby:</p>
                    <ul>
                        <li>Kliknij <strong>Download</strong> w gornym pasku nawigacji, albo</li>
                        <li>Kliknij <strong>Download</strong> na stronie tytulowej.</li>
                    </ul>
                    <p>Obie opcje prowadza do launchera na <strong>Mega</strong> (4.4 MB).</p>
                    <p><img src="images/downloadh5.png" alt="Panel pobierania launchera High Five Salvation z opcja Mega" style="max-width: 100%; height: auto; border-radius: 8px;" /></p>
                    <h3>3) Instalacja i start</h3>
                    <ul>
                        <li>Rozpakuj pobrane pliki do wybranego folderu.</li>
                        <li>Uruchom launcher i poczekaj az zakonczy aktualizacje.</li>
                        <li>Jesli antywirus zablokuje plik, najpierw potwierdz to ze wsparciem administracji.</li>
                    </ul>
                    <h3>4) Konta i logowanie</h3>
                    <p><strong>Konta sa tworzone automatycznie</strong> przy pierwszym logowaniu do gry. Jesli wolisz, konto mozesz zalozyc recznie w panelu UCP: <a href="https://account.oasis-world.eu/ucp/" target="_blank" rel="noopener noreferrer">https://account.oasis-world.eu/ucp/</a>.</p>
                </div>`,
        },
    },
    {
        id: 'discord-support',
        categoryId: 'community',
        title: {
            en: 'Discord & support',
            pl: 'Discord i wsparcie',
        },
        excerpt: {
            en: 'Where to ask questions, report bugs, and follow patch notes.',
            pl: 'Pytania, bugi i patch notes.',
        },
        body: {
            en: `
                <div class="un_featuresPageDetailSection">
                    <p>The <a href="https://discord.gg/UmbYqegXv7" target="_blank" rel="noopener noreferrer">Oasis Discord</a> is the live channel for support, staff announcements, and community discussion.</p>
                    <ul>
                        <li>Use the appropriate ticket or channel so volunteers can route your issue.</li>
                        <li>When reporting bugs, include steps to reproduce and your client build if known.</li>
                        <li>Vote links in the navigation help the server rank on public lists—thank you if you participate.</li>
                    </ul>
                </div>`,
            pl: `
                <div class="un_featuresPageDetailSection">
                    <p>Na <a href="https://discord.gg/UmbYqegXv7" target="_blank" rel="noopener noreferrer">Discordzie Oasis</a> działa wsparcie, ogłoszenia administracji i społeczność.</p>
                    <ul>
                        <li>Pisz w właściwym kanale / tickecie, żeby łatwiej było pomóc.</li>
                        <li>Przy bugach podaj kroki odtworzenia i wersję klienta, jeśli znasz.</li>
                        <li>Linki do głosowania w menu pomagają w rankingu – dzięki za udział.</li>
                    </ul>
                </div>`,
        },
    },
];

if (typeof window !== 'undefined') {
    const externalArticles = [
        window.WIKI_HELLBOUND_ARTICLE,
        window.WIKI_HELLBOUND_PROGRESSION_ARTICLE,
        window.WIKI_INSTANCE_ENTRY_ARTICLE,
        window.WIKI_EPIC_BOSS_SPAWN_ARTICLE,
        window.WIKI_DRAGON_SLAYER_BLESSING_ARTICLE,
        window.WIKI_OLYMPIAD_GAMES_ARTICLE,
        window.WIKI_SUBCLASSES_CERTIFICATIONS_ARTICLE,
    ].filter(Boolean);
    // Keep newest loaded external articles at the top of the list.
    if (externalArticles.length) {
        wikiArticles.unshift(...externalArticles.slice().reverse());
    }
}

let wikiState = {
    lang: 'en',
    categoryId: null,
    search: '',
    articleId: null,
};

function getWikiLanguage() {
    try {
        const stored = localStorage.getItem('selectedLanguage');
        return stored === 'pl' ? 'pl' : 'en';
    } catch (e) {
        const htmlLang = document.documentElement.getAttribute('lang');
        return htmlLang === 'pl' ? 'pl' : 'en';
    }
}

function getStoredServerId() {
    let storedServer = null;
    try {
        storedServer = localStorage.getItem('selectedServer');
    } catch (e) {
        storedServer = null;
    }
    if (storedServer && theme.find((s) => s.id === storedServer)) return storedServer;
    const def = theme.find((server) => server.defaultTheme);
    return def ? def.id : theme[0].id;
}

function categoryLabel(id, lang) {
    const c = wikiCategories.find((x) => x.id === id);
    return c ? c.label[lang] || c.label.en : '';
}

function findArticle(id) {
    return wikiArticles.find((a) => a.id === id);
}

function getArticleMeta(article) {
    if (!article) return null;
    return article.meta || wikiArticleMetaById[article.id] || null;
}

function getArticleMetaText(article, lang) {
    const meta = getArticleMeta(article);
    if (!meta) return '';
    const ui = wikiUi[lang] || wikiUi.en;
    const parts = [];
    if (meta.added) parts.push(`${ui.addedLabel}: ${meta.added}`);
    if (meta.updated) parts.push(`${ui.updatedLabel}: ${meta.updated}`);
    return parts.join(' · ');
}

function filteredArticles() {
    const { lang, categoryId, search } = wikiState;
    const q = search.trim().toLowerCase();
    return wikiArticles.filter((a) => {
        if (categoryId && a.categoryId !== categoryId) return false;
        if (!q) return true;
        const t = (a.title[lang] || a.title.en).toLowerCase();
        const e = (a.excerpt[lang] || a.excerpt.en).toLowerCase();
        return t.includes(q) || e.includes(q);
    });
}

function setHashArticle(id) {
    if (!id || !findArticle(id)) return;
    const frag = `#${id}`;
    const current = window.location.hash;
    if (current === frag || current.replace(/^#/, '') === id) return;
    try {
        // Hash-only URL: avoids Firefox issues with replaceState + some path/search combinations (file://, encoded paths, etc.)
        window.history.replaceState(null, '', frag);
    } catch (e) {
        try {
            if (window.location.hash !== frag) {
                window.location.hash = id;
            }
        } catch (e2) {
            /* ignore */
        }
    }
}

function renderWikiChrome() {
    const lang = wikiState.lang;
    const ui = wikiUi[lang];

    document.title = `${ui.pageTitle} | Oasis World Lineage II`;

    const h1 = document.querySelector('.un_wikiPageTitle');
    const sub = document.querySelector('.un_wikiPageSubtitle');
    if (h1) h1.textContent = ui.pageTitle;
    if (sub) sub.textContent = ui.pageSubtitle;

    const label = document.querySelector('.un_wikiSearchLabel');
    const input = document.getElementById('wikiSearch');
    if (label) label.textContent = ui.searchLabel;
    if (input) input.placeholder = ui.searchPlaceholder;

    const wrongTitle = document.querySelector('.un_wikiWrongServerTitle');
    const wrongText = document.querySelector('.un_wikiWrongServerText');
    const wrongLink = document.querySelector('.un_wikiWrongServerLink');
    if (wrongTitle) wrongTitle.textContent = ui.wrongServerTitle;
    if (wrongText) wrongText.textContent = ui.wrongServerText;
    if (wrongLink) wrongLink.textContent = ui.wrongServerLink;
}

function renderCategoryNav() {
    const nav = document.querySelector('.un_wikiCategoryNav');
    if (!nav) return;
    const lang = wikiState.lang;
    const ui = wikiUi[lang];

    const buttons = [
        `<button type="button" class="un_wikiCatBtn ${wikiState.categoryId ? '' : 'is-active'}" data-category="">${ui.allTopics}</button>`,
        ...wikiCategories.map(
            (c) =>
                `<button type="button" class="un_wikiCatBtn ${wikiState.categoryId === c.id ? 'is-active' : ''}" data-category="${c.id}">${c.label[lang] || c.label.en}</button>`
        ),
    ];
    nav.innerHTML = buttons.join('');

    nav.querySelectorAll('.un_wikiCatBtn').forEach((btn) => {
        btn.addEventListener('click', () => {
            wikiState.categoryId = btn.dataset.category || null;
            renderCategoryNav();
            renderArticleList();
            const list = filteredArticles();
            if (list.length && (!wikiState.articleId || !list.find((a) => a.id === wikiState.articleId))) {
                showArticle(list[0].id, true);
            } else if (wikiState.articleId) {
                showArticle(wikiState.articleId, true);
            }
        });
    });
}

function renderArticleList() {
    const ul = document.querySelector('.un_wikiArticleList');
    if (!ul) return;
    const lang = wikiState.lang;
    const list = filteredArticles();

    ul.innerHTML = list
        .map((a) => {
            const active = a.id === wikiState.articleId ? 'is-active' : '';
            const title = a.title[lang] || a.title.en;
            const cat = categoryLabel(a.categoryId, lang);
            return `<li><button type="button" class="un_wikiArticleLink ${active}" data-id="${a.id}"><span class="un_wikiArticleLinkTitle">${title}</span><span class="un_wikiArticleLinkCat">${cat}</span></button></li>`;
        })
        .join('');

    ul.querySelectorAll('.un_wikiArticleLink').forEach((btn) => {
        btn.addEventListener('click', () => showArticle(btn.dataset.id, true));
    });
}

function recentArticles(limit = 5) {
    return wikiArticles.slice(0, Math.max(1, limit));
}

function showRecentWelcome(pushHash) {
    wikiState.articleId = null;
    const lang = wikiState.lang;
    const meta = document.querySelector('.un_wikiArticleMeta');
    const titleEl = document.querySelector('.un_wikiArticleTitle');
    const bodyEl = document.querySelector('.un_wikiArticleBody');

    const isPl = lang === 'pl';
    const title = isPl ? 'Witamy w wiki' : 'Welcome to the wiki';
    const intro = isPl
        ? 'Zaczynasz od najnowszych dodanych artykulow. Kliknij pozycje ponizej, aby od razu przejsc do tresci.'
        : 'Start with the most recently added articles. Click any item below to open it immediately.';

    const items = recentArticles(6)
        .map((a) => {
            const articleTitle = a.title[lang] || a.title.en;
            const excerpt = a.excerpt[lang] || a.excerpt.en;
            const metaText = getArticleMetaText(a, lang);
            const dateLine = metaText ? `<span class="un_wikiRecentBtnDate">${metaText}</span>` : '';
            return `<li><button type="button" class="un_wikiRecentBtn" data-id="${a.id}"><span class="un_wikiRecentBtnTitle">${articleTitle}</span><span class="un_wikiRecentBtnExcerpt">${excerpt}</span>${dateLine}</button></li>`;
        })
        .join('');

    if (meta) meta.textContent = `${wikiUi[lang].articleHint} · ${isPl ? 'Najnowsze artykuly' : 'Recent articles'}`;
    if (titleEl) titleEl.textContent = title;
    if (bodyEl) {
        bodyEl.innerHTML = `<div class="un_featuresPageDetailSection un_wikiRecentPanel"><p>${intro}</p><ul class="un_wikiRecentList">${items}</ul></div>`;
        bodyEl.querySelectorAll('.un_wikiRecentBtn').forEach((btn) => {
            btn.addEventListener('click', () => showArticle(btn.dataset.id, true));
        });
    }

    if (pushHash) {
        try {
            window.history.replaceState(null, '', window.location.pathname + window.location.search);
        } catch (e) {
            /* ignore */
        }
    }

    document.querySelectorAll('.un_wikiArticleLink').forEach((b) => {
        b.classList.remove('is-active');
    });
}

function showArticle(id, pushHash) {
    const art = findArticle(id);
    if (!art) return;

    wikiState.articleId = id;
    const lang = wikiState.lang;
    const meta = document.querySelector('.un_wikiArticleMeta');
    const titleEl = document.querySelector('.un_wikiArticleTitle');
    const bodyEl = document.querySelector('.un_wikiArticleBody');

    const details = getArticleMetaText(art, lang);
    if (meta) meta.textContent = `${wikiUi[lang].articleHint} · ${categoryLabel(art.categoryId, lang)}${details ? ` · ${details}` : ''}`;
    if (titleEl) titleEl.textContent = art.title[lang] || art.title.en;
    if (bodyEl) bodyEl.innerHTML = art.body[lang] || art.body.en;

    if (pushHash) setHashArticle(id);

    document.querySelectorAll('.un_wikiArticleLink').forEach((b) => {
        b.classList.toggle('is-active', b.dataset.id === id);
    });
}

function resolveArticleFromHash() {
    let raw = window.location.hash.replace(/^#/, '');
    if (!raw) return null;
    try {
        raw = decodeURIComponent(raw);
    } catch (e) {
        /* keep raw */
    }
    if (findArticle(raw)) return raw;
    return null;
}

function bindWikiSearch() {
    const input = document.getElementById('wikiSearch');
    if (!input || input.dataset.wikiBound) return;
    input.dataset.wikiBound = '1';
    input.addEventListener('input', () => {
        wikiState.search = input.value;
        renderArticleList();
        const list = filteredArticles();
        if (!list.length) {
            wikiState.articleId = null;
            const titleEl = document.querySelector('.un_wikiArticleTitle');
            const bodyEl = document.querySelector('.un_wikiArticleBody');
            const meta = document.querySelector('.un_wikiArticleMeta');
            if (meta) meta.textContent = '';
            if (titleEl) titleEl.textContent = wikiState.lang === 'pl' ? 'Brak wyników' : 'No results';
            if (bodyEl) {
                bodyEl.innerHTML =
                    wikiState.lang === 'pl'
                        ? '<div class="un_featuresPageDetailSection"><p>Zmień frazę lub wybierz inną kategorię.</p></div>'
                        : '<div class="un_featuresPageDetailSection"><p>Try another keyword or pick a different category.</p></div>';
            }
            return;
        }
        if (!list.find((a) => a.id === wikiState.articleId)) {
            showArticle(list[0].id, true);
        }
    });
}

function setWikiAvailability(isHighFive) {
    const wrong = document.querySelector('.un_wikiWrongServer');
    const layout = document.querySelector('.un_wikiLayout');
    if (wrong) wrong.hidden = isHighFive;
    if (layout) layout.hidden = !isHighFive;
}

function initializeWikiPage() {
    if (!document.querySelector('.un_wikiPage')) return;

    const serverId = document.getElementById('servers') ? document.getElementById('servers').value : getStoredServerId();
    const isHighFive = serverId === WIKI_SERVER_ID;
    setWikiAvailability(isHighFive);
    if (!isHighFive) return;

    wikiState.lang = getWikiLanguage();
    wikiState.search = '';
    const searchInput = document.getElementById('wikiSearch');
    if (searchInput) searchInput.value = '';

    try {
        renderWikiChrome();
        renderCategoryNav();

        const fromHash = resolveArticleFromHash();
        wikiState.articleId = fromHash;
        renderArticleList();
        if (fromHash) {
            showArticle(fromHash, false);
            setHashArticle(fromHash);
        } else {
            showRecentWelcome(false);
        }
    } catch (err) {
        if (typeof console !== 'undefined' && console.error) {
            console.error('Wiki init error', err);
        }
    } finally {
        bindWikiSearch();
    }
}

window.addEventListener('hashchange', () => {
    if (!document.querySelector('.un_wikiPage')) return;
    const serverId = getStoredServerId();
    if (serverId !== WIKI_SERVER_ID) return;
    const id = resolveArticleFromHash();
    renderArticleList();
    if (id) {
        wikiState.articleId = id;
        showArticle(id, false);
    } else {
        showRecentWelcome(false);
    }
});

document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => initializeWikiPage(), 120);
});
