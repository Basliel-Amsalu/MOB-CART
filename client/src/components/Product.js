import React from "react";
import { Link } from "react-router-dom";
import ReactStars from "react-rating-stars-component";

const Product = ({ product }) => {
  return (
    <div className="col-md-3 m-3 card p-2 text-start" key={product._id}>
      <Link to={`product/${product._id}`}>
        <img src={product.image} className="img-fluid" alt={product.name} />
        <h1>{product.name}</h1>
        <ReactStars
          count={5}
          // onChange={ratingChanged}
          value={product.rating}
          edit={false}
          size={24}
          isHalf={true}
          emptyIcon={<i className="far fa-star"></i>}
          halfIcon={<i className="fa fa-star-half-alt"></i>}
          fullIcon={<i className="fa fa-star"></i>}
          activeColor="#ffd700"
        />

        <h1>Price : {product.price}</h1>
      </Link>
    </div>
  );
};

export default Product;
