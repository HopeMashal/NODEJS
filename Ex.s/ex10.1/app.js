const express = require("express");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.send("The express routes exercise");
});

app.get("/numbers", (req, res) => {
    res.send("Success using GET Method");
});

app.post("/numbers", (req, res) => {
    console.log(req);
    res.send("Success using POST Method");
});

app.put("/numbers", (req, res) => {
    console.log(req);
    res.send("Success using PUT Method");
});

app.delete("/numbers", (req, res) => {
    console.log(req);
    res.send("Success using Delete Method");
});

app.listen(3000, () => {
    console.log(`Server is up on port 3000`);
});