// Check if user already has an account
if (localStorage.getItem('username')) {
    // If user exists, greet them
    document.getElementById('signup-form').style.display = 'none';
    document.getElementById('welcome-message').style.display = 'block';
    document.getElementById('user-name').innerText = localStorage.getItem('username');
}

// Handle Signup Form Submission
document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent page reload
    const username = document.getElementById('username').value;

    // Save username to localStorage
    localStorage.setItem('username', username);

    // Update the UI
    document.getElementById('signup-form').style.display = 'none';
    document.getElementById('welcome-message').style.display = 'block';
    document.getElementById('user-name').innerText = username;
});
