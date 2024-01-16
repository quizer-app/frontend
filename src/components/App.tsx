import { Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout";
import Quiz from "./pages/Quiz/Quiz";
import Test from "./pages/Quiz/Test";
import ForgotPassword from "./pages/Auth/ForgotPassword";
import PasswordReset from "./pages/Auth/PasswordReset";
import SignIn from "./pages/Auth/SignIn";
import SignUp from "./pages/Auth/SignUp";
import Verification from "./pages/Auth/Verification";
import Verified from "./pages/Auth/Verified";
import Home from "./pages/Home/Home";
import PersistLogin from "./router/PersistLogin";
import Flashcards from "./pages/Quiz/Flashcards/Flashcards";
import NotFound from "./pages/Status/NotFound";
import QuizLayout from "./layout/QuizLayout";

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

          {/* <Route element={<RequireAuth />}>
            <Route path="/users" element={<Users />} />
          </Route> */}

          <Route path="/:userName/:quizSlug" element={<Quiz />} />

          <Route path="*" element={<NotFound />} />
        </Route>

        <Route path="/" element={<QuizLayout />}>
          <Route path="/flashcards" element={<Flashcards />} />
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
