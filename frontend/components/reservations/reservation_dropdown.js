import React from "react";

class Dropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 1,
      childrenCounter: 0,
      infantCounter: 0,
      clicked: false,
    };

    this.addInfantCounter = this.addInfantCounter.bind(this);
    this.removeInfantCounter = this.removeInfantCounter.bind(this);
    this.addChildrenCounter = this.addChildrenCounter.bind(this);
    this.removeChildrenCounter = this.removeChildrenCounter.bind(this);
    this.addCounter = this.addCounter.bind(this);
    this.removeCounter = this.removeCounter.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.closeDropdown = this.closeDropdown.bind(this);
  }

  closeDropdown(e) {
    e.preventDefault();
    if (this.state.clicked === true) {
      if (e.relatedTarget === null || e.relatedTarget.className != "far") {
        this.setState({ clicked: false });
      }
      let total = this.state.childrenCounter + this.state.counter;
      this.props.totalGuests(total);
    }
  }

  handleClick(e) {
    e.preventDefault();
    this.setState({ clicked: !this.state.clicked });
  }

  addInfantCounter() {
    this.setState({ infantCounter: this.state.infantCounter + 1 });
  }

  addChildrenCounter() {
    this.setState({ childrenCounter: this.state.childrenCounter + 1 });
  }

  addCounter() {
    this.setState({ counter: this.state.counter + 1 });
  }

  removeInfantCounter() {
    this.setState({ infantCounter: this.state.infantCounter - 1 });
  }
  removeChildrenCounter() {
    this.setState({ childrenCounter: this.state.childrenCounter - 1 });
  }
  removeCounter() {
    this.setState({ counter: this.state.counter - 1 });
  }

  render() {
    const { spot } = this.props;
    const dateDiff = (this.props.endDate - this.props.startDate) / 1000 / 86400; //86400 = 24*60*60
    const totalPrice = dateDiff * spot.price;
    // this.props.totalCostPrice(totalPrice);
    const totalCounter = this.state.counter + this.state.childrenCounter;
    const guest = totalCounter > 1 ? "guests" : "guest";
    const infantNumber = this.state.infantCounter;
    const infants =
      infantNumber === 0
        ? ""
        : infantNumber > 1
        ? `, ${infantNumber} infants`
        : `, ${infantNumber} infant`;

    return (
      <div className="sGuests">
        <button
          className="sGuestsButton"
          onBlur={this.closeDropdown}
          onClick={this.handleClick}
        >
          <div className="sGuestButtonDiv">
            <div>
              {totalCounter} {guest}
              {infants}
            </div>
            {!this.state.clicked ? (
              <i className="fas fa-chevron-down"></i>
            ) : (
              <i className="fas fa-chevron-up"></i>
            )}
            {this.state.clicked ? (
              <ul
                onClick={(e) => e.stopPropagation()}
                id="reservation-dropdown"
              >
                <div className="Adults">
                  <span>Adults</span>
                  <div className="dropdownAdds">
                    {totalCounter <= 1 || this.state.counter === 1 ? (
                      <i className="far fa-minus-square gray"></i>
                    ) : (
                      <i
                        className="far fa-minus-square"
                        onClick={this.removeCounter}
                      ></i>
                    )}
                    {this.state.counter}
                    {totalCounter >= spot.maxGuests ? (
                      <i className="far fa-plus-square gray"></i>
                    ) : (
                      <i
                        className="far fa-plus-square"
                        onClick={this.addCounter}
                      ></i>
                    )}
                  </div>
                </div>
                <div className="Adults">
                  <div className="dropdownText">
                    <span>Children</span>
                    <span>Ages 2–12</span>
                  </div>
                  <div className="dropdownAdds">
                    {totalCounter <= 1 || this.state.childrenCounter === 0 ? (
                      <i className="far fa-minus-square gray"></i>
                    ) : (
                      <i
                        className="far fa-minus-square"
                        onClick={this.removeChildrenCounter}
                      ></i>
                    )}
                    {this.state.childrenCounter}
                    {totalCounter >= spot.maxGuests ? (
                      <i className="far fa-plus-square gray"></i>
                    ) : (
                      <i
                        className="far fa-plus-square"
                        onClick={this.addChildrenCounter}
                      ></i>
                    )}
                  </div>
                </div>
                <div className="Adults">
                  <div className="dropdownText">
                    <span>Infants</span>
                    <span>Under 2</span>
                  </div>
                  <div className="dropdownAdds">
                    {this.state.infantCounter <= 0 ? (
                      <i className="far fa-minus-square gray"></i>
                    ) : (
                      <i
                        className="far fa-minus-square"
                        onClick={this.removeInfantCounter}
                      ></i>
                    )}
                    {this.state.infantCounter}
                    {this.state.infantCounter >= 5 ? (
                      <i className="far fa-plus-square gray"></i>
                    ) : (
                      <i
                        className="far fa-plus-square"
                        onClick={this.addInfantCounter}
                      ></i>
                    )}
                  </div>
                </div>
                <div className="disclousreGuests">
                  {spot.maxGuests} guests maximum. Infants don’t count toward
                  the number of guests.
                </div>
                <div className="disclousreGuests">
                  Total price for {dateDiff} nights is: $ {totalPrice}
                </div>
                <div className="closebutton" onClick={this.closeDropdown}>
                  {" "}
                  Close
                </div>
              </ul>
            ) : null}
          </div>
        </button>
      </div>
    );
  }
}

export default Dropdown;
