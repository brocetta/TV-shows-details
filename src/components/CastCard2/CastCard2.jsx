import React from "react";
import "./castcard2.scss";

function CastCard2(props) {
  return (
    <>
      <div className="col-lg-2 col-md-4 col-sm-6">
        <div className="row castCard">
          <img src={props.castData.person.image.medium} alt="" />
          <p>{props.castData.person.name}</p>
        </div>
      </div>
    </>
  );
}

export default CastCard2;
