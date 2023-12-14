import { Routes, BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";

import Layout from "./pages/Layout";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
        </Route>

        <Route path="*" element={<div>PageNotFound</div>} />
      </Routes>
    </Router>
  );
}

export default App;
