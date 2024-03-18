// index.js
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON body
app.use(bodyParser.json());

// Route handler
app.post('/bfhl', (req, res) => {
    try {
        const data = req.body.data;

        // Process the data
        const user_id = "john_doe_17091999";
        const email = "john@xyz.com";
        const roll_number = "ABCD123";
        const odd_numbers = data.filter(item => parseInt(item) % 2 !== 0);
        const even_numbers = data.filter(item => parseInt(item) % 2 === 0);
        const alphabets = data.filter(item => /^[a-zA-Z]+$/.test(item)).map(item => item.toUpperCase());

        // Prepare response
        const response = {
            is_success: true,
            user_id,
            email,
            roll_number,
            odd_numbers,
            even_numbers,
            alphabets
        };

        // Send response
        res.json(response);
    } catch (error) {
        // Handle exceptions gracefully
        console.error(error);
        res.status(500).json({ is_success: false, error: "Internal server error" });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
