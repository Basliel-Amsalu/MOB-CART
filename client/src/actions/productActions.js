import axios from "axios";
export const getAllProducts = () => (dispatch) => {
  dispatch({ type: "GET_PRODUCTS_REQUEST" });
  axios
    .get("http://localhost:5000/api/products/getallproducts")
    .then((res) => {
      console.log(res);
      // setProducts(res.data.products);
      dispatch({ type: "GET_PRODUCTS_SUCCESS", payload: res.data.products });
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: "GET_PRODUCTS_FAILED", payload: err });
    });
};
export const getProductById = (productid) => (dispatch) => {
  dispatch({ type: "GET_PRODUCT_REQUEST" });
  console.log("reached");
  axios
    .post("http://localhost:5000/api/products/getproductbyid", { productid })
    .then((res) => {
      console.log(res);
      // setProducts(res.data.products);
      dispatch({ type: "GET_PRODUCT_SUCCESS", payload: res.data.product });
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: "GET_PRODUCT_FAILED", payload: err });
    });
};
export const filterProducts = (searchKey, sortKey, category) => (dispatch) => {
  dispatch({ type: "GET_PRODUCTS_REQUEST" });

  axios
    .get("api/products/getallproducts")
    .then((res) => {
      let filteredProducts = res.data.products;

      if (searchKey) {
        filteredProducts = filteredProducts.filter((product) =>
          // console.log(product.name.toLowerCase().includes(searchKey))
          product.name.toLowerCase().includes(searchKey)
        );
      }

      if (sortKey !== "popular") {
        if (sortKey === "htl") {
          filteredProducts.sort((a, b) => -a.price + b.price);
        }
        if (sortKey === "lth") {
          filteredProducts.sort((a, b) => a.price - b.price);
        }
      }

      if (category !== "All") {
        filteredProducts = filteredProducts.filter((product) =>
          product.category.toLowerCase().includes(category)
        );
      }
      console.log(filteredProducts);
      dispatch({ type: "GET_PRODUCTS_SUCCESS", payload: filteredProducts });
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: "GET_PRODUCTS_FAILED", payload: err });
    });
};

export const addProductReview = (review, productId) => (dispatch, getState) => {
  dispatch({ type: "ADD_REVIEW_REQUEST" });
  const currentUser = getState().loginUserReducer.currentUser;

  axios
    .post("http://localhost:5000/api/products/addreview", {
      review,
      productId,
      currentUser,
    })
    .then((res) => {
      dispatch({ type: "ADD_REVIEW_SUCCESS", payload: res.data.review });
      console.log(res);
      window.location.reload();
    })
    .catch((err) => {
      dispatch({ type: "ADD_REVIEW_FAILURE", payload: err });
    });
};

export const deleteProduct = (productid) => (dispatch, getState) => {
  console.log(productid);
  dispatch({ type: "DELETE_PRODUCT_REQUEST" });
  axios
    .delete(`http://localhost:5000/api/products/deleteproduct/${productid}`)
    .then((res) => {
      console.log(res);
      dispatch({ type: "DELETE_PRODUCT_SUCCESS" });
      alert("deleted successfully");
      window.location.reload();
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: "DELETE_PRODUCT_FAILED" });
    });
};

export const addProduct = (product) => (dispatch) => {
  dispatch({ type: "ADD_PRODUCT_REQUEST" });
  axios
    .post("http://localhost:5000/api/products/addproduct", { product })
    .then((res) => {
      console.log(res);
      // setProducts(res.data.products);
      dispatch({ type: "ADD_PRODUCT_SUCCESS" });
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: "ADD_PRODUCT_FAILED", payload: err });
    });
};

export const updateProduct = (product) => (dispatch) => {
  dispatch({ type: "UPDATE_PRODUCT_REQUEST" });
  axios
    .post("http://localhost:5000/api/products/updateproduct", { product })
    .then((res) => {
      console.log(res);
      // setProducts(res.data.products);
      dispatch({ type: "UPDATE_PRODUCT_SUCCESS" });
      window.location.reload();
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: "UPDATE_PRODUCT_FAILED", payload: err });
    });
};
