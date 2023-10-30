import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Stripecheckout from "react-stripe-checkout";
import { placeOrder } from "../actions/orderActions";
import Loader from "./Loader";
import Success from "./Success";
import Error from "./Error";

const Checkout = ({ cartItems, totalPrice }) => {
  const orderState = useSelector((state) => state.placeOrderReducer);
  const { loading, success, error } = orderState;
  const dispatch = useDispatch();
  const tokenHandler = (token) => {
    console.log(token);
    dispatch(placeOrder(token, totalPrice));
  };
  return (
    <div>
      {loading && <Loader />}
      {success && <Success success="order successfull" />}
      {error && <Error error="something went wrong" />}
      <Stripecheckout
        token={tokenHandler}
        stripeKey="pk_test_51O4oLwECKGinsMYDFpvieTBfNkWXWTCUZ62ewo8cAEag8f4LctGIcMqestciGHiTJvXBpgcgnhMYjNvQY2lCJb0N00ksEuDIAP"
        amount={totalPrice * 100}
        shippingAddress
      >
        <button
          type="submit"
          disabled={!cartItems.length || totalPrice === 0 ? true : false}
          className="btn btn-primary"
          onClick={() => {
            if (!JSON.parse(localStorage.getItem("currentUser"))) {
              window.location.href = "/login";
            }
          }}
        >
          Checkout
        </button>
      </Stripecheckout>
    </div>
  );
};

export default Checkout;
