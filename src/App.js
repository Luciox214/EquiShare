import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import CrearProyecto from "./Pages/CrearProyecto";
import Home from "./Pages/Home";
import AsignaciónGastos from "./Pages/AsignaciónGastos";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/crear-proyecto" element={<CrearProyecto />} />
        <Route path="/mis-proyectos" element={<AsignaciónGastos />} />
      </Routes>
    </Router>
  );
}

export default App;
