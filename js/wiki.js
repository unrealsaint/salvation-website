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
    },
};

const wikiCategories = [
    { id: 'start', label: { en: 'Getting started', pl: 'Start' } },
    { id: 'server', label: { en: 'Server & rates', pl: 'Serwer i stawki' } },
    { id: 'gameplay', label: { en: 'Gameplay', pl: 'Rozgrywka' } },
    { id: 'client', label: { en: 'Client & tech', pl: 'Klient i technikalia' } },
    { id: 'community', label: { en: 'Community', pl: 'Społeczność' } },
];

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
        id: 'first-day',
        categoryId: 'start',
        title: {
            en: 'Your first sessions',
            pl: 'Pierwsze sesje',
        },
        excerpt: {
            en: 'Account, client, and a sensible order of goals for new players.',
            pl: 'Konto, klient i sensowna kolejność celów dla nowych graczy.',
        },
        body: {
            en: `
                <div class="un_featuresPageDetailSection">
                    <h3>Before you log in</h3>
                    <ul>
                        <li><strong>Register</strong> through the account panel linked from the site header.</li>
                        <li><strong>Download</strong> the Salvation client from the Download panel (full size is listed there).</li>
                        <li>Join <strong>Discord</strong> for patch notes, events, and support.</li>
                    </ul>
                    <h3>After character creation</h3>
                    <p>Focus on tutorial quests and main equipment first. Party with others when zones get crowded—Salvation UI makes grouping smoother, but Lineage II is still fastest when you cooperate.</p>
                    <p>Check the <a href="features.html">Features</a> page for a full list of world-specific settings beyond the short summary here.</p>
                </div>`,
            pl: `
                <div class="un_featuresPageDetailSection">
                    <h3>Zanim wejdziesz do gry</h3>
                    <ul>
                        <li><strong>Zarejestruj się</strong> w panelu konta z linku w nagłówku strony.</li>
                        <li><strong>Pobierz</strong> klienta Salvation z panelu Pobierz (rozmiar jest podany przy pliku).</li>
                        <li>Wejdź na <strong>Discord</strong> – patch notes, eventy, wsparcie.</li>
                    </ul>
                    <h3>Po stworzeniu postaci</h3>
                    <p>Najpierw questy tutorialowe i podstawowy ekwipunek. Grupuj się, gdy strefy się zapełniają – UI Salvation ułatwia party, ale gra i tak najszybciej idzie wspólnie.</p>
                    <p>Pełną listę ustawień świata znajdziesz na stronie <a href="features.html">Funkcje</a>.</p>
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
        id: 'rules-overview',
        categoryId: 'server',
        title: {
            en: 'Fair play & expectations',
            pl: 'Uczciwa gra i zasady',
        },
        excerpt: {
            en: 'Bots, RMT, multi-boxing policy pointers—always confirm on Discord.',
            pl: 'Boty, RMT, multibox – sprawdź aktualne zasady na Discordzie.',
        },
        body: {
            en: `
                <div class="un_featuresPageDetailSection">
                    <p>Oasis aims for a fair environment: competitive PvP without pay-to-win clan perks (see Features). Exact enforcement—what is allowed for dual boxing, automation, trading real money—is defined by <strong>staff rules</strong> posted on Discord and the account site.</p>
                    <p>This article is a reminder to read the latest rules before you invest time in a playstyle that might conflict with policy.</p>
                </div>`,
            pl: `
                <div class="un_featuresPageDetailSection">
                    <p>Oasis stawia na uczciwą rozgrywkę: PvP bez płatnych przewag klanowych (patrz Funkcje). Szczegóły – dual box, automatyzacja, RMT – są w <strong>regulaminie</strong> na Discordzie i stronie konta.</p>
                    <p>Przed długą grą warto przeczytać aktualne zasady, żeby uniknąć konfliktu z polityką administracji.</p>
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
            en: 'Salvation client installation',
            pl: 'Instalacja klienta Salvation',
        },
        excerpt: {
            en: 'Disk space, antivirus false positives, and first launch tips.',
            pl: 'Miejsce na dysku, antywirus i pierwsze uruchomienie.',
        },
        body: {
            en: `
                <div class="un_featuresPageDetailSection">
                    <h3>Download</h3>
                    <p>Open the <strong>Download</strong> item in the navigation bar, choose the listed mirror, and verify you have enough free disk space (the panel shows the archive size).</p>
                    <h3>Installation</h3>
                    <ul>
                        <li>Extract or run the installer to a short path without special characters if you hit Windows path limits.</li>
                        <li>If Windows Defender or another AV quarantines a file, confirm the hash with staff on Discord before overriding—never disable security blindly.</li>
                        <li>Launch as administrator only if the updater requests it.</li>
                    </ul>
                    <h3>Connection</h3>
                    <p>Use the server list or real IP/port provided in the project announcement. Wrong chronicle clients cannot connect to High Five Salvation.</p>
                </div>`,
            pl: `
                <div class="un_featuresPageDetailSection">
                    <h3>Pobieranie</h3>
                    <p>Otwórz <strong>Pobierz</strong> w menu, wybierz mirror i upewnij się, że masz wolne miejsce (rozmiar jest w panelu).</p>
                    <h3>Instalacja</h3>
                    <ul>
                        <li>Rozpakuj / zainstaluj w krótkiej ścieżce bez dziwnych znaków, jeśli Windows ma limit długości.</li>
                        <li>Gdy antywirus kwarantannuje plik, potwierdź z administracją na Discordzie – nie wyłączaj ochrony „na ślepo”.</li>
                        <li>Uruchamiaj jako administrator tylko gdy updater tego wymaga.</li>
                    </ul>
                    <h3>Połączenie</h3>
                    <p>Użyj listy serwerów lub IP/portu z ogłoszenia. Inny chronicle nie połączy się z High Five Salvation.</p>
                </div>`,
        },
    },
    {
        id: 'performance',
        categoryId: 'client',
        title: {
            en: 'Performance & crashes',
            pl: 'Wydajność i crashe',
        },
        excerpt: {
            en: 'FPS, drivers, and what to include when reporting technical issues.',
            pl: 'FPS, sterowniki i zgłaszanie problemów technicznych.',
        },
        body: {
            en: `
                <div class="un_featuresPageDetailSection">
                    <ul>
                        <li>Update GPU drivers and install the latest Visual C++ runtimes from Microsoft if the client fails to start.</li>
                        <li>Disable overlays you do not need; some injection tools conflict with protected clients.</li>
                        <li>If the game closes with an error, grab <strong>screenshot + log path</strong> mentioned in the launcher or Discord pinned guide before opening a ticket.</li>
                    </ul>
                </div>`,
            pl: `
                <div class="un_featuresPageDetailSection">
                    <ul>
                        <li>Zaktualizuj sterowniki GPU i biblioteki Visual C++ z Microsoftu, jeśli klient nie startuje.</li>
                        <li>Wyłącz zbędne nakładki; część narzędzi koliduje z chronionym klientem.</li>
                        <li>Przy crashu zrób zrzut ekranu i zanotuj ścieżkę logów (launcher / pin na Discordzie) przed zgłoszeniem.</li>
                    </ul>
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

if (typeof window !== 'undefined' && window.WIKI_HELLBOUND_ARTICLE) {
    const hb = window.WIKI_HELLBOUND_ARTICLE;
    const pvpIdx = wikiArticles.findIndex((a) => a.id === 'pvp-pve');
    if (pvpIdx !== -1) {
        wikiArticles.splice(pvpIdx + 1, 0, hb);
    } else {
        wikiArticles.push(hb);
    }
}

let wikiState = {
    lang: 'en',
    categoryId: null,
    search: '',
    articleId: null,
};

function getWikiLanguage() {
    const stored = localStorage.getItem('selectedLanguage');
    return stored === 'pl' ? 'pl' : 'en';
}

function getStoredServerId() {
    const storedServer = localStorage.getItem('selectedServer');
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
    if (id && findArticle(id)) {
        if (window.location.hash.replace('#', '') !== id) {
            window.history.replaceState(null, '', `${window.location.pathname}${window.location.search}#${id}`);
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

function showArticle(id, pushHash) {
    const art = findArticle(id);
    if (!art) return;

    wikiState.articleId = id;
    const lang = wikiState.lang;
    const meta = document.querySelector('.un_wikiArticleMeta');
    const titleEl = document.querySelector('.un_wikiArticleTitle');
    const bodyEl = document.querySelector('.un_wikiArticleBody');

    if (meta) meta.textContent = `${wikiUi[lang].articleHint} · ${categoryLabel(art.categoryId, lang)}`;
    if (titleEl) titleEl.textContent = art.title[lang] || art.title.en;
    if (bodyEl) bodyEl.innerHTML = art.body[lang] || art.body.en;

    if (pushHash) setHashArticle(id);

    document.querySelectorAll('.un_wikiArticleLink').forEach((b) => {
        b.classList.toggle('is-active', b.dataset.id === id);
    });
}

function resolveArticleFromHash() {
    const raw = window.location.hash.replace('#', '');
    if (raw && findArticle(raw)) return raw;
    return wikiArticles[0].id;
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

    renderWikiChrome();
    renderCategoryNav();

    const fromHash = resolveArticleFromHash();
    wikiState.articleId = fromHash;
    renderArticleList();
    showArticle(fromHash, false);
    setHashArticle(fromHash);

    bindWikiSearch();
}

window.addEventListener('hashchange', () => {
    if (!document.querySelector('.un_wikiPage')) return;
    const serverId = getStoredServerId();
    if (serverId !== WIKI_SERVER_ID) return;
    const id = resolveArticleFromHash();
    wikiState.articleId = id;
    renderArticleList();
    showArticle(id, false);
});

document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => initializeWikiPage(), 120);
});
