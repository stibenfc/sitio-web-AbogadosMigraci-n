// === CÓDIGO PARA EFECTO DE NAVEGACIÓN ON SCROLL ===
const nav = document.getElementById('mainNav');
if (nav) {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            nav.classList.add('navbar-scrolled');
        } else {
            nav.classList.remove('navbar-scrolled');
        }
    });
}
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

// === CÓDIGO PARA LIGHTBOX DE IMÁGENES ===
const servicioImgs = document.querySelectorAll('.servicio-img');
const lightboxOverlay = document.getElementById('lightboxOverlay');
const lightboxImg = document.getElementById('lightboxImg');
const lightboxClose = document.getElementById('lightboxClose');

servicioImgs.forEach(img => {
    img.addEventListener('click', function() {
        const fullSrc = this.getAttribute('data-fullsrc');
        if (fullSrc) {
            lightboxImg.src = fullSrc;
            lightboxImg.alt = this.alt;
            lightboxOverlay.classList.add('active');
        }
    });
});

lightboxClose.addEventListener('click', () => {
    lightboxOverlay.classList.remove('active');
});

lightboxOverlay.addEventListener('click', function(e) {
    if (e.target === this || e.target === lightboxClose) {
        lightboxOverlay.classList.remove('active');
    }
});
// ===========================================