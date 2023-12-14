import { Routes, BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Item1 from "./pages/Item1";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/item1" element={<Item1 />} />

        <Route path="*" element={<div>PageNotFound</div>} />
      </Routes>
    </Router>
  );
}

export default App;
