import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOrderByUserId } from "../actions/orderActions";
import Loader from "../components/Loader";
import Error from "../components/Error";

const Orderscreen = () => {
  const dispatch = useDispatch();
  const orderState = useSelector((state) => state.getOrderByUserIdReducer);

  const { loading, orders, error } = orderState;

  useEffect(() => {
    const currentUser = localStorage.getItem("currentUser");
    if (currentUser) {
      dispatch(getOrderByUserId());
    } else {
      window.location.href = "/login";
    }
  }, [dispatch]);
  return (
    <div>
      <div className="row justify-content-center mt-5">
        <div className="col-md-8">
          <h2>MY ORDERS</h2>
          <table className="table table-striped">
            <thead>
              <tr>
                <th scope="col">Order ID</th>
                <th scope="col">Amount</th>
                <th scope="col">Date</th>
                <th scope="col">Transation ID</th>
                <th scope="col">status</th>
              </tr>
            </thead>
            <tbody>
              {loading && <Loader />}
              {orders &&
                orders.map((order) => (
                  <tr
                    onClick={() => {
                      window.location.href = `/orderinfo/${order._id}`;
                    }}
                  >
                    <td>{order._id}</td>
                    <td>{order.orderAmount}</td>
                    <td>{order.createdAt}</td>
                    <td>{order.transactionId}</td>
                    <td>
                      {order.isDelivered ? (
                        <li>delivered</li>
                      ) : (
                        <li>order placed</li>
                      )}
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
          {error && <Error error={error} />}
        </div>
      </div>
    </div>
  );
};

export default Orderscreen;
