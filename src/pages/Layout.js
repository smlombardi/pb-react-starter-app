import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Layout({ children }) {
  return (
    <div className="site-wrapper">
      <div>
        <Header />
        <main>{children}</main>
      </div>
      <Footer />
    </div>
  );
}
