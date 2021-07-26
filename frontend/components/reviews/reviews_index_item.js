import React from "react";
import EditReviewFormContainer from "./reviews_edit_form_container";

class ReviewIndexItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      editMode: false,
    };

    this.deleteReview = this.deleteReview.bind(this);
    this.editReview = this.editReview.bind(this);
  }

  deleteReview() {
    this.props.deleteReview(this.props.review.id);
  }

  editReview() {
    this.setState({ editMode: true });
  }

  render() {
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
          {}
          <button onClick={this.deleteReview} className="review-edit">
            Delete
          </button>
        </div>
      ) : null
    ) : null;

    let reviewMsg = body;
    if (this.state.editMode) {
      reviewMsg = <EditReviewFormContainer review={this.props.review} />;
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
        {this.state.editMode ? null : (
          <div className="editDeleteButtons">{editDeleteButtons}</div>
        )}
      </div>
    );
  }
}

export default ReviewIndexItem;
