import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <h1>Application form</h1>
      <nav>
        <Link to="/Application-Form-Live/">Home</Link>
        <Link to="/Application-Form-Live/list/">Applicants</Link>
        <Link to="/Application-Form-Live/about/">About</Link>
      </nav>
      <hr />
    </div>
  );
}

export default Header;
