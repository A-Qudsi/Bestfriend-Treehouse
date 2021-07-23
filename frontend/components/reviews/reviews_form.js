import React, { useState } from "react";
import StarRating from "./reviews_star_rating";

const ReviewForm = (props) => {
  const [body, setBody] = useState("");
  const [rating, setRating] = useState("");

  const bodyChangeHandler = (event) => {
    setBody(event.currentTarget.value);
  };

  const getRating = (number) => {
    setRating(number);
  };

  const submitReview = (e) => {
    e.preventDefault();
    if (props.currentUser) {
      props.createReview({
        body: body,
        rating: rating,
        user_id: props.currentUser.id,
        spot_id: props.spot.id,
      });
    } else {
      props.openModal("login");
    }
    setBody("");
  };

  const { spot } = props;

  return (
    <form className="reviewForm">
      <div className="reviewsFormDiv">
        <input
          className="reviewsBodyTextarea"
          type="textarea"
          value={body}
          placeholder="Tell us about your stay"
          onChange={bodyChangeHandler}
        />
      </div>
      <div className="reviewsRatingDiv">
        <StarRating getRating={getRating} />
      </div>
      <button className="submit-button" onClick={(e) => submitReview(e)}>
        Submit Review
      </button>
    </form>
  );
};

export default ReviewForm;
