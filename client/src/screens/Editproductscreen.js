import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Error from "../components/Error";
import Loader from "../components/Loader";
import Success from "../components/Success";
import { useParams } from "react-router-dom";
import { getProductById, updateProduct } from "../actions/productActions";
// import { updateUser } from "../actions/userActions";
const Editproductscreen = () => {
  const params = useParams();
  console.log(params.id);

  const dispatch = useDispatch();

  const productState = useSelector((state) => state.getProductByIdReducer);
  const { product } = productState;
  console.log(productState);

  const getProductState = useSelector((state) => state.updateProductReducer);
  const { loading, success, error } = getProductState;

  useEffect(() => {
    console.log(params.id);
    dispatch(getProductById(params.id));
  }, [dispatch, params.id]);

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [countInStock, setCountInStock] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [description, setDescription] = useState("");
  const [catagory, setCatagory] = useState("");

  useEffect(() => {
    setName(product?.name);
    setPrice(product?.price);
    setCountInStock(product?.countInStock);
    setImageUrl(product?.image);
    setDescription(product?.description);
    setCatagory(product?.category);
  }, [product]);

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
    const updatedProduct = {
      _id: product._id,
      name,
      price,
      countInStock,
      image: imageUrl,
      description,
      category: catagory,
    };

    dispatch(updateProduct(updatedProduct));
  };

  return (
    <div>
      <div className="row justify-content-center">
        <div className="col-md-8 card p-3">
          <form onSubmit={submitHandler} className="div ">
            <h2 className="text-center m-3">Add Product</h2>
            {error && <Error error="Email address already registerd"></Error>}
            {loading && <Loader />}
            {success && <Success success="registered successfully" />}
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

export default Editproductscreen;
