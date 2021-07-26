import React, { useState, useEffect } from "react";
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

  const { spot, currentUser } = props;
  debugger;

  const submitReview = (e) => {
    e.preventDefault();
    if (currentUser) {
      props.createReview({
        body: body,
        rating: rating,
        user_id: currentUser.id,
        spot_id: spot.id,
      });
    } else {
      props.openModal("login");
    }
    setBody("");
    setRating("");
  };

  const editReview = (e) => {
    e.preventDefault()
    props.updateReview({
      id: props.review.id,
      body: body,
      rating: 2,
    });
  };

  const handleEnterEdit = () => {
    setBody(props.review.body);
    setRating(props.review.rating);
  };

  if (props.formType === "create") {

    let button = (
      <button className="submit-button" onClick={(e) => submitReview(e)}>
        Submit Review
      </button>
    );

    let spotsReviewsUserId = new Set();
    spot.reviews.forEach((ele) => spotsReviewsUserId.add(ele["user_id"]));

    let usersReservationsSpotId = new Set();
    currentUser.reservations.forEach((ele) =>
      usersReservationsSpotId.add(ele["spot_id"])
    );

    if (currentUser) {
      if (spotsReviewsUserId.has(currentUser.id)) {
        button = <button disabled>you have already reviewed</button>;
      } else if (!usersReservationsSpotId.has(spot.id)) {
        button = <button disabled>you need to make a reservation first</button>;
      }
    }

    return (
      <React.Fragment>
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
          {button}
        </form>
      </React.Fragment>
    );
  } else {
    let buttonDiv = "";
    buttonDiv = (
      <div
        id="comment-form-btns-container"
        className="inline-comment-form-btns-container"
      >
        <button type="button" id="comment-form-cancel-btn">
          Cancel
        </button>
        <button type="button" onClick={editReview}>
          Submit
        </button>
      </div>
    );

    return (
      <div
        id="comment-form-container"
        className="inline-comment-form-container"
      >
        <div id="comment-form-input-and-icon">
          <div>
            <input
              type="text"
              className="inline-comment-form-input"
              onChange={bodyChangeHandler}
              value={body}
              placeholder="Add a public comment..."
              required
            />
            <div id="comment-form-input-underline"></div>
          </div>
        </div>
        {buttonDiv}
      </div>
    );
  }
};

export default ReviewForm;
