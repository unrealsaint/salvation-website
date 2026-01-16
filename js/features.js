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
        const browserLanguage = navigator.language || navigator.languages[0];
        const languageCode = browserLanguage.split('-')[0];
        const availableLanguages = ['en', 'pl'];
        return storedLanguage || (availableLanguages.includes(languageCode) ? languageCode : 'en');
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

        // High Five Salvation content (existing)
        const detailedFeatures = {
            en: {
                title: `${serverName} - Complete Features`,
                content: `
                    <div class="un_featuresPageDetailed">
                        <div class="un_featuresPageDetailSection">
                            <h3>Server Information</h3>
                            <p>Oasis World High Five Salvation is a non-P2W server where all advantages must be earned through dedication and skill. The server is guaranteed to run continuously, providing a stable and fair gaming environment for all players.</p>
                            <ul>
                                <li>Server time: UTC +0</li>
                                <li>No pay-to-win advantages</li>
                                <li>All items, enchants, and bonuses earned through gameplay</li>
                                <li>Fair competition for all players</li>
                            </ul>
                        </div>

                        <div class="un_featuresPageDetailSection">
                            <h3>Gameplay Features</h3>
                            <ul>
                                <li><strong>2 instance runs per HWID limit</strong> - Balanced instance farming</li>
                                <li><strong>Autolearn skills</strong> - Divine Inspiration and forgotten scroll skills excluded</li>
                                <li><strong>Auto loot</strong> - Convenient item collection</li>
                                <li><strong>Drop list on monsters</strong> - See what monsters drop by hovering</li>
                                <li><strong>Offline shop</strong> - Duration 5 days before being kicked</li>
                                <li><strong>Auto Augment</strong> - With wished augment selection</li>
                                <li><strong>Auto item enchant</strong> - Streamlined enchanting process</li>
                                <li><strong>Auto attribute enchant</strong> - Automatic attribute management</li>
                                <li><strong>Auto potions</strong> - Automatic potion usage</li>
                                <li><strong>Inventory slots 100</strong> - Extended inventory capacity</li>
                                <li><strong>Summons get buffs from master</strong> - Enhanced summon system</li>
                                <li><strong>Sub class up to level 85</strong> - Extended subclass progression</li>
                                <li><strong>Certification skills on sub classes</strong> - Full subclass functionality</li>
                                <li><strong>All classes have 1 additional sell slot</strong> - Enhanced trading</li>
                            </ul>
                        </div>

                        <div class="un_featuresPageDetailSection">
                            <h3>Skills & Buffs</h3>
                            <ul>
                                <li><strong>Weight limit increased x5</strong> - Carry more items</li>
                                <li><strong>Restore life does not work in Raid Boss or Epic Boss</strong> - Balanced PvE</li>
                                <li><strong>Cancel return buffs after 15 seconds</strong> - Strategic gameplay</li>
                                <li><strong>Curse of Fear</strong> - Base reuse time increased from 3s to 10s, land rate decreased from 80 to 60</li>
                                <li><strong>Fear</strong> - Base reuse time increased from 5s to 10s, land rate decreased from 80 to 60</li>
                                <li><strong>Counter Critical and Chant of Protection</strong> - Cannot be stacked, they replace each other</li>
                                <li><strong>Buff slots</strong> - 24 + 4 (divine inspiration) + 12 (dances and songs)</li>
                                <li><strong>Buff duration</strong> - 3 hours, selfbuffs retail</li>
                                <li><strong>Malaria, flu, rheuma</strong> - Only available in Hot Springs, work as debuffs, cleansable</li>
                                <li><strong>Buff block skill</strong> - To avoid buffs from non party members</li>
                            </ul>
                        </div>

                        <div class="un_featuresPageDetailSection">
                            <h3>Items & Equipment</h3>
                            <ul>
                                <li><strong>MP potions</strong> - 500 + 500 over 9s dot, reuse time 10s</li>
                                <li><strong>Warrior's Temporary healing potion</strong> - Reuse time 10s</li>
                                <li><strong>New recipes</strong> - x100 materials craft has been added</li>
                                <li><strong>Blessed Epic Jewels</strong> - Enhanced epic jewelry system with same bonuses but Elegia m.def</li>
                                <li>Blessed jewels can be obtained by combining regular jewels with Soul's Bottle (drop from bosses)</li>
                            </ul>
                        </div>

                        <div class="un_featuresPageDetailSection">
                            <h3>Clans & Party</h3>
                            <ul>
                                <li><strong>Max clans in alliance</strong> - 1</li>
                                <li><strong>Max clan members</strong> - 108</li>
                                <li><strong>Clan penalty</strong> - 30 minutes</li>
                            </ul>
                        </div>

                        <div class="un_featuresPageDetailSection">
                            <h3>Profession / Subclass / Nobless</h3>
                            <ul>
                                <li><strong>First class change</strong> - FREE</li>
                                <li><strong>Second class change</strong> - FREE</li>
                                <li><strong>Third class change</strong> - QUEST</li>
                                <li><strong>Subclass</strong> - QUEST/TW H5 quest, doesn't require Baium</li>
                                <li><strong>Nobless</strong> - QUEST/TW, H5 quest, doesn't require Barakiel</li>
                                <li><strong>Rim Kamaloka</strong> - Enabled, without PC Cafe points requirement</li>
                            </ul>
                        </div>

                        <div class="un_featuresPageDetailSection">
                            <h3>Raid Boss Respawn Times</h3>
                            <ul>
                                <li><strong>Common Raids</strong> - 18h + 30m random</li>
                                <li><strong>Sub class Raids</strong> - 8h + 30m random</li>
                                <li><strong>Epic bosses</strong> - All epics dead on launch, PVP area inside and outside</li>
                                <li><strong>Queen Ant, Core, Orfen</strong> - Monday to Friday specific times</li>
                                <li><strong>Zaken</strong> - Night Time (4-40 party) and Day Time Hard (1-2 party)</li>
                                <li><strong>Baium</strong> - Friday 18:00 - 18:30</li>
                                <li><strong>Antharas</strong> - Saturday 18:00 - 19:00</li>
                                <li><strong>Valakas</strong> - Sunday 18:10 - 19:00</li>
                                <li><strong>Frintezza, Beleth, Freya</strong> - Reset Wednesday, Saturday 6:30</li>
                                <li>Queen ant, Core, Orfen and Zaken (day) drops have been improved</li>
                            </ul>
                        </div>

                        <div class="un_featuresPageDetailSection">
                            <h3>Community Board (ALT+B)</h3>
                            <p>All-in-one services available in the community board:</p>
                            <ul>
                                <li><strong>Buffer</strong> - All buffs, including pet buffs, resistances. Duration 3 hours</li>
                                <li><strong>Shop</strong> - Up to regular S grade armors, jewels and weapons. Misc items and more!</li>
                                <li><strong>Services</strong> - Class change, gatekeeper, shop, learn skills</li>
                            </ul>
                        </div>

                        <div class="un_featuresPageDetailSection">
                            <h3>Olympiads</h3>
                            <ul>
                                <li><strong>Cycle</strong> - 7 days</li>
                                <li><strong>Period</strong> - Friday - Sunday 19:00 - 23:00</li>
                            </ul>
                        </div>

                        <div class="un_featuresPageDetailSection">
                            <h3>Castle Siege & Territory War</h3>
                            <ul>
                                <li><strong>Castle Sieges</strong> - Sunday: 16:00 and 20:00</li>
                                <li><strong>Territory War</strong> - Saturday: 20:00 - 22:00</li>
                                <li><strong>Territory Badges</strong> - Valid in all Territories NPCs</li>
                                <li><strong>Maximum flags</strong> - 3 flags per clan</li>
                                <li><strong>Fortress Siege</strong> - Knight Epaulettes drop for players being registered or not</li>
                                <li>Fortress and Castle instance NPCs are level 82+</li>
                            </ul>
                        </div>

                        <div class="un_featuresPageDetailSection">
                            <h3>Enchant Rates</h3>
                            <div class="un_enchantRates">
                                <div>
                                    <h4>Warrior Weapons</h4>
                                    <ul>
                                        <li>+0 to +3: 100%</li>
                                        <li>+3 to +15: 70%</li>
                                        <li>+15 to +20: 35%</li>
                                    </ul>
                                </div>
                                <div>
                                    <h4>Mage Weapons</h4>
                                    <ul>
                                        <li>+0 to +3: 100%</li>
                                        <li>+3 to +15: 40%</li>
                                        <li>+15 to +20: 20%</li>
                                    </ul>
                                </div>
                                <div>
                                    <h4>Armors (Full Body)</h4>
                                    <ul>
                                        <li>+0 to +4: 100%</li>
                                        <li>+4 to +5: 66.6%</li>
                                        <li>+5 to +6: 33.3%</li>
                                        <li>+6 to +7: 25%</li>
                                        <li>+7 to +8: 20%</li>
                                        <li>+8 to +9: 16.6%</li>
                                        <li>+9 to +10: 14.2%</li>
                                    </ul>
                                </div>
                                <div>
                                    <h4>Armors & Accessories</h4>
                                    <ul>
                                        <li>+0 to +3: 100%</li>
                                        <li>+3 to +4: 66.6%</li>
                                        <li>+4 to +5: 33.3%</li>
                                        <li>+5 to +6: 25%</li>
                                        <li>+6 to +7: 20%</li>
                                        <li>+7 to +8: 16.6%</li>
                                        <li>+8 to +9: 14.2%</li>
                                        <li>+9 to +10: 12.5%</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div class="un_featuresPageDetailSection">
                            <h3>Voice Commands</h3>
                            <ul>
                                <li><strong>.mergetalisman</strong> - Combine talismans of the same type with more duration</li>
                                <li><strong>alt+click</strong> - To remove buffs</li>
                                <li><strong>.expon/.expoff</strong> - Commands to block the experience earning</li>
                                <li><strong>.lock/.unlock</strong> - Commands to limit your character trades/damaging actions when used by other players</li>
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
                            <h3>Informacje o serwerze</h3>
                            <p>Oasis World High Five Salvation to serwer non-P2W, gdzie wszystkie przewagi muszą być zdobyte poprzez poświęcenie i umiejętności. Serwer jest gwarantowany do ciągłej pracy, zapewniając stabilne i uczciwe środowisko gry dla wszystkich graczy.</p>
                            <ul>
                                <li>Czas serwera: UTC +0</li>
                                <li>Brak przewag pay-to-win</li>
                                <li>Wszystkie przedmioty, enchanty i bonusy zdobywane przez rozgrywkę</li>
                                <li>Uczciwa konkurencja dla wszystkich graczy</li>
                            </ul>
                        </div>

                        <div class="un_featuresPageDetailSection">
                            <h3>Funkcje Rozgrywki</h3>
                            <ul>
                                <li><strong>Limit 2 instancji na HWID</strong> - Zbalansowane farmienie instancji</li>
                                <li><strong>Automatyczne uczenie umiejętności</strong> - Wykluczone Divine Inspiration i zapomniane zwoje</li>
                                <li><strong>Automatyczny loot</strong> - Wygodne zbieranie przedmiotów</li>
                                <li><strong>Lista dropów na potworach</strong> - Zobacz co dropują potwory</li>
                                <li><strong>Sklep offline</strong> - Czas trwania 5 dni przed wyrzuceniem</li>
                                <li><strong>Auto Augment</strong> - Z wybranym augmentem</li>
                                <li><strong>Auto enchant przedmiotów</strong> - Uproszczony proces enchantowania</li>
                                <li><strong>Auto enchant atrybutów</strong> - Automatyczne zarządzanie atrybutami</li>
                                <li><strong>Auto potki</strong> - Automatyczne używanie potek</li>
                                <li><strong>100 slotów w ekwipunku</strong> - Rozszerzona pojemność</li>
                                <li><strong>Sumony otrzymują buffy od mistrza</strong> - Ulepszony system summonów</li>
                                <li><strong>Subclass do poziomu 85</strong> - Rozszerzona progresja subclass</li>
                                <li><strong>Umiejętności certyfikacyjne na subclass</strong> - Pełna funkcjonalność subclass</li>
                                <li><strong>Wszystkie klasy mają 1 dodatkowy slot sprzedaży</strong> - Ulepszony handel</li>
                            </ul>
                        </div>

                        <div class="un_featuresPageDetailSection">
                            <h3>Umiejętności i Buffy</h3>
                            <ul>
                                <li><strong>Limit wagi zwiększony x5</strong> - Noś więcej przedmiotów</li>
                                <li><strong>Restore life nie działa na Raid Boss lub Epic Boss</strong> - Zbalansowane PvE</li>
                                <li><strong>Anuluj return buffy po 15 sekundach</strong> - Strategiczna rozgrywka</li>
                                <li><strong>Curse of Fear</strong> - Czas odnowienia zwiększony z 3s do 10s, szansa zmniejszona z 80 do 60</li>
                                <li><strong>Fear</strong> - Czas odnowienia zwiększony z 5s do 10s, szansa zmniejszona z 80 do 60</li>
                                <li><strong>Counter Critical i Chant of Protection</strong> - Nie mogą być stackowane, zastępują się nawzajem</li>
                                <li><strong>Sloty buffów</strong> - 24 + 4 (divine inspiration) + 12 (tańce i pieśni)</li>
                                <li><strong>Czas trwania buffów</strong> - 3 godziny, selfbuffy retail</li>
                                <li><strong>Malaria, flu, rheuma</strong> - Tylko w Hot Springs, działają jako debuffy, można usunąć</li>
                                <li><strong>Umiejętność blokowania buffów</strong> - Aby uniknąć buffów od osób spoza party</li>
                            </ul>
                        </div>

                        <div class="un_featuresPageDetailSection">
                            <h3>Przedmioty i Ekwipunek</h3>
                            <ul>
                                <li><strong>Potki MP</strong> - 500 + 500 przez 9s dot, czas odnowienia 10s</li>
                                <li><strong>Warrior's Temporary healing potion</strong> - Czas odnowienia 10s</li>
                                <li><strong>Nowe receptury</strong> - Dodano craft z x100 materiałów</li>
                                <li><strong>Błogosławione Epic Jewels</strong> - Ulepszony system epic jewelry z tymi samymi bonusami ale z m.def Elegia</li>
                                <li>Błogosławione klejnoty można uzyskać łącząc zwykłe klejnoty z Soul's Bottle (drop z bossów)</li>
                            </ul>
                        </div>

                        <div class="un_featuresPageDetailSection">
                            <h3>Klany i Party</h3>
                            <ul>
                                <li><strong>Maksymalna liczba klanów w sojuszu</strong> - 1</li>
                                <li><strong>Maksymalna liczba członków klanu</strong> - 108</li>
                                <li><strong>Kara klanu</strong> - 30 minut</li>
                            </ul>
                        </div>

                        <div class="un_featuresPageDetailSection">
                            <h3>Profesja / Subclass / Nobless</h3>
                            <ul>
                                <li><strong>Pierwsza zmiana klasy</strong> - DARMOWA</li>
                                <li><strong>Druga zmiana klasy</strong> - DARMOWA</li>
                                <li><strong>Trzecia zmiana klasy</strong> - QUEST</li>
                                <li><strong>Subclass</strong> - QUEST/TW H5 quest, nie wymaga Baium</li>
                                <li><strong>Nobless</strong> - QUEST/TW, H5 quest, nie wymaga Barakiel</li>
                                <li><strong>Rim Kamaloka</strong> - Włączone, bez wymogu punktów PC Cafe</li>
                            </ul>
                        </div>

                        <div class="un_featuresPageDetailSection">
                            <h3>Czasy Odrodzenia Raid Bossów</h3>
                            <ul>
                                <li><strong>Zwykłe Raidy</strong> - 18h + 30m losowo</li>
                                <li><strong>Raidy Subclass</strong> - 8h + 30m losowo</li>
                                <li><strong>Epic bossowie</strong> - Wszyscy epicy martwi przy starcie, obszar PVP wewnątrz i na zewnątrz</li>
                                <li><strong>Queen Ant, Core, Orfen</strong> - Poniedziałek do piątku w określonych godzinach</li>
                                <li><strong>Zaken</strong> - Noc (4-40 party) i Dzień Hard (1-2 party)</li>
                                <li><strong>Baium</strong> - Piątek 18:00 - 18:30</li>
                                <li><strong>Antharas</strong> - Sobota 18:00 - 19:00</li>
                                <li><strong>Valakas</strong> - Niedziela 18:10 - 19:00</li>
                                <li><strong>Frintezza, Beleth, Freya</strong> - Reset środa, sobota 6:30</li>
                                <li>Dropy Queen ant, Core, Orfen i Zaken (dzień) zostały ulepszone</li>
                            </ul>
                        </div>

                        <div class="un_featuresPageDetailSection">
                            <h3>Community Board (ALT+B)</h3>
                            <p>Wszystkie usługi dostępne w community board:</p>
                            <ul>
                                <li><strong>Buffer</strong> - Wszystkie buffy, w tym buffy petów, odporności. Czas trwania 3 godziny</li>
                                <li><strong>Sklep</strong> - Do zwykłych S grade armors, jewels i broni. Różne przedmioty i więcej!</li>
                                <li><strong>Usługi</strong> - Zmiana klasy, gatekeeper, sklep, nauka umiejętności</li>
                            </ul>
                        </div>

                        <div class="un_featuresPageDetailSection">
                            <h3>Olimpiady</h3>
                            <ul>
                                <li><strong>Cykl</strong> - 7 dni</li>
                                <li><strong>Okres</strong> - Piątek - Niedziela 19:00 - 23:00</li>
                            </ul>
                        </div>

                        <div class="un_featuresPageDetailSection">
                            <h3>Oblężenia Zamków i Wojny Terytorialne</h3>
                            <ul>
                                <li><strong>Oblężenia Zamków</strong> - Niedziela: 16:00 i 20:00</li>
                                <li><strong>Wojny Terytorialne</strong> - Sobota: 20:00 - 22:00</li>
                                <li><strong>Odznaki Terytorialne</strong> - Ważne u wszystkich NPCs Terytoriów</li>
                                <li><strong>Maksymalna liczba flag</strong> - 3 flagi na klan</li>
                                <li><strong>Oblężenia Fortec</strong> - Knight Epaulettes drop dla graczy zarejestrowanych lub nie</li>
                                <li>NPCs instancji Fortec i Zamków są poziomu 82+</li>
                            </ul>
                        </div>

                        <div class="un_featuresPageDetailSection">
                            <h3>Stawki Enchantowania</h3>
                            <div class="un_enchantRates">
                                <div>
                                    <h4>Bronie Wojownika</h4>
                                    <ul>
                                        <li>+0 do +3: 100%</li>
                                        <li>+3 do +15: 70%</li>
                                        <li>+15 do +20: 35%</li>
                                    </ul>
                                </div>
                                <div>
                                    <h4>Bronie Maga</h4>
                                    <ul>
                                        <li>+0 do +3: 100%</li>
                                        <li>+3 do +15: 40%</li>
                                        <li>+15 do +20: 20%</li>
                                    </ul>
                                </div>
                                <div>
                                    <h4>Pancerze (Pełne)</h4>
                                    <ul>
                                        <li>+0 do +4: 100%</li>
                                        <li>+4 do +5: 66.6%</li>
                                        <li>+5 do +6: 33.3%</li>
                                        <li>+6 do +7: 25%</li>
                                        <li>+7 do +8: 20%</li>
                                        <li>+8 do +9: 16.6%</li>
                                        <li>+9 do +10: 14.2%</li>
                                    </ul>
                                </div>
                                <div>
                                    <h4>Pancerze i Akcesoria</h4>
                                    <ul>
                                        <li>+0 do +3: 100%</li>
                                        <li>+3 do +4: 66.6%</li>
                                        <li>+4 do +5: 33.3%</li>
                                        <li>+5 do +6: 25%</li>
                                        <li>+6 do +7: 20%</li>
                                        <li>+7 do +8: 16.6%</li>
                                        <li>+8 do +9: 14.2%</li>
                                        <li>+9 do +10: 12.5%</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div class="un_featuresPageDetailSection">
                            <h3>Komendy Głosowe</h3>
                            <ul>
                                <li><strong>.mergetalisman</strong> - Połącz talizmany tego samego typu z większym czasem trwania</li>
                                <li><strong>alt+click</strong> - Aby usunąć buffy</li>
                                <li><strong>.expon/.expoff</strong> - Komendy do blokowania zdobywania doświadczenia</li>
                                <li><strong>.lock/.unlock</strong> - Komendy do ograniczenia handlu/akcji obrażeń twojej postaci gdy używane przez innych graczy</li>
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
