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
    const { body, rating, user_id } = this.props.review;
    const { currentUser } = this.props;
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
        <div>{body}</div>
        <div>{editDeleteButtons}</div>
        <div>
          {rating}
          <i className="fas yellow fa-star"></i>
        </div>
      </div>
    );
  }
}

export default ReviewIndexItem;
