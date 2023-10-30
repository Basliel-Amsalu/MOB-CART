import axios from "axios";

export const placeOrder = (token, amount) => (dispatch, getState) => {
  const currentUser = getState().loginUserReducer.currentUser;
  console.log(currentUser);
  const cartItemsPre = getState().addToCartReducer.cartItems;

  const cartItems = cartItemsPre.map((item) => {
    return {
      name: item.name,
      price: item.price,
      quantity: item.quantity,
      _id: item._id,
    };
  });

  console.log(cartItems);

  dispatch({ type: "PLACE_ORDER_REQUEST" });

  axios
    .post("http://localhost:5000/api/orders/placeorder", {
      token,
      amount,
      currentUser,
      cartItems,
    })
    .then((res) => {
      dispatch({ type: "PLACE_ORDER_SUCCESS" });
      console.log(res);
    })
    .catch((err) => {
      dispatch({ type: "PLACE_ORDER_FAILED" });
    });
};

export const getOrderByUserId = () => (dispatch, getState) => {
  const currentUser = getState().loginUserReducer.currentUser.id;
  console.log(currentUser);
  dispatch({ type: "GET_ORDERBYUSERID_REQUEST" });

  axios
    .post("http://localhost:5000/api/orders/getorderbyuserid", { currentUser })
    .then((res) => {
      dispatch({ type: "GET_ORDERBYUSERID_SUCCESS", payload: res.data.orders });
      console.log(res);
    })
    .catch((err) => {
      dispatch({ type: "GET_ORDERBYUSERID_FAILED", payload: err.response });
    });
};
export const getOrderById = (orderid) => (dispatch, getState) => {
  dispatch({ type: "GET_ORDERBYID_REQUEST" });

  axios
    .post("http://localhost:5000/api/orders/getorderbyid", { orderid })
    .then((res) => {
      dispatch({ type: "GET_ORDERBYID_SUCCESS", payload: res.data.order });
      console.log(res);
    })
    .catch((err) => {
      dispatch({ type: "GET_ORDERBYID_FAILED", payload: err.response });
    });
};
export const getOrders = () => (dispatch) => {
  dispatch({ type: "GET_ORDERS_REQUEST" });
  axios
    .get("http://localhost:5000/api/orders/getorders")
    .then((res) => {
      dispatch({ type: "GET_ORDERS_SUCCESS", payload: res.data.orders });
    })
    .catch((err) => {
      dispatch({ type: "GET_ORDERS_FAILURE", payload: err.response });
    });
};
