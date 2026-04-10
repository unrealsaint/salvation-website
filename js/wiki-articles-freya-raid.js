/* Ice Queen Freya raid encounter — loaded before wiki.js */
window.WIKI_FREYA_RAID_ARTICLE = {
    id: 'ice-queen-freya-raid',
    categoryId: 'gameplay',
    title: {
        en: 'Ice Queen Freya — Raid Encounter Guide',
        pl: 'Królowa Lodu Freya — przewodnik po rajdzie',
    },
    excerpt: {
        en: 'Phases, adds, skills, and Normal vs Hard for Freya’s Castle on Oasis Salvation.',
        pl: 'Fazy, addy, umiejętności oraz Normal vs Hard: Zamek Frei na Oasis Salvation.',
    },
    meta: {
        added: '2026-04-10',
        updated: '2026-04-10',
    },
    body: {
        en: `
                <div class="un_featuresPageDetailSection">
                    <h3>Ice Queen Freya — Raid Encounter Guide</h3>
                    <p>Player-facing reference for <strong>Freya’s Castle</strong> (Normal &amp; Hard) on <strong>Oasis Salvation</strong>. For level limits, group size, and entry resets, see <a href="#instance-entry-guide"><strong>Instance Entry Guide (Zaken, Freya, Frintezza)</strong></a>.</p>
                </div>
                <div class="un_featuresPageDetailSection">
                    <h3>Instance basics</h3>
                    <ul>
                        <li><strong>Party:</strong> 9–100 members (server config), <strong>level 82–85</strong></li>
                        <li><strong>Summons:</strong> not allowed inside</li>
                        <li><strong>Dungeon time limit:</strong> 120 minutes (instance setting)</li>
                        <li><strong>Re-entry:</strong> scheduled resets (e.g. Wednesday &amp; Saturday — check live server notices)</li>
                        <li><strong>Modes:</strong> <strong>Normal</strong> (instance 139) vs <strong>Hard</strong> (144) — Hard has stricter timers and heavier spawns</li>
                    </ul>
                    <p>There is a <strong>separate solo quest instance</strong> where Freya moves and casts a big blizzard; that is <strong>not</strong> the full raid loop below.</p>
                </div>
                <div class="un_featuresPageDetailSection">
                    <h3>Phase flow (raid)</h3>
                    <h4>Phase 1 — Throne Freya</h4>
                    <ul>
                        <li>Door opens, statues appear, cutscene, <strong>Freya on throne</strong> walks toward <strong>center</strong>.</li>
                        <li><strong>Defeat her HP</strong> to end the phase (scripted transition); she uses a <strong>reduced</strong> combat set (slower, some skills random), <strong>no Reflect Magic / Ice Storm</strong> in this phase.</li>
                        <li><strong>Waves</strong> spawn on a timer into the <strong>central area</strong>: <strong>Archery Knights</strong>, <strong>Archer’s Breath</strong>, sometimes <strong>Glaciers</strong>.
                            <ul>
                                <li><strong>Normal:</strong> wave tick <strong>~30s</strong></li>
                                <li><strong>Hard:</strong> wave tick <strong>~50s</strong> but <strong>more</strong> adds per wave</li>
                            </ul>
                        </li>
                    </ul>
                    <h4>Intermission</h4>
                    <ul>
                        <li>Freya on throne, <strong>invulnerable</strong>, no combat.</li>
                        <li><strong>~60s</strong> countdown — rebuff, heal, position.</li>
                    </ul>
                    <h4>Phase 2 — Adds + Glakias (no Freya DPS)</h4>
                    <ul>
                        <li>Freya does <strong>not</strong> fight; <strong>waves continue</strong> (Hard: higher volume).</li>
                        <li><strong>Hard only:</strong> <strong>battle timer</strong> (default <strong>360s</strong> from phase start). <strong>Fail = instance collapse</strong> after failure cutscene.</li>
                        <li>Statues spawn <strong>Archery Knights</strong> toward the middle. <strong>Kill 10</strong> of these knights (during this phase) to trigger the next scene and <strong>Glakias</strong> (Archery Knight Captain).</li>
                        <li><strong>Kill Glakias</strong> to proceed. At low HP he shouts random rally lines (flavor).</li>
                    </ul>
                    <h4>Phase 3 — Real Freya</h4>
                    <ul>
                        <li>Cutscene, <strong>fighting Freya</strong> spawns, moves to center if not engaged.</li>
                        <li><strong>Full combat AI</strong> + <strong>heaviest</strong> wave tuning.</li>
                        <li><strong>Striders:</strong> attacking her on a <strong>Strider</strong> without her <strong>anti-strider</strong> debuff can trigger a <strong>dismount-style</strong> punish — avoid face-tanking on Strider.</li>
                    </ul>
                    <h4>Phase 4 — Support burn (~20% HP)</h4>
                    <ul>
                        <li><strong>Cutscene:</strong> Freya <strong>invul</strong>, players <strong>invul</strong> and <strong>blocked</strong>, adds <strong>frozen</strong>.</li>
                        <li><strong>Jinia</strong> + <strong>Kegor</strong> spawn → <strong>Jinia’s Prayer</strong> (huge P./M. Def) + <strong>Kegor’s Courage</strong> (huge atk + atk/cast speed).</li>
                        <li>Freya <strong>vulnerable</strong> again; <strong>burn</strong> while buffed.</li>
                    </ul>
                    <h4>Victory</h4>
                    <ul>
                        <li>Kill Freya → waves stop, win cutscene, loot/cleanup.</li>
                    </ul>
                </div>
                <div class="un_featuresPageDetailSection">
                    <h3>Freya’s skills (standing boss — Normal / Hard)</h3>
                    <p>AI checks abilities in roughly this <strong>priority</strong> (each has a <strong>cooldown</strong>; Hard is <strong>faster</strong> / <strong>stronger</strong>).</p>
                    <div class="un_ratesTable un_ratesTable--wideSecondCol">
                        <table>
                            <tr><th>Skill</th><th>What players see</th></tr>
                            <tr><td><strong>Eternal Blizzard</strong></td><td>Full-room ice damage; screen warning (“strong magic…”). <strong>Hard:</strong> at <strong>four HP thresholds</strong> she may use a <strong>variant</strong> that adds <strong>freeze/paralyze</strong> + <strong>DoT</strong> (Pillar of Frozen / Eternal Ice style) — very dangerous.</td></tr>
                            <tr><td><strong>Ice Ball</strong></td><td>Ranged ice shot on high-aggro target, <strong>AoE around target</strong> — spread.</td></tr>
                            <tr><td><strong>Summon Spirits</strong></td><td>Summons; <strong>nearby mobs</strong> can <strong>echo</strong> the summon — add spikes.</td></tr>
                            <tr><td><strong>Attack Nearby Range</strong></td><td><strong>AoE around Freya</strong> — melee spacing / brief disengage.</td></tr>
                            <tr><td><strong>Reflect Magic</strong></td><td>Short <strong>magic reflect</strong> on self — casters hold magic or wait.</td></tr>
                            <tr><td><strong>Ice Storm</strong></td><td>Hard <strong>single-target</strong> ice nuke in range — spike damage.</td></tr>
                            <tr><td><strong>Death Clack</strong></td><td>Debuff; on expiry can trigger <strong>Cold Judgement</strong> (AoE follow-up). <strong>Cleanse / immunity</strong> helps.</td></tr>
                            <tr><td><strong>Rage of Ice</strong></td><td>Self <strong>cast-speed</strong> buff — next stretch is busier.</td></tr>
                        </table>
                    </div>
                    <p><strong>Throne Freya (Phase 1)</strong> uses a <strong>subset</strong>, <strong>slower</strong> timers, and <strong>random</strong> gates on some skills.</p>
                </div>
                <div class="un_featuresPageDetailSection">
                    <h3>Adds</h3>
                    <div class="un_ratesTable un_ratesTable--wideSecondCol">
                        <table>
                            <tr><th>Add</th><th>Notes</th></tr>
                            <tr><td><strong>Archery Knight</strong></td><td>Bodies in the middle; <strong>Phase 2</strong> kills from statue waves <strong>count toward 10</strong> for Glakias.</td></tr>
                            <tr><td><strong>Archer’s Breath</strong></td><td>Near death may <strong>suicide explode</strong> — treat as <strong>bombs</strong>; range / spread.</td></tr>
                            <tr><td><strong>Glacier</strong></td><td>Extra control pressure; spawns <strong>randomly</strong> with some waves (~60% chance, 1–3).</td></tr>
                            <tr><td><strong>Glakias</strong></td><td>Phase 2 <strong>gate boss</strong>; must die to reach Phase 3.</td></tr>
                        </table>
                    </div>
                </div>
                <div class="un_featuresPageDetailSection">
                    <h3>Safe / recovery zone</h3>
                    <p>The instance defines a <strong>zone</strong> where Freya’s scripted <strong>hate pass</strong> ignores players inside it (recovery / rez positioning). <strong>Room-wide</strong> abilities and <strong>adds</strong> still matter — it is not immunity to everything.</p>
                </div>
                <div class="un_featuresPageDetailSection">
                    <h3>Quick comparison: Normal vs Hard</h3>
                    <div class="un_ratesTable">
                        <table>
                            <tr><th>Topic</th><th>Normal</th><th>Hard</th></tr>
                            <tr><td>Phase 2 timer</td><td>None</td><td><strong>360s</strong> fail</td></tr>
                            <tr><td>Wave interval</td><td><strong>30s</strong></td><td><strong>50s</strong> (but more per tick)</td></tr>
                            <tr><td>Freya combat</td><td>Easier tuning</td><td>Faster skills, stronger blizzard tier</td></tr>
                            <tr><td>Knights / Glakias</td><td>Same roles</td><td>Same flow, higher stats</td></tr>
                        </table>
                    </div>
                </div>
                <div class="un_featuresPageDetailSection">
                    <h3>Player tips (short)</h3>
                    <ol>
                        <li>Learn <strong>invul phases</strong> so the raid does not waste CDs on scripted immunity.</li>
                        <li>Hard: <strong>Phase 2 is timed</strong> — prioritize <strong>knight kills</strong> and <strong>Glakias</strong>.</li>
                        <li><strong>Water</strong> resist, <strong>AoE heals</strong>, <strong>cleanses</strong> for Death Clack / Hard blizzard variant.</li>
                        <li><strong>Watch Reflect Magic</strong>; <strong>no Strider</strong> in her face in Phase 3.</li>
                        <li>At <strong>~20%</strong>, save <strong>big CDs</strong> for post-cutscene <strong>buff window</strong>.</li>
                    </ol>
                </div>
                <div class="un_featuresPageDetailSection">
                    <p><em>Server reference: Freya Castle Normal/Hard instances and Freya combat scripts.</em></p>
                </div>`,
        pl: `
                <div class="un_featuresPageDetailSection">
                    <h3>Królowa Lodu Freya — przewodnik po rajdzie</h3>
                    <p>Informacje dla graczy: <strong>Zamek Frei</strong> (Normal i Hard) na <strong>Oasis Salvation</strong>. Limity poziomu, wielkość grupy i resety wejścia — w artykule <a href="#instance-entry-guide"><strong>Przewodnik wejścia do instancji (Zaken, Freya, Frintezza)</strong></a>.</p>
                </div>
                <div class="un_featuresPageDetailSection">
                    <h3>Podstawy instancji</h3>
                    <ul>
                        <li><strong>Grupa:</strong> 9–100 osób (konfiguracja serwera), <strong>poziom 82–85</strong></li>
                        <li><strong>Summony:</strong> zablokowane w środku</li>
                        <li><strong>Limit czasu lochu:</strong> 120 minut (ustawienie instancji)</li>
                        <li><strong>Ponowne wejście:</strong> zaplanowane resety (np. środa i sobota — sprawdź aktualne ogłoszenia na serwerze)</li>
                        <li><strong>Tryby:</strong> <strong>Normal</strong> (instancja 139) vs <strong>Hard</strong> (144) — Hard ma ostrzejsze timery i cięższe spawny</li>
                    </ul>
                    <p>Istnieje <strong>osobna solowa instancja questowa</strong>, w której Freya się porusza i rzuca dużą zamieć; to <strong>nie jest</strong> pełna pętla rajdu opisana poniżej.</p>
                </div>
                <div class="un_featuresPageDetailSection">
                    <h3>Przebieg faz (raid)</h3>
                    <h4>Faza 1 — Freya na tronie</h4>
                    <ul>
                        <li>Otwiera się drzwi, pojawiają się posągi, przerywnik, <strong>Freya na tronie</strong> idzie do <strong>centrum</strong>.</li>
                        <li><strong>Zbij jej HP</strong>, by zakończyć fazę (skryptowany przejście); używa <strong>ograniczonego</strong> zestawu walki (wolniej, część skilli losowa), w tej fazie <strong>bez Reflect Magic / Ice Storm</strong>.</li>
                        <li><strong>Fale</strong> spawnują się na timer w <strong>środkowym obszarze</strong>: <strong>Archery Knights</strong>, <strong>Archer’s Breath</strong>, czasem <strong>Glaciers</strong>.
                            <ul>
                                <li><strong>Normal:</strong> tick fal ~<strong>30 s</strong></li>
                                <li><strong>Hard:</strong> tick fal ~<strong>50 s</strong>, ale <strong>więcej</strong> addów na falę</li>
                            </ul>
                        </li>
                    </ul>
                    <h4>Przerwa</h4>
                    <ul>
                        <li>Freya na tronie, <strong>niezniszczalna</strong>, bez walki.</li>
                        <li>Odliczanie ~<strong>60 s</strong> — rebuff, leczenie, ustawienie.</li>
                    </ul>
                    <h4>Faza 2 — Addy + Glakias (bez DPS na Freyę)</h4>
                    <ul>
                        <li>Freya <strong>nie walczy</strong>; <strong>fale trwają</strong> (Hard: większa objętość).</li>
                        <li><strong>Tylko Hard:</strong> <strong>timer bitwy</strong> (domyślnie <strong>360 s</strong> od startu fazy). <strong>Porażka = upadek instancji</strong> po przerywniku porażki.</li>
                        <li>Z posągów spawnują się <strong>Archery Knights</strong> ku środkowi. <strong>Zabij 10</strong> takich rycerzy (w tej fazie), by wyzwolić kolejną scenę i <strong>Glakiasa</strong> (kapitan rycerzy łuczniczych).</li>
                        <li><strong>Zabij Glakiasa</strong>, by iść dalej. Przy niskim HP krzyczy losowe kwestie (flavor).</li>
                    </ul>
                    <h4>Faza 3 — Prawdziwa Freya</h4>
                    <ul>
                        <li>Przerywnik, pojawia się <strong>walcząca Freya</strong>, idzie do centrum, jeśli nie jest wciągnięta w walkę.</li>
                        <li><strong>Pełny AI walki</strong> + <strong>najcięższe</strong> ustawienia fal.</li>
                        <li><strong>Stridery:</strong> atakowanie jej ze <strong>Stridera</strong> bez jej <strong>debuffa anty-strider</strong> może wywołać karę w stylu <strong>zsadzenia</strong> — unikaj tankowania „w pysk” ze Stridera.</li>
                    </ul>
                    <h4>Faza 4 — Wsparcie i burn (~20% HP)</h4>
                    <ul>
                        <li><strong>Przerywnik:</strong> Freya <strong>invul</strong>, gracze <strong>invul</strong> i <strong>zablokowani</strong>, addy <strong>zamrożone</strong>.</li>
                        <li>Pojawiają się <strong>Jinia</strong> i <strong>Kegor</strong> → <strong>Jinia’s Prayer</strong> (ogromny P./M. Def) + <strong>Kegor’s Courage</strong> (ogromny atk + szybkość ataku/rzucania).</li>
                        <li>Freya znów <strong>podatna na obrażenia</strong>; <strong>burn</strong> pod buffami.</li>
                    </ul>
                    <h4>Zwycięstwo</h4>
                    <ul>
                        <li>Zabij Freyę → fale się kończą, przerywnik wygranej, loot/cleanup.</li>
                    </ul>
                </div>
                <div class="un_featuresPageDetailSection">
                    <h3>Umiejętności Frei (boss stojący — Normal / Hard)</h3>
                    <p>AI sprawdza umiejętności w przybliżonym <strong>priorytecie</strong> (każda ma <strong>cooldown</strong>; Hard jest <strong>szybszy</strong> / <strong>mocniejszy</strong>).</p>
                    <div class="un_ratesTable un_ratesTable--wideSecondCol">
                        <table>
                            <tr><th>Skill</th><th>Co widzą gracze</th></tr>
                            <tr><td><strong>Eternal Blizzard</strong></td><td>Obrażenia lodem na całą salę; ostrzeżenie na ekranie („silna magia…”). <strong>Hard:</strong> przy <strong>czterech progach HP</strong> może użyć <strong>wariantu</strong> z <strong>freeze/paralyze</strong> + <strong>DoT</strong> (styl Pillar of Frozen / Eternal Ice) — bardzo niebezpieczne.</td></tr>
                            <tr><td><strong>Ice Ball</strong></td><td>Lodowy strzał na cel z wysokim aggro, <strong>AoE wokół celu</strong> — rozłóżcie się.</td></tr>
                            <tr><td><strong>Summon Spirits</strong></td><td>Przywołania; <strong>moby w pobliżu</strong> mogą <strong>powtórzyć</strong> przywołanie — skoki liczby addów.</td></tr>
                            <tr><td><strong>Attack Nearby Range</strong></td><td><strong>AoE wokół Frei</strong> — dystans w melee / krótkie odskoki.</td></tr>
                            <tr><td><strong>Reflect Magic</strong></td><td>Krótki <strong>magic reflect</strong> na sobie — magowie wstrzymają magię lub poczekają.</td></tr>
                            <tr><td><strong>Ice Storm</strong></td><td>Na Hardzie <strong>single-target</strong> lodowy nuke w zasięgu — duży spike obrażeń.</td></tr>
                            <tr><td><strong>Death Clack</strong></td><td>Debuff; po wygaśnięciu może wywołać <strong>Cold Judgement</strong> (AoE). Pomaga <strong>cleanse / immunitet</strong>.</td></tr>
                            <tr><td><strong>Rage of Ice</strong></td><td>Buff <strong>szybkości rzucania</strong> na siebie — kolejny fragment walki jest gęstszy.</td></tr>
                        </table>
                    </div>
                    <p><strong>Freya na tronie (faza 1)</strong> używa <strong>podzbioru</strong>, <strong>wolniejszych</strong> timerów i <strong>losowych</strong> bramek na część skilli.</p>
                </div>
                <div class="un_featuresPageDetailSection">
                    <h3>Addy</h3>
                    <div class="un_ratesTable un_ratesTable--wideSecondCol">
                        <table>
                            <tr><th>Add</th><th>Notatki</th></tr>
                            <tr><td><strong>Archery Knight</strong></td><td>Środek sali; zabójstwa z fal posągów w <strong>fazie 2</strong> <strong>liczą się do 10</strong> pod Glakiasa.</td></tr>
                            <tr><td><strong>Archer’s Breath</strong></td><td>Przed śmiercią może <strong>wysadzić się</strong> — traktuj jak <strong>bomby</strong>; dystans / rozłożenie.</td></tr>
                            <tr><td><strong>Glacier</strong></td><td>Dodatkowa presja kontroli; spawnuje się <strong>losowo</strong> z częścią fal (~60% szansy, 1–3).</td></tr>
                            <tr><td><strong>Glakias</strong></td><td>Boss-<strong>brama</strong> fazy 2; musi zginąć, by wejść w fazę 3.</td></tr>
                        </table>
                    </div>
                </div>
                <div class="un_featuresPageDetailSection">
                    <h3>Strefa bezpieczna / odnowy</h3>
                    <p>Instancja definiuje <strong>strefę</strong>, w której skryptowany <strong>hate pass</strong> Frei <strong>ignoruje</strong> graczy (pozycja na reza / odnowę). <strong>Umiejętności na całą salę</strong> i <strong>addy</strong> nadal działają — to nie immunitet na wszystko.</p>
                </div>
                <div class="un_featuresPageDetailSection">
                    <h3>Normal vs Hard — szybkie porównanie</h3>
                    <div class="un_ratesTable">
                        <table>
                            <tr><th>Temat</th><th>Normal</th><th>Hard</th></tr>
                            <tr><td>Timer fazy 2</td><td>Brak</td><td><strong>360 s</strong> — fail</td></tr>
                            <tr><td>Interwał fal</td><td><strong>30 s</strong></td><td><strong>50 s</strong> (ale więcej na tick)</td></tr>
                            <tr><td>Walka z Freyą</td><td>Łagodniejsze</td><td>Szybsze skille, mocniejszy tier blizzardu</td></tr>
                            <tr><td>Rycerze / Glakias</td><td>Te same role</td><td>Ten sam flow, wyższe staty</td></tr>
                        </table>
                    </div>
                </div>
                <div class="un_featuresPageDetailSection">
                    <h3>Wskazówki (krótko)</h3>
                    <ol>
                        <li>Poznaj <strong>fazy invul</strong>, żeby raid nie marnował CD na skryptową niezniszczalność.</li>
                        <li>Hard: <strong>faza 2 jest na czas</strong> — priorytet <strong>zabijania rycerzy</strong> i <strong>Glakiasa</strong>.</li>
                        <li><strong>Woda</strong> (resist), <strong>AoE leczenie</strong>, <strong>cleanse</strong> na Death Clack / wariant blizzardu na Hardzie.</li>
                        <li>Uważaj na <strong>Reflect Magic</strong>; w fazie 3 <strong>nie tankuj w twarz ze Stridera</strong>.</li>
                        <li>Przy ~<strong>20%</strong> zostaw <strong>duże CD</strong> na okno po przerywniku z <strong>buffami</strong>.</li>
                    </ol>
                </div>
                <div class="un_featuresPageDetailSection">
                    <p><em>Odniesienie serwerowe: instancje Freya Castle Normal/Hard oraz skrypty walki z Freyą.</em></p>
                </div>`,
    },
};
