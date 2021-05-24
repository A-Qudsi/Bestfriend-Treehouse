import React, { Fragment } from "react";
import Escapes from "../escapes/escapes";
import BackgroundBody from "./background_body";
import Cards from "./cards";
import Disclaimer from "./disclaimer";

class Splash extends React.Component {
  render() {
    return (
      <Fragment>
        <BackgroundBody />
        <Cards />
        <Escapes />
        <Disclaimer />
      </Fragment>
    );
  }
}

export default Splash;
