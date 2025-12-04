document.addEventListener('DOMContentLoaded', async () => {
    // Load header first, then initialize menu logic
    await loadHeaderAndInitMenu();

    // Specific components for index page
    if (document.getElementById('hero-slot')) {
        await loadPageComponents();
        await loadCourses();
    }

    // Hide loader after content is ready
    const loader = document.getElementById('global-loader');
    if (loader) {
        setTimeout(() => {
            loader.classList.add('hidden');
        }, 500); // Small delay to ensure smooth transition
    }
});

function initHamburger() {
    // Select the hamburger button in the header-content (the opener)
    const headerHamburgerButton = document.querySelector('.header-content .hamburger-button');
    // Select the close button inside the mobile-overlay-nav-menu (the closer)
    const closeButton = document.querySelector('.mobile-overlay-nav-menu .close-button');
    const mobileOverlayNavMenu = document.querySelector('.mobile-overlay-nav-menu'); // Changed selector
    const body = document.body;

    if (headerHamburgerButton && closeButton && mobileOverlayNavMenu) { // Changed navMenu to mobileOverlayNavMenu
        const toggleMenu = (open) => {
            if (open) {
                mobileOverlayNavMenu.classList.add('active'); // Changed navMenu to mobileOverlayNavMenu
                headerHamburgerButton.classList.add('active'); // Keep header button active state for consistency
                closeButton.classList.add('active'); // Apply active state to close button for 'X'
                body.classList.add('menu-open'); // Add class to body to hide header button
            } else {
                mobileOverlayNavMenu.classList.remove('active'); // Changed navMenu to mobileOverlayNavMenu
                headerHamburgerButton.classList.remove('active');
                closeButton.classList.remove('active');
                body.classList.remove('menu-open');
            }
        };

        // Event listener for the header hamburger button (opener)
        headerHamburgerButton.addEventListener('click', (e) => {
            e.stopPropagation();
            toggleMenu(true); // Open the menu
        });

        // Event listener for the close button inside the mobile-overlay-nav-menu (closer)
        closeButton.addEventListener('click', (e) => {
            e.stopPropagation();
            toggleMenu(false); // Close the menu
        });

        // Close menu when a link is clicked inside the menu
        mobileOverlayNavMenu.querySelectorAll('a').forEach(link => { // Changed navMenu to mobileOverlayNavMenu
            link.addEventListener('click', () => {
                toggleMenu(false); // Close the menu
            });
        });

        // Add a global click listener to close the menu if clicking outside
        document.addEventListener('click', (e) => {
            if (mobileOverlayNavMenu.classList.contains('active')) { // Changed navMenu to mobileOverlayNavMenu
                // Check if the click is outside the mobileOverlayNavMenu and not on either hamburger button
                if (!mobileOverlayNavMenu.contains(e.target) && !headerHamburgerButton.contains(e.target) && !closeButton.contains(e.target)) { // Changed navMenu to mobileOverlayNavMenu
                    toggleMenu(false); // Close the menu
                }
            }
        });
    }
}
async function loadHeaderAndInitMenu() {
    const headerSlot = document.getElementById('header') || document.getElementById('header-slot');
    if (headerSlot) {
        try {
            const response = await fetch('components/header.html');
            const html = await response.text();

            // Create a temporary div to parse the HTML string
            const tempDiv = document.createElement('div');
            tempDiv.innerHTML = html;

            const headerContent = tempDiv.querySelector('.header-content');
            const mobileOverlayNavMenu = tempDiv.querySelector('.mobile-overlay-nav-menu'); // Changed selector

            if (headerContent) {
                headerSlot.innerHTML = headerContent.outerHTML; // Insert header-content into the slot
            }

            if (mobileOverlayNavMenu) {
                document.body.appendChild(mobileOverlayNavMenu); // Append mobile-overlay-nav-menu directly to the body
            }

            // Now that the header is loaded, initialize its interactive elements
            initHamburger();
        } catch (error) {
            console.error(`Error loading header:`, error);
        }
    }
}

async function loadPageComponents() {
    const components = [
        { id: 'hero-slot', url: 'components/hero.html' },
        { id: 'course-list-slot', url: 'components/course-list.html' },
        { id: 'overlay-slot', url: 'components/available-soon.html' }
    ];

    for (const component of components) {
        if (document.getElementById(component.id)) {
            try {
                const response = await fetch(component.url);
                const html = await response.text();
                document.getElementById(component.id).innerHTML = html;
            } catch (error) {
                console.error(`Error loading component ${component.url}:`, error);
            }
        }
    }
}

async function loadCourses() {
    try {
        const response = await fetch('data/courses.json');
        const data = await response.json();
        renderCourses(data.courses);
    } catch (error) {
        console.error('Error loading courses:', error);
    }
}

function showOverlay() {
    const overlay = document.getElementById('available-soon-overlay');
    if (overlay) {
        overlay.classList.add('active');
    }
}

window.closeOverlay = function () {
    const overlay = document.getElementById('available-soon-overlay');
    if (overlay) {
        overlay.classList.remove('active');
    }
};

function renderCourses(courses) {
    const container = document.getElementById('course-container');
    if (!container) return;

    courses.forEach(course => {
        const section = document.createElement('section');
        section.className = 'course-section';

        const title = document.createElement('h3');
        title.className = 'section-title';
        title.textContent = course.title;
        section.appendChild(title);

        const grid = document.createElement('div');
        grid.className = 'course-grid';

        course.subCourses.forEach(subCourse => {
            const card = document.createElement('div');
            card.className = 'course-card';

            const cardTitle = document.createElement('h4');
            cardTitle.className = 'course-title';
            cardTitle.textContent = subCourse.title;

            const cardDesc = document.createElement('p');
            cardDesc.className = 'course-description';
            cardDesc.textContent = subCourse.description;

            const topicList = document.createElement('ul');
            topicList.className = 'topic-list';

            subCourse.topics.slice(0, 3).forEach(topic => {
                const item = document.createElement('li');
                item.className = 'topic-item';
                item.textContent = topic;
                topicList.appendChild(item);
            });

            if (subCourse.topics.length > 3) {
                const more = document.createElement('li');
                more.className = 'topic-item';
                more.style.fontStyle = 'italic';
                more.textContent = `+ ${subCourse.topics.length - 3} more topics`;
                topicList.appendChild(more);
            }

            const ctaButton = document.createElement('button');
            ctaButton.className = 'course-cta';
            ctaButton.innerHTML = 'Start Learning <span class="cta-arrow">→</span>';
            ctaButton.onclick = showOverlay;

            card.appendChild(cardTitle);
            card.appendChild(cardDesc);
            card.appendChild(topicList);
            card.appendChild(ctaButton);
            grid.appendChild(card);
        });

        section.appendChild(grid);
        container.appendChild(section);
    });
}
