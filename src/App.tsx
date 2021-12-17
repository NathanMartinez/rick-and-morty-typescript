import React from "react";
import { Routes, Route } from "react-router-dom";

// Pages
import Home from "./pages/Home";
import Characters from "./pages/Characters";
import Episodes from "./pages/Episodes";
import Locations from "./pages/Locations";

// Components
import Navigation from "./components/Navigation";
import Container from "./components/Container";
import Footer from "./components/Footer";

// SCSS
import "./styles/app.scss";

function App() {
  return (
    <div className="app">
      <Navigation />
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="characters" element={<Characters />} />
          <Route path="episodes" element={<Episodes />} />
          <Route path="locations" element={<Locations />} />
        </Routes>
      </Container>
      <Footer />
    </div>
  );
}

export default App;
