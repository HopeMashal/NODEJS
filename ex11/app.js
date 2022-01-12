const express = require("express");
const app = express();

const numbersArray = [1, 2, 3, 4, 5, 6];

app.use(express.json());

app.get("/", (req, res) => {
    res.send("The little express CRUD (Numbers) exercise");
});

app.get("/numbers", (req, res) => {
    res.send(numbersArray);
});

app.post("/numbers", (req, res) => {
  const { number } = req.body;
  if (numbersArray.includes(number)) {
    return res.status(400).send('Number already exists');
  }
  numbersArray.push(number);
  res.send(numbersArray);
});

app.delete("/numbers/:number", (req, res) => {
  const number = Number(req.params.number);
  if (!numbersArray.includes(number)) {
    return res.status(400).send('Number does not exist');
  }
  const index = numbersArray.indexOf(number);
  numbersArray.splice(index, 1);
  res.send(numbersArray);
});

app.put("/numbers/:number", (req, res) => {
  const number = Number(req.params.number);
  const newNumber = Number(req.body.number);
  if (!numbersArray.includes(number)) {
    return res.status(400).send('Number does not exist');
  }
  const index = numbersArray.indexOf(number);
  numbersArray.splice(index, 1, newNumber);
  res.send(numbersArray);
});

app.listen(3000, () => {
    console.log(`Server is up on port 3000`);
});