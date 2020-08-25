import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";

function Inputs(props) {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [communication, setCommunication] = useState("");
  const [english, setEnglish] = useState("");
  const [skills, setSkills] = useState("");
  const [description, setDescription] = useState("");
  const [terms, setTerms] = useState(false);
  const [alert, setAlert] = useState("none");

  const saveData = (e) => {
    e.preventDefault();
    props.eventHandler(
      name,
      age,
      phone,
      email,
      date,
      communication,
      english,
      skills,
      description
    );
    setName("");
    setAge("");
    setPhone("");
    setEmail("");
    setDate("");
    setCommunication("");
    setEnglish("");
    setSkills("");
    setDescription("");
    setTerms(false);
    setAlert("block");
    setTimeout(() => {
      setAlert("none");
    }, 5000);
  };

  const style = {
    display: alert,
  };

  return (
    <div>
      <form onSubmit={saveData}>
        <div className="flex">
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input
              value={name}
              className="form-control"
              id="name"
              type="text"
              placeholder="Enter your full name"
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="age">Age</label>
            <input
              value={age}
              className="form-control"
              id="age"
              type="number"
              placeholder="Enter your age"
              onChange={(e) => setAge(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone</label>
            <input
              value={phone}
              className="form-control"
              id="phone"
              type="text"
              placeholder="Enter your phone number"
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="mail">Email</label>
            <input
              value={email}
              className="form-control"
              id="mail"
              type="email"
              placeholder="Enter your Email"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <small id="emailHelp" className="form-text text-muted">
              We'll never share your email with anyone else.
            </small>
          </div>
        </div>

        <div className="flex">
          <div className="form-group">
            <label htmlFor="date">Available to start:</label>
            <input
              className="form-control"
              id="date"
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>
          <fieldset id="field">
            <legend>Preffered way for communication</legend>
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="radio"
              name="communication"
              value="By Email"
              onChange={(e) => setCommunication(e.target.value)}
            />
            <label htmlFor="tel">Phone</label>
            <input
              id="tel"
              type="radio"
              name="communication"
              value="By Phone"
              onChange={(e) => setCommunication(e.target.value)}
            />
          </fieldset>
          <div className="form-group">
            <label htmlFor="english">English level</label>
            <select
              className="form-control"
              id="english"
              onChange={(e) => setEnglish(e.target.value)}
            >
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
              value={skills}
              className="form-control"
              id="skills"
              rows={8}
              placeholder="Write about your skills..."
              onChange={(e) => setSkills(e.target.value)}
            ></textarea>
          </div>
          <div className="form-group txtarea">
            <label htmlFor="presentation">Short Personal Presentation</label>
            <textarea
              value={description}
              className="form-control"
              id="presentation"
              rows={8}
              placeholder="Describe yourself..."
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </div>
        </div>

        <div className="flex">
          <fieldset id="field-terms">
            <legend>Terms and Conditions</legend>
            <label htmlFor="terms">Agree with the terms?</label>
            <input
              id="terms"
              type="checkbox"
              value={terms}
              onChange={(e) => setTerms(e.target.checked)}
            />
          </fieldset>
        </div>
        <br />
        {terms ? (
          <button className="btn-submit">Submit</button>
        ) : (
          <button className="btn-disabled" disabled>
            Check the Terms
          </button>
        )}
      </form>
      <div className="alert alert-success" role="alert" style={style}>
        You successfully added a new aplicant! Go check it out from Navigation!
      </div>
    </div>
  );
}

export default Inputs;
