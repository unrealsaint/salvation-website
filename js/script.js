const selectElement = document.getElementById('servers');
const customSelectContainer = document.querySelector('.un_select');
const customSelectSelected = customSelectContainer ? customSelectContainer.querySelector('.un_select-selected') : null;
const customSelectOptions = customSelectContainer ? customSelectContainer.querySelector('.un_select-options') : null;
const languageSelectElement = document.getElementById('languageSwitcher');

const availableLanguages = ['en', 'pl'];

const getBrowserLanguage = () => {
    const browserLanguage = navigator.language || navigator.languages[0];
    const languageCode = browserLanguage.split('-')[0];
    return availableLanguages.includes(languageCode) ? languageCode : 'en';
};

const getStoredLanguage = () => {
    const storedLanguage = localStorage.getItem('selectedLanguage');
    return storedLanguage || getBrowserLanguage();
};

const findServerById = (serverId) => theme.find(server => server.id === serverId);

const applyTheme = (theme) => {

    document.body.classList.add('animation');
    document.body.classList.remove('theme_1', 'theme_2', 'theme_3');
    document.body.classList.add(theme);

    setTimeout(() => {
        document.body.classList.remove('animation');
    }, 1500);
};



let swiperRates;

const initializeSwiper = () => {
    if (swiperRates) {
        swiperRates.destroy(true, true);
    }

    swiperRates = new Swiper('.un_headerKey-listSlider', {
        loop: true,
        watchSlidesProgress: true,
        navigation: {
            nextEl: '.un_headerKey-next',
            prevEl: '.un_headerKey-prev',
        },

        breakpoints: {
            768: {
                slidesPerView: 1,
            },
            769: {
                slidesPerView: 3,
            },
        },
    });
};



const updateContent = (server, language) => {
    // Only update header if it exists (not on features page)
    const headerTitle = document.querySelector('.un_headerTitle');
    if (headerTitle) {
        headerTitle.innerHTML = `
            <h1>${server.header.title[language]}</h1>
            <p>${server.header.subtitle[language]}</p>
        `;
    }

    // Only update features title if it exists (on index page)
    const featuresHeader = document.querySelector('.un_featuresTitle');
    if (featuresHeader) {
        featuresHeader.innerHTML = `
            <h1>${server.features.header.title[language]}</h1>
        `;
    }

    // Only update video section if it exists and not already handled by features.js
    const videoSection = document.querySelector('.un_featuresList-video');
    if (videoSection && !document.querySelector('.un_featuresPage')) {
        videoSection.innerHTML = `
            <div>
                <a href="${server.features.video.src}" data-fancybox>
                    <span></span>
                    <img src="${server.features.video.thumb}" alt="">
                </a>
            </div>
            <div>
                <h1>${server.features.video.title[language]}</h1>
                <p>${server.features.video.subtitle[language]}</p>
            </div>
        `;
    }

    // Only update features list if it exists and not already handled by features.js
    const featuresList = document.querySelector('.un_featuresList-row ul');
    if (featuresList && !document.querySelector('.un_featuresPage')) {
        featuresList.innerHTML = server.features.list.map(feature => `
            <li class="swiper-slide">
                <img src="${feature.img}" alt="">
                <div>
                    <h3>${feature.title[language]}</h3>
                    <p>${feature.subtitle[language]}</p>
                </div>
            </li>
        `).join('');
    }

    // Only update rates if header exists (not on features page)
    const ratesList = document.querySelector('.un_headerKey-listSlider ul');
    if (ratesList) {
        ratesList.innerHTML = server.rates.map(rate => `
            <li class="swiper-slide">
                <span><img src="${rate.icon}" alt=""></span>
                <span>${rate.type}: <strong>${rate.value}</strong></span>
            </li>
        `).join('');
        initializeSwiper();
    }
};


const updateCustomSelect = (language) => {
    if (!customSelectOptions || !customSelectSelected) return;
    
    customSelectOptions.innerHTML = theme.map(server => `
        <div class="un_select-option ${server.defaultTheme ? 'active' : ''}" data-id="${server.id}">
            <div class="un_select-thumb ${server.theme}-icon"><img src="${server.serverIcon}" alt="${server.name[language]}"></div>
            <div class="un_select-text"><span>${server.name[language]}</span><span>${server.exp}</span></div>
        </div>
    `).join('');
    const selectedServer = findServerById(selectElement.value);
    if (selectedServer) {
        customSelectSelected.textContent = selectedServer.name[language];
    }
};

const setThemeById = (serverId) => {
    const selectedServer = findServerById(serverId);
    if (selectedServer) {
        // Store selected server in localStorage
        localStorage.setItem('selectedServer', serverId);
        applyTheme(selectedServer.theme);
        const currentLanguage = getStoredLanguage();
        updateContent(selectedServer, currentLanguage);
        updateGlobalContent(currentLanguage, selectedServer);
    }
};

