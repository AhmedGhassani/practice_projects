const mongoose = require("mongoose");
const Product = require("./models/products");
const User = require("./models/users");

mongoose
  .connect("mongodb://localhost:27017/inventory", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Mongo: Connection Open");
  })
  .catch((err) => {
    console.log("Mongo: Connection Failed");
    console.log(err);
  });

Product.deleteMany({})
  .then((res) => {
    console.log("Deleted Successfully");
  })
  .catch((e) => {
    console.log(e);
  });

seedData = [
  {
    name: "Apple",
    price: 1.0,
    stock: 200,
    salePrice: null,
  },
  {
    name: "Eggs",
    price: 1.5,
    stock: 300,
    salePrice: null,
  },
  {
    name: "Pears",
    price: 2.0,
    stock: 150,
    salePrice: null,
  },
  {
    name: "Bananas",
    price: 2.5,
    stock: 500,
    salePrice: null,
  },
];

Product.insertMany(seedData)
  .then((res) => {
    console.log("Data Insterted");
  })
  .catch((e) => {
    console.log(e);
  });
