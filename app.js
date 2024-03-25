document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.querySelector('#login form');

    loginForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const username = loginForm.querySelector('#username').value;
        const password = loginForm.querySelector('#password').value;

        // Here you would typically send a request to your backend to log in
        console.log(`Logging in with username: ${username} and password: ${password}`);

        // For demonstration, we'll just simulate a successful login
        alert('Login successful!');
        // You would typically redirect the user to their account page or update the DOM with their account information
    });
});
