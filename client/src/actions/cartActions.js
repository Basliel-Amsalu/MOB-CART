export const addToCart = (product, quantity) => (dispatch, getState) => {
  const cartItem = {
    _id: product._id,
    name: product.name,
    price: product.price,
    countInStock: product.countInStock,
    quantity: quantity,
  };
  console.log(cartItem);

  dispatch({ type: "ADD_TO_CART", payload: cartItem });

  localStorage.setItem(
    "cartItems",
    JSON.stringify(getState().addToCartReducer.cartItems)
  );
};

export const deleteFromCart = (product) => (dispatch, getState) => {
  dispatch({ type: "DELETE_FROM_CART", payload: product._id });

  localStorage.setItem(
    "cartItems",
    JSON.stringify(getState().addToCartReducer.cartItems)
  );
};
