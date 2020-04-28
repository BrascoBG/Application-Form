import React from "react";
import { Link } from "react-router-dom";

function About() {
  return (
    <div style={{ height: "100vh" }}>
      <h3>Hello and Welcome</h3>
      <div className="jumbotron">
        <h3 className="display-4">ReactJS SPA</h3>
        <p className="lead">
          This is a SPA built with ReactJS, React Router, Functional Components
          with Hooks, Bootstrap, Git, GitHub, CSS3, Flexbox, etc.
        </p>
        <hr className="my-4" />
        <p>It's adding applicants into a table.</p>
        <Link
          id="btn-try"
          className="btn btn-outline-primary"
          to="/"
          role="button"
        >
          Try it
        </Link>
      </div>
    </div>
  );
}

export default About;
