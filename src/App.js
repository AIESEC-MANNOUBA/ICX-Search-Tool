import React from "react";
import "./App.css";
import Header from "./components/header/Header";
import Icxi from "./components/icxi/Icxi";
import Opps from "./components/opps/Opps";
import Contact from "./components/contact/Contact";
import Appp from "./components/appp/Appp";
import Testi from "./components/testi/Testi";


function App() {
  return (
    <div className="app">
      <Header />
      <Icxi />
      <Opps />
      <Appp />
      <Testi />
      <Contact />
    </div>
  );
}

export default App;