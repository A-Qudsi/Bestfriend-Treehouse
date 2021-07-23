import React from "react";

class ReviewIndexItem extends React.Component {
  constructor(props) {
    super(props);

    this.deleteReview = this.deleteReview.bind(this);
  }

  deleteReview() {
    this.props.deleteReview(this.props.review.id);
  }

  render() {
    debugger;
    const { body, rating, user_id, created_at, user } = this.props.review;
    const { currentUser } = this.props;

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

    const [year, month] = [
      created_at.slice(0, 4),
      months[created_at.slice(5, 7) - 1],
    ];

    const editDeleteButtons = currentUser ? (
      user_id === currentUser.id ? (
        <div className="review-buttons">
          <button onClick={this.editReview} className="review-edit">
            Edit
          </button>
          <br />
          <button onClick={this.deleteReview} className="review-edit">
            Delete
          </button>
        </div>
      ) : null
    ) : null;

    return (
      <div className="review-index-item">
        <div className="review-profile">
          <i className="far reviewProfilePic fa-user-circle"></i>
          <div className="reviewNameDate">
            <p className="reviewUserName">{user.fname}</p>
            <p className="reviewDates">
              {month} {year}{" "}
            </p>
          </div>
          <div>
            {rating}
            <i className="fas yellow fa-star"></i>
          </div>
        </div>
        <div>{body}</div>
        <div>{editDeleteButtons}</div>
      </div>
    );
  }
}

export default ReviewIndexItem;
