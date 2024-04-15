document.addEventListener("DOMContentLoaded", function() {
        const form = document.querySelector('.formcontato__form');

        form.addEventListener('submit', function(event) {
            event.preventDefault(); // Evita que el formulario se envíe automáticamente

            // Validar los campos del formulario
            const nombre = form.querySelector('input[name="nombre"]').value.trim();
            const email = form.querySelector('input[name="email"]').value.trim();
            const asunto = form.querySelector('input[name="asunto"]').value.trim();
            const mensaje = form.querySelector('textarea[name="mensaje"]').value.trim();

            // Validación de campos vacíos
            if (nombre === '' || email === '' || asunto === '' || mensaje === '') {
                alert('Por favor, complete todos los campos.');
                return;
            }

            // Validación de formato de correo electrónico
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                alert('Por favor, introduzca una dirección de correo electrónico válida.');
                return;
            }

          alert("Datos enviados correctamente");

   
   
   
        });
    });

