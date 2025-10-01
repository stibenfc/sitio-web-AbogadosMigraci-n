// Referencia a la sección de la política para usar en la lógica
const politicaPrivacidad = document.getElementById('politica-privacidad');

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

// === CÓDIGO PARA LA NAVEGACIÓN ENTRE SECCIONES (MODIFICADO Y CORREGIDO) ===
function showSection(targetSectionId) {
    // Si el usuario hace clic en la Política de Privacidad
    if (targetSectionId === 'politica-privacidad') {
        if (politicaPrivacidad) {
            politicaPrivacidad.style.display = 'block';
            document.body.style.overflow = 'hidden'; // Evita que el fondo se mueva al ver la política
            politicaPrivacidad.scrollTop = 0; // Se asegura de que empiece arriba
        }
        return; // No necesitamos desplazar la página ni cambiar la clase activa del menú
    }

    // Si el usuario hace clic en CUALQUIER otra sección (Inicio, Contacto, Servicios, etc.)
    // 1. Oculta la política si estaba visible (ESTO ES LO QUE ARREGLA EL PROBLEMA)
    if (politicaPrivacidad && politicaPrivacidad.style.display !== 'none') {
        politicaPrivacidad.style.display = 'none';
        document.body.style.overflow = ''; // Restaura el scroll del cuerpo
    }

    // 2. Mueve la página a la sección anclada y actualiza el menú activo
    const targetElement = document.getElementById(targetSectionId);
    if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    // Actualiza la clase activa de los enlaces de navegación
    document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
    const targetLink = document.querySelector(`.nav-link[href="#${targetSectionId}"]`);
    if (targetLink) {
        targetLink.classList.add('active');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    // Manejo de clase activa inicial
    const initialSectionId = window.location.hash ? window.location.hash.substring(1) : 'inicio';
    showSection(initialSectionId);
    
    // Event listeners para los enlaces de navegación
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', (e) => {
            // Previene el comportamiento por defecto (que a veces interfiere con el scroll)
            e.preventDefault(); 
            const targetId = e.target.getAttribute('href').substring(1);
            showSection(targetId); // Usa la lógica corregida
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

// === CÓDIGO PARA EFECTO DE NAVEGACIÓN ON SCROLL (CORREGIDO) ===
const nav = document.getElementById('mainNav');
if (nav) {
    window.addEventListener('scroll', () => {
        
        // *******************************************************************
        // Lógica corregida: Eliminamos la instrucción de ocultar la política
        // *******************************************************************
        
        // Efecto de scroll de la barra de navegación (se mantiene)
        if (window.scrollY > 50) { // El efecto se activa después de 50px de scroll
            nav.classList.add('navbar-scrolled');
        } else {
            nav.classList.remove('navbar-scrolled');
        }
    });
}
// ===========================================