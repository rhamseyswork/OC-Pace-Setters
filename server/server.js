const express = require('express');
const app = express();

// Define a GET route
app.get('/api', (req, res) => {
    res.json({ "users": ["userOne", "userTwo", "userThree"] });
});

// Define the port
const port = process.env.PORT || 3000; // Using port 3000 as default

// Start the server
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
