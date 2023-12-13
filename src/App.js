import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";

function App() {
  return (
    <div className="site-wrapper">
      <div>
        <Header />
        <Home className="site-content" />
      </div>
      <Footer />
    </div>
  );
}

export default App;
