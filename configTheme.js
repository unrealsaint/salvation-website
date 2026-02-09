const theme = [
    {
        theme: 'theme_1', /*You can choose between theme_1 and 2 (Contact us at Templstock for more themes)*/
        defaultTheme: true,
        id: '1',
        loginUrl: 'https://account.oasis-world.eu/',
        registerUrl: 'https://account.oasis-world.eu/ucp/?page=register',
        panelUrl: 'https://account.oasis-world.eu/',
        name: {
            en: 'High Five',
            pl: 'High Five'
        },

        exp: 'X5',
        header: {
            title: {
                en: "Welcome to High Five Salvation Project",
                pl: "Witamy w projekcie High Five Salvation"
            },
            subtitle: {
                en: "New project for High Five Chronicle!",
                pl: 'Witamy w High Five, nasz nowy projekt High Five Chronicle!'
            }
        },

        version: 'High Five',
        openingDate: '29.09.2024',
        serverIcon: 'images/icon.jpg',

        rates: [
            {
                type: 'Experience',
                value: 'x5',
                icon: 'images/icons/5.png'
            },
            {
                type: 'SP',
                value: 'x5',
                icon: 'images/icons/5.png'
            },
            {
                type: 'Adena',
                value: 'x3',
                icon: 'images/icons/5.png'
            },
            {
                type: 'Drop',
                value: 'x5',
                icon: 'images/icons/5.png'
            },
            {
                type: 'Spoil',
                value: 'x5',
                icon: 'images/icons/5.png'
            },
            {
                type: 'Quest',
                value: 'x3',
                icon: 'images/icons/5.png'
            },
            {
                type: 'Seal Stones',
                value: 'x5',
                icon: 'images/icons/5.png'
            },
            {
                type: 'Raid Drop',
                value: 'x5',
                icon: 'images/icons/5.png'
            },
            {
                type: 'Epic Drop',
                value: 'x1',
                icon: 'images/icons/5.png'
            },
        ],

        features: {
            header: {
                title: {
                    en: "'High Five' Features",
                    pl: "Funkcje 'High Five'",
                },
            },

            video: {
                title: {
                    en: 'A remastered High Five experience',
                    pl: 'Odświeżone doświadczenie High Five',
                },

                subtitle: {
                    en: 'Trailer Coming Soon',
                    pl: 'Zwiastun wkrótce',
                },

                src: 'https://www.youtube.com/@OasisLineageII',
                thumb: 'images/bg/theme/bg2.jpg'
            },

            list: [
                {
                    title: {
                        en: 'High Five Salvation',
                        pl: 'High Five Salvation'
                    },

                    subtitle: {
                        en: "Oasis High Five is powered by the Salvation Client, making High Five content feel modern and performant.",
                        pl: "Oasis High Five wykorzystuje klienta Salvation, dzięki czemu zawartość High Five jest nowoczesna i wydajna."
                    },

                    img: 'images/features/aden/1.jpg'
                },

                {
                    title: {
                        en: 'Populated World',
                        pl: 'Zaludniony świat'
                    },

                    subtitle: {
                        en: 'A cozy and friendly world where a smaller community of casual players enjoys the adventure together',
                        pl: 'Przytulny i przyjazny świat, gdzie mniejsza społeczność casualowych graczy wspólnie cieszy się przygodą'
                    },

                    img: 'images/features/aden/4.jpg'
                },

                {
                    title: {
                        en: 'Competitive PvP',
                        pl: 'Konkurencyjny PvP'
                    },

                    subtitle: {
                        en: "Fight for the top against the most competitive players",
                        pl: 'Walcz o szczyt przeciwko najbardziej konkurencyjnym graczom'
                    },

                    img: 'images/features/aden/2.jpg'
                },

                {
                    title: {
                        en: 'No Paid Clans',
                        pl: "Brak płatnych klanów"
                    },

                    subtitle: {
                        en: 'Play against everyone as equals! No advantages for clans',
                        pl: 'Graj przeciwko wszystkim na równych zasadach! Brak przewag dla klanów'
                    },

                    img: 'images/features/aden/5.jpg'
                }
            ],
        },

        files: {
            en: {
                title: 'High Five Salvation Client Files',
                mobile: 'This game is not available for mobile devices.',
                fileType: [
                    {
                        title: 'Download the Client',
                        fileSize: '10.52 GB',
                        download: 'Download',
                        options: [
                            {
                                title: 'Google Drive',
                                url: 'https://drive.google.com/file/d/1bSUs5c60QXf03RoD3hckOVDGw1qX2V9G/view?usp=sharing'
                            },
                        ]
                    }
                ],
                support: {
                    title: 'Having troubles on game installation?',
                    btnTitle: 'Go to Support',
                    btnUrl: 'https://discord.gg/UmbYqegXv7'
                }
            },
            pl: {
                title: 'High Five Salvation Pliki Clienta i Systemu',
                mobile: 'Ta gra nie jest dostępna na urządzenia mobilne.',
                fileType: [
                    {
                        title: 'Pobierz klienta',
                        fileSize: '10.52 GB',
                        download: 'Pobierz',
                        options: [
                            {
                                title: 'Google Drive',
                                url: 'https://drive.google.com/file/d/1bSUs5c60QXf03RoD3hckOVDGw1qX2V9G/view?usp=sharing'
                            },
                        ]
                    }
                ],
                support: {
                    title: 'Masz problemy z instalacją gry?',
                    btnTitle: 'Przejdź do wsparcia',
                    btnUrl: 'https://discord.gg/UmbYqegXv7'
                }
            }
        },
    },


    /* */


    {
        theme: 'theme_2', /*You can choose between theme_1 and 2 (Contact us at Templstock for more themes)*/
        defaultTheme: false,
        id: '2',
        loginUrl: 'https://account.oasis-interlude.com/login.php',
        registerUrl: 'https://account.oasis-interlude.com/register.php',
        panelUrl: 'https://account.oasis-interlude.com/',
        name: {
            en: 'Interlude+',
            pl: 'Interlude+'
        },

        exp: 'X10',
        header: {
            title: {
                en: "Welcome to Interlude+ Project",
                pl: "Witamy w projekcie Interlude+"
            },
            subtitle: {
                en: "New project for Interlude+ Chronicle!",
                pl: 'Witamy w Interlude+, nasz nowy projekt Interlude+ Chronicle!'
            }
        },

        version: 'Interlude+',
        openingDate: '29.09.2024',
        serverIcon: 'images/icon.jpg',

        rates: [
            {
                type: 'Experience',
                value: 'x10',
                icon: 'images/icons/5.png'
            },
            {
                type: 'SP',
                value: 'x10',
                icon: 'images/icons/5.png'
            },
            {
                type: 'Adena',
                value: 'x6',
                icon: 'images/icons/5.png'
            },
            {
                type: 'Item',
                value: 'x6',
                icon: 'images/icons/5.png'
            },
            {
                type: 'Spoil',
                value: 'x6',
                icon: 'images/icons/5.png'
            },
            {
                type: 'Quest',
                value: 'x3',
                icon: 'images/icons/5.png'
            },
            {
                type: 'Raid Boss',
                value: 'x3',
                icon: 'images/icons/5.png'
            },
        ],

        features: {
            header: {
                title: {
                    en: "'Interlude+' Features",
                    pl: "Funkcje 'Interlude+'",
                },
            },

            video: {
                title: {
                    en: 'A remastered Interlude+ Experience',
                    pl: 'Odświeżone doświadczenie Interlude+',
                },

                subtitle: {
                    en: 'Trailer Coming Soon',
                    pl: 'Zwiastun wkrótce',
                },

                src: 'https://www.youtube.com/@OasisLineageII',
                thumb: 'images/bg/theme/bg2.jpg'
            },

            list: [
                {
                    title: {
                        en: 'Interlude+',
                        pl: 'Interlude+'
                    },

                    subtitle: {
                        en: "Oasis Interlude+ is powered by the Faffurion Client, making Interlude+ content feel modern and performant.",
                        pl: "Oasis Interlude+ wykorzystuje klienta Faffurion, dzięki czemu zawartość Interlude+ jest nowoczesna i wydajna."
                    },

                    img: 'images/features/awakening/1.jpg'
                },

                {
                    title: {
                        en: 'Populated World',
                        pl: 'Zaludniony świat'
                    },

                    subtitle: {
                        en: 'A cozy and friendly world where a smaller community of casual players enjoys the adventure together',
                        pl: 'Przytulny i przyjazny świat, gdzie mniejsza społeczność casualowych graczy wspólnie cieszy się przygodą'
                    },

                    img: 'images/features/awakening/4.jpg'
                },

                {
                    title: {
                        en: 'Competitive PvP',
                        pl: 'Konkurencyjny PvP'
                    },

                    subtitle: {
                        en: "Fight for the top against the most competitive players",
                        pl: 'Walcz o szczyt przeciwko najbardziej konkurencyjnym graczom'
                    },

                    img: 'images/features/awakening/2.jpg'
                },

                {
                    title: {
                        en: 'No Paid Clans',
                        pl: "Brak płatnych klanów"
                    },

                    subtitle: {
                        en: 'Play against everyone as equals! No advantages for clans',
                        pl: 'Graj przeciwko wszystkim na równych zasadach! Brak przewag dla klanów'
                    },

                    img: 'images/features/awakening/5.jpg'
                }
            ],
        },

        files: {
            en: {
                title: 'Interlude+ Client Files',
                mobile: 'This game is not available for mobile devices.',
                fileType: [
                    {
                        title: 'Download the Client',
                        fileSize: '11.71 GB',
                        download: 'Download',
                        options: [
                            {
                                title: 'Google Drive',
                                url: 'https://drive.google.com/file/d/1skQLWi7TXnEms-QCXQdvTO6-I1mOuhT6/view?usp=sharing'
                            },
                        ]
                    }
                ],
                support: {
                    title: 'Having troubles on game installation?',
                    btnTitle: 'Go to Support',
                    btnUrl: 'https://discord.gg/UmbYqegXv7'
                }
            },
            pl: {
                title: 'Interlude+ Pliki Clienta',
                mobile: 'Ta gra nie jest dostępna na urządzenia mobilne.',
                fileType: [
                    {
                        title: 'Pobierz klienta',
                        fileSize: '11.71 GB',
                        download: 'Pobierz',
                        options: [
                            {
                                title: 'Google Drive',
                                url: 'https://drive.google.com/file/d/1skQLWi7TXnEms-QCXQdvTO6-I1mOuhT6/view?usp=sharing'
                            },
                        ]
                    }
                ],
                support: {
                    title: 'Masz problemy z instalacją gry?',
                    btnTitle: 'Przejdź do wsparcia',
                    btnUrl: 'https://discord.gg/UmbYqegXv7'
                }
            }
        },
    },
];