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
    if (prevProps.reviews != this.props.reviews) {
      this.setState({
        reviews: this.props.reviews,
      });
    }
  }

  render() {
    const { reviews } = this.state;
    let total = 0;
    reviews.forEach((rev) => (total += rev.rating));

    let average;
    if (reviews.length) {
      average = (total / reviews.length).toFixed(2);
    } else {
      average = "No reviews yet";
    }

    let strReviews =
      reviews.length === 0 ? "" : reviews.length === 1 ? "review" : "reviews";

    let sentenceReview = reviews.length
      ? " · " + reviews.length + ` ${strReviews}`
      : "";

    return (
      <React.Fragment>
        <p className="reviewsHeader">
          <i className="fas yellow fa-star"></i> {average} {sentenceReview}
        </p>
        <ul className="review-container">
          {this.props.reviews.map((review) => (
            <li key={review.id} className="review-item">
              <ReviewIndexItem
                review={review}
                currentUser={this.props.currentUser}
                deleteReview={this.props.deleteReview}
                updateReview={this.props.updateReview}
              />
            </li>
          ))}
        </ul>
      </React.Fragment>
    );
  }
}

export default ReviewsIndex;
