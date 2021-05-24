import React, { Fragment } from "react";

const SpotHeader = ({ spot }) => {
  return (
    <Fragment>
      <div className="showpageheader">
        <h1 className="showpagename">{spot.name}</h1>
      </div>
      <div className="address">
        <div className="addressleft">
          <i className="fas fa-star spot-star"></i>
          <span>
            {spot.average_rating} {spot.address} {spot.city}
          </span>
        </div>
        <div className="addressright">
          <div className="faviconsright">
            <i className="fas fa-upload"></i> Share
            <i className="far fa-heart"></i> Save
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default SpotHeader;
