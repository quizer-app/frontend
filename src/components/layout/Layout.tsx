import { Outlet } from "react-router-dom";
import Content from "./Content";
import { Header } from "./Header/Header";
import { Toaster } from "react-hot-toast";

export default function Layout() {
  return (
    <>
      <Toaster />
      <Header />

      <Content>
        <Outlet />
      </Content>
    </>
  );
}
