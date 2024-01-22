import { Toaster } from "react-hot-toast";
import { Outlet } from "react-router-dom";
import QuizHeader from "./Header/QuizHeader";

export default function QuizLayout() {
  return (
    <>
      <Toaster />
      <QuizHeader name="Test" />
      <Outlet />
    </>
  );
}
