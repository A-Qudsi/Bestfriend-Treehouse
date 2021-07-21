import React from "react";
import { Link } from "react-router-dom";

class ReviewIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { body, rating, user_id } = this.props.review;
    const { spot, currentUser } = this.props;
    const editButton =
      user_id === currentUser.id ? (
        <Link to={`/reviews/${review.id}/edit`}>edit</Link>
      ) : null;

    return (
      <div className="review-index-item">
        <div>{body}</div>
        <div>{editButton}</div>
        <div>
          {rating}
          <i className="fas yellow fa-star"></i>
        </div>
      </div>
    );
  }
}

export default ReviewIndexItem;
