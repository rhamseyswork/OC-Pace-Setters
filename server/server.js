const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();

// cors middleware
const cors = require('cors');
// CORS configuration
app.use(cors({
    origin: 'http://localhost:5173' // Client's URL
}));

// MongoDB connection - using a version of the MongoDB driver where these options are no longer necessary
// mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
//     .then(() => console.log('Connected to MongoDB'))
//     .catch(err => console.error('Could not connect to MongoDB', err));

// Define a GET route
app.get('/api', (req, res) => {
    res.json({ "Nav": ["Rhamseys", "Garcia", "©2023 FullStack"] });
});

// Define the port
const port = process.env.PORT || 3000; // Using port 3000 as default

// Start the server
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
