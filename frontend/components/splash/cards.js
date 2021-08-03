import React from "react";

const Cards = () => {
  return (
    <ul className="escape_images">
      <li className="escape_img">
        <img
          src="https://bestfriend-treehouse-dev.s3.amazonaws.com/dome.jpg"
          className="eimg1"
        />
        <div className="eimg_details">
          <p className="img_title">Unique Stays</p>
          <p className="img_body">
            Spaces that are more than just a place to sleep.
          </p>
        </div>
      </li>
      <li className="escape_img">
        <img
          src="https://bestfriend-treehouse-dev.s3.amazonaws.com/woman.jpg"
          className="eimg2"
        />
        <div className="eimg_details">
          <p className="img_title">Online Experiences</p>
          <p className="img_body">A new way to travel from home.</p>
        </div>
      </li>
      <li className="escape_img">
        <img
          src="https://bestfriend-treehouse-dev.s3.amazonaws.com/house.jpg"
          className="eimg3"
        />
        <div className="eimg_details">
          <p className="img_title">Entire Homes</p>
          <p className="img_body">
            Comfortable private places, with room for friends or family.
          </p>
        </div>
      </li>
    </ul>
  );
};

export default Cards;
