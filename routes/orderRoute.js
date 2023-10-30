const express = require("express");
const stripe = require("stripe")(
  "sk_test_51O4oLwECKGinsMYD9HT080c9A9y0sfrwj0sSmfLgXXTpqZzFHMcEqkvj3tPyKiVLa8FdquiYgnIEYaQuJt32rYGp00ToIUf4cC"
); // Replace with your actual Stripe secret key
const router = express.Router();
const { v4: uuidv4 } = require("uuid");
const Order = require("../models/orderModel");

router.use(express.json());

router.post("/placeorder", async (req, res) => {
  const { token, cartItems, currentUser, amount } = req.body;

  try {
    // Create a customer in Stripe
    const customer = await stripe.customers
      .create({
        email: token.email,
        source: token.id,
      })
      .catch((err) => {
        console.log(err);
      });
    // console.log(customer);

    // Create a charge (payment) in Stripe
    const payment = await stripe.charges.create(
      {
        amount: amount * 100, // Amount should be in cents
        currency: "usd",
        customer: customer.id,
        receipt_email: token.email,
        // headers: {
        //   "Idempotency-Key": uuidv4(), // Set the Idempotency-Key header
        // },
      }

      //// Fix the typo "idempotencykey" to "idempotency_key"
    );
    console.log(payment);

    if (payment) {
      try {
        const order = await Order.create({
          userId: currentUser.id,
          name: currentUser.name,
          email: token.email,
          orderedItems: cartItems,
          shippingAddress: {
            address: token.card.address_line1,
            city: token.card.address_city,
            postalCode: token.card.address_zip,
            country: token.card.address_country,
          },
          orderAmount: amount,
          transactionId: payment.source.id,
          isDelivered: false,
        });
        res
          .status(201)
          .json({ message: "Payment successful and order successfull", order });
      } catch (err) {
        res.status(400).json({
          message: "something went wrong",
          err,
        });
      }
    } else {
      res.status(400).json({ message: "Payment failed" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "An error occurred" });
  }
});

router.post("/getorderbyuserid", async (req, res) => {
  try {
    let userId = req.body.currentUser;

    const orders = await Order.find({ userId: userId });

    res.status(200).json({
      message: "success",
      orders,
    });
  } catch (err) {
    return res.status(500).send({ message: "something went wrong", err });
  }
});
router.post("/getorderbyid", async (req, res) => {
  try {
    let orderId = req.body.orderid;

    const order = await Order.findById(orderId);

    res.status(200).json({
      message: "success",
      order,
    });
  } catch (err) {
    return res.status(500).send({ message: "something went wrong", err });
  }
});
router.get("/getorders", async (req, res) => {
  try {
    const orders = await Order.find({});

    res.status(200).json({
      message: "success",
      orders,
    });
  } catch (err) {
    return res.status(500).send({ message: "something went wrong", err });
  }
});

module.exports = router;
