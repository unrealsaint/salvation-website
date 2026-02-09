const lang = {
    en: {
        download: 'Download',
        nav: {
            select: 'Select the World:',
            links: [
                { text: 'Main', href: 'index.html' },
                { text: 'Features', href: 'features.html' },
                { text: 'Discord', href: 'https://discord.gg/UmbYqegXv7' },
                { text: 'Download', for: 'checkFiles' },
                { text: 'Register', href: '/register' }
            ],
            userLinks: [
                { text: 'Login', href: '/login', icon: '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g><path d="M0 0h24v24H0z" fill="none"/><path d="M4 15h2v5h12V4H6v5H4V3a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-6zm6-4V8l5 4-5 4v-3H2v-2h8z"/></g></svg>' }
            ]
        },

        howToStart: {
            title: "Let's Start the Gameplay!",
            steps: [
                {
                    number: 'I',
                    title: 'Create Account',
                    paragraph: 'Go to registration page and create your account for our project',
                    href: '/account',
                    linkTitle: 'Go to Panel',
                },

                {
                    number: 'II',
                    title: 'Download the Game Files',
                    paragraph: 'Download the game files',
                    href: '/download',
                    linkTitle: 'Go to Download',
                },

                {
                    number: 'III',
                    title: 'Install the Game',
                    paragraph: 'Follow the installing process and start the game',
                    href: '/guide',
                    linkTitle: 'Guide',
                },
            ]
        },

        social: {
            title: 'Stay Connected',
            list: [
                {
                    name: 'Discord',
                    href: 'https://discord.gg/UmbYqegXv7',
                    icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M524.5 69.8a1.5 1.5 0 0 0 -.8-.7A485.1 485.1 0 0 0 404.1 32a1.8 1.8 0 0 0 -1.9 .9 337.5 337.5 0 0 0 -14.9 30.6 447.8 447.8 0 0 0 -134.4 0 309.5 309.5 0 0 0 -15.1-30.6 1.9 1.9 0 0 0 -1.9-.9A483.7 483.7 0 0 0 116.1 69.1a1.7 1.7 0 0 0 -.8 .7C39.1 183.7 18.2 294.7 28.4 404.4a2 2 0 0 0 .8 1.4A487.7 487.7 0 0 0 176 479.9a1.9 1.9 0 0 0 2.1-.7A348.2 348.2 0 0 0 208.1 430.4a1.9 1.9 0 0 0 -1-2.6 321.2 321.2 0 0 1 -45.9-21.9 1.9 1.9 0 0 1 -.2-3.1c3.1-2.3 6.2-4.7 9.1-7.1a1.8 1.8 0 0 1 1.9-.3c96.2 43.9 200.4 43.9 295.5 0a1.8 1.8 0 0 1 1.9 .2c2.9 2.4 6 4.9 9.1 7.2a1.9 1.9 0 0 1 -.2 3.1 301.4 301.4 0 0 1 -45.9 21.8 1.9 1.9 0 0 0 -1 2.6 391.1 391.1 0 0 0 30 48.8 1.9 1.9 0 0 0 2.1 .7A486 486 0 0 0 610.7 405.7a1.9 1.9 0 0 0 .8-1.4C623.7 277.6 590.9 167.5 524.5 69.8zM222.5 337.6c-29 0-52.8-26.6-52.8-59.2S193.1 219.1 222.5 219.1c29.7 0 53.3 26.8 52.8 59.2C275.3 311 251.9 337.6 222.5 337.6zm195.4 0c-29 0-52.8-26.6-52.8-59.2S388.4 219.1 417.9 219.1c29.7 0 53.3 26.8 52.8 59.2C470.7 311 447.5 337.6 417.9 337.6z"/></svg>'
                },

                {
                    name: 'Youtube',
                    href: 'https://www.youtube.com/@OasisLineageII',
                    icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M549.7 124.1c-6.3-23.7-24.8-42.3-48.3-48.6C458.8 64 288 64 288 64S117.2 64 74.6 75.5c-23.5 6.3-42 24.9-48.3 48.6-11.4 42.9-11.4 132.3-11.4 132.3s0 89.4 11.4 132.3c6.3 23.7 24.8 41.5 48.3 47.8C117.2 448 288 448 288 448s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zm-317.5 213.5V175.2l142.7 81.2-142.7 81.2z"/></svg>'
                },

                {
                    name: 'Facebook',
                    href: 'https://www.facebook.com/OasisLineageII',
                    icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z"/></svg>'
                }
            ]
        },

        files: {
            title: 'Files',
            mobile: 'This game is not available for mobile devices.',
            fileType: [
                {
                    title: 'Download the Client',
                    fileSize: '16 GB',
                    download: 'Download',

                    options: [
                        {
                            title: 'Mega',
                            url: 'https://mega.com'
                        },

                        {
                            title: 'Mediafire',
                            url: 'https://mediafire.com'
                        },
                    ]
                },

                {
                    title: 'Download the Updater',
                    fileSize: '20 GB',
                    download: 'Download',

                    options: [
                        {
                            title: 'Mega',
                            url: 'https://mega.com'
                        },

                        {
                            title: 'Mediafire',
                            url: 'https://mediafire.com'
                        },
                    ]
                }
            ],

            support: {
                title: 'Having troubles on game installation?',
                btnTitle: 'Go to Support',
                btnUrl: '/support'
            }
        }
    },


    /**/


    pl: {
        download: 'Pobierz',
        nav: {
            select: 'Wybierz świat:',
            links: [
                { text: 'Główna', href: 'index.html' },
                { text: 'Funkcje', href: 'features.html' },
                { text: 'Discord', href: 'https://discord.gg/UmbYqegXv7' },
                { text: 'Pobierz', for: 'checkFiles' },
                { text: 'Zarejestruj się', href: '/register' },
            ],
            userLinks: [
                { text: 'Zaloguj się', href: '/login', icon: '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g><path d="M0 0h24v24H0z" fill="none"/><path d="M4 15h2v5h12V4H6v5H4V3a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-6zm6-4V8l5 4-5 4v-3H2v-2h8z"/></g></svg>' }
            ]
        },

        howToStart: {
            title: 'Zacznijmy rozgrywkę!',
            steps: [
                {
                    number: 'I',
                    title: 'Utwórz swoje główne konto',
                    paragraph: 'Przejdź na stronę rejestracji i utwórz swoje główne konto dla naszego projektu.',
                    href: '/account',
                    linkTitle: 'Przejdź do panelu',
                },

                {
                    number: 'II',
                    title: 'Pobierz pliki gry',
                    paragraph: 'Pobierz pliki gry lub program aktualizacyjny.',
                    href: '/download',
                    linkTitle: 'Przejdź do pobierania',
                },

                {
                    number: 'III',
                    title: 'Zainstaluj grę',
                    paragraph: 'Postępuj zgodnie z procesem instalacji i uruchom grę.',
                    href: '/guide',
                    linkTitle: 'Przewodnik',
                },
            ]
        },

        social: {
            title: 'Pozostań w kontakcie',
            list: [
                {
                    name: 'Discord',
                    href: 'https://discord.gg/UmbYqegXv7',
                    icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M524.5 69.8a1.5 1.5 0 0 0 -.8-.7A485.1 485.1 0 0 0 404.1 32a1.8 1.8 0 0 0 -1.9 .9 337.5 337.5 0 0 0 -14.9 30.6 447.8 447.8 0 0 0 -134.4 0 309.5 309.5 0 0 0 -15.1-30.6 1.9 1.9 0 0 0 -1.9-.9A483.7 483.7 0 0 0 116.1 69.1a1.7 1.7 0 0 0 -.8 .7C39.1 183.7 18.2 294.7 28.4 404.4a2 2 0 0 0 .8 1.4A487.7 487.7 0 0 0 176 479.9a1.9 1.9 0 0 0 2.1-.7A348.2 348.2 0 0 0 208.1 430.4a1.9 1.9 0 0 0 -1-2.6 321.2 321.2 0 0 1 -45.9-21.9 1.9 1.9 0 0 1 -.2-3.1c3.1-2.3 6.2-4.7 9.1-7.1a1.8 1.8 0 0 1 1.9-.3c96.2 43.9 200.4 43.9 295.5 0a1.8 1.8 0 0 1 1.9 .2c2.9 2.4 6 4.9 9.1 7.2a1.9 1.9 0 0 1 -.2 3.1 301.4 301.4 0 0 1 -45.9 21.8 1.9 1.9 0 0 0 -1 2.6 391.1 391.1 0 0 0 30 48.8 1.9 1.9 0 0 0 2.1 .7A486 486 0 0 0 610.7 405.7a1.9 1.9 0 0 0 .8-1.4C623.7 277.6 590.9 167.5 524.5 69.8zM222.5 337.6c-29 0-52.8-26.6-52.8-59.2S193.1 219.1 222.5 219.1c29.7 0 53.3 26.8 52.8 59.2C275.3 311 251.9 337.6 222.5 337.6zm195.4 0c-29 0-52.8-26.6-52.8-59.2S388.4 219.1 417.9 219.1c29.7 0 53.3 26.8 52.8 59.2C470.7 311 447.5 337.6 417.9 337.6z"/></svg>'
                },

                {
                    name: 'Youtube',
                    href: 'https://www.youtube.com/@OasisLineageII',
                    icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M549.7 124.1c-6.3-23.7-24.8-42.3-48.3-48.6C458.8 64 288 64 288 64S117.2 64 74.6 75.5c-23.5 6.3-42 24.9-48.3 48.6-11.4 42.9-11.4 132.3-11.4 132.3s0 89.4 11.4 132.3c6.3 23.7 24.8 41.5 48.3 47.8C117.2 448 288 448 288 448s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zm-317.5 213.5V175.2l142.7 81.2-142.7 81.2z"/></svg>'
                },

                {
                    name: 'Facebook',
                    href: 'https://www.facebook.com/OasisLineageII',
                    icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z"/></svg>'
                }
            ]
        },

        files: {
            title: 'Pliki',
            mobile: 'Ta gra nie jest dostępna na urządzenia mobilne.',
            fileType: [
                {
                    title: 'Pobierz klienta',
                    fileSize: '16 GB',
                    download: 'Pobierz',

                    options: [
                        {
                            title: 'Mega',
                            url: 'https://mega.com'
                        },

                        {
                            title: 'Mediafire',
                            url: 'https://mediafire.com'
                        },
                    ]
                },

                {
                    title: 'Pobierz program aktualizacyjny',
                    fileSize: '20 GB',
                    download: 'Pobierz',

                    options: [
                        {
                            title: 'Mega',
                            url: 'https://mega.com'
                        },

                        {
                            title: 'Mediafire',
                            url: 'https://mediafire.com'
                        },
                    ]
                }
            ],

            support: {
                title: 'Masz problemy z instalacją gry?',
                btnTitle: 'Przejdź do wsparcia',
                btnUrl: '/support'
            }
        }
    }
};