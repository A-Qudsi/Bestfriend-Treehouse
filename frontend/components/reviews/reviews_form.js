import React from "react";
import StarRating from "./reviews_star_rating";

class ReviewForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      body: "",
      rating: "",
      submitted: false
    };

    this.submitReview = this.submitReview.bind(this);
    this.update = this.update.bind(this);
    this.clearBody = this.clearBody.bind(this);
    this.getRating = this.getRating.bind(this);
  }

  update(field) {
    return (e) =>
      this.setState({
        [field]: e.currentTarget.value,
      });
  }

  clearBody() {
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
      this.props.createReview({
        body: this.state.body,
        rating: this.state.rating,
        user_id: this.props.currentUser.id,
        spot_id: this.props.spot.id,
      });
    } else {
      this.props.openModal("login");
    }
    this.clearBody();
  }

  render() {
    const { spot } = this.props;
    return (
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
          <StarRating getRating={this.getRating} clearRating={this.state.submitted}/>
        </div>
        <button className="submit-button" onClick={(e) => this.submitReview(e)}>
          Submit Review
        </button>
      </form>
    );
  }
}

export default ReviewForm;
