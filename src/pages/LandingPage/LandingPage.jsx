import React from "react";
import "./landingpage.scss";
import Card from "../../components/Card/Card";
import Link from 'react-router-dom'

function LandingPage(props) {
  return (
    <div className="container landingPage">
      <div className="row">
        {props.fetchData
          .sort((a, b) => b.rating.average - a.rating.average)
          .slice(0, 50)
          .map((e) => (
            <Card show={e} setShowId={props.setShowId} />
          ))}
      </div>
    </div>
  );
}

export default LandingPage;