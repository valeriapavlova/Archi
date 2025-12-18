/* js/index.js */

document.addEventListener('DOMContentLoaded', () => {

    // 1. Seleccionamos los elementos usando los IDs que acabas de poner
    const navToggle = document.getElementById('navToggle');  // El botón hamburguesa
    const navMenu = document.getElementById('menuMobile');  
    const navClose = document.getElementById('nav-close');   // X para cerrar

    // 2. Función para ABRIR
    if (navToggle) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.add('open');
        });
    }

    // 3. Función para CERRAR
    if (navClose) {
        navClose.addEventListener('click', () => {
            navMenu.classList.remove('open');
        });
    }

    // Cerrar al pasar a desktop (>= 769px)
    window.addEventListener('resize', () => {
        const navMenu = document.getElementById('menuMobile');
        if (window.innerWidth >= 769 && navMenu) {
            navMenu.classList.remove('open');
        }
    });
});