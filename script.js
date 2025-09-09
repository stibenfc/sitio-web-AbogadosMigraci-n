// === CÓDIGO PARA CARRUSEL DE FONDO EN EL HERO ===
let currentSlide = 0;
// Reemplaza estas rutas con las imágenes que desees para el carrusel de inicio
const backgrounds = ['img/hero-immigration.png', 'img/hero-immigration2.png'];
const hero = document.getElementById('inicio'); // Corregido: se usa el ID 'inicio' para el elemento hero
let interval;

if (hero) {
    function startAutoSlide() {
        interval = setInterval(() => {
            changeSlide(1);
        }, 5000);
    }

    function stopAutoSlide() {
        clearInterval(interval);
    }

    function changeSlide(direction) {
        stopAutoSlide();
        currentSlide = (currentSlide + direction + backgrounds.length) % backgrounds.length;
        hero.style.backgroundImage = `url(${backgrounds[currentSlide]})`;
        startAutoSlide();
    }
    
    // Iniciar el carrusel cuando la página se carga
    hero.style.backgroundImage = `url(${backgrounds[0]})`;
    startAutoSlide();
}

// === CÓDIGO PARA LA NAVEGACIÓN ENTRE SECCIONES ===
function showSection(targetSectionId) {
    document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
    const targetLink = document.querySelector(`.nav-link[href="#${targetSectionId}"]`);
    if (targetLink) {
        targetLink.classList.add('active');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const initialSectionId = window.location.hash ? window.location.hash.substring(1) : 'inicio';
    showSection(initialSectionId);
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', (e) => {
            const targetId = e.target.getAttribute('href').substring(1);
            showSection(targetId);
        });
    });
});
// ===========================================

// === CÓDIGO PARA CONTADOR DE CARACTERES DEL FORMULARIO ===
const contactMessageTextarea = document.getElementById('contact-message');
const contactCharCountSpan = document.getElementById('contact-char-count');

if (contactMessageTextarea && contactCharCountSpan) {
    const contactMaxLength = contactMessageTextarea.getAttribute('maxlength');
    contactMessageTextarea.addEventListener('input', () => {
        const currentLength = contactMessageTextarea.value.length;
        contactCharCountSpan.textContent = `${currentLength} / ${contactMaxLength}`;
    });
}
// ===========================================

// === CÓDIGO PARA EFECTO DE NAVEGACIÓN ON SCROLL ===
const nav = document.getElementById('mainNav');
if (nav) {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) { // El efecto se activa después de 50px de scroll
            nav.classList.add('navbar-scrolled');
        } else {
            nav.classList.remove('navbar-scrolled');
        }
    });
}
// ===========================================