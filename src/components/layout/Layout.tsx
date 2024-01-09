import { Outlet } from "react-router-dom";
import { Header } from "./Header/Header";
import { Toaster } from "react-hot-toast";
import Footer from "./Footer/Footer";

export default function Layout() {
  return (
    <>
      <Toaster />
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}
