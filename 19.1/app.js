const mongoose = require("mongoose");
const express = require("express");
const validator = require("validator");

const app = express();
app.use(express.json());

mongoose.connect("mongodb+srv://<name>:<password>@cluster0.uyefr.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useCreateIndex: true
});

const Product = mongoose.model("Product", {
    name: {
        type: String,
        required: true,
        unique: true,
    },
    category: {
        type: String,
        required: true,
    },
    isActive: { 
        type: Boolean 
    },
    details: {
        description: {
            type: String,
            required: true,
            validate(value) {
                if (value.length < 10) {
                    throw new Error(
                        "Description should be at least 10 letters"
                    );
                }
            },
        },
        price: {
            type: Number,
            required: true,
            validate(value) {
                if (value <= 0) {
                    throw new Error("Price must be a positive number.");
                }
            },
        },
        discount: {
            type: Number,
            default: 0,
        },
        images: {
            type: Array,
            validate(value) {
                if (value.length < 2) {
                    throw new Error(
                        "Product should include at least 2 images."
                    );
                }
            },
        },
        phone: {
            type: String,
            required: true,
            validate(value) {
                if (!validator.isMobilePhone(value, "he-IL")) {
                    throw new Error(
                        "Phone number must be a valid Israeli number."
                    );
                }
            },
        },
        dateAdded: {
            type: Date,
            default: new Date(),
        },
    },
});

//create new product
app.post("/products/add", async(req, res) => {
    const product1 = new Product(req.body);
    try {
        await product1.save();
        res.status(200).send(product1);
    } catch (e) {
        res.status(400).send(e);
    }
});

//Get all products
app.get("/products", async(req, res) => {
    try {
        const products = await Product.find({});
        res.status(200).send(products);
    } catch (e) {
        res.status(400).send(e);
    }
});

//Get a specific product
app.get("/products/id/:id", async(req, res) => {
    const id = req.params.id;
    try {
        const product = await Product.findById(id);
        if (!product) {
            return res.status(404).send(`There is no product with ID "${id}"`);
        }
        res.status(200).send(product);
    } catch (e) {
        res.status(400).send(e);
    }
});

//Get products that are active
app.get("/products/active", async(req, res) => {
    try {
        const products = await Product.find({ isActive: true });
        if (!products) {
            return res.status(400).send("There are no active products");
        }
        res.status(200).send(products);
    } catch (e) {
        res.status(500).send(e);
    }
});

//Get products with a specific price range
app.get("/products/price/:min/:max", async(req, res) => {
    const min = req.params.min;
    const max = req.params.max;
    try {
        const products = await Product.find({
            "details.price": { $gte: min, $lte: max },
        });
        if (!products) {
            res.status(400).send(`There are no products priced between "${min}" and "${max}"`);
        }
        res.status(200).send(products);
    } catch (e) {
        res.status(500).send(e);
    }
});

app.listen(3000, () => {
    console.log("Server is up on port 3000.");
});