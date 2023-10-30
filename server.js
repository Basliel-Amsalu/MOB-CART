const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();

const dbconnection = require("./db");
const productsRoute = require("./routes/productRoute");
const userRoute = require("./routes/userRoute");
const orderRoute = require("./routes/orderRoute");
const path = require("path");
// app.use(bodyParser.json());
app.use(express.json());
app.use(cors());
app.use("/api/products/", productsRoute);
app.use("/api/users/", userRoute);
app.use("/api/orders/", orderRoute);

if (process.env.NODE_ENV === "production") {
  app.use("/", express.static("client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client/build/index.html"));
  });
}
const port = process.env.PORT || 5000;
app.listen(port, () => console.log("node server started"));
