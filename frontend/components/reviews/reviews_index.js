import React from "react";
import ReviewIndexItem from "./reviews_index_item";

class ReviewsIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: props.reviews,
    };
  }

  componentDidMount() {
    this.props.fetchReviews(this.props.spot.id);
  }

  componentDidUpdate(prevProps) {
    debugger;
    if (prevProps.reviews != this.props.reviews) {
      this.setState({
        reviews: this.props.reviews,
      });
    }
  }

  render() {
    const { reviews } = this.state;
    let total = 0;
    Object.values(reviews).forEach((rev) => (total += rev.rating));
    let number = reviews.length;
    let average = (total / number).toFixed(2);

    return (
      <div>
        <p className="reviewsHeader">Reviews</p>
        <span>{this.props.reviews.length}</span>
        <span>{average}</span>
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
      </div>
    );
  }
}

export default ReviewsIndex;
