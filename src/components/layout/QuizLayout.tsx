import { Toaster } from "react-hot-toast";
import { Outlet } from "react-router-dom";
import QuizHeader from "./Header/QuizHeader";
// import Background from "./Background/Background";

export default function QuizLayout() {
  return (
    <>
      <Toaster />
      <QuizHeader />
      {/* <Background /> */}
      <Outlet />
    </>
  );
}
