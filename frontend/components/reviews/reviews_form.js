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

  useEffect(() => {
    if (props.formType === "edit") {
      setBody(props.review.body);
      setRating(props.review.rating);
    }
  }, [props.formType]);

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
    let buttonDiv = (
      <div className="editDeleteButtons">
        <button type="button" onClick={editReview}>
          Submit
        </button>
        <button type="button">Cancel</button>
      </div>
    );

    return (
      <React.Fragment>
          <div>
            <input
              type="text"
              onChange={bodyChangeHandler}
              value={body}
              placeholder="Add a comment"
              required
            />
          </div>
        {buttonDiv}
      </React.Fragment>
    );
  }
};

export default ReviewForm;
