import React, { useState, useEffect } from "react";
import ReviewIndexItem from "./reviews_index_item";

const ReviewsIndex = (props) => {
  useEffect(() => {
    props.fetchReviews(props.spot.id);
  }, []);

  const { reviews } = props;

  let total = 0;
  reviews.forEach((rev) => (total += rev.rating));

  let average;
  if (reviews.length) {
    average = (total / reviews.length).toFixed(2);
  } else {
    average = "No reviews yet";
  }

  let strReviews =
    reviews.length === 0 ? "" : reviews.length === 1 ? "review" : "reviews";

  let sentenceReview = reviews.length
    ? " · " + reviews.length + ` ${strReviews}`
    : "";

  return (
    <React.Fragment>
      <p className="reviewsHeader">
        <i className="fas yellow fa-star"></i> {average} {sentenceReview}
      </p>
      <ul className="review-container">
        {reviews.map((review) => (
          <li key={review.id} className="review-item">
            <ReviewIndexItem
              spot={props.spot}
              review={review}
              currentUser={props.currentUser}
              deleteReview={props.deleteReview}
              fetchSpots={props.fetchSpots}
            />
          </li>
        ))}
      </ul>
    </React.Fragment>
  );
  // }
};

export default ReviewsIndex;
