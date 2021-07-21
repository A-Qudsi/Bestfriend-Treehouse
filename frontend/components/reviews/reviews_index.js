import React from "react";
import ReviewIndexItem from "./reviews_index_item";

class ReviewsIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchReviews(this.props.spot.id);
  }

  render() {
    return (
      <ul className="review-container">
        {this.props.reviews.map((review) => (
          <li key={review.id} className="review-item">
            <ReviewIndexItem
              review={review}
              currentUser={this.props.currentUser}
              deleteReview={this.props.deleteReview}
            />
          </li>
        ))}
      </ul>
    );
  }
}

export default ReviewsIndex;
