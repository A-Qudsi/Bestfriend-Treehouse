import React, {Fragment} from "react";

const Escapes = () => {
  return (
    <Fragment>
      <div className="OnlineExperiences">
        <div className="topOEDiv">
          <div className="OEtext">
            <p className="OEheader">Online Experiences: Field Trips</p>
            <p className="OEdescription">
              Join interactive, global adventures with inspiring, kid-friendly
            </p>
            <p className="OEdescription">hosts.</p>
          </div>
          <div className="OEbutton">
            <div className="ExploreSplash">Explore all</div>
          </div>
        </div>
        <div className="OEphotos">
          <div className="billNyeDiv">
            <img
              src="https://bestfriend-treehouse-dev.s3.amazonaws.com/bill.jpg"
              className="bNyePhoto"
            />
            <div className="OEphotoDetails">
              <p className="img_title">
                Decode the science of 2020 with Bill Nye
              </p>
            </div>
          </div>
          <div className="TigerDiv">
            <img
              src="https://bestfriend-treehouse-dev.s3.amazonaws.com/tiger.jpg"
              className="tigerPhoto"
            />
            <div className="OEphotoDetails">
              <p className="img_title">Go on a leopard safari in Sri Lanka</p>
            </div>
          </div>
          <div className="ArtDiv">
            <img
              src="https://bestfriend-treehouse-dev.s3.amazonaws.com/arts.jpg"
              className="artPhoto"
            />
            <div className="OEphotoDetails">
              <p className="img_title">
                Discover Buenos Aires street art and sketch
              </p>
            </div>
          </div>
          <div className="SeaDiv">
            <img
              src="https://bestfriend-treehouse-dev.s3.amazonaws.com/shrak.jpg"
              className="seaPhoto"
            />
            <div className="OEphotoDetails">
              <p className="img_title">
                Dive under the sea with a shark scientist
              </p>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Escapes;
