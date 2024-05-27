import React from "react";
import Main from "./Views/Main";
import Build from "./Views/Build/Build.js";
import Create from "./Views/Create/Create.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter basename="/">
        <Routes>
          <Route exact path="/" element={<Main />} />
          <Route exact path="/build" element={<Build />} />
          <Route exact path="/create-team/:teamNumber" element={<Create />} />
          <Route path="*" element={<div>Page not found</div>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
