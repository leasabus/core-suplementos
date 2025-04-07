import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<HomePage />} />
        <Route path="/service" element={<HomePage />} />
        <Route path="/contact" element={<HomePage />} />
      </Routes>
    </Router>
  );
}

export default App;
