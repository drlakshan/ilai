// Colleges and Universities Data - Accurate list from the provided image
const collegesData = [
    {
        name: "Ceylon College of Physicians",
        location: "Colombo, Sri Lanka",
        type: "Medical College",
        icon: "fa-stethoscope",
        logo: "assets/images/logos/ceylon-college-physicians.png"
    },
    {
        name: "Sri Lanka College of Paediatricians",
        location: "Colombo, Sri Lanka",
        type: "Medical College",
        icon: "fa-baby",
        logo: "assets/images/logos/sri-lanka-college-paediatricians.png"
    },
    {
        name: "The Physiological Society of Sri Lanka",
        location: "Sri Lanka",
        type: "Professional Society",
        icon: "fa-heartbeat",
        logo: "assets/images/logos/physiological-society-sri-lanka.png"
    },
    {
        name: "College of Otorhinolaryngologists and Head & Neck Surgeons of Sri Lanka",
        location: "Sri Lanka",
        type: "Medical College",
        icon: "fa-user-md",
        logo: "assets/images/logos/college-otorhinolaryngologists.png"
    },
    {
        name: "University of Kelaniya",
        location: "Kelaniya, Sri Lanka",
        type: "University",
        icon: "fa-university",
        logo: "assets/images/logos/university-kelaniya.png"
    },
    {
        name: "University of Sri Jayewardenepura",
        location: "Nugegoda, Sri Lanka",
        type: "University",
        icon: "fa-university",
        logo: "assets/images/logos/university-sri-jayewardenepura.png"
    },
    {
        name: "Sri Lanka College of Sexual Health and HIV Medicine",
        location: "Sri Lanka",
        type: "Medical College",
        icon: "fa-ribbon",
        logo: "assets/images/logos/sri-lanka-college-sexual-health.png"
    },
    {
        name: "Association of Cardiothoracic and Thoracic Surgeons of Sri Lanka",
        abbreviation: "ACTSSL",
        location: "Sri Lanka",
        type: "Medical Association",
        icon: "fa-heart",
        logo: "assets/images/logos/actssl.png"
    },
    {
        name: "University of Colombo",
        location: "Colombo, Sri Lanka",
        type: "University",
        icon: "fa-university",
        logo: "assets/images/logos/university-colombo.png"
    },
    {
        name: "Sri Lanka College of Military Medicine",
        abbreviation: "SLCOMM",
        location: "Sri Lanka",
        type: "Medical College",
        icon: "fa-shield-alt",
        logo: "assets/images/logos/slcomm.png"
    },
    {
        name: "Nutritional Society of Sri Lanka",
        location: "Sri Lanka",
        type: "Professional Society",
        icon: "fa-apple-alt",
        logo: "assets/images/logos/nutritional-society-sri-lanka.png"
    },
    {
        name: "Colombo Medical Faculty Alumni Association",
        abbreviation: "CoMSAA",
        location: "Colombo, Sri Lanka",
        type: "Alumni Association",
        icon: "fa-graduation-cap",
        logo: "assets/images/logos/comsaa.png"
    }
];

// Check if there's an image file for colleges
function checkForCollegesImage() {
    const imagePath = 'assets/images/colleges.jpg';
    const img = new Image();
    img.onload = function() {
        const container = document.getElementById('colleges-image-container');
        const imgElement = document.getElementById('colleges-slide-image');
        if (container && imgElement) {
            imgElement.src = imagePath;
            container.style.display = 'block';
        }
    };
    img.onerror = function() {
        // Try alternative image names
        const alternatives = ['assets/images/colleges.png', 'assets/images/universities.jpg', 'assets/images/partners.jpg'];
        let currentIndex = 0;
        
        function tryNext() {
            if (currentIndex < alternatives.length) {
                const altImg = new Image();
                altImg.onload = function() {
                    const container = document.getElementById('colleges-image-container');
                    const imgElement = document.getElementById('colleges-slide-image');
                    if (container && imgElement) {
                        imgElement.src = alternatives[currentIndex];
                        container.style.display = 'block';
                    }
                };
                altImg.onerror = function() {
                    currentIndex++;
                    tryNext();
                };
                altImg.src = alternatives[currentIndex];
            }
        }
        tryNext();
    };
    img.src = imagePath;
}

// Helper function to check if logo image exists
function checkLogoExists(logoPath, callback) {
    const img = new Image();
    img.onload = () => callback(true);
    img.onerror = () => callback(false);
    img.src = logoPath;
}

// Render colleges grid
function renderColleges() {
    const grid = document.getElementById('colleges-grid');
    if (!grid) return;

    if (collegesData.length === 0) {
        grid.innerHTML = `
            <div class="no-colleges-message">
                <i class="fas fa-institution" style="font-size: 3rem; margin-bottom: 1rem; opacity: 0.5;"></i>
                <p>No colleges data available. Please add colleges to the collegesData array in colleges.js</p>
            </div>
        `;
        return;
    }

    // Render all colleges with logo placeholders
    grid.innerHTML = collegesData.map((college, index) => {
        const displayName = college.abbreviation ? `${college.name} (${college.abbreviation})` : college.name;
        const logoId = `college-logo-${index}`;
        const iconId = `college-icon-${index}`;
        
        return `
        <div class="college-card" data-college-index="${index}">
            <div class="college-logo-container">
                <img 
                    id="${logoId}" 
                    src="${college.logo || ''}" 
                    alt="${college.name} Logo" 
                    class="college-logo"
                    style="display: none;"
                >
                <div id="${iconId}" class="college-icon" style="display: flex;">
                    <i class="fas ${college.icon || 'fa-university'}"></i>
                </div>
            </div>
            <div class="college-info">
                <h3 class="college-name">${displayName}</h3>
                <p class="college-location">
                    <i class="fas fa-map-marker-alt"></i> ${college.location}
                </p>
                <span class="college-type">${college.type}</span>
            </div>
        </div>
    `;
    }).join('');

    // Check and load logos after rendering
    collegesData.forEach((college, index) => {
        if (college.logo) {
            const logoImg = document.getElementById(`college-logo-${index}`);
            const iconDiv = document.getElementById(`college-icon-${index}`);
            
            if (logoImg && iconDiv) {
                // Set up error handler
                logoImg.onerror = function() {
                    this.style.display = 'none';
                    iconDiv.style.display = 'flex';
                };
                
                // Set up load handler
                logoImg.onload = function() {
                    this.style.display = 'block';
                    iconDiv.style.display = 'none';
                };
                
                // Check if logo exists
                checkLogoExists(college.logo, (exists) => {
                    if (exists) {
                        logoImg.style.display = 'block';
                        iconDiv.style.display = 'none';
                    } else {
                        logoImg.style.display = 'none';
                        iconDiv.style.display = 'flex';
                    }
                });
            }
        }
    });
}

// Initialize page
document.addEventListener('DOMContentLoaded', () => {
    // Hide loader
    const loader = document.getElementById('global-loader');
    if (loader) {
        setTimeout(() => {
            loader.classList.add('hidden');
        }, 500);
    }

    // Check for image and render colleges
    checkForCollegesImage();
    renderColleges();
});

// Function to add new college (for testing)
function showAddCollegeForm() {
    const name = prompt('Enter college/university name:');
    if (name) {
        const location = prompt('Enter location:');
        const type = prompt('Enter type (University/College):') || 'University';
        
        collegesData.push({
            name: name,
            location: location || 'Location not specified',
            type: type,
            icon: 'fa-university'
        });
        
        renderColleges();
    }
}

