const mongoose = require("mongoose");
const validator = require("validator");

mongoose.connect("mongodb+srv://<name>:<password>@cluster0.uyefr.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useCreateIndex: true
});

const Product = mongoose.model("Products", {
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

const product1 = new Product({
    name: "Paint Brushes",
    category: "Arts & Crafts",
    isActive: true,
    details: {
        description: "BOSOBO Paint Brushes Set, 2 Pack 20 Pcs Round Pointed Tip Paintbrushes Nylon Hair Artist Acrylic Paint Brushes for Acrylic Oil Watercolor, Face Nail Art, Miniature Detailing and Rock Painting, Blue",
        price: 20,
        discount: 2,
        images: [
            "https://m.media-amazon.com/images/I/81ON4-sLO0L._AC_SL1500_.jpg",
            "https://m.media-amazon.com/images/I/81TR2fj-dqL._AC_SL1500_.jpg",
        ],
        phone: "+972523658067",
        dateAdded: new Date(),
    },
});
product1.save().then(() => {
  console.log(product1)
}).catch((error) => {
  console.log(error)
});

const product2 = new Product({
    name: "Wyze Cam",
    category: "Camera & Photo",
    isActive: true,
    details: {
        description: "Wyze Cam v3 with Color Night Vision, Wired 1080p HD Indoor/Outdoor Video Camera, 2-Way Audio, Works with Alexa, Google Assistant, and IFTTT",
        price: 1550,
        images: [
            "https://m.media-amazon.com/images/I/61Jqml2u9qL._AC_SL1500_.jpg",
            "https://m.media-amazon.com/images/I/813X9tN8JGL._AC_SL1500_.jpg",
        ],
        phone: "+972538218499",
    },
});
product2.save().then(() => {
  console.log(product2)
}).catch((error) => {
  console.log(error)
});

const product3 = new Product({
    name: "Apple Pencil",
    category: "Computer Accessories & Peripherals",
    isActive: true,
    details: {
        description: "Apple Pencil (2nd Generation)",
        price: 259,
        images: [
            "https://m.media-amazon.com/images/I/41S3MKU9TjL._AC_SL1024_.jpg",
            "https://m.media-amazon.com/images/I/21l795GXZkL._AC_SL1024_.jpg",
        ],
        phone: "+972537151349",
        dateAdded: new Date(),
    },
});
product3.save().then(() => {
  console.log(product3)
}).catch((error) => {
  console.log(error)
});