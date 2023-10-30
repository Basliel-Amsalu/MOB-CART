import React, { useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import Error from "../components/Error";
import Loader from "../components/Loader";
import Success from "../components/Success";
import { addProduct } from "../actions/productActions";
const Addproductscreen = () => {
  const dispatch = useDispatch();
  const addProductReducerState = useSelector(
    (state) => state.addProductReducer
  );
  const { success, loading, error } = addProductReducerState;
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [countInStock, setCountInStock] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [description, setDescription] = useState("");
  const [catagory, setCatagory] = useState("");

  const nameChangeHandler = (e) => {
    setName(e.target.value);
  };
  const priceChangeHandler = (e) => {
    setPrice(e.target.value);
  };
  const countInStockChangeHandler = (e) => {
    setCountInStock(e.target.value);
  };
  const imageChangeHandler = (e) => {
    setImageUrl(e.target.value);
  };
  const descriptionChangeHandler = (e) => {
    setDescription(e.target.value);
  };
  const catagoryChangeHandler = (e) => {
    setCatagory(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const product = {
      name,
      price,
      countInStock,
      image: imageUrl,
      description,
      category: catagory,
    };

    dispatch(addProduct(product));
  };

  return (
    <div>
      <div className="row justify-content-center">
        <div className="col-md-8 card p-3">
          <form onSubmit={submitHandler} className="div ">
            <h2 className="text-center m-3">Add Product</h2>
            {error && <Error error="something went wrong"></Error>}
            {loading && <Loader />}
            {success && <Success success="product added successfully" />}
            <input
              value={name}
              placeholder="name"
              className="form-control mb-2 mr-sm-2"
              required
              onChange={nameChangeHandler}
              type="text"
            />
            <input
              value={price}
              placeholder="price"
              required
              className="form-control mb-2 mr-sm-2"
              onChange={priceChangeHandler}
              type="text"
            />
            <input
              value={countInStock}
              placeholder="count in stock"
              required
              className="form-control mb-2 mr-sm-2"
              onChange={countInStockChangeHandler}
              type="text"
            />
            <input
              value={imageUrl}
              placeholder="Image Url"
              required
              className="form-control mb-2 mr-sm-2"
              onChange={imageChangeHandler}
              type="text"
            />
            <input
              value={description}
              placeholder="Description"
              required
              className="form-control mb-2 mr-sm-2"
              onChange={descriptionChangeHandler}
              type="text"
            />
            <input
              value={catagory}
              placeholder="catagory"
              required
              className="form-control mb-2 mr-sm-2"
              onChange={catagoryChangeHandler}
              type="text"
            />
            <button className="btn mt-3 btn-dark" type="submit">
              ADD PRODUCT
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Addproductscreen;
