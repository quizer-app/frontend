import { Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout";
import Flashcards from "./pages/Quiz/Flashcards";
import Quiz from "./pages/Quiz/Quiz";
import Test from "./pages/Quiz/Test";
import ForgotPassword from "./pages/Auth/ForgotPassword";
import Home from "./pages/Home/Home";
import PasswordReset from "./pages/Auth/PasswordReset";
import SignIn from "./pages/Auth/SignIn";
import SignUp from "./pages/Auth/SignUp";
import Verification from "./pages/Auth/Verification";
import Verified from "./pages/Auth/Verified";
import PersistLogin from "./router/PersistLogin";
import RequireAuth from "./router/RequireAuth";
import NotFound from "./status/NotFound";

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

          {/* <Route path="/flashcards" element={<Flashcards />} /> */}
          {/* <Route element={<RequireAuth />}>
            <Route path="/users" element={<Users />} />
          </Route> */}

          <Route path="/:userName/:quizSlug" element={<Quiz />} />

          <Route path="*" element={<NotFound />} />
        </Route>
        <Route path="/flashcards" element={<Flashcards />} />
        <Route path="/test" element={<Test />} />
      </Route>
    </Routes>
  );
}