const getStoredServer = () => {
    const storedServer = localStorage.getItem('selectedServer');
    if (storedServer) {
        const server = findServerById(storedServer);
        if (server) return storedServer;
    }
    // Return default server
    const defaultServer = theme.find(server => server.defaultTheme);
    return defaultServer ? defaultServer.id : theme[0].id;
};

const updateUrlHash = (serverId) => {
    const selectedServer = findServerById(serverId);
    if (selectedServer) {
        window.location.hash = selectedServer.name['en'].replace(/\s+/g, '');
    }
};

const switchLanguage = (language) => {
    localStorage.setItem('selectedLanguage', language);
    document.documentElement.setAttribute('lang', language);
    const selectedId = selectElement ? selectElement.value : getStoredServer();
    const selectedServer = findServerById(selectedId);
    if (selectedServer) {
        updateContent(selectedServer, language);
        updateCustomSelect(language);
        updateGlobalContent(language, selectedServer);
        // Trigger features page update if on features page
        if (typeof initializeFeaturesPage === 'function') {
            setTimeout(() => initializeFeaturesPage(), 50);
        }
    }
};


const checkHashOnLoad = () => {
    const hash = window.location.hash.replace('#', '');
    const matchedServer = theme.find(server => server.name['en'].replace(/\s+/g, '') === hash);
    if (matchedServer) {
        setThemeById(matchedServer.id);
        selectElement.value = matchedServer.id;
    } else {
        setThemeById(selectElement.value);
    }
};

const updateGlobalContent = (language, selectedServer = null) => {
    const downloadTitle = document.querySelector('.un_header-download span');
    if (downloadTitle) {
        downloadTitle.textContent = lang[language].download;
    }

    const navServerTitle = document.querySelector('.un_navSelect h5');
    if (navServerTitle) {
        navServerTitle.textContent = lang[language].nav.select;
    }

    const linksWithoutLabels = lang[language].nav.links
        .filter(link => !link.for)
        .map(link => `
        <li>
            <a href="${link.href}">${link.text}</a>
        </li>
    `).join('');

    const navLinksContainer = document.querySelector('.un_navList');
    const linksWithLabels = lang[language].nav.links
        .filter(link => link.for)
        .map(link => `
        <li>
            <label for="${link.for}">
                <a>${link.text}</a>
            </label>
        </li>
    `).join('');

    navLinksContainer.innerHTML = linksWithoutLabels + linksWithLabels;

    // Add click handler for Download button to open download window
    const downloadLabels = navLinksContainer.querySelectorAll('label[for="checkFiles"]');
    downloadLabels.forEach(label => {
        const anchor = label.querySelector('a');
        if (anchor) {
            anchor.addEventListener('click', (e) => {
                e.preventDefault();
                const checkFilesInput = document.getElementById('checkFiles');
                if (checkFilesInput) {
                    checkFilesInput.checked = true;
                }
            });
        }
    });

    const userLinksContainer = document.querySelector('.un_navUser');
    userLinksContainer.innerHTML = lang[language].nav.userLinks.map(link => `
        <li><a href="${link.href}">${link.icon}${link.text}</a></li>
    `).join('');


    const stepsTitle = document.querySelector('.un_startSteps h1');
    if (stepsTitle) {
        stepsTitle.textContent = lang[language].howToStart.title;
    }

    const stepsContainer = document.querySelector('.un_startSteps ul');
    if (stepsContainer) {
        stepsContainer.innerHTML = lang[language].howToStart.steps.map(step => {
            // Check if this is the "Go to Download" button
            const isDownloadButton = step.linkTitle === 'Go to Download' || step.linkTitle === 'Przejdź do pobierania';
            const linkClass = isDownloadButton ? 'download-trigger' : '';
            const linkHref = isDownloadButton ? '#' : step.href;
            const linkTarget = isDownloadButton ? '' : 'target="_blank"';
            
            return `
            <li>
                <div>
                    <span>${step.number}</span>
                </div>
                <div>
                    <h2>${step.title}</h2>
                    <p>${step.paragraph}</p>
                    <a href="${linkHref}" ${linkTarget} class="${linkClass}">${step.linkTitle}</a>
                </div>
            </li>
        `;
        }).join('');
        
        // Add click handler for download button
        const downloadButtons = stepsContainer.querySelectorAll('.download-trigger');
        downloadButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                e.preventDefault();
                const checkFilesInput = document.getElementById('checkFiles');
                if (checkFilesInput) {
                    checkFilesInput.checked = true;
                }
            });
        });
    }

    const socialTitle = document.querySelector('.un_footerSocial h1');
    if (socialTitle) {
        socialTitle.textContent = lang[language].social.title;
    }

    const socialList = document.querySelector('.un_footerSocial ul');
    if (socialList) {
        socialList.innerHTML = lang[language].social.list.map(link => `
            <li>
                <a href="${link.href}" title="${link.name}">${link.icon}</a>
            </li>
        `).join('');
    }

    // Get selected server if not provided
    if (!selectedServer) {
        const storedServerId = getStoredServer();
        selectedServer = findServerById(storedServerId);
    }

    // Use world-specific files if available, otherwise fall back to language files
    const filesConfig = selectedServer && selectedServer.files 
        ? selectedServer.files[language] 
        : lang[language].files;

    const filesTitle = document.querySelector('.un_files h1');
    if (filesTitle) {
        filesTitle.textContent = filesConfig.title;
    }

    const filesMobile = document.querySelector('.un_filesMobile');
    if (filesMobile) {
        filesMobile.textContent = filesConfig.mobile;
    }

    const files = document.querySelector('.un_files .un_filesList');
    if (files) {
        files.innerHTML = filesConfig.fileType.map(file => `
            <div class="un_filesOption">
                <p>${file.title} [<strong>${file.fileSize}</strong>]</p>
                
                <div>
                  <div><strong>${file.download}<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/></svg></strong></div>
                  <ul>
                    ${file.options.map(option => `
                        <li>
                            <a href="${option.url}" target="_blank">${option.title}</a>
                        </li>
                    `).join('')}
                  </ul>
                </div>
            </div>
        `).join('');
    }

    const filesHelp = document.querySelector('.un_files .un_filesHelp');
    if (filesHelp) {
        filesHelp.innerHTML = `
            <div>
                <p>${filesConfig.support.title}</p>
                <a href="${filesConfig.support.btnUrl}" target="_blank">
                    ${filesConfig.support.btnTitle}
                </a>
            </div>
        `;
    }
};


