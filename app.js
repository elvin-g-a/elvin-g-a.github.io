// =================================================================
// 1. DICCIONARIO DE CONTENIDOS (Edita el texto e imágenes aquí)
// =================================================================
const routes = {
    inicio: `
        <h1>¡Bienvenido!</h1>
        <p>Este es el portfolio de Elvin G. Andrades. ¡Disfruta de mi trabajo y que tengas un día excelente!</p>
        <img src="assets/inicio.png" alt="cartoon of Elvin G. Andrades">
    `,
    bio: `
        <h1>Biografía</h1>
        <p>Elvin G. Andrades es un diseñador con talento excepcional en las artes digitales y una pasión tremenda para completar. Él especializa en el diseño de personajes, texturas y UV para modelos 3D, y diseños gráficos tales como logos e interfaces de usuario (UI). Recientemente, el artista fue ingresado en la compañía de Spatialgineers en el rango de Initiate después de haber completado los SGX Trials, su programa interno con el propósito de entrenar reclutas nuevos.</p>
    `,
    showcase: `
        <h1>Showcase</h1>
        <div class="showcase-grid">
            <figure>
                <img src="showcase/ale studio logo final.png" alt="ALE Studio Logo">
                <figcaption>Diseño de Logo - ALE Studio</figcaption>
            </figure>
            <figure>
                <img src="showcase/SGX Trials Mazescape.png" alt="Textures and UI - Mazescape">
                <figcaption>Texturas y UI - Mazescape</figcaption>
            </figure>
            <figure>
                <img src="showcase/Elvin Andrades Character Design.jpg" alt="Character Design - Clara the Blob Girl">
                <figcaption>Diseño de Personaje - Clara the Blob Girl</figcaption>
            </figure>
            <figure>
                <img src="showcase/Portfolio - Ashley.png" alt="Character Design - Ashley">
                <figcaption>Diseño de Personaje - Mechanic Ashley</figcaption>
            </figure>
        </div>
    `
};

// =================================================================
// 2. LÓGICA DE NAVEGACIÓN Y ROUTER (No modificar a menos que cambies la arquitectura)
// =================================================================
const mainContainer = document.getElementById('app-content');
const navButtons = document.querySelectorAll('.nav-btn');

/**
 * Función para cargar la vista seleccionada e inyectarla en el HTML
 */
function navigateTo(routeKey) {
    // 1. Remover la animación para poder reiniciarla
    mainContainer.classList.remove('fade-in');
    
    // 2. Inyectar el HTML correspondiente desde la variable 'routes'
    mainContainer.innerHTML = routes[routeKey] || '<h1>404</h1><p>Página no encontrada.</p>';

    // 3. Forzar al navegador a recalcular el estilo (Reflow) para reiniciar la animación
    void mainContainer.offsetWidth;

    // 4. Aplicar de nuevo la clase de animación 0.3s
    mainContainer.classList.add('fade-in');

    // 5. Actualizar el estado del botón activo
    navButtons.forEach(btn => {
        if (btn.dataset.route === routeKey) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
}

// Escuchador de eventos para los botones del menú
navButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        const selectedRoute = e.target.dataset.route;
        navigateTo(selectedRoute);
    });
});

// Cargar la pantalla de Inicio por defecto al abrir la SPA
document.addEventListener('DOMContentLoaded', () => {
    navigateTo('inicio');
});