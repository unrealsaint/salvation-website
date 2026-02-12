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
                            <p>On. Levels 0–4: bonus XP = 1.5x / 2x / 2.5x / 3x on top of 5x server. Full vitality (level 4) = up to 15x XP when farming.</p>
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
                            <h3><img src="images/l2icons/enchant.png" alt="" class="un_featuresCategoryIcon"> Enchant & Crafting</h3>
                            <ul>
                                <li><strong>Weapon/armor enchant:</strong> standard H5 rates. Premium adds +5 to scroll chance.</li>
                                <li><strong>Element (stone/crystal/jewel/energy):</strong> config chances (e.g. 50/30/20/10%)</li>
                                <li><strong>Blessed scroll:</strong> no safe level, can go to 0 on fail.</li>
                                <li><strong>Crafting:</strong> standard (no time-based or bonus XP/SP)</li>
                            </ul>
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
                            <h3><img src="images/l2icons/other.png" alt="" class="un_featuresCategoryIcon"> Other</h3>
                            <ul>
                                <li><strong>No day-based rates</strong> (same every day)</li>
                                <li><strong>Deep Blue:</strong> killing mobs 8+ levels below = less drop. Raid: 2 levels below</li>
                                <li><strong>Raid/Epic respawn:</strong> standard (no global speed-up)</li>
                                <li><strong>Shop:</strong> 1x (normal prices)</li>
                                <li><strong>Innocent PvP drop:</strong> 0%</li>
                                <li><strong>Olympiad:</strong> on, standard</li>
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
                            <p>Włączone. Poziomy 0–4: bonus XP = 1.5x / 2x / 2.5x / 3x nałożony na 5x serwera. Pełne vitality (poziom 4) = do 15x XP przy farmieniu.</p>
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
                            <h3><img src="images/l2icons/enchant.png" alt="" class="un_featuresCategoryIcon"> Enchant i Crafting</h3>
                            <ul>
                                <li><strong>Enchant broni/pancerza:</strong> standardowe stawki H5. Premium dodaje +5 do szansy zwoju.</li>
                                <li><strong>Element (kamień/kryształ/klejnot/energia):</strong> szanse z configu (np. 50/30/20/10%)</li>
                                <li><strong>Blessed scroll:</strong> brak bezpiecznego poziomu, przy failu może zejść do 0.</li>
                                <li><strong>Crafting:</strong> standard (bez bonusu czasowego ani XP/SP)</li>
                            </ul>
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
                            <h3><img src="images/l2icons/other.png" alt="" class="un_featuresCategoryIcon"> Inne</h3>
                            <ul>
                                <li><strong>Brak stawek zależnych od dnia</strong> (takie same każdego dnia)</li>
                                <li><strong>Deep Blue:</strong> zabijanie mobów 8+ poziomów poniżej = mniejszy drop. Raid: 2 poziomy poniżej</li>
                                <li><strong>Respawn raid/epic:</strong> standard (bez globalnego przyspieszenia)</li>
                                <li><strong>Sklep:</strong> 1x (normalne ceny)</li>
                                <li><strong>Drop PvP niewinnego:</strong> 0%</li>
                                <li><strong>Olimpiada:</strong> włączona, standard</li>
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
