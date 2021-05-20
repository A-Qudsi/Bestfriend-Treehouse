import React from "react";

class ReviewIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { body, rating } = this.props.review;
    return (
      <div className="review-index-item">
        <div>{body}</div>
        <div>
          {rating}
          <i className="fas yellow fa-star"></i>
        </div>
      </div>
    );
  }
}

export default ReviewIndexItem;
