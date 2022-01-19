const express = require("express");
const productRouter=require('./router');

const app = express();
app.use(express.json());
app.use(productRouter);

app.listen(3000, () => {
    console.log("Server is up on port 3000.");
});