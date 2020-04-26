import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";

function Inputs() {
  return (
    <div>
      <form>
        <div className="flex">
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input
              className="form-control"
              id="name"
              type="text"
              placeholder="Enter your full name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="age">Age</label>
            <input
              className="form-control"
              id="age"
              type="number"
              placeholder="Enter your age"
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone</label>
            <input
              className="form-control"
              id="phone"
              type="text"
              placeholder="Enter your phone number"
            />
          </div>
          <div className="form-group">
            <label htmlFor="mail">Email</label>
            <input
              className="form-control"
              id="mail"
              type="email"
              placeholder="Enter your Email"
            />
            <small id="emailHelp" className="form-text text-muted">
              We'll never share your email with anyone else.
            </small>
          </div>
        </div>

        <div className="flex">
          <div className="form-group">
            <label htmlFor="date">Available to start:</label>
            <input className="form-control" id="date" type="date" />
          </div>
          <fieldset id="field">
            <legend>Preffered way for communication</legend>
            <label htmlFor="email">Email</label>
            <input id="email" type="radio" name="communication" />
            <label htmlFor="tel">Phone</label>
            <input id="tel" type="radio" name="communication" />
          </fieldset>
          <div className="form-group">
            <label htmlFor="english">English level</label>
            <select className="form-control" id="english">
              <option value="">---</option>
              <option value="A1">A1 (Beginner)</option>
              <option value="A2">A2 (Elementary English)</option>
              <option value="B1">B1 (Intermediate English)</option>
              <option value="B2">B2 (Upper-Intermediate English)</option>
              <option value="C1">C1 (Advanced English)</option>
              <option value="C2">C2 (Proficiency English)</option>
            </select>
          </div>
        </div>

        <div className="flex">
          <div className="form-group txtarea">
            <label htmlFor="skills">Technical skills and courses</label>
            <textarea
              className="form-control"
              id="skills"
              rows={8}
              placeholder="Write about your skills..."
            ></textarea>
          </div>
          <div className="form-group txtarea">
            <label htmlFor="presentation">Short Personal Presentation</label>
            <textarea
              className="form-control"
              id="presentation"
              rows={8}
              placeholder="Describe yourself..."
            ></textarea>
          </div>
        </div>

        <div className="flex">
          <fieldset id="field-terms">
            <legend>Terms and Conditions</legend>
            <label htmlFor="terms">Agree with the terms?</label>
            <input id="terms" type="checkbox" />
          </fieldset>
        </div>
        <br />
        <button className="btn btn-primary btn-lg">Submit</button>
        <button className="btn btn-danger btn-lg">Clear the form</button>
      </form>
    </div>
  );
}

export default Inputs;
