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
    const hamburger = document.querySelector('.hamburger-menu');
    const navMenu = document.querySelector('.nav-menu');

    if (hamburger && navMenu) {
        // Toggle menu on hamburger click
        hamburger.addEventListener('click', (e) => {
            e.stopPropagation();
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        // Close menu when a link is clicked inside the menu
        navMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });

        // Add a global click listener to close the menu if clicking outside
        document.addEventListener('click', (e) => {
            if (navMenu.classList.contains('active')) {
                // Check if the click is outside the navMenu and not on the hamburger
                if (!navMenu.contains(e.target) && !hamburger.contains(e.target)) {
                    hamburger.classList.remove('active');
                    navMenu.classList.remove('active');
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
            headerSlot.innerHTML = html;
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
            card.onclick = showOverlay;

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
                more.textContent = `+ ${subCourse.topics.length - 3} more magical topics`;
                topicList.appendChild(more);
            }

            card.appendChild(cardTitle);
            card.appendChild(cardDesc);
            card.appendChild(topicList);
            grid.appendChild(card);
        });

        section.appendChild(grid);
        container.appendChild(section);
    });
}
