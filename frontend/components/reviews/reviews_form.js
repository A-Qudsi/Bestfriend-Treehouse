import React, { useState, useEffect } from "react";
import StarRating from "./reviews_star_rating";

const ReviewForm = (props) => {
  const [body, setBody] = useState("");
  const [rating, setRating] = useState("");
  const [reviewerIds, setReviewerIds] = useState({});

  const bodyChangeHandler = (event) => {
    setBody(event.currentTarget.value);
  };

  const getRating = (number) => {
    setRating(number);
  };

  const { spot, currentUser } = props;

  let spotsReviewsUserId = {};
  
  useEffect(() => {
    if (currentUser) {
      spot.reviews.forEach((ele) => spotsReviewsUserId[(ele["user_id"])] = true);
      setReviewerIds(spotsReviewsUserId);
    }
  }, [spot.reviews]);

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
    
    // setReviewerIds((prevReviewerIds) => ({
    //   ...prevReviewerIds,
    //   [currentUserId]: true,
    // }));
    
  };

  let button = (
    <button className="submit-button" onClick={(e) => submitReview(e)}>
      Submit Review
    </button>
  );

  if (currentUser) {
    const currentUserId = currentUser.id;
    let usersReservationsSpotId = new Set();
    currentUser.reservations.forEach((ele) =>
      usersReservationsSpotId.add(ele["spot_id"])
    );
    if (currentUserId in reviewerIds) {
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
};

export default ReviewForm;
