import React, { useState } from "react";
import "./styles.css";
import Particle from "./components/Particle";
import Header from "./components/Header";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Project from "./components/Project/Project";
import Resume from "./components/Resume/Resume";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";

function App() {
  const [loader, setLoader] = useState(true);

  setTimeout(() => {
    setLoader(false);
  }, 2000);

  return (
    <>
      {loader ? (
        <div className="preloader">
          <div>
            <img src="images/preloader.svg"></img>
            <h2>Loading</h2>
          </div>
        </div>
      ) : (
        <div className="components">
          <Particle />
          <Header />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/project" element={<Project />}></Route>
            <Route path="/resume" element={<Resume />}></Route>
          </Routes>
          <Footer />
        </div>
      )}
    </>
  );
}

export default App;
