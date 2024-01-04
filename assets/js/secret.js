// Define the secret key
const a = 1; // Replace with your desired key


// Check if the entered key is correct
if (a === 1) {
    // Redirect to index.html if the key is correct
    window.location.href = 'index1.html';
} else {
    // Redirect to error.html if the key is incorrect
    document.body.innerHTML = '<h1>Incorrect key. Access denied.</h1>';
}
