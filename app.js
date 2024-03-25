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
        function login() {
    // Placeholder for actual login validation
    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;

    if (username === "user" && password === "pass") { // Example credentials
        document.getElementById('login-section').style.display = 'none';
        document.getElementById('account-section').style.display = 'block';
        document.getElementById('display-username').innerText = username; // Display the username
        document.getElementById('balance').innerText = '$0.00'; // Set initial balance
    } else {
        alert('Invalid username or password');
    }
}

function logout() {
    document.getElementById('login-section').style.display = 'block';
    document.getElementById('account-section').style.display = 'none';
}

    });
});
