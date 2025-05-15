// Improved userAuth.js with hashed passwords
const bcrypt = require("bcryptjs");
const users = [];

// Function to register a user
async function registerUser(username, password) {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = { username, password: hashedPassword };
    users.push(user);
    console.log("User registered successfully:", user);
}

// Function to login a user
async function loginUser(username, password) {
    const user = users.find(u => u.username === username);
    if (user && await bcrypt.compare(password, user.password)) {
        console.log("Login successful:", user);
    } else {
        console.log("Invalid username or password.");
    }
}

// Example usage (for testing)
(async () => {
    await registerUser("john_doe", "password123");
    await loginUser("john_doe", "password123");
})();
