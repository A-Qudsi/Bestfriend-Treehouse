import React from "react";

const BackgroundBody = ({history}) => {
  return (
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
            onClick={() => history.push("/spots")}
          >
            Explore nearby
          </button>
        </div>
      </div>
    </div>
  );
};

export default BackgroundBody;
