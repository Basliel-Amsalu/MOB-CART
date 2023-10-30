import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getOrderById } from "../actions/orderActions";
import Loader from "../components/Loader";
import Error from "../components/Error";

const Orderinfoscreen = () => {
  const getOrderState = useSelector((state) => state.getOrderByIdReducer);
  const dispatch = useDispatch();
  const params = useParams();

  const { loading, error, order } = getOrderState;

  useEffect(() => {
    dispatch(getOrderById(params.orderid));
  }, [dispatch, params.orderid]);

  return (
    <div>
      {loading && <Loader />}
      {error && <Error error="something went wrong" />}
      {order && (
        <div>
          <div className="row justify-content-center">
            <div className="col-md-5 card m-5 p-3">
              <h2>Items In Your Order</h2>
              <hr />
              {order.orderedItems.map((item) => (
                <div>
                  <h1>{item.name}</h1>
                  <h1>
                    Quantity : <b>{item.quantity}</b>
                  </h1>
                  <h1>
                    Price:{" "}
                    <b>
                      {item.quantity} * {item.price} ={" "}
                      {item.quantity * item.price}
                    </b>
                  </h1>
                  <hr />
                </div>
              ))}
            </div>
            <div className="col-md-5 card m-5 p-3 text-right">
              <h2>Order Details</h2>
              <hr />
              <h3>Order Id: {order._id}</h3>
              <h3>Total Amount: {order.orderAmount}</h3>
              <h3> Date of order: {order.createdAt}</h3>
              <h3>Transaction ID: {order.transactionId}</h3>

              {order.isDelivered ? (
                <h3>Order Delivered</h3>
              ) : (
                <h3>Order placed</h3>
              )}
            </div>
            <hr />
            <div className="col-md-5 card m-5 p-3 text-right">
              <h2>Shipping Details</h2>
              <hr />
              <h3>
                {" "}
                Address : <b>{order.shippingAddress.address}</b>
              </h3>
              <h3>
                {" "}
                City : <b>{order.shippingAddress.city}</b>
              </h3>
              <h3>
                {" "}
                Postal Code : <b>{order.shippingAddress.postalCode}</b>
              </h3>
              <h3>
                {" "}
                Country : <b>{order.shippingAddress.country}</b>
              </h3>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Orderinfoscreen;
