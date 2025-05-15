// userAuth.js
const users = [];

// Function to register a user
function registerUser(username, password) {
    const user = { username, password };
    users.push(user);
    console.log("User registered successfully:", user);
}

// Function to login a user
function loginUser(username, password) {
    const user = users.find(u => u.username === username && u.password === password);
    if (user) {
        console.log("Login successful:", user);
    } else {
        console.log("Invalid username or password.");
    }
}

// Example usage
registerUser("john_doe", "password123");
loginUser("john_doe", "password123");
