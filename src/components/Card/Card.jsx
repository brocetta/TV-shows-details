import React from "react";
import "./card.scss";
import {Link} from 'react-router-dom' 

function Card(props) {
  return (
    <>
      <div className="col-6 col-lg-4 col-xl-3">
        <Link to='/details'>
        <div
          className="card"
          onClick={() => {
            props.setShowId(props.show.id);
          }}
        >
          <img src={props.show.image.medium}></img>
          <h4>{props.show.name}</h4>
          <div className="col-2 rating bg-info bg-gradient">
            {props.show.rating.average}
          </div>
        </div>
    </Link>
      </div>
    </>
  );
}

export default Card;
