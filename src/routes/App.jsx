import React from "react";
import { Routes, Route } from "react-router-dom";
import Landing from "../pages/LandingPage";
import Home from "../pages/Home";
import About from "../pages/About";
import Detail from "../pages/Detail";
import Contac from "../pages/Contac";
import NotFound from "../pages/NotFound";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/contact" element={<Contac />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
