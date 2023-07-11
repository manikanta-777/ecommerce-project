const express = require("express");
const app = express();

const errorMiddleware = require("./middleware/error");

app.use(express.json());

//route imports
const product = require("./routes/productRoute");

const cartProduct = require("./routes/cartRoute");

app.use("/api/v1", product);

app.use("/api/v1", cartProduct);

//middlerware for error
app.use(errorMiddleware);

module.exports = app;
