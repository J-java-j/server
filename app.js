function showRegistration() {
    document.getElementById('login-section').style.display = 'none';
    document.getElementById('registration-section').style.display = 'block';
}

function showLogin() {
    document.getElementById('registration-section').style.display = 'none';
    document.getElementById('login-section').style.display = 'block';
}

function register() {
    // Placeholder for actual registration logic
    const username = document.getElementById('register-username').value;
    const password = document.getElementById('register-password').value;
    console.log(`Registering user: ${username}`); // For demonstration purposes
    alert('Registration successful! Please login.'); // Simulate successful registration
    showLogin();
}

function login() {
    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;

    if (username === "user" && password === "pass") { // Example credentials
        document.getElementById('login-section').style.display = 'none';
        document.getElementById('account-section').style.display = 'block';
        document.getElementById('display-username').innerText = username;
        document.getElementById('balance').innerText = '$0.00';
    } else {
        alert('Invalid username or password');
    }
}

function logout() {
    document.getElementById('account-section').style.display = 'none';
    document.getElementById('login-section').style.display = 'block';
}
