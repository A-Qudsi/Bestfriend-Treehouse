import React from "react";
import StarRating from "./reviews_star_rating";

class ReviewForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      body: "",
      rating: "",
    };

    this.submitReview = this.submitReview.bind(this);
    this.update = this.update.bind(this);
    this.clearReviews = this.clearReviews.bind(this);
    this.getRating = this.getRating.bind(this);
    this.clearReviews = this.clearReviews.bind(this);
  }

  update(field) {
    return (e) =>
      this.setState({
        [field]: e.currentTarget.value,
      });
  }

  clearReviews() {
    this.setState({
      body: "",
    });
  }

  getRating(number) {
    this.setState({
      rating: number,
    });
  }

  submitReview(e) {
    e.preventDefault();
    if (this.props.currentUser) {
      this.props
        .createReview({
          body: this.state.body,
          rating: this.state.rating,
          user_id: this.props.currentUser.id,
          spot_id: this.props.spot.id,
        })
    } else {
      this.props.openModal("login");
    }
    this.clearReviews();
  }

  render() {
    const { spot } = this.props;
    return (
      <div>
        <form className="reviewForm">
          <div className="reviewsFormDiv">
            <input
              className="reviewsBodyTextarea"
              type="textarea"
              value={this.state.body}
              placeholder="Tell us about your stay"
              onChange={this.update("body")}
            />
          </div>
          <div className="reviewsRatingDiv">
            <StarRating getRating={this.getRating}/>
          </div>
          <button
            className="submit-button"
            onClick={(e) => this.submitReview(e)}
          >
            Submit Review
          </button>
        </form>
      </div>
    );
  }
}

export default ReviewForm;
