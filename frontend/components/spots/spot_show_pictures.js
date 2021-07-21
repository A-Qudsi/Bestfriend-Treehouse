import React from "react";

const Pictures = ({ spot }) => {
  const pic = spot.photoUrls.slice(2).map((url, idx) => (
    <div className={`photo_${idx + 1}`} key={`photo_${idx + 1}`}>
      <img src={url} className={`img_${idx + 1}`} />
    </div>
  ));

  return <div className="photo_grid">{pic}</div>;
};

export default Pictures;
