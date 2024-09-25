// server.js
const express = require('express');
const axios = require('axios');
const app = express();
const port = 3000;

// Route to fetch cards from Scryfall
app.get('/cards/:name', async (req, res) => {
    const cardName = req.params.name;
    try {
        const response = await axios.get(`https://api.scryfall.com/cards/named?fuzzy=${cardName}`);
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: "Error fetching card data" });
    }
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
