/* Efecto de scroll -->
    <!-- Script para habilitar el efecto de scroll -->
    <!-- Se debe incluir data-scroll antes de cada href en el navbar o enlace y asociar destino 
    href como #id, donde id es el id q asignemos a una sección como id:'nosotros' */

function
        var scroll = new SmoothScroll('a[href*="#"]', {
          // Function. Custom easing pattern
          // If this is set to anything other than null, will override the easing option above
          customEasing: function (time) {

            // return <your formulate with time as a multiplier>

            // Example: easeInOut Quad
            return time < 0.5 ? 2 * time * time : -1 + (4 - 2 * time) * time;

          }
        });

    wind