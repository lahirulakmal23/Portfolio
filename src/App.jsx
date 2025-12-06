import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Project from './pages/Project';  
import About from "./pages/About";
import Experience from "../src/pages/Experience";



function App() {
  return (
    <>
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Project" element={<Project />} />
        <Route path="/Experience" element={<Experience />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </div>
      
    </>
  );
}

export default App;
