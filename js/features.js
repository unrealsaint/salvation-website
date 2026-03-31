// Features page specific script for High Five Salvation
document.addEventListener('DOMContentLoaded', () => {
    // Wait for script.js to initialize first
    setTimeout(() => {
        initializeFeaturesPage();
    }, 100);
});

function initializeFeaturesPage() {
    // Get stored server or default
    const getStoredServer = () => {
        const storedServer = localStorage.getItem('selectedServer');
        if (storedServer) {
            const server = theme.find(s => s.id === storedServer);
            if (server) return storedServer;
        }
        const defaultServer = theme.find(server => server.defaultTheme);
        return defaultServer ? defaultServer.id : theme[0].id;
    };

    // Get the currently selected server
    const selectedServerId = getStoredServer();
    const selectedServer = theme.find(server => server.id === selectedServerId);

    if (!selectedServer) {
        console.error('Selected server not found');
        return;
    }

    // Get current language (reuse from script.js if available)
    const getStoredLanguage = () => {
        const storedLanguage = localStorage.getItem('selectedLanguage');
        return storedLanguage || 'en';
    };

    const currentLanguage = getStoredLanguage();

    // Update page header
    const pageTitle = document.querySelector('.un_featuresPageTitle');
    const pageSubtitle = document.querySelector('.un_featuresPageSubtitle');

    if (pageTitle) {
        pageTitle.textContent = selectedServer.features.header.title[currentLanguage] || selectedServer.features.header.title['en'];
    }

    if (pageSubtitle) {
        pageSubtitle.textContent = selectedServer.header.subtitle[currentLanguage] || selectedServer.header.subtitle['en'];
    }

    // Video and features list sections removed from features page

    // Update detailed features content section
    const sectionTitle = document.querySelector('.un_featuresPageSectionTitle');
    const sectionContent = document.querySelector('.un_featuresPageSectionContent');

    if (sectionTitle && sectionContent) {
        const serverName = selectedServer.name[currentLanguage] || selectedServer.name['en'];

        // Check if this is Interlude+ server (id: '2')
        const isInterludePlus = selectedServer.id === '2';

        // Interlude+ specific content
        if (isInterludePlus) {
            const interludePlusFeatures = {
                en: {
                    title: `${serverName} - Complete Features`,
                    content: `
                        <div class="un_featuresPageDetailed">
                            <div class="un_featuresPageDetailSection">
                                <h3>Experience & Drop Rates</h3>
                                <p>Base server rates configuration for ${serverName}.</p>
                                <div class="un_ratesTable">
                                    <table>
                                        <tr><td>EXP</td><td><strong>10x</strong></td></tr>
                                        <tr><td>SP</td><td><strong>10x</strong></td></tr>
                                        <tr><td>Adena Drop Rate</td><td><strong>6x</strong></td></tr>
                                        <tr><td>Item Drop Rate</td><td><strong>6x</strong></td></tr>
                                        <tr><td>Spoil Rate</td><td><strong>6x</strong></td></tr>
                                        <tr><td>Quest Reward Rate</td><td><strong>3x</strong></td></tr>
                                        <tr><td>Raid Boss Drop Rate</td><td><strong>3x</strong></td></tr>
                                        <tr><td>Fishing Rate</td><td><strong>3x</strong></td></tr>
                                        <tr><td>Clan Reputation Rate</td><td><strong>3x</strong></td></tr>
                                    </table>
                                </div>
                            </div>

                            <div class="un_featuresPageDetailSection">
                                <h3>Level & Class Settings</h3>
                                <ul>
                                    <li><strong>Maximum Level:</strong> 80</li>
                                    <li><strong>Maximum Subclass Level:</strong> 80</li>
                                    <li><strong>Level Required for Subclass:</strong> 75</li>
                                    <li><strong>Subclass Count Limit:</strong> 4 (1 base + 3 subclasses)</li>
                                    <li><strong>Level After Getting Subclass:</strong> 40</li>
                                </ul>
                            </div>

                            <div class="un_featuresPageDetailSection">
                                <h3>Buff & Skill Settings</h3>
                                <ul>
                                    <li><strong>Buff Limit:</strong> 24</li>
                                    <li><strong>Debuff Limit:</strong> 8</li>
                                    <li><strong>Trigger Limit:</strong> 12</li>
                                    <li><strong>Auto Learn Skills:</strong> Enabled</li>
                                    <li><strong>Auto Learn Forgotten Skills:</strong> Enabled</li>
                                    <li><strong>Divine Inspiration Auto Learn:</strong> Disabled</li>
                                    <li><strong>No Hot Springs Debuffs in the Buffer</strong></li>
                                </ul>
                            </div>

                            <div class="un_featuresPageDetailSection">
                                <h3>Party Settings</h3>
                                <ul>
                                    <li><strong>Maximum Party Size:</strong> 9</li>
                                    <li><strong>Party Distribution Range:</strong> 1500</li>
                                    <li><strong>Maximum Level Difference for Party Drop Distribution:</strong> 14</li>
                                </ul>
                                <h4>Party Bonus Rates</h4>
                                <div class="un_ratesTable">
                                    <table>
                                        <tr><th>Members</th><th>Rate</th></tr>
                                        <tr><td>2</td><td>30%</td></tr>
                                        <tr><td>3</td><td>39%</td></tr>
                                        <tr><td>4</td><td>50%</td></tr>
                                        <tr><td>5</td><td>54%</td></tr>
                                        <tr><td>6</td><td>58%</td></tr>
                                        <tr><td>7</td><td>63%</td></tr>
                                        <tr><td>8</td><td>65%</td></tr>
                                        <tr><td>9</td><td>67%</td></tr>
                                    </table>
                                </div>
                            </div>

                            <div class="un_featuresPageDetailSection">
                                <h3>Spoil & Manor Settings</h3>
                                <ul>
                                    <li><strong>Spoil Item Chance Rate:</strong> 6x</li>
                                    <li><strong>Minimum Spoil Success Chance:</strong> 1%</li>
                                    <li><strong>Manor System:</strong> Enabled</li>
                                    <li><strong>Manor Refresh Time:</strong> 20:00</li>
                                    <li><strong>Manor Approval Time:</strong> 06:00</li>
                                    <li><strong>Base Sowing Success:</strong> 100%</li>
                                    <li><strong>Base Harvesting Success:</strong> 90%</li>
                                </ul>
                            </div>

                            <div class="un_featuresPageDetailSection">
                                <h3>Other Notable Settings</h3>
                                <ul>
                                    <li><strong>Auto Loot:</strong> Enabled</li>
                                    <li><strong>Auto Loot Herbs:</strong> Disabled</li>
                                    <li><strong>Individual Auto Loot Settings:</strong> Enabled</li>
                                    <li><strong>Death Penalty:</strong> Enabled</li>
                                    <li><strong>Delevel on Death:</strong> Enabled</li>
                                </ul>
                                <h4>Experience Loss on Death</h4>
                                <div class="un_ratesTable">
                                    <table>
                                        <tr><th>Level</th><th>Loss</th></tr>
                                        <tr><td>10</td><td>8%</td></tr>
                                        <tr><td>40</td><td>4%</td></tr>
                                        <tr><td>76</td><td>2%</td></tr>
                                        <tr><td>78</td><td>1.5%</td></tr>
                                        <tr><td>79</td><td>1%</td></tr>
                                    </table>
                                </div>
                            </div>

                            <div class="un_featuresPageDetailSection">
                                <h3>Champion System</h3>
                                <ul>
                                    <li><strong>Champion Chance 1:</strong> 5%</li>
                                    <li><strong>Champion Chance 2:</strong> 3%</li>
                                    <li><strong>Champion Min Level:</strong> 1</li>
                                    <li><strong>Champion Max Level:</strong> 85</li>
                                    <li><strong>Champion Level Difference:</strong> 9</li>
                                </ul>
                            </div>

                            <div class="un_featuresPageDetailSection">
                                <h3>Pet Settings</h3>
                                <ul>
                                    <li><strong>Pet Inventory Limit:</strong> 12</li>
                                    <li><strong>Pet Heal Only in Battle:</strong> Enabled</li>
                                </ul>
                            </div>

                            <div class="un_featuresPageDetailSection">
                                <h3>Teleport Settings</h3>
                                <ul>
                                    <li><strong>Free Teleport up to Level 40</strong></li>
                                    <li><strong>Teleport Cost Multiplier after Level 40:</strong> 1x</li>
                                    <li><strong>Free Teleport to Catacombs up to Level 40</strong></li>
                                </ul>
                            </div>

                            <div class="un_featuresPageDetailSection">
                                <h3>Weight & Load</h3>
                                <ul>
                                    <li><strong>Maximum Load Modifier:</strong> 4x</li>
                                </ul>
                            </div>

                            <div class="un_featuresPageDetailSection">
                                <h3>Death & Penalty System</h3>
                                <ul>
                                    <li><strong>Death Penalty C5 Enabled:</strong> Yes</li>
                                    <li><strong>Death Penalty Chance:</strong> 10%</li>
                                    <li><strong>Death Penalty Exp Rate:</strong> 1x</li>
                                    <li><strong>Karma Rate for Death Penalty:</strong> 500</li>
                                </ul>
                            </div>
                        </div>
                    `
                },
                pl: {
                    title: `${serverName} - Pełne Funkcje`,
                    content: `
                        <div class="un_featuresPageDetailed">
                            <div class="un_featuresPageDetailSection">
                                <h3>Stawki Doświadczenia i Dropów</h3>
                                <p>Podstawowa konfiguracja stawek serwera dla ${serverName}.</p>
                                <div class="un_ratesTable">
                                    <table>
                                        <tr><td>EXP</td><td><strong>10x</strong></td></tr>
                                        <tr><td>SP</td><td><strong>10x</strong></td></tr>
                                        <tr><td>Stawka Dropu Adeny</td><td><strong>6x</strong></td></tr>
                                        <tr><td>Stawka Dropu Przedmiotów</td><td><strong>6x</strong></td></tr>
                                        <tr><td>Stawka Spoil</td><td><strong>6x</strong></td></tr>
                                        <tr><td>Stawka Nagród Questów</td><td><strong>3x</strong></td></tr>
                                        <tr><td>Stawka Dropu Raid Bossów</td><td><strong>3x</strong></td></tr>
                                        <tr><td>Stawka Wędkowania</td><td><strong>3x</strong></td></tr>
                                        <tr><td>Stawka Reputacji Klanu</td><td><strong>3x</strong></td></tr>
                                    </table>
                                </div>
                            </div>

                            <div class="un_featuresPageDetailSection">
                                <h3>Ustawienia Poziomu i Klasy</h3>
                                <ul>
                                    <li><strong>Maksymalny Poziom:</strong> 80</li>
                                    <li><strong>Maksymalny Poziom Subclass:</strong> 80</li>
                                    <li><strong>Poziom Wymagany dla Subclass:</strong> 75</li>
                                    <li><strong>Limit Liczby Subclass:</strong> 4 (1 podstawowa + 3 subclass)</li>
                                    <li><strong>Poziom Po Uzyskaniu Subclass:</strong> 40</li>
                                </ul>
                            </div>

                            <div class="un_featuresPageDetailSection">
                                <h3>Ustawienia Buffów i Umiejętności</h3>
                                <ul>
                                    <li><strong>Limit Buffów:</strong> 24</li>
                                    <li><strong>Limit Debuffów:</strong> 8</li>
                                    <li><strong>Limit Triggerów:</strong> 12</li>
                                    <li><strong>Automatyczne Uczenie Umiejętności:</strong> Włączone</li>
                                    <li><strong>Automatyczne Uczenie Zapomnianych Umiejętności:</strong> Włączone</li>
                                    <li><strong>Automatyczne Uczenie Divine Inspiration:</strong> Wyłączone</li>
                                    <li><strong>Brak Debuffów Hot Springs w Bufferze</strong></li>
                                </ul>
                            </div>

                            <div class="un_featuresPageDetailSection">
                                <h3>Ustawienia Party</h3>
                                <ul>
                                    <li><strong>Maksymalny Rozmiar Party:</strong> 9</li>
                                    <li><strong>Zasięg Dystrybucji Party:</strong> 1500</li>
                                    <li><strong>Maksymalna Różnica Poziomu dla Dystrybucji Dropów Party:</strong> 14</li>
                                </ul>
                                <h4>Stawki Bonusu Party</h4>
                                <div class="un_ratesTable">
                                    <table>
                                        <tr><th>Członkowie</th><th>Stawka</th></tr>
                                        <tr><td>2</td><td>30%</td></tr>
                                        <tr><td>3</td><td>39%</td></tr>
                                        <tr><td>4</td><td>50%</td></tr>
                                        <tr><td>5</td><td>54%</td></tr>
                                        <tr><td>6</td><td>58%</td></tr>
                                        <tr><td>7</td><td>63%</td></tr>
                                        <tr><td>8</td><td>65%</td></tr>
                                        <tr><td>9</td><td>67%</td></tr>
                                    </table>
                                </div>
                            </div>

                            <div class="un_featuresPageDetailSection">
                                <h3>Ustawienia Spoil i Manor</h3>
                                <ul>
                                    <li><strong>Stawka Szansy Spoil:</strong> 6x</li>
                                    <li><strong>Minimalna Szansa Sukcesu Spoil:</strong> 1%</li>
                                    <li><strong>System Manor:</strong> Włączony</li>
                                    <li><strong>Czas Odświeżania Manor:</strong> 20:00</li>
                                    <li><strong>Czas Zatwierdzenia Manor:</strong> 06:00</li>
                                    <li><strong>Podstawowy Sukces Siewu:</strong> 100%</li>
                                    <li><strong>Podstawowy Sukces Zbiorów:</strong> 90%</li>
                                </ul>
                            </div>

                            <div class="un_featuresPageDetailSection">
                                <h3>Inne Znaczące Ustawienia</h3>
                                <ul>
                                    <li><strong>Auto Loot:</strong> Włączone</li>
                                    <li><strong>Auto Loot Ziół:</strong> Wyłączone</li>
                                    <li><strong>Indywidualne Ustawienia Auto Loot:</strong> Włączone</li>
                                    <li><strong>Kara Śmierci:</strong> Włączona</li>
                                    <li><strong>Delevel przy Śmierci:</strong> Włączony</li>
                                </ul>
                                <h4>Strata Doświadczenia przy Śmierci</h4>
                                <div class="un_ratesTable">
                                    <table>
                                        <tr><th>Poziom</th><th>Strata</th></tr>
                                        <tr><td>10</td><td>8%</td></tr>
                                        <tr><td>40</td><td>4%</td></tr>
                                        <tr><td>76</td><td>2%</td></tr>
                                        <tr><td>78</td><td>1.5%</td></tr>
                                        <tr><td>79</td><td>1%</td></tr>
                                    </table>
                                </div>
                            </div>

                            <div class="un_featuresPageDetailSection">
                                <h3>System Champion</h3>
                                <ul>
                                    <li><strong>Szansa Champion 1:</strong> 5%</li>
                                    <li><strong>Szansa Champion 2:</strong> 3%</li>
                                    <li><strong>Minimalny Poziom Champion:</strong> 1</li>
                                    <li><strong>Maksymalny Poziom Champion:</strong> 85</li>
                                    <li><strong>Różnica Poziomu Champion:</strong> 9</li>
                                </ul>
                            </div>

                            <div class="un_featuresPageDetailSection">
                                <h3>Ustawienia Petów</h3>
                                <ul>
                                    <li><strong>Limit Ekwipunku Peta:</strong> 12</li>
                                    <li><strong>Leczenie Peta Tylko w Walce:</strong> Włączone</li>
                                </ul>
                            </div>

                            <div class="un_featuresPageDetailSection">
                                <h3>Ustawienia Teleportacji</h3>
                                <ul>
                                    <li><strong>Darmowa Teleportacja do Poziomu 40</strong></li>
                                    <li><strong>Mnożnik Kosztu Teleportacji po Poziomie 40:</strong> 1x</li>
                                    <li><strong>Darmowa Teleportacja do Katakumb do Poziomu 40</strong></li>
                                </ul>
                            </div>

                            <div class="un_featuresPageDetailSection">
                                <h3>Waga i Obciążenie</h3>
                                <ul>
                                    <li><strong>Modyfikator Maksymalnego Obciążenia:</strong> 4x</li>
                                </ul>
                            </div>

                            <div class="un_featuresPageDetailSection">
                                <h3>System Śmierci i Kar</h3>
                                <ul>
                                    <li><strong>Kara Śmierci C5 Włączona:</strong> Tak</li>
                                    <li><strong>Szansa Kary Śmierci:</strong> 10%</li>
                                    <li><strong>Stawka EXP Kary Śmierci:</strong> 1x</li>
                                    <li><strong>Stawka Karmy dla Kary Śmierci:</strong> 500</li>
                                </ul>
                            </div>
                        </div>
                    `
                }
            };

            sectionTitle.textContent = interludePlusFeatures[currentLanguage]?.title || interludePlusFeatures['en'].title;
            sectionContent.innerHTML = interludePlusFeatures[currentLanguage]?.content || interludePlusFeatures['en'].content;
            return;
        }

        // High Five Salvation content – Oasis Salvation server configs
        const detailedFeatures = {
            en: {
                title: `${serverName} - Complete Features`,
                content: `
                    <div class="un_featuresPageDetailed">
                        <div class="un_featuresPageDetailSection">
                            <h3><img src="images/l2icons/rates.png" alt="" class="un_featuresCategoryIcon"> Core Rates</h3>
                            <div class="un_ratesTable">
                                <table>
                                    <tr><td>XP</td><td><strong>5x</strong></td></tr>
                                    <tr><td>SP</td><td><strong>5x</strong></td></tr>
                                    <tr><td>Party XP/SP</td><td><strong>1.2x</strong></td></tr>
                                </table>
                            </div>
                        </div>

                        <div class="un_featuresPageDetailSection">
                            <h3><img src="images/l2icons/party.png" alt="" class="un_featuresCategoryIcon"> Party XP/SP Bonuses</h3>
                            <p>Party XP/SP bonuses on ${serverName} follow the official High Five party table (Party.java) and are then multiplied by our server party rate (<strong>RatePartyXp/Sp = 1.2</strong>).</p>
                            <div class="un_ratesTable">
                                <table>
                                    <tr><th>Members</th><th>Effective XP/SP vs solo</th></tr>
                                    <tr><td>1</td><td>1.00x (no party bonus)</td></tr>
                                    <tr><td>2</td><td>1.32x (1.10 × 1.2)</td></tr>
                                    <tr><td>3</td><td>1.44x (1.20 × 1.2)</td></tr>
                                    <tr><td>4</td><td>1.56x (1.30 × 1.2)</td></tr>
                                    <tr><td>5</td><td>1.68x (1.40 × 1.2)</td></tr>
                                    <tr><td>6</td><td>1.80x (1.50 × 1.2)</td></tr>
                                    <tr><td>7</td><td>2.40x (2.00 × 1.2)</td></tr>
                                    <tr><td>8</td><td>2.52x (2.10 × 1.2)</td></tr>
                                    <tr><td>9+</td><td>2.64x (2.20 × 1.2)</td></tr>
                                </table>
                            </div>
                            <p>In practice: solo uses the base 5x server rate, while any party of 2+ members gets the official party bonus first and then +20% from the party rate.</p>
                        </div>

                        <div class="un_featuresPageDetailSection">
                            <h3><img src="images/l2icons/drop.png" alt="" class="un_featuresCategoryIcon"> Drop & Spoil</h3>
                            <div class="un_ratesTable">
                                <table>
                                    <tr><td>Adena</td><td><strong>3x</strong></td></tr>
                                    <tr><td>Item drop</td><td><strong>5x</strong></td></tr>
                                    <tr><td>Spoil</td><td><strong>5x</strong></td></tr>
                                    <tr><td>Raid boss</td><td><strong>3x</strong></td></tr>
                                    <tr><td>Epic boss</td><td><strong>1x</strong> (standard)</td></tr>
                                    <tr><td>Fishing</td><td><strong>3x</strong></td></tr>
                                    <tr><td>Herbs</td><td><strong>3x</strong></td></tr>
                                    <tr><td>Weapon/armor/accessory chance</td><td><strong>5x</strong></td></tr>
                                    <tr><td>Quest item drop</td><td><strong>5x</strong></td></tr>
                                </table>
                            </div>
                            <p>Equipment & materials get the rate increase too.</p>
                        </div>

                        <div class="un_featuresPageDetailSection">
                            <h3><img src="images/l2icons/quest.png" alt="" class="un_featuresCategoryIcon"> Quests</h3>
                            <div class="un_ratesTable">
                                <table>
                                    <tr><td>Quest XP/SP/Adena reward</td><td><strong>5x</strong></td></tr>
                                    <tr><td>Quest item drop</td><td><strong>5x</strong></td></tr>
                                </table>
                            </div>
                        </div>

                        <div class="un_featuresPageDetailSection">
                            <h3><img src="images/l2icons/clan.png" alt="" class="un_featuresCategoryIcon"> Pledge (Clan) Missions</h3>
                            <p>Pledge missions are special clan tasks completed by members together (or solo for the clan) that grant shared benefits.</p>
                            <ul>
                                <li><strong>What they do:</strong> raise clan reputation/level, grant clan currency and unlock perks like passive buffs, better clan skills, special NPCs or cosmetics.</li>
                                <li><strong>How they work:</strong> clear objectives such as killing targets, gathering items, PvP/sieges or daily/weekly challenges, with progress from all participants combined.</li>
                                <li><strong>Why they matter:</strong> they reward organized, active clans with stronger bonuses and give every member something meaningful to contribute.</li>
                            </ul>
                        </div>

                        <div class="un_featuresPageDetailSection">
                            <h3><img src="images/l2icons/manor.png" alt="" class="un_featuresCategoryIcon"> Manor / Hellbound</h3>
                            <div class="un_ratesTable">
                                <table>
                                    <tr><td>Manor (seeds, crops)</td><td><strong>3x</strong></td></tr>
                                    <tr><td>Extractables</td><td><strong>3x</strong></td></tr>
                                    <tr><td>Hellbound trust gain</td><td><strong>3x</strong></td></tr>
                                    <tr><td>Hellbound trust loss</td><td><strong>0.5x</strong></td></tr>
                                </table>
                            </div>
                        </div>

                        <div class="un_featuresPageDetailSection">
                            <h3><img src="images/l2icons/vit.png" alt="" class="un_featuresCategoryIcon"> Vitality</h3>
                            <p>On. Levels 0–4: bonus XP = 1.25x / 1.5x / 1.75x / 2x on top of 5x server (+0.25x per level). Full vitality (level 4) = up to 10x XP when farming.</p>
                            <ul>
                                <li><strong>Recovery:</strong> 2x in peace zones, 4x on reconnect</li>
                                <li><strong>Raid kill</strong> gives bonus points</li>
                            </ul>
                        </div>

                        <div class="un_featuresPageDetailSection">
                            <h3><img src="images/l2icons/pet.png" alt="" class="un_featuresCategoryIcon"> Pets</h3>
                            <ul>
                                <li><strong>Pet XP / Sin Eater XP:</strong> 5x</li>
                                <li><strong>Pet food:</strong> 1x (standard)</li>
                            </ul>
                        </div>

                        <div class="un_featuresPageDetailSection">
                            <h3><img src="images/l2icons/pvp.png" alt="" class="un_featuresCategoryIcon"> Death & PvP</h3>
                            <ul>
                                <li><strong>PvE death:</strong> 20% chance Death Penalty debuff. De-level and skill decrease possible.</li>
                                <li><strong>Karma (PK):</strong> With 6+ karma, you can drop items on death (adena never drops). Up to 10% inventory at risk.</li>
                                <li><strong>Peace zone:</strong> whites safe; reds can't be killed in peace by default.</li>
                                <li><strong>No level gap limit</strong> for PvP.</li>
                            </ul>
                        </div>

                        <div class="un_featuresPageDetailSection">
                            <h3><img src="images/l2icons/char_progression.png" alt="" class="un_featuresCategoryIcon"> Character & Progression</h3>
                            <ul>
                                <li><strong>Max level:</strong> 85</li>
                                <li><strong>Subclasses:</strong> 3 max, from 40 to 85. Cost: 100 Coin of Luck (or subclass quest)</li>
                                <li><strong>Weight:</strong> 8x</li>
                                <li><strong>Respawn:</strong> 65% HP, 0% CP/MP</li>
                                <li><strong>Auto-learn skills:</strong> On (to 85)</li>
                                <li><strong>Buff slots:</strong> 20 (24 with premium)</li>
                                <li><strong>Inventory:</strong> 100 base (150 Dwarf), expand to 300. Warehouse 100 (120 Dwarf), expand to 200</li>
                                <li><strong>Private store:</strong> 3 sell / 4 buy (4/5 Dwarf), expandable</li>
                            </ul>
                        </div>

                        <div class="un_featuresPageDetailSection">
                            <h3><img src="images/l2icons/subclass.png" alt="" class="un_featuresCategoryIcon"> Subclasses & Certificates</h3>
                            <p>Subclasses let you build multiple playstyles on one character, and each subclass on Oasis Salvation can be leveled to <strong>85</strong>.</p>
                            <ul>
                                <li>Core retail-like subclass legality is enforced server-side (illegal combinations are blocked).</li>
                                <li>Examples of enforced restrictions include Elf/Dark Elf split rules, Overlord restrictions, craft-line restrictions, and Kamael-related subclass limits.</li>
                                <li>Subclass Certificates are gained at milestone levels (typically <strong>65 / 70 / 75 / 80</strong>) and exchanged at the proper NPC for cert skills.</li>
                                <li>Oasis uses a broad certification pool model, but selected cert skills are intentionally blocked for balance by class/race rules.</li>
                                <li>You keep cert skills already learned from subclass progression even if you later change or delete that subclass (High Five behavior).</li>
                                <li>Certificates are obtained/applied up to level 80; from 80–85 you still gain subclass progression power, but no extra cert milestones.</li>
                            </ul>
                        </div>

                        <div class="un_featuresPageDetailSection">
                            <h3><img src="images/l2icons/enchant.png" alt="" class="un_featuresCategoryIcon"> Enchant & Crafting</h3>
                            <ul>
                                <li><strong>Weapon/armor enchant:</strong> rates below (Salvation only). Premium adds +5 to scroll chance.</li>
                                <li><strong>Maximum enchant level:</strong> 16. Enchanting above +16 is not possible.</li>
                                <li><strong>Element (stone/crystal/jewel/energy):</strong> config chances (e.g. 50/30/20/10%)</li>
                                <li><strong>Blessed scroll:</strong> no safe level, can go to 0 on fail.</li>
                                <li><strong>Crafting:</strong> standard (no time-based or bonus XP/SP)</li>
                            </ul>
                            <p><strong>Armor Enchant Rates (Regular Armor Pieces)</strong><br>Helmet, Chest, Legs, Boots, Gloves, Shields, Accessories (necklaces, earrings, rings, belts, etc.)</p>
                            <div class="un_ratesTable">
                                <table>
                                    <tr><th>Enchant Level</th><th>Success Rate</th></tr>
                                    <tr><td>0–2</td><td>100%</td></tr>
                                    <tr><td>3</td><td>66.67%</td></tr>
                                    <tr><td>4</td><td>33.34%</td></tr>
                                    <tr><td>5</td><td>25% (announced)</td></tr>
                                    <tr><td>6</td><td>20%</td></tr>
                                    <tr><td>7</td><td>16.67%</td></tr>
                                    <tr><td>8</td><td>14.29%</td></tr>
                                    <tr><td>9</td><td>12.5%</td></tr>
                                    <tr><td>10</td><td>11.12%</td></tr>
                                    <tr><td>11</td><td>10.0%</td></tr>
                                    <tr><td>12</td><td>9.10%</td></tr>
                                    <tr><td>13</td><td>8.34%</td></tr>
                                    <tr><td>14</td><td>7.70%</td></tr>
                                    <tr><td>15</td><td>7.15%</td></tr>
                                    <tr><td>16</td><td>6.67%</td></tr>
                                </table>
                            </div>
                            <p><strong>Full Armor Enchant Rates (Full Armor Sets)</strong></p>
                            <div class="un_ratesTable">
                                <table>
                                    <tr><th>Enchant Level</th><th>Success Rate</th></tr>
                                    <tr><td>0–3</td><td>100%</td></tr>
                                    <tr><td>4</td><td>66.67%</td></tr>
                                    <tr><td>5</td><td>33.34% (announced)</td></tr>
                                    <tr><td>6</td><td>25%</td></tr>
                                    <tr><td>7</td><td>20%</td></tr>
                                    <tr><td>8</td><td>16.67%</td></tr>
                                    <tr><td>9</td><td>14.29%</td></tr>
                                    <tr><td>10</td><td>12.5%</td></tr>
                                    <tr><td>11</td><td>11.12%</td></tr>
                                    <tr><td>12</td><td>10.0%</td></tr>
                                    <tr><td>13</td><td>9.10%</td></tr>
                                    <tr><td>14</td><td>8.34%</td></tr>
                                    <tr><td>15</td><td>7.70%</td></tr>
                                    <tr><td>16</td><td>6.67%</td></tr>
                                </table>
                            </div>
                            <p><strong>Fighter Weapon Enchant Rates (Physical Weapons)</strong></p>
                            <div class="un_ratesTable">
                                <table>
                                    <tr><th>Enchant Level</th><th>Success Rate</th></tr>
                                    <tr><td>0–2</td><td>100%</td></tr>
                                    <tr><td>3–5</td><td>70%</td></tr>
                                    <tr><td>6</td><td>70% (announced)</td></tr>
                                    <tr><td>7–13</td><td>70%</td></tr>
                                    <tr><td>14</td><td>70% (announced)</td></tr>
                                    <tr><td>15–16</td><td>35%</td></tr>
                                </table>
                            </div>
                            <p><strong>Mage Weapon Enchant Rates (Magic Weapons)</strong></p>
                            <div class="un_ratesTable">
                                <table>
                                    <tr><th>Enchant Level</th><th>Success Rate</th></tr>
                                    <tr><td>0–2</td><td>100%</td></tr>
                                    <tr><td>3–5</td><td>40%</td></tr>
                                    <tr><td>6</td><td>40% (announced)</td></tr>
                                    <tr><td>7–13</td><td>40%</td></tr>
                                    <tr><td>14</td><td>40% (announced)</td></tr>
                                    <tr><td>15–16</td><td>20%</td></tr>
                                </table>
                            </div>
                        </div>

                        <div class="un_featuresPageDetailSection">
                            <h3><img src="images/l2icons/premium.png" alt="" class="un_featuresCategoryIcon"> Premium (VIP)</h3>
                            <p>Buy with Coin of Luck, 1–365 days. Same bonus all tiers:</p>
                            <ul>
                                <li>+30% XP, SP, adena, drop, raid, epic, quest reward/drop, fishing, spoil, siege drop, weight</li>
                                <li>+10 craft chance, +3 masterwork, +5 enchant chance</li>
                                <li>Seal stones: 1.3x modifier</li>
                                <li><strong>Premium buffer:</strong> 180 min (3h) buffs. 24 buff slots, longer skill duration (e.g. 60 min)</li>
                                <li>With premium: 6.5x XP (5x × 1.3)</li>
                            </ul>
                        </div>

                        <div class="un_featuresPageDetailSection">
                            <h3><img src="images/l2icons/raid.png" alt="" class="un_featuresCategoryIcon"> Epic Boss Spawn Guide (Players)</h3>
                            <p>All times are <strong>server time</strong>. Epic bosses use <strong>fixed days and clock times</strong> (not random all-day).</p>
                            <h4>Tuesday &amp; Thursday</h4>
                            <div class="un_ratesTable">
                                <table>
                                    <tr><th>Boss</th><th>Day &amp; time</th></tr>
                                    <tr><td>Queen Ant</td><td>Tue &amp; Thu 20:00</td></tr>
                                    <tr><td>Core</td><td>Tue &amp; Thu 21:00</td></tr>
                                    <tr><td>Orfen</td><td>Tue &amp; Thu 21:00</td></tr>
                                </table>
                            </div>
                            <h4>Saturday</h4>
                            <div class="un_ratesTable">
                                <table>
                                    <tr><th>Boss</th><th>Day &amp; time</th></tr>
                                    <tr><td>Baium</td><td>Saturday 19:00</td></tr>
                                    <tr><td>Antharas</td><td>Saturday 20:00 (rotates weekly with Valakas)</td></tr>
                                    <tr><td>Valakas</td><td>Saturday 20:00 (rotates weekly with Antharas)</td></tr>
                                </table>
                            </div>
                            <ul>
                                <li><strong>Antharas / Valakas:</strong> only one dragon at Saturday 20:00 each week, alternating.</li>
                                <li><strong>How spawn works:</strong> bosses appear on the listed days at the listed times.</li>
                            </ul>
                        </div>

                        <div class="un_featuresPageDetailSection">
                            <h3><img src="images/l2icons/pvp.png" alt="" class="un_featuresCategoryIcon"> Olympiad</h3>
                            <div class="un_ratesTable">
                                <table>
                                    <tr><td>Season length</td><td><strong>2 weeks</strong></td></tr>
                                    <tr><td>Schedule</td><td><strong>Mon, Wed &amp; Fri</strong> · <strong>18:00–21:00</strong> (server time)</td></tr>
                                    <tr><td>Max enchant</td><td><strong>+6</strong></td></tr>
                                </table>
                            </div>
                        </div>

                        <div class="un_featuresPageDetailSection">
                            <h3><img src="images/l2icons/other.png" alt="" class="un_featuresCategoryIcon"> Other</h3>
                            <ul>
                                <li><strong>No day-based rates</strong> (same every day)</li>
                                <li><strong>Deep Blue:</strong> killing mobs 8+ levels below = less drop. Raid: 2 levels below</li>
                                <li><strong>Raid/Epic respawn:</strong> standard (no global speed-up)</li>
                                <li><strong>Shop:</strong> 1x (normal prices)</li>
                                <li><strong>Innocent PvP drop:</strong> 0%</li>
                            </ul>
                        </div>
                    </div>
                `
            },
            pl: {
                title: `${serverName} - Pełne Funkcje`,
                content: `
                    <div class="un_featuresPageDetailed">
                        <div class="un_featuresPageDetailSection">
                            <h3><img src="images/l2icons/rates.png" alt="" class="un_featuresCategoryIcon"> Stawki podstawowe</h3>
                            <div class="un_ratesTable">
                                <table>
                                    <tr><td>XP</td><td><strong>5x</strong></td></tr>
                                    <tr><td>SP</td><td><strong>5x</strong></td></tr>
                                    <tr><td>Party XP/SP</td><td><strong>1.2x</strong></td></tr>
                                </table>
                            </div>
                        </div>

                        <div class="un_featuresPageDetailSection">
                            <h3><img src="images/l2icons/party.png" alt="" class="un_featuresCategoryIcon"> Bonusy XP/SP w party</h3>
                            <p>Bonusy XP/SP w party na ${serverName} opierają się na oficjalnej tabeli party High Five (Party.java), a następnie są mnożone przez naszą stawkę party (<strong>RatePartyXp/Sp = 1.2</strong>).</p>
                            <div class="un_ratesTable">
                                <table>
                                    <tr><th>Członkowie</th><th>Efektywne XP/SP względem solo</th></tr>
                                    <tr><td>1</td><td>1.00x (bez bonusa party)</td></tr>
                                    <tr><td>2</td><td>1.32x (1.10 × 1.2)</td></tr>
                                    <tr><td>3</td><td>1.44x (1.20 × 1.2)</td></tr>
                                    <tr><td>4</td><td>1.56x (1.30 × 1.2)</td></tr>
                                    <tr><td>5</td><td>1.68x (1.40 × 1.2)</td></tr>
                                    <tr><td>6</td><td>1.80x (1.50 × 1.2)</td></tr>
                                    <tr><td>7</td><td>2.40x (2.00 × 1.2)</td></tr>
                                    <tr><td>8</td><td>2.52x (2.10 × 1.2)</td></tr>
                                    <tr><td>9+</td><td>2.64x (2.20 × 1.2)</td></tr>
                                </table>
                            </div>
                            <p>W praktyce: solo zawsze korzysta z bazowej stawki 5x, a każda party 2+ osób najpierw dostaje oficjalny bonus party, a potem dodatkowe +20% ze stawki party.</p>
                        </div>

                        <div class="un_featuresPageDetailSection">
                            <h3><img src="images/l2icons/drop.png" alt="" class="un_featuresCategoryIcon"> Drop i Spoil</h3>
                            <div class="un_ratesTable">
                                <table>
                                    <tr><td>Adena</td><td><strong>3x</strong></td></tr>
                                    <tr><td>Drop przedmiotów</td><td><strong>5x</strong></td></tr>
                                    <tr><td>Spoil</td><td><strong>5x</strong></td></tr>
                                    <tr><td>Raid boss</td><td><strong>3x</strong></td></tr>
                                    <tr><td>Epic boss</td><td><strong>1x</strong> (standard)</td></tr>
                                    <tr><td>Wędkowanie</td><td><strong>3x</strong></td></tr>
                                    <tr><td>Zioła</td><td><strong>3x</strong></td></tr>
                                    <tr><td>Szansa broń/pancerz/akcesoria</td><td><strong>5x</strong></td></tr>
                                    <tr><td>Drop przedmiotów z questów</td><td><strong>5x</strong></td></tr>
                                </table>
                            </div>
                            <p>Ekwipunek i materiały również mają zwiększone stawki.</p>
                        </div>

                        <div class="un_featuresPageDetailSection">
                            <h3><img src="images/l2icons/quest.png" alt="" class="un_featuresCategoryIcon"> Questy</h3>
                            <div class="un_ratesTable">
                                <table>
                                    <tr><td>Nagroda XP/SP/Adena z questów</td><td><strong>5x</strong></td></tr>
                                    <tr><td>Drop przedmiotów z questów</td><td><strong>5x</strong></td></tr>
                                </table>
                            </div>
                        </div>

                        <div class="un_featuresPageDetailSection">
                            <h3><img src="images/l2icons/clan.png" alt="" class="un_featuresCategoryIcon"> Misje Pledge (klanu)</h3>
                            <p>Misje pledge to specjalne zadania klanowe wykonywane wspólnie (lub solo dla klanu), które dają wspólne korzyści.</p>
                            <ul>
                                <li><strong>Co dają:</strong> podnoszą reputację/poziom klanu, dają walutę klanową i odblokowują bonusy jak pasywne buffy, lepsze umiejętności klanowe, specjalne NPC czy nagrody kosmetyczne.</li>
                                <li><strong>Jak działają:</strong> jasne cele typu zabijanie celów, zbieranie przedmiotów, PvP/oblężenia czy dzienne/tygodniowe wyzwania, z postępem sumowanym od wszystkich uczestników.</li>
                                <li><strong>Dlaczego są ważne:</strong> nagradzają zorganizowane, aktywne klany silniejszymi bonusami i dają każdemu członkowi realny wkład w rozwój pledge.</li>
                            </ul>
                        </div>

                        <div class="un_featuresPageDetailSection">
                            <h3><img src="images/l2icons/manor.png" alt="" class="un_featuresCategoryIcon"> Manor / Hellbound</h3>
                            <div class="un_ratesTable">
                                <table>
                                    <tr><td>Manor (nasiona, plony)</td><td><strong>3x</strong></td></tr>
                                    <tr><td>Ekstrahowane</td><td><strong>3x</strong></td></tr>
                                    <tr><td>Zysk zaufania Hellbound</td><td><strong>3x</strong></td></tr>
                                    <tr><td>Strata zaufania Hellbound</td><td><strong>0.5x</strong></td></tr>
                                </table>
                            </div>
                        </div>

                        <div class="un_featuresPageDetailSection">
                            <h3><img src="images/l2icons/vit.png" alt="" class="un_featuresCategoryIcon"> Vitality</h3>
                            <p>Włączone. Poziomy 0–4: bonus XP = 1.25x / 1.5x / 1.75x / 2x nałożony na 5x serwera (+0.25x na poziom). Pełne vitality (poziom 4) = do 10x XP przy farmieniu.</p>
                            <ul>
                                <li><strong>Regeneracja:</strong> 2x w strefach pokoju, 4x przy ponownym połączeniu</li>
                                <li><strong>Zabójstwo raida</strong> daje bonusowe punkty</li>
                            </ul>
                        </div>

                        <div class="un_featuresPageDetailSection">
                            <h3><img src="images/l2icons/pet.png" alt="" class="un_featuresCategoryIcon"> Pety</h3>
                            <ul>
                                <li><strong>Pet XP / Sin Eater XP:</strong> 5x</li>
                                <li><strong>Pokarm dla peta:</strong> 1x (standard)</li>
                            </ul>
                        </div>

                        <div class="un_featuresPageDetailSection">
                            <h3><img src="images/l2icons/pvp.png" alt="" class="un_featuresCategoryIcon"> Śmierć i PvP</h3>
                            <ul>
                                <li><strong>Śmierć PvE:</strong> 20% szansy na debuff Kary Śmierci. Możliwy delevel i spadek umiejętności.</li>
                                <li><strong>Karma (PK):</strong> Przy 6+ karmie możesz dropować przedmioty przy śmierci (adena nigdy nie dropuje). Do 10% ekwipunku zagrożone.</li>
                                <li><strong>Strefa pokoju:</strong> biali bezpieczni; czerwonych nie można zabić w peace domyślnie.</li>
                                <li><strong>Brak limitu różnicy poziomów</strong> w PvP.</li>
                            </ul>
                        </div>

                        <div class="un_featuresPageDetailSection">
                            <h3><img src="images/l2icons/char_progression.png" alt="" class="un_featuresCategoryIcon"> Postać i progresja</h3>
                            <ul>
                                <li><strong>Maks. poziom:</strong> 85</li>
                                <li><strong>Subclassy:</strong> 3 max, od 40 do 85. Koszt: 100 Coin of Luck (lub quest subclass)</li>
                                <li><strong>Waga:</strong> 8x</li>
                                <li><strong>Respawn:</strong> 65% HP, 0% CP/MP</li>
                                <li><strong>Auto-learn umiejętności:</strong> Włączone (do 85)</li>
                                <li><strong>Sloty buffów:</strong> 20 (24 z premium)</li>
                                <li><strong>Ekwipunek:</strong> 100 bazowo (150 Krasnolud), rozszerzalny do 300. Magazyn 100 (120 Krasnolud), do 200</li>
                                <li><strong>Prywatny sklep:</strong> 3 sprzedaż / 4 kupno (4/5 Krasnolud), rozszerzalne</li>
                            </ul>
                        </div>

                        <div class="un_featuresPageDetailSection">
                            <h3><img src="images/l2icons/subclass.png" alt="" class="un_featuresCategoryIcon"> Subclassy i certyfikaty</h3>
                            <p>Subclassy pozwalają grać różnymi stylami na tej samej postaci. Każdą subclassę na Oasis Salvation możesz wbić aż do <strong>85 poziomu</strong>.</p>
                            <ul>
                                <li>Zachowujesz wszystkie certyfikaty i umiejętności zdobyte z danej subclassy, nawet jeśli później ją zmienisz lub usuniesz (standard High Five).</li>
                                <li>Wraz z poziomem subclassy otrzymujesz Subclass Certificates na progach poziomów (np. 65 / 70 / 75 / 80), które wymieniasz u odpowiedniego NPC na specjalne umiejętności.</li>
                                <li>Certyfikaty można zdobywać i używać tylko do 80 poziomu; od 80 do 85 nadal rosną statystyki, HP/CP/MP i siła skilli, ale bez dodatkowych certyfikatów.</li>
                            </ul>
                        </div>

                        <div class="un_featuresPageDetailSection">
                            <h3><img src="images/l2icons/enchant.png" alt="" class="un_featuresCategoryIcon"> Enchant i Crafting</h3>
                            <ul>
                                <li><strong>Enchant broni/pancerza:</strong> stawki poniżej (tylko Salvation). Premium dodaje +5 do szansy zwoju.</li>
                                <li><strong>Maksymalny poziom enchantu:</strong> 16. Enchant powyżej +16 nie jest możliwy.</li>
                                <li><strong>Element (kamień/kryształ/klejnot/energia):</strong> szanse z configu (np. 50/30/20/10%)</li>
                                <li><strong>Blessed scroll:</strong> brak bezpiecznego poziomu, przy failu może zejść do 0.</li>
                                <li><strong>Crafting:</strong> standard (bez bonusu czasowego ani XP/SP)</li>
                            </ul>
                            <p><strong>Stawki enchantu pancerza (zwykłe części)</strong><br>Hełm, napierśnik, nogawice, buty, rękawice, tarcze, akcesoria (naszyjniki, kolczyki, pierścienie, pasy itd.)</p>
                            <div class="un_ratesTable">
                                <table>
                                    <tr><th>Poziom enchantu</th><th>Szansa sukcesu</th></tr>
                                    <tr><td>0–2</td><td>100%</td></tr>
                                    <tr><td>3</td><td>66.67%</td></tr>
                                    <tr><td>4</td><td>33.34%</td></tr>
                                    <tr><td>5</td><td>25% (ogłoszone)</td></tr>
                                    <tr><td>6</td><td>20%</td></tr>
                                    <tr><td>7</td><td>16.67%</td></tr>
                                    <tr><td>8</td><td>14.29%</td></tr>
                                    <tr><td>9</td><td>12.5%</td></tr>
                                    <tr><td>10</td><td>11.12%</td></tr>
                                    <tr><td>11</td><td>10.0%</td></tr>
                                    <tr><td>12</td><td>9.10%</td></tr>
                                    <tr><td>13</td><td>8.34%</td></tr>
                                    <tr><td>14</td><td>7.70%</td></tr>
                                    <tr><td>15</td><td>7.15%</td></tr>
                                    <tr><td>16</td><td>6.67%</td></tr>
                                </table>
                            </div>
                            <p><strong>Stawki enchantu pełnego pancerza (komplety)</strong></p>
                            <div class="un_ratesTable">
                                <table>
                                    <tr><th>Poziom enchantu</th><th>Szansa sukcesu</th></tr>
                                    <tr><td>0–3</td><td>100%</td></tr>
                                    <tr><td>4</td><td>66.67%</td></tr>
                                    <tr><td>5</td><td>33.34% (ogłoszone)</td></tr>
                                    <tr><td>6</td><td>25%</td></tr>
                                    <tr><td>7</td><td>20%</td></tr>
                                    <tr><td>8</td><td>16.67%</td></tr>
                                    <tr><td>9</td><td>14.29%</td></tr>
                                    <tr><td>10</td><td>12.5%</td></tr>
                                    <tr><td>11</td><td>11.12%</td></tr>
                                    <tr><td>12</td><td>10.0%</td></tr>
                                    <tr><td>13</td><td>9.10%</td></tr>
                                    <tr><td>14</td><td>8.34%</td></tr>
                                    <tr><td>15</td><td>7.70%</td></tr>
                                    <tr><td>16</td><td>6.67%</td></tr>
                                </table>
                            </div>
                            <p><strong>Stawki enchantu broni fizycznej</strong></p>
                            <div class="un_ratesTable">
                                <table>
                                    <tr><th>Poziom enchantu</th><th>Szansa sukcesu</th></tr>
                                    <tr><td>0–2</td><td>100%</td></tr>
                                    <tr><td>3–5</td><td>70%</td></tr>
                                    <tr><td>6</td><td>70% (ogłoszone)</td></tr>
                                    <tr><td>7–13</td><td>70%</td></tr>
                                    <tr><td>14</td><td>70% (ogłoszone)</td></tr>
                                    <tr><td>15–16</td><td>35%</td></tr>
                                </table>
                            </div>
                            <p><strong>Stawki enchantu broni magicznej</strong></p>
                            <div class="un_ratesTable">
                                <table>
                                    <tr><th>Poziom enchantu</th><th>Szansa sukcesu</th></tr>
                                    <tr><td>0–2</td><td>100%</td></tr>
                                    <tr><td>3–5</td><td>40%</td></tr>
                                    <tr><td>6</td><td>40% (ogłoszone)</td></tr>
                                    <tr><td>7–13</td><td>40%</td></tr>
                                    <tr><td>14</td><td>40% (ogłoszone)</td></tr>
                                    <tr><td>15–16</td><td>20%</td></tr>
                                </table>
                            </div>
                        </div>

                        <div class="un_featuresPageDetailSection">
                            <h3><img src="images/l2icons/premium.png" alt="" class="un_featuresCategoryIcon"> Premium (VIP)</h3>
                            <p>Kupno za Coin of Luck, 1–365 dni. Ten sam bonus we wszystkich tierach:</p>
                            <ul>
                                <li>+30% XP, SP, adena, drop, raid, epic, nagroda/drop z questów, wędkowanie, spoil, drop z siege, waga</li>
                                <li>+10 szansa craftu, +3 masterwork, +5 szansa enchantu</li>
                                <li>Seal stones: modyfikator 1.3x</li>
                                <li><strong>Buffer premium:</strong> buffy 180 min (3h). 24 sloty buffów, dłuższy czas umiejętności (np. 60 min)</li>
                                <li>Z premium: 6.5x XP (5x × 1.3)</li>
                            </ul>
                        </div>

                        <div class="un_featuresPageDetailSection">
                            <h3><img src="images/l2icons/raid.png" alt="" class="un_featuresCategoryIcon"> Poradnik spawnu Epic Bossow (gracze)</h3>
                            <p>Wszystkie godziny sa w <strong>czasie serwera</strong>. Epic bossy maja <strong>stale dni i godziny</strong> (nie losowo przez caly dzien).</p>
                            <h4>Wtorek i czwartek</h4>
                            <div class="un_ratesTable">
                                <table>
                                    <tr><th>Boss</th><th>Dzien i godzina</th></tr>
                                    <tr><td>Queen Ant</td><td>Wt i czw 20:00</td></tr>
                                    <tr><td>Core</td><td>Wt i czw 21:00</td></tr>
                                    <tr><td>Orfen</td><td>Wt i czw 21:00</td></tr>
                                </table>
                            </div>
                            <h4>Sobota</h4>
                            <div class="un_ratesTable">
                                <table>
                                    <tr><th>Boss</th><th>Dzien i godzina</th></tr>
                                    <tr><td>Baium</td><td>Sobota 19:00</td></tr>
                                    <tr><td>Antharas</td><td>Sobota 20:00 (na przemian co tydzien z Valakasem)</td></tr>
                                    <tr><td>Valakas</td><td>Sobota 20:00 (na przemian co tydzien z Antharasem)</td></tr>
                                </table>
                            </div>
                            <ul>
                                <li><strong>Antharas / Valakas:</strong> tylko jeden smok w sobote o 20:00 w danym tygodniu, na przemian.</li>
                                <li><strong>Jak dziala spawn:</strong> bossy pojawiaja sie w wymienione dni o podanych godzinach.</li>
                            </ul>
                        </div>

                        <div class="un_featuresPageDetailSection">
                            <h3><img src="images/l2icons/pvp.png" alt="" class="un_featuresCategoryIcon"> Olimpiada</h3>
                            <div class="un_ratesTable">
                                <table>
                                    <tr><td>Dlugosc sezonu</td><td><strong>2 tygodnie</strong></td></tr>
                                    <tr><td>Harmonogram</td><td><strong>Pn / Sr / Pt</strong> · <strong>18:00–21:00</strong> (czas serwera)</td></tr>
                                    <tr><td>Max enchant</td><td><strong>+6</strong></td></tr>
                                </table>
                            </div>
                        </div>

                        <div class="un_featuresPageDetailSection">
                            <h3><img src="images/l2icons/other.png" alt="" class="un_featuresCategoryIcon"> Inne</h3>
                            <ul>
                                <li><strong>Brak stawek zależnych od dnia</strong> (takie same każdego dnia)</li>
                                <li><strong>Deep Blue:</strong> zabijanie mobów 8+ poziomów poniżej = mniejszy drop. Raid: 2 poziomy poniżej</li>
                                <li><strong>Respawn raid/epic:</strong> standard (bez globalnego przyspieszenia)</li>
                                <li><strong>Sklep:</strong> 1x (normalne ceny)</li>
                                <li><strong>Drop PvP niewinnego:</strong> 0%</li>
                            </ul>
                        </div>
                    </div>
                `
            }
        };

        sectionTitle.textContent = detailedFeatures[currentLanguage]?.title || detailedFeatures['en'].title;
        sectionContent.innerHTML = detailedFeatures[currentLanguage]?.content || detailedFeatures['en'].content;
    }

    // Language change is handled by script.js, but we'll reload to update features content
    const languageSelectElement = document.getElementById('languageSwitcher');
    if (languageSelectElement && !languageSelectElement.hasAttribute('data-features-listener')) {
        languageSelectElement.setAttribute('data-features-listener', 'true');
        languageSelectElement.addEventListener('change', function () {
            setTimeout(() => {
                initializeFeaturesPage();
            }, 100);
        });
    }

    // Initialize Fancybox for video
    if (typeof Fancybox !== 'undefined') {
        Fancybox.bind("[data-fancybox]", {});
    }
}
