import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <h1>Application form</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/list">Applicants</Link>
        <Link to="/about">About</Link>
      </nav>
      <hr />
    </div>
  );
}

export default Header;
