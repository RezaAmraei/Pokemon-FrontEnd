import "./App.css";
import Main from "./Views/Main";
import Build from "./Views/Build.js";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Main />} />
          <Route exact path="/build" element={<Build />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
