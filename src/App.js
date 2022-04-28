import React from "react";
import "./App.css";
import Navbar from "../src/components/Navbar";
import Gallery from "./components/Gallery"
import Main1 from "../src/components/Main1"
import Main2 from "../src/components/Main2"
import Main3 from "../src/components/Main3"
import Main4 from "../src/components/Main4"
import Footer from "./components/Footer";


function App() {
  return (
    <div>
      <div className="text">
        <Navbar/>
        <Main1/>
        <Gallery/>
      </div>
      <div>
        <Main2/>
      </div>
      <div>
        <Main3/>
      </div>
      <div>
        <Main4/>
      </div>
      <div>
        <Footer/>
      </div>
    </div>
  );
}
export default App;
