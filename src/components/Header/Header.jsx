import React from "react";
import "./header.scss";
import {Link} from 'react-router-dom'

function Header({ setPage }) {
  return (
    <div className="container-fluid bg-info bg-gradient header">
      <div className="row">
        <Link className="offset-lg-1 offset-md-2 col-lg-8 col-md-7  bg-info bg-gradient bitShow" to='/TV-shows-details'>BIT Show</Link>
        <Link className="col-lg-1 offset-lg-1 col-md-1 bg-info bg-gradient about" to='/about'>About</Link>
        
      </div>
    </div>
  );
}

export default Header;
