import { Outlet } from "react-router-dom";
import { Header } from "./Header/Header";
import { Toaster } from "react-hot-toast";

export default function Layout() {
  return (
    <>
      <Toaster />
      <Header />
      <Outlet />
    </>
  );
}
