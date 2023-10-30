const express = require("express");
const router = express.Router();
const Product = require("../models/productModel");

router.get("/getallproducts", async (req, res) => {
  try {
    const products = await Product.find();
    if (!products) return res.status(404).send({ message: "No product found" });
    res.status(200).send({
      message: "success",
      products,
    });
  } catch (err) {
    res.status(400).send({
      message: "something went wrong",
    });
  }
});
router.post("/getproductbyid", async (req, res) => {
  try {
    const product = await Product.findById(req.body.productid);
    if (!product) return res.status(404).send({ message: "No product found" });
    res.status(200).send({
      message: "success",
      product,
    });
  } catch (err) {
    res.status(400).send({
      message: "something went wrong",
    });
  }
});
router.post("/addreview", async (req, res) => {
  console.log("reached");
  const { review, productId, currentUser } = req.body;
  try {
    const product = await Product.findById(productId);
    if (!product) return res.status(404).send({ message: "No product found" });

    const reviewModel = {
      name: currentUser.name,
      userid: currentUser.id,
      rating: review.rating,
      comment: review.comment,
    };

    product.reviews.push(reviewModel);
    const totalRatings = product.reviews.reduce(
      (acc, review) => acc + review.rating,
      0
    );
    const newRating = totalRatings / product.reviews.length;

    // Update the product's rating
    product.rating = newRating;
    await product.save();
    res.status(200).send({
      message: "success",
      product,
    });
  } catch (err) {
    res.status(400).send({
      message: "something went wrong",
    });
  }
});

router.delete("/deleteproduct/:productid", async (req, res) => {
  try {
    const { productid } = req.params;
    console.log(productid);
    const product = await Product.findByIdAndDelete(productid);
    res.status(204).json({
      message: "success",
      data: user,
    });
  } catch (err) {
    res.status(400).json({
      message: "something went wrong",
      err,
    });
  }
});

router.post("/addproduct", async (req, res) => {
  try {
    const product = await Product.create(req.body.product);
    console.log(product);
    res.status(201).send({
      // Use status 201 for successful resource creation
      message: "Success",
      product,
    });
  } catch (err) {
    console.error(err); // Log the error for debugging
    res.status(400).send({
      message: "Something went wrong",
    });
  }
});

router.post("/updateproduct", async (req, res) => {
  console.log(req.body, "here");
  try {
    const product = await Product.findByIdAndUpdate(
      req.body.product._id,
      req.body.product,
      { new: true }
    );
    console.log(product, "im product");
    res.status(200).send({
      // Use status 201 for successful resource creation
      message: "Success",
      product,
    });
  } catch (err) {
    console.error(err); // Log the error for debugging
    res.status(400).send({
      message: "Something went wrong",
    });
  }
});

module.exports = router;