document.addEventListener('DOMContentLoaded', () => {
    const defaultLanguage = getStoredLanguage();
    const defaultServer = getStoredServer();
    
    // Set language selector
    if (languageSelectElement) {
        languageSelectElement.value = defaultLanguage;
    }
    
    // Always initialize server select if it exists
    if (selectElement) {
        selectElement.innerHTML = theme.map(server => `
            <option value="${server.id}" ${server.id === defaultServer ? 'selected' : ''}>${server.name.en}</option>
        `).join('');
        
        // Set the selected server
        selectElement.value = defaultServer;
        
        // Initialize custom select
        updateCustomSelect(defaultLanguage);
        
        // Only check hash on index page
        if (document.querySelector('.un_header')) {
            checkHashOnLoad();
        }
    }
    
    // Apply theme and update content based on page
    const selectedServer = findServerById(defaultServer);
    
    // Always update global content (navigation, footer, etc.)
    updateGlobalContent(defaultLanguage, selectedServer);
    if (selectedServer) {
        applyTheme(selectedServer.theme);
        
        // Only update main page content if on index page
        if (document.querySelector('.un_header')) {
            updateContent(selectedServer, defaultLanguage);
            initializeSwiper();
        }
    }
    
    // Set document language
    document.documentElement.setAttribute('lang', defaultLanguage);

    // Setup download button click handlers
    const headerDownloadBtn = document.querySelector('.un_header-download');
    if (headerDownloadBtn) {
        headerDownloadBtn.addEventListener('click', (e) => {
            e.preventDefault();
            const checkFilesInput = document.getElementById('checkFiles');
            if (checkFilesInput) {
                checkFilesInput.checked = true;
            }
        });
    }
});

if (selectElement) {
    selectElement.addEventListener('change', (event) => {
        const selectedId = event.target.value;
        setThemeById(selectedId);
        // Only update URL hash on index page
        if (document.querySelector('.un_header')) {
            updateUrlHash(selectedId);
        }
        // Trigger features page update if on features page
        if (typeof initializeFeaturesPage === 'function') {
            setTimeout(() => initializeFeaturesPage(), 50);
        }
    });
}

if (customSelectSelected) {
    customSelectSelected.addEventListener('click', () => {
        customSelectOptions.classList.toggle('show');
    });
}

if (customSelectOptions) {
    customSelectOptions.addEventListener('click', (event) => {
        const selectedOption = event.target.closest('.un_select-option');
        if (selectedOption) {
            const selectedId = selectedOption.dataset.id;
            if (selectElement) {
                selectElement.value = selectedId;
                selectElement.dispatchEvent(new Event('change'));
            }
            if (customSelectSelected) {
                customSelectSelected.textContent = selectedOption.querySelector('.un_select-text span').textContent;
            }
            customSelectOptions.querySelectorAll('.un_select-option').forEach(option => option.classList.remove('active'));
            selectedOption.classList.add('active');
            customSelectOptions.classList.remove('show');
        }
    });
}

if (customSelectContainer) {
    document.addEventListener('click', (event) => {
        if (!customSelectContainer.contains(event.target)) {
            customSelectOptions.classList.remove('show');
        }
    });
}

if (languageSelectElement) {
    languageSelectElement.addEventListener('change', function () {
        switchLanguage(this.value);
    });
}
