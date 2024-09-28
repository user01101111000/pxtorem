import "./layout.css";
import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

const Layout = () => {
  return (
    <main className="layout">
      <Header />
      <Outlet />
      <Footer />
    </main>
  );
};

export default Layout;
