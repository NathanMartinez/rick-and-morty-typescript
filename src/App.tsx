import { Routes, Route } from "react-router-dom";
import Container from "./components/Container";
import Navigation from "./components/Navigation";
import Home from "./components/Home";
import Characters from "./components/Characters";
import Episodes from "./components/Episodes";
import Locations from "./components/Locations";
import Footer from "./components/Footer";
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
