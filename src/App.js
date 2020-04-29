import React, { useState, useEffect } from "react";
import "./App.css";
import { v4 as uuidv4 } from "uuid";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Inputs from "./components/InputFields";
import Header from "./components/Header";
import Footer from "./components/Footer";
import List from "./components/Applicants";
import About from "./components/About";

function App() {
  const [data, setData] = useState([]);
  const eventHandler = (
    name,
    age,
    phone,
    email,
    date,
    communication,
    english,
    skills,
    description
  ) => {
    const items = {
      name,
      age,
      phone,
      email,
      date,
      communication,
      english,
      skills,
      description,
      id: uuidv4(),
    };
    setData([...data, items]);
  };

  useEffect(() => {
    const localData = localStorage.getItem("Data");
    if (localData !== null) {
      setData(JSON.parse(localData));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("Data", JSON.stringify(data));
  }, [data]);

  const delPerson = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  return (
    <Router>
      <div className="App">
        <Header />
        <Route
          exact
          path="/"
          render={() => <Inputs eventHandler={eventHandler} />}
        />
        <Route
          path="/list"
          render={() => <List data={data} delPerson={delPerson} />}
        />
        <Route path="/about" component={About} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
