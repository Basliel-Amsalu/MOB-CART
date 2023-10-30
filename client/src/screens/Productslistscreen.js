import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Loader from "../components/Loader";
import Error from "../components/Error";
import { deleteProduct, getAllProducts } from "../actions/productActions";
const Productslistscreen = () => {
  const getAllProductsState = useSelector(
    (state) => state.getAllProductsReducer
  );

  const dispatch = useDispatch();

  const { loading, products, error } = getAllProductsState;
  console.log(products);
  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);
  return (
    <div>
      <h2> Products List</h2>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Stock</th>
            <th>ID</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {loading && <Loader />}
          {error && <Error error="something went wrong" />}
          {products &&
            products.map((product) => (
              <tr>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>{product.countInStock}</td>
                <td>{product._id}</td>
                <td>
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
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default Productslistscreen;
