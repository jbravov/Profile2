<script>
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

            // Si todas las validaciones pasan, puedes enviar el formulario
            // Aquí puedes agregar el código para enviar el formulario, por ejemplo, usando AJAX

            // Ejemplo:
            /*
            fetch('URL_para_enviar_formulario', {
                method: 'POST',
                body: new FormData(form)
            })
            .then(response => {
                if (response.ok) {
                    alert('Mensaje enviado correctamente.');
                    form.reset(); // Limpiar el formulario después del envío exitoso
                } else {
                    throw new Error('Error al enviar el formulario.');
                }
            })
            .catch(error => {
                console.error('Error:', error);
                alert('Hubo un error al enviar el formulario. Por favor, inténtelo de nuevo más tarde.');
            });
            */
        });
    });
</script>
