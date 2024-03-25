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
    document.getElementById('login-section').style.display = 'block';
    document.getElementById('account-section').style.display = 'none';
}
