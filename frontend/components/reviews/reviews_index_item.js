import React from "react";
import { Link } from "react-router-dom";

class ReviewIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { body, rating, user_id } = this.props.review;
    const { currentUser } = this.props;

    const editDeleteButtons =  user_id === currentUser.id ? ( "edit delete") : null;

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
