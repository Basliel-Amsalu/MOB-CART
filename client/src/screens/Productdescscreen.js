import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getProductById } from "../actions/productActions";
import { addToCart } from "../actions/cartActions";
import Loader from "../components/Loader";
import Error from "../components/Error";
import Review from "../components/Review";

const Productdescscreen = () => {
  const params = useParams();
  console.log(params, "this is oarasm");
  const productid = params.id;
  console.log(productid);
  const getProductByIdState = useSelector(
    (state) => state.getProductByIdReducer
  );
  console.log(getProductByIdState);

  const { product, loading, error } = getProductByIdState;
  console.log(product);
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    console.log(productid);
    dispatch(getProductById(productid));
  }, [dispatch, productid]);

  const addToCartHandler = () => {
    dispatch(addToCart(product, quantity));
  };
  return (
    <div>
      {loading ? (
        <Loader />
      ) : error ? (
        <Error error="something went wrong" />
      ) : (
        <div className="row">
          <div className="col-md-6">
            <div className="card p-2 m-2">
              <h1>{product?.name}</h1>
              <img
                src={product?.image}
                alt={product?.name}
                className="img-fluid m-3 bigimg"
              />
              <p>{product?.description}</p>
            </div>
          </div>
          <div className="col-md-6 text-start">
            <div className="m-2">
              <h1>Price: {product?.price}</h1>
              <hr />

              <h1>Select Quantity</h1>
              <select
                value={quantity}
                onChange={(e) => {
                  setQuantity(e.target.value);
                }}
              >
                {[...Array(product?.countInStock).keys()].map((x, i) => {
                  return <option value={i + 1}>{i + 1}</option>;
                })}
              </select>
              <hr />
              <button className="btn btn-dark" onClick={addToCartHandler}>
                ADD TO CART
              </button>
            </div>
            <hr />
            <Review product={product} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Productdescscreen;
