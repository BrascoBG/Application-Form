import React from "react";
import "./App.css";
import Inputs from "./components/InputFields";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Inputs />
      <Footer />
    </div>
  );
}

export default App;
