import React, { useState, useEffect } from "react";
import EditReviewFormContainer from "./reviews_edit_form_container";

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const ReviewIndexItem = (props) => {
  const [edit, setEdit] = useState(false);
  const { body, rating, user_id, created_at, user } = props.review;
  const { currentUser, spot } = props;


  const [year, month] = [
    created_at.slice(0, 4),
    months[created_at.slice(5, 7) - 1],
  ];

  useEffect(() => {
    props.fetchSpots();
  }, [edit]);
  
  const handleDelete = () => {
    props.deleteReview(props.review.id)
  };

  const editDeleteButtons = currentUser ? (
    user_id === currentUser.id ? (
      <div className="review-buttons">
        <button onClick={() => setEdit(true)} className="review-edit">
          Edit
        </button>
        {}
        <button onClick={handleDelete} className="review-edit">
          Delete
        </button>
      </div>
    ) : null
  ) : null;

  let reviewMsg = body;
  if (edit) {
    reviewMsg = (
      <EditReviewFormContainer
        spot={spot}
        currentUser={currentUser}
        review={props.review}
        setEdit={setEdit}
      />
    );
  }

  return (
    <div className="review-index-item">
      <div className="review-profile">
        <div className="reviewUserInfo">
          <div>
            <i className="far reviewProfilePic fa-user-circle"></i>
          </div>
          <div className="reviewNameDate">
            <p className="reviewUserName">{user.fname}</p>
            <p className="reviewDates">
              {month} {year}{" "}
            </p>
          </div>
        </div>
        <div className="reviewRating">
          {rating}
          <i className="fas yellow fa-star"></i>
        </div>
      </div>
      <div>{reviewMsg}</div>
      {edit ? null : (
        <div className="editDeleteButtons">{editDeleteButtons}</div>
      )}
    </div>
  );
};

export default ReviewIndexItem;
