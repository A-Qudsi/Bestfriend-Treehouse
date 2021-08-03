import React, { Fragment } from "react";
import Escapes from "../escapes/escapes";
import BackgroundBody from "./background_body";
import Cards from "./cards";
import Disclaimer from "./disclaimer";

const Splash = (props) => {
  return (
    <Fragment>
      <BackgroundBody history={props.history} />
      <Cards />
      <Escapes />
      <Disclaimer />
    </Fragment>
  );
};

export default Splash;
