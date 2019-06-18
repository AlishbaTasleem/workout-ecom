const express = require('express');

const app = express();

const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.send("Hi! You are viewing the first page of my back-end design.");
})

app.listen(PORT, () => {
    console.log(`Server is actively running at: ${PORT}`)
});