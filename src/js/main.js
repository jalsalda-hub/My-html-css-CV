import translations from './i18n.js';

console.log('Portfolio initialized');

// Internationalization Logic
const langSelect = document.getElementById('lang-select');
const elementsToTranslate = document.querySelectorAll('[data-i18n]');

function updateLanguage(lang) {
    if (!translations[lang]) return;
    
    // Persist preference
    localStorage.setItem('lang', lang);
    langSelect.value = lang;
    document.documentElement.lang = lang; // Update html lang attribute

    // Update text content
    elementsToTranslate.forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang][key]) {
            // Check if element is an input or textarea to set placeholder/value if needed
            // For now, assuming textContent for all
            element.textContent = translations[lang][key];
        }
    });
}

// Event listener for language toggle
if (langSelect) {
    langSelect.addEventListener('change', (e) => {
        updateLanguage(e.target.value);
    });
}

// Contact Form Handling
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Basic Validation
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        
        if (name && email && message) {
            // Simulate sending
            alert(`Gracias ${name}, tu mensaje ha sido recibido. (Simulación: No hay backend conectado)`);
            contactForm.reset();
        } else {
            alert('Por favor completa todos los campos.');
        }
    });
}


// Theme Toggle Logic
const themeToggleBtn = document.getElementById('theme-toggle');
const themeIcon = themeToggleBtn ? themeToggleBtn.querySelector('i') : null;

function updateThemeIcon(theme) {
    if (!themeIcon) return;
    if (theme === 'dark') {
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
    } else {
        themeIcon.classList.remove('fa-sun');
        themeIcon.classList.add('fa-moon');
    }
}

if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateThemeIcon(newTheme);
    });
}

// Load saved theme
const savedTheme = localStorage.getItem('theme') || 'light';
document.documentElement.setAttribute('data-theme', savedTheme);
updateThemeIcon(savedTheme);

