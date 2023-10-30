import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { Link } from "react-router-dom";
import Loader from "../components/Loader";
import Error from "../components/Error";
// import { deleteProduct, getAllProducts } from "../actions/productActions";
import { getOrders } from "../actions/orderActions";

const Orderslistscree = () => {
  const getOrdersState = useSelector((state) => state.getOrdersReducer);

  const dispatch = useDispatch();

  const { loading, orders, error } = getOrdersState;
  console.log(orders);
  useEffect(() => {
    dispatch(getOrders());
  }, [dispatch]);
  return (
    <div>
      <h2> Orders List</h2>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Email</th>
            <th>User ID</th>
            <th>Amount</th>
            <th>Date</th>
            <th>Transaction ID</th>
          </tr>
        </thead>
        <tbody>
          {loading && <Loader />}
          {error && <Error error="something went wrong" />}
          {orders &&
            orders.map((order) => (
              <tr>
                <td>{order._id}</td>
                <td>{order.email}</td>
                <td>{order.userId}</td>
                <td>{order.orderAmount}</td>
                <td>{order.createdAt}</td>
                <td>{order.transactionId}</td>
                {/* <td>
                  <i
                    onClick={() => {
                      dispatch(deleteProduct(product._id));
                    }}
                    className="far fa-trash-alt"
                  ></i>
                  <Link to={`/admin/editproduct/${product._id}`}>
                    <i
                      // onClick={() => {
                      //   dispatch(deleteProduct(product._id));
                      // }}
                      className="fas fa-edit"
                    ></i>
                  </Link>
                </td> */}
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default Orderslistscree;
