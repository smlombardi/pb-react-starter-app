import Header from "../components/Header";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

export default function Layout({ children }) {
  return (
    <div className="site-wrapper">
      <div>
        <Header />
        <main>
          <Outlet />
        </main>
      </div>
      <Footer />
    </div>
  );
}
