// Variable global para controlar si la animación ya se ejecutó
var counter = 0;

// Escucha el evento DOMContentLoaded para ejecutar el código cuando el DOM esté completamente cargado
window.addEventListener("DOMContentLoaded", move = () => {
    // Verifica si la animación ya se ejecutó
    if (counter == 0) {
        // Variable global innecesaria (j) declarada pero no utilizada
        j = 1;

        // Selecciona el elemento con la clase "progress-done" (la barra de progreso)
        var elem = document.querySelector(".progress-done");

        // Inicializa el ancho de la barra de progreso en 50%
        var width = 50;

        // Inicia un intervalo que ejecuta la función frame cada 50 milisegundos
        var main = setInterval(frame, 50);

        // Función que controla el incremento del ancho de la barra de progreso
        function frame() {
            // Si el ancho alcanza o supera el 97%, detiene el intervalo
            if (width >= 97) {
                clearInterval(main);
            } else {
                // Incrementa el ancho de la barra
                width++;

                // Actualiza el estilo de ancho de la barra de progreso
                elem.style.width = width + "%";

                // Actualiza el contenido de texto dentro de la barra de progreso
                elem.innerHTML = width + "%";
            }
        }
    }
});