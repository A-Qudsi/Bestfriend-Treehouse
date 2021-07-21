import React, { Fragment } from "react";
import { Route, Switch } from "react-router-dom";
import Navbar from "./navbar/navbar";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import Splash from "./splash/splash";
import Modal from "./modal/modal";
import Footer from "./footer/footer";
import SpotsPage from "./spots/spots_index_container";
import SpotShowContainer from "./spots/spot_show_container";
import ReservationIndexContainer from "./reservations/reservations_index_container";

const App = () => (
  <Fragment>
    <header className="app-header">
      <Navbar />
    </header>
    <Modal />
    <Switch>
      <Route exact path="/" component={Splash} />
      <Route exact path="/spots" component={SpotsPage} />
      <Route path="/spots/:spotId" component={SpotShowContainer} />
      <ProtectedRoute
        path="/users/:userId/reservations"
        component={ReservationIndexContainer}
      />
    </Switch>
    <Footer />
  </Fragment>
);

export default App;
