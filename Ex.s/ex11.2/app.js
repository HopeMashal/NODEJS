const path = require("path");
const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();

app.use(express.json());

// Define paths for Express config
const publicDirectoryPath = path.join(__dirname, "react/build");

// Setup static directory to serve
app.use(express.static(publicDirectoryPath));

app.use(cors());

app.get("/weather/:address", async (req, res) => {
    if (!req.params.address) {
        return res.send({
            error: "You must provide an address!",
        });
    }

    const data = await axios.get(
        `http://api.weatherstack.com/current?access_key=85c9a381d8b84c9c4665a53feed47aca&query=${req.params.address}`
    );
    const response =
        data.data.current.weather_descriptions[0] +
        ". It is currently " +
        data.data.current.temperature +
        " degress out.";
    res.send(response);
});

app.listen(3001, () => {
    console.log("Server is up on port 3001.");
});