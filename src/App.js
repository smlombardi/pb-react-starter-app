import { Routes, BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<div>PageNotFound</div>} />
      </Routes>
    </Router>
  );
}

export default App;
