import React from "react";
import './castcard.scss'

function CastCard(props) {

  
  const style = {backgroundImage: `url(${props.castData?.person.image?.medium})`};
  return (
    <>
    <div className='col-lg-2 col-md-4 col-sm-6'>

      <div className="castCard" style={props.castData && style}>
        <p>{props.castData.person.name}</p>
      </div>
    </div>
    </>
  );
}

export default CastCard;
