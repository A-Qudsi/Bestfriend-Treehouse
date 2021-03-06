import React from "react";
import Pictures from "./spot_show_pictures";
import ReservationForm from "../reservations/reservation_form";
import SpotBody from "./spot_body";
import ReviewForm from "../reviews/reviews_form";
import ReviewContainer from "../reviews/reviews_container";
import SpotMap from "../map/spot_map";
import SpotHeader from './spot_header'

class SpotShow extends React.Component {
  constructor(props) {
    super(props);
    // this.state({
    //     costPrice: null
    // })

    // this.totalCostPrice = this.totalCostPrice.bind(this);
  }

  componentDidMount() {
    this.props.fetchSpots();
  }

  // totalCostPrice(number){
  //     this.setState({
  //         costPrice: number
  //     })
  // }

  render() {
    if (!this.props.spot) return null;
    const { spot, users } = this.props;

    return (
      <div className="showpagediv">
        <SpotHeader spot={spot} />
        <Pictures spot={spot} />
        <div className="spotsShowBodyContainer">
          <SpotBody spot={spot} users = {users} />
          <div className="spotsShowRightSide">
            <ReservationForm
              spot={spot}
              currentUser={this.props.currentUser}
              history={this.props.history}
              openModal={this.props.openModal}
              createReservation={this.props.createReservation}
              // totalCostPrice= {this.totalCostPrice}
            />
          </div>
        </div>
        <h3 className='reviewsHeader'>REVIEWS</h3>
        <div className="reviewContainer">
          <ReviewContainer spot={spot} />
        </div>
        <div>
          <ReviewForm
            spot={spot}
            currentUser={this.props.currentUser}
            openModal={this.props.openModal}
            createReview={this.props.createReview}
          />
        </div>
        <SpotMap spot={spot} />
      </div>
    );
  }
}
export default SpotShow;
