// Define the secret key
const secretKey = 'yes'; // Replace with your desired key

// Use prompt to get user input
const enteredKey = prompt('Are you Human:');

// Check if the entered key is correct
if (enteredKey === secretKey) {
    // Redirect to index.html if the key is correct
    window.location.href = 'index1.html';
} else {
    // Redirect to error.html if the key is incorrect
    document.body.innerHTML = '<h1>Incorrect key. Access denied.</h1>';
}