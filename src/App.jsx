import React, { useState, useEffect } from "react";
import MovieDetail from "./components/MovieDetail";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { MovieData } from "./MovieData";
import Home from "./components/Home";

const App = () => {
  useEffect(() => {
    document.body.style.backgroundColor = '#FF0000'; // Couleur rouge
    return () => {
      document.body.style.backgroundColor = ''; // Réinitialiser la couleur lors du démontage du composant
    };
  }, []);

  return (
    <div className="app">
      <h1>Movie Library</h1>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/description/:id"
            element={<MovieDetail movies={MovieData} />}
          />
          <Route path="*" element={"error 404 page not found"} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
