import React, { useState } from "react";
import ReactStars from "react-rating-stars-component";
import { useDispatch } from "react-redux";
import { addProductReview } from "../actions/productActions";

const Review = ({ product }) => {
  console.log(product);
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState("");
  const dispatch = useDispatch();
  const submitReview = () => {
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    if (!currentUser) {
      window.location.href = "/login";
    } else {
      let alreadyReviewed = product?.reviews.some(
        (review) => review.userid === currentUser.id
      );

      if (alreadyReviewed) {
        alert("you have already reviewed this product");
      } else {
        const review = {
          rating: rating,
          comment: comment,
        };
        dispatch(addProductReview(review, product?._id));
      }
    }
  };
  // if (!product) {
  //   return <div>Loading or no product data available</div>;
  // }
  return (
    <div>
      <h2>Give Your Review</h2>
      <ReactStars
        count={5}
        // onChange={ratingChanged}
        value={rating}
        // edit={false}
        size={24}
        isHalf={true}
        emptyIcon={<i className="far fa-star"></i>}
        halfIcon={<i className="fa fa-star-half-alt"></i>}
        fullIcon={<i className="fa fa-star"></i>}
        activeColor="#ffd700"
        onChange={(e) => {
          setRating(e);
        }}
      />
      <input
        type="text"
        className="form-control mt-2 ml-5"
        value={comment}
        onChange={(e) => {
          setComment(e.target.value);
        }}
      />
      <button onClick={submitReview} class="btn btn-dark mt-3">
        Submit Review
      </button>
      <h2 className="mt-5">Latest Reviews</h2>
      {product.reviews &&
        product?.reviews.map((review) => {
          return (
            <div>
              <ReactStars
                count={5}
                // onChange={ratingChanged}
                value={review.rating}
                edit={false}
                size={24}
                isHalf={true}
                emptyIcon={<i className="far fa-star"></i>}
                halfIcon={<i className="fa fa-star-half-alt"></i>}
                fullIcon={<i className="fa fa-star"></i>}
                activeColor="#ffd700"
              />
              <p>{review.comment}</p>
              <p>By: {review.name}</p>
            </div>
          );
        })}
    </div>
  );
};

export default Review;
