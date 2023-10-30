import React, { useEffect } from "react";
import Product from "../components/Product";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../actions/productActions";
import Loader from "../components/Loader";
import Error from "../components/Error";
import Filter from "../components/Filter";

const Homescreen = () => {
  const getAllProductsState = useSelector(
    (state) => state.getAllProductsReducer
  );

  const { loading, error, products } = getAllProductsState;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);
  return (
    <div>
      <Filter/>
      <div className="row justify-content-center">
        {loading ? (
          <Loader />
        ) : error ? (
          <Error error="something went wrong" />
        ) : (
          products.map((product) => {
            return <Product key={product._id} product={product} />;
          })
        )}
      </div>
    </div>
  );
};

export default Homescreen;
