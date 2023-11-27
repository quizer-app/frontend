import { Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import QuizHeader from "./Quiz/QuizHeader";

export default function QuizLayout() {
  return (
    <>
      <Toaster />
      <QuizHeader />
      <Outlet />
    </>
  );
}
