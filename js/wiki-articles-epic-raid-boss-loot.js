/* Epic and raid boss loot rules — loaded before wiki.js */
window.WIKI_EPIC_RAID_BOSS_LOOT_ARTICLE = {
    id: 'epic-raid-boss-loot',
    categoryId: 'gameplay',
    title: {
        en: 'Epic and Raid Boss Loot (Command Channels)',
        pl: 'Loot z Epic i Raid Bossow (Command Channel)',
    },
    excerpt: {
        en: 'How contested loot rights, credited player, and 300-second pickup protection work for command channels.',
        pl: 'Jak dzialaja prawa do lootu, gracz kredytowany i 300-sekundowa ochrona podnoszenia przy command channelach.',
    },
    meta: {
        added: '2026-04-15',
        updated: '2026-04-15',
    },
    body: {
        en: `
                <div class="un_featuresPageDetailSection">
                    <h3>Epic and raid boss loot (command channels and contested kills)</h3>
                    <p>This article explains who wins loot rights when multiple sides hit the same raid or epic boss, who can pick drops during protection time, and how party loot applies after pickup.</p>
                </div>
                <div class="un_featuresPageDetailSection">
                    <h3>Which side gets the boss loot?</h3>
                    <p>When the boss dies, the server compares <strong>total damage</strong> dealt by each side:</p>
                    <ul>
                        <li><strong>Command channel:</strong> all parties in that channel are treated as one combined damage side.</li>
                        <li><strong>Single party:</strong> the party is its own side.</li>
                        <li><strong>Solo:</strong> the character is its own side.</li>
                    </ul>
                    <p>The side with the <strong>highest total damage</strong> gets loot rights for that kill.</p>
                </div>
                <div class="un_featuresPageDetailSection">
                    <h3>Who is the credited player?</h3>
                    <p>The server also chooses one <strong>credited player</strong> used by raid-drop behavior (especially pickup protection):</p>
                    <ul>
                        <li>If the final blow is done by the winning side, that killer is usually credited.</li>
                        <li>If the final blow comes from outside the winning side, credit may go to the winning command channel leader or party leader.</li>
                    </ul>
                    <p><strong>Important:</strong> command channel leadership alone does not always make that player credited for pickup protection.</p>
                </div>
                <div class="un_featuresPageDetailSection">
                    <h3>Ground pickup during protection (300 seconds)</h3>
                    <p>For raid/epic drops that appear on the ground, pickup protection lasts <strong>300 seconds</strong> (5 minutes).</p>
                    <h4>During the first 300 seconds</h4>
                    <ul>
                        <li>The <strong>credited player</strong> can pick up.</li>
                        <li>Only players in the <strong>same party</strong> as the credited player can also pick up.</li>
                    </ul>
                    <p>Other parties in the same command channel cannot pick up yet. This is why a command channel leader may still get pickup denied if they are in a different party than the credited player.</p>
                    <h4>After 300 seconds</h4>
                    <p>The strict raid pickup block ends. If the item is still on the ground, normal server pickup rules apply.</p>
                </div>
                <div class="un_featuresPageDetailSection">
                    <h3>Party loot mode after pickup</h3>
                    <p>Once an eligible player picks up an item while in party, distribution follows that party's loot mode (for example random, turn order, finder). This is <strong>party-level</strong>, not command-channel-wide.</p>
                </div>
                <div class="un_featuresPageDetailSection">
                    <h3>Quick reference</h3>
                    <div class="un_ratesTable un_ratesTable--wideSecondCol">
                        <table>
                            <tr><th>Topic</th><th>Rule (default)</th></tr>
                            <tr><td><strong>Who wins contested loot?</strong></td><td>The side (including full command channel damage) with higher total boss damage.</td></tr>
                            <tr><td><strong>Who can pick up in first 300s?</strong></td><td>The credited player and only their party.</td></tr>
                            <tr><td><strong>Why CC leader cannot pick up?</strong></td><td>Usually because they are not in the credited player's party.</td></tr>
                            <tr><td><strong>When does strict pickup end?</strong></td><td>After 300 seconds from item spawn.</td></tr>
                        </table>
                    </div>
                </div>
                <div class="un_featuresPageDetailSection">
                    <h3>What this means in practice</h3>
                    <ol>
                        <li>Put your intended looter in the same party as the player likely to be credited.</li>
                        <li>Do not assume command channel leader can always loot first.</li>
                        <li>In contested kills, damage decides the winning side; early pickup still follows party-only protection.</li>
                    </ol>
                    <p>If behavior differs in live fights, record boss name, time, and involved parties for admin log review.</p>
                </div>`,
        pl: `
                <div class="un_featuresPageDetailSection">
                    <h3>Loot z epic i raid bossow (command channele i contested kille)</h3>
                    <p>Ten artykul wyjasnia, kto wygrywa prawa do lootu, kto moze podniesc drop podczas ochrony czasowej oraz jak dziala podzial lootu w party po podniesieniu.</p>
                </div>
                <div class="un_featuresPageDetailSection">
                    <h3>Ktora strona dostaje loot bossa?</h3>
                    <p>Po smierci bossa serwer porownuje <strong>laczny damage</strong> kazdej strony:</p>
                    <ul>
                        <li><strong>Command channel:</strong> wszystkie party w kanale sa liczone jako jedna laczna strona obrazen.</li>
                        <li><strong>Pojedyncza party:</strong> party jest osobna strona.</li>
                        <li><strong>Solo:</strong> postac jest osobna strona.</li>
                    </ul>
                    <p>Strona z <strong>najwyzszym lacznym dmg</strong> wygrywa prawa do lootu za to zabicie.</p>
                </div>
                <div class="un_featuresPageDetailSection">
                    <h3>Kto jest graczem kredytowanym?</h3>
                    <p>Serwer wskazuje jednego <strong>gracza kredytowanego</strong>, do ktorego podpinane sa zachowania rajdowe (zwlaszcza ochrona podnoszenia):</p>
                    <ul>
                        <li>Jesli finalny cios zada gracz ze zwycieskiej strony, zwykle on jest kredytowany.</li>
                        <li>Jesli finalny cios padnie spoza zwycieskiej strony, kredyt moze trafic do lidera wygrywajacego command channela lub lidera party.</li>
                    </ul>
                    <p><strong>Wazne:</strong> samo bycie liderem command channela nie gwarantuje kredytu do ochrony pickupu.</p>
                </div>
                <div class="un_featuresPageDetailSection">
                    <h3>Podnoszenie z ziemi podczas ochrony (300 sekund)</h3>
                    <p>Dla dropow raid/epic lezacych na ziemi obowiazuje ochrona podnoszenia przez <strong>300 sekund</strong> (5 minut).</p>
                    <h4>Przez pierwsze 300 sekund</h4>
                    <ul>
                        <li>Podnosic moze <strong>gracz kredytowany</strong>.</li>
                        <li>Podnosic moga tez tylko gracze z <strong>tej samej party</strong> co gracz kredytowany.</li>
                    </ul>
                    <p>Inne party z tego samego command channela nie moga jeszcze podniesc. Dlatego lider CC moze dostac odmowe pickupu, jesli jest w innej party niz gracz kredytowany.</p>
                    <h4>Po 300 sekundach</h4>
                    <p>Scisla blokada raid pickupu znika. Jesli item nadal lezy, obowiazuja zwykle zasady podnoszenia serwera.</p>
                </div>
                <div class="un_featuresPageDetailSection">
                    <h3>Tryb lootu party po podniesieniu</h3>
                    <p>Gdy uprawniony gracz podniesie item bedac w party, dziala normalny tryb lootu tej party (np. random, kolejnosc, finder). To zasada <strong>na poziomie party</strong>, nie calego command channela.</p>
                </div>
                <div class="un_featuresPageDetailSection">
                    <h3>Szybka sciaga</h3>
                    <div class="un_ratesTable un_ratesTable--wideSecondCol">
                        <table>
                            <tr><th>Temat</th><th>Zasada (domyslna)</th></tr>
                            <tr><td><strong>Kto wygrywa contested loot?</strong></td><td>Strona z wyzszym lacznym dmg na bossie (w tym caly command channel).</td></tr>
                            <tr><td><strong>Kto moze podniesc w 300s?</strong></td><td>Gracz kredytowany i tylko jego party.</td></tr>
                            <tr><td><strong>Czemu lider CC nie moze podniesc?</strong></td><td>Najczesciej nie jest w party gracza kredytowanego.</td></tr>
                            <tr><td><strong>Kiedy konczy sie scisly pickup?</strong></td><td>Po 300 sekundach od pojawienia sie itemu.</td></tr>
                        </table>
                    </div>
                </div>
                <div class="un_featuresPageDetailSection">
                    <h3>Co to oznacza w praktyce</h3>
                    <ol>
                        <li>Ustaw planowanego lootera w tej samej party co osoba, ktora najpewniej dostanie kredyt.</li>
                        <li>Nie zakladaj, ze lider command channela zawsze podniesie jako pierwszy.</li>
                        <li>Przy contested killach zwycieza damage strony, ale szybki pickup i tak dziala party-only.</li>
                    </ol>
                    <p>Jesli na live jest inaczej, zapisuj nazwe bossa, czas i sklady party do weryfikacji logow administracji.</p>
                </div>`,
    },
};
