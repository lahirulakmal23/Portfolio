import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Project from './pages/Project';  
import About from "./pages/About";


function App() {
  return (
    <>
      <Navbar />
      <Home/>
      <About/>
      <Project/>
      <Contact/>
    </>
  );
}

export default App;
