document.addEventListener('DOMContentLoaded', function () {
    const button = document.querySelector('.loginForm');

    button.addEventListener('click', function (e) {
        e.preventDefault();

        const username = document.getElementById('pierpedro37@gmail.com').value;
        const password = document.getElementById('123456').value;

        // Verificar las credenciales
        if (username === 'pierpedro37@gmail.com' && password === '123456') {
            // Credenciales válidas, redirigir al usuario a la página de bienvenida
            window.location.href = 'bienvenida.html';
        } else {
            alert('Credenciales incorrectas. Por favor, inténtalo de nuevo.');
        }
    });
});