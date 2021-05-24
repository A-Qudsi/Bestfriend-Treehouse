import React, {Fragment} from "react";
import Escapes from "../escapes/escapes";
import Cards from "./cards";
import Disclaimer from "./disclaimer";

class Splash extends React.Component {
  render() {
    return (
      <Fragment>
        <div className="homePage">
          <div className="treehouse_background">
            <div className="goNear">
              <p className="goNearTitle">Go Near</p>
              <p className="goNearBody">
                Settle in somewhere new. Discover stays to live, work, or just
                relax.
              </p>
              <button
                className="goNearButton"
                onClick={() => this.props.history.push("/spots")}
              >
                Explore nearby
              </button>
            </div>
          </div>
        </div>
        <Cards />
        <Escapes />
        <Disclaimer />
      </Fragment>
    );
  }
}

export default Splash;
