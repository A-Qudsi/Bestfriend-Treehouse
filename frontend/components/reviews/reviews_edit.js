import React, { useState, useEffect } from "react";
import StarRating from "./reviews_star_rating";

const EditReviewForm = (props) => {
  const [body, setBody] = useState(props.review.body);
  const [rating, setRating] = useState(props.review.rating);
  const [active, setActive] = useState(false)

  const bodyChangeHandler = (event) => {
    setBody(event.currentTarget.value);
  };

  const getRating = (number) => {
    setRating(number);
  };

  const { spot, currentUser } = props;

  const editReview = (e) => {
    e.preventDefault();
    props.updateReview({
      id: props.review.id,
      body: body,
      rating: rating,
    })
    props.setEdit(false);
  };

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
      button = (
        <button className="submit-button disabled" disabled>
          You have already reviewed.
        </button>
      );
    } else if (!usersReservationsSpotId.has(spot.id)) {
      button = (
        <button className="submit-button disabled" disabled>
          You need to make a reservation first.
        </button>
      );
    }
  }

  let buttonDiv = (
    <div className="editDeleteButtons">
      <button type="button" onClick={editReview}>
        Submit
      </button>
      <button type="button" onClick={() => props.setEdit(false)}>
        Cancel
      </button>
    </div>
  );

  return (
    <React.Fragment>
      <div className="edit">
        <div className="editTextfield">
          <textarea
            className="editinputfield"
            onChange={bodyChangeHandler}
            value={body}
            placeholder="Add a comment"
            autoFocus
            required
            rows="4"
            cols="30"
          />
        </div>
        <div className="reviewsRatingDiv">
          <StarRating getRating={getRating} />
        </div>
        {buttonDiv}
      </div>
    </React.Fragment>
  );
};

export default EditReviewForm;
