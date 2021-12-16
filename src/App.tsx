import Footer from "./components/Footer";
import Navigation from "./components/Navigation";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles/app.scss";

function App() {
  return (
    <div className="app">
      <Navigation />
      <Routes>
        {/* <Route path="/" element={<App />} /> */}
        {/* <Route path="expenses" element={<Expenses />} /> */}
        {/* <Route path="invoices" element={<Invoices />} /> */}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
