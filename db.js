const mongoose = require("mongoose");

var mongoDBURL =
  "mongodb+srv://basliel:basliel@cluster0.unuyiud.mongodb.net/mern-ecommerce";

mongoose.connect(mongoDBURL, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});

var dbconnect = mongoose.connection;

dbconnect.on("error", () => {
  console.log("mongo db connection failed");
});
dbconnect.on("connected", () => {
  console.log("mongo db connection successfull");
});

module.exports = mongoose;
