// app.js

document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form');
    const registerForm = document.getElementById('register-form');

    loginForm.addEventListener('submit', (event) => {
        event.preventDefault();
        // Get form data
        const username = loginForm.querySelector('#login-username').value;
        const password = loginForm.querySelector('#login-password').value;
        // Send login request to backend (placeholder)
        console.log(`Logging in with username: ${username} and password: ${password}`);
        // Redirect to account page or show error (placeholder)
    });

    registerForm.addEventListener('submit', (event) => {
        event.preventDefault();
        // Get form data
        const username = registerForm.querySelector('#register-username').value;
        const password = registerForm.querySelector('#register-password').value;
        // Send registration request to backend (placeholder)
        console.log(`Registering with username: ${username} and password: ${password}`);
        // Redirect to login page or show error (placeholder)
    });
});
