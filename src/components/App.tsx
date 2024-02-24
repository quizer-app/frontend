import { Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout";
import QuizLayout from "./layout/QuizLayout";
import ForgotPassword from "./pages/Auth/ForgotPassword";
import PasswordReset from "./pages/Auth/PasswordReset";
import SignIn from "./pages/Auth/SignIn";
import SignUp from "./pages/Auth/SignUp";
import Verification from "./pages/Auth/Verification";
import Verified from "./pages/Auth/Verified";
import Dashboard from "./pages/Dashboard/Dashboard";
import Home from "./pages/Home/Home";
import Flashcards from "./pages/Quiz/Flashcards/Flashcards";
import Quiz from "./pages/Quiz/Quiz";
import Test from "./pages/Quiz/Test";
import QuizSearch from "./pages/QuizSearch/QuizSearch";
import PersistLogin from "./router/PersistLogin";
import RequireAuth from "./router/RequireAuth";

export default function App() {
  return (
    <Routes>
      <Route element={<PersistLogin />}>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/verification/:token" element={<Verification />} />
          <Route path="/verified" element={<Verified />} />
          <Route path="/password_reset" element={<PasswordReset />} />
          <Route path="/forgot_password" element={<ForgotPassword />} />

          <Route element={<RequireAuth />}>
            <Route path="/:userName" element={<Dashboard />} />
          </Route>

          <Route path="/quiz_search" element={<QuizSearch />} />
        </Route>
        <Route path="/" element={<QuizLayout />}>
          <Route path="/:userName/:quizSlug" element={<Quiz />} />
          <Route
            path="/:userName/:quizSlug/flashcards"
            element={<Flashcards />}
          />

          <Route path="/test" element={<Test />} />
        </Route>
      </Route>
    </Routes>
  );
}
