const mongoose = require("mongoose");

const orderSchema = mongoose.Schema(
  {
    userId: {
      type: String,
      require,
    },
    name: {
      type: String,
      require,
    },
    email: {
      type: String,
      require,
    },
    orderedItems: [
      {
        name: { type: String, require },
        quantity: { type: Number, require },
        _id: { type: String, require },
        price: { type: Number, require },
      },
    ],
    shippingAddress: {
      address: { type: String, require },
      city: { type: String, require },
      postalCode: { type: Number, require },
      country: { type: String, require },
    },
    orderAmount: { type: Number, require },
    transactionId: { type: String, require },
    isDelivered: { type: Boolean, require },
  },
  {
    timestamps: {
      createdAt: "createdAt",
      updatedAt: "updatedAt",
    },
  }
);

const Order = mongoose.model("orders", orderSchema);

module.exports = Order;
