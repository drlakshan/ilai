document.addEventListener('DOMContentLoaded', () => {
    const timelineContainer = document.getElementById('timeline');
    if (!timelineContainer) {
        console.error('Timeline container not found');
        return;
    }

    // --- Lightbox State ---
    let allGalleries = [];
    let currentLightboxGallery = [];
    let currentLightboxIndex = 0;
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = lightbox.querySelector('.lightbox-image');
    const lightboxContent = lightbox.querySelector('.lightbox-content');

    let scale = 1, translateX = 0, translateY = 0, isPanning = false;
    let lastX = 0, lastY = 0;
    // --- End Lightbox State ---


    fetch('data/ai-journey.json')
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            data.sort((a, b) => new Date(b.date) - new Date(a.date));
            if (data.length === 0) {
                timelineContainer.innerHTML = '<p>No timeline data available.</p>';
                return;
            }
            renderTimeline(data);
            setupInteraction();
        })
        .catch(error => {
            console.error('Error fetching timeline data:', error);
            timelineContainer.innerHTML = '<p>Could not load timeline data. Please try again later.</p>';
        });

    function renderTimeline(items) {
        allGalleries = items.map(item => item.images || []);
        const timelineHTML = items.map((item, itemIndex) => {
            let detailsContent = '';
            if (item.details) {
                detailsContent += `<p>${item.details}</p>`;
            }
            if (item.images && item.images.length > 0) {
                const imagesHTML = item.images.map((src, i) => `
                    <img src="${src}" alt="${item.title} image ${i + 1}" 
                         class="timeline-image ${i === 0 ? 'active' : ''}" 
                         data-gallery-id="${itemIndex}" 
                         data-index="${i}">
                `).join('');

                const controlsHTML = item.images.length > 1 ? `
                    <div class="gallery-controls">
                        <button class="gallery-prev">&larr;</button>
                        <span class="gallery-counter">1 / ${item.images.length}</span>
                        <button class="gallery-next">&rarr;</button>
                    </div>
                ` : '';

                detailsContent += `
                    <div class="timeline-gallery">
                        <div class="gallery-images">
                            ${imagesHTML}
                        </div>
                        ${controlsHTML}
                    </div>
                `;
            }
            if (item.link) {
                detailsContent += `<a href="${item.link}" target="_blank" rel="noopener noreferrer" class="timeline-link">Learn More &rarr;</a>`;
            }

            return `
                <div class="timeline-item">
                    <div class="timeline-content">
                        <span class="timeline-date">${formatDate(item.date)}</span>
                        ${item.category ? `<span class="timeline-category">${item.category}</span>` : ''}
                        <h2>${item.title}</h2>
                        <p>${item.description}</p>
                        <div class="timeline-details">
                            <div class="timeline-details-content">
                                ${detailsContent}
                            </div>
                        </div>
                    </div>
                </div>
            `;
        }).join('');
        timelineContainer.innerHTML = timelineHTML;
    }

    function formatDate(dateString) {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(dateString).toLocaleDateString('en-US', options);
    }
    
    function setupInteraction() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });

        document.querySelectorAll('.timeline-item').forEach(item => {
            observer.observe(item);
            
            const content = item.querySelector('.timeline-content');
            content.addEventListener('click', (e) => {
                if (e.target.closest('.timeline-link') || e.target.closest('.gallery-controls') || e.target.closest('.gallery-images')) {
                    return;
                }
                content.classList.toggle('expanded');
            });

            const galleryImagesContainer = item.querySelector('.gallery-images');
            if (galleryImagesContainer) {
                galleryImagesContainer.addEventListener('click', (e) => {
                    if (e.target.matches('.timeline-image')) {
                        const galleryId = parseInt(e.target.dataset.galleryId, 10);
                        const startIndex = parseInt(e.target.dataset.index, 10);
                        openLightbox(galleryId, startIndex);
                    }
                });
            }
            
            const gallery = item.querySelector('.timeline-gallery');
            if (gallery && gallery.querySelector('.gallery-controls')) {
                const prevButton = gallery.querySelector('.gallery-prev');
                const nextButton = gallery.querySelector('.gallery-next');
                const counter = gallery.querySelector('.gallery-counter');
                const images = gallery.querySelectorAll('.timeline-image');
                let currentIndex = 0;

                function updateGallery() {
                    images.forEach((img, i) => {
                        img.classList.toggle('active', i === currentIndex);
                    });
                    counter.textContent = `${currentIndex + 1} / ${images.length}`;
                    prevButton.disabled = currentIndex === 0;
                    nextButton.disabled = currentIndex === images.length - 1;
                }

                prevButton.addEventListener('click', () => {
                    if (currentIndex > 0) {
                        currentIndex--;
                        updateGallery();
                    }
                });

                nextButton.addEventListener('click', () => {
                    if (currentIndex < images.length - 1) {
                        currentIndex++;
                        updateGallery();
                    }
                });
                updateGallery();
            }
        });

        // --- Lightbox Event Listeners ---
        lightbox.querySelector('.lightbox-close').addEventListener('click', closeLightbox);
        lightbox.querySelector('.lightbox-prev').addEventListener('click', showPrevLightboxImage);
        lightbox.querySelector('.lightbox-next').addEventListener('click', showNextLightboxImage);
        lightbox.querySelector('.lightbox-fit').addEventListener('click', fitImage);
        lightbox.querySelector('.lightbox-zoom-in').addEventListener('click', () => zoom(1.2));
        lightbox.querySelector('.lightbox-zoom-out').addEventListener('click', () => zoom(0.8));

        lightbox.addEventListener('click', (e) => {
            if (e.target === lightbox) {
                closeLightbox();
            }
        });

        lightboxContent.addEventListener('wheel', handleWheel, { passive: false });
        lightboxImage.addEventListener('mousedown', startPan);
        lightboxImage.addEventListener('touchstart', startPan, { passive: false });
    }

    // --- Lightbox Functions ---
    function fitImage() {
        scale = 1;
        translateX = 0;
        translateY = 0;
        updateImageTransform();
    }

    function openLightbox(galleryId, startIndex) {
        currentLightboxGallery = allGalleries[galleryId];
        currentLightboxIndex = startIndex;
        fitImage();
        updateLightboxImage();
        lightbox.classList.add('active');
        updateLightboxNav();
    }

    function closeLightbox() {
        lightbox.classList.remove('active');
        // Reset image styles to avoid flicker on next open
        lightboxImage.src = '';
        fitImage();
    }

    function updateLightboxImage() {
        lightboxImage.src = currentLightboxGallery[currentLightboxIndex];
        fitImage(); // Reset transform for the new image
    }
    
    function showPrevLightboxImage() {
        currentLightboxIndex = (currentLightboxIndex > 0) ? currentLightboxIndex - 1 : currentLightboxGallery.length - 1;
        updateLightboxImage();
        updateLightboxNav();
    }

    function showNextLightboxImage() {
        currentLightboxIndex = (currentLightboxIndex < currentLightboxGallery.length - 1) ? currentLightboxIndex + 1 : 0;
        updateLightboxImage();
        updateLightboxNav();
    }

    function updateLightboxNav() {
        const prevButton = lightbox.querySelector('.lightbox-prev');
        const nextButton = lightbox.querySelector('.lightbox-next');
        if (currentLightboxGallery.length <= 1) {
            prevButton.style.display = 'none';
            nextButton.style.display = 'none';
        } else {
            prevButton.style.display = 'block';
            nextButton.style.display = 'block';
        }
    }

    function updateImageTransform() {
        lightboxImage.style.transform = `translate(${translateX}px, ${translateY}px) scale(${scale})`;
    }

    function zoom(factor, clientX, clientY) {
        const newScale = scale * factor;
        if (newScale < 0.5 || newScale > 10) return; // Scale limits

        // Get image and container dimensions
        const rect = lightboxImage.getBoundingClientRect();
        
        // If clientX/Y are not provided, zoom to center
        const pivotX = clientX !== undefined ? clientX - rect.left : rect.width / 2;
        const pivotY = clientY !== undefined ? clientY - rect.top : rect.height / 2;
        
        // Update translation to zoom towards the pivot point
        translateX -= (pivotX / scale) * (newScale - scale);
        translateY -= (pivotY / scale) * (newScale - scale);
        
        scale = newScale;
        updateImageTransform();
    }

    function handleWheel(e) {
        e.preventDefault();
        const factor = e.deltaY < 0 ? 1.1 : 1 / 1.1;
        zoom(factor, e.clientX, e.clientY);
    }

    function startPan(e) {
        if (e.type === 'touchstart') e.preventDefault();
        isPanning = true;
        lightboxImage.classList.add('panning');
        lastX = e.type === 'touchstart' ? e.touches[0].clientX : e.clientX;
        lastY = e.type === 'touchstart' ? e.touches[0].clientY : e.clientY;

        window.addEventListener('mousemove', pan);
        window.addEventListener('mouseup', endPan);
        window.addEventListener('touchmove', pan, { passive: false });
        window.addEventListener('touchend', endPan);
    }

    function pan(e) {
        if (!isPanning) return;
        if (e.type === 'touchmove') e.preventDefault();

        const currentX = e.type === 'touchmove' ? e.touches[0].clientX : e.clientX;
        const currentY = e.type === 'touchmove' ? e.touches[0].clientY : e.clientY;
        
        translateX += currentX - lastX;
        translateY += currentY - lastY;
        
        lastX = currentX;
        lastY = currentY;
        
        updateImageTransform();
    }

    function endPan() {
        isPanning = false;
        lightboxImage.classList.remove('panning');
        window.removeEventListener('mousemove', pan);
        window.removeEventListener('mouseup', endPan);
        window.removeEventListener('touchmove', pan);
        window.removeEventListener('touchend', endPan);
    }
});