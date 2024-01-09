import { Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout";
import Flashcards from "./layout/Quiz/Flashcards";
import Quiz from "./layout/Quiz/Quiz";
import Test from "./layout/Quiz/Test";
import ForgotPassword from "./page/ForgotPassword";
import Home from "./page/Home";
import PasswordReset from "./page/PasswordReset";
import SignIn from "./page/SignIn";
import SignUp from "./page/SignUp";
import Users from "./page/Users";
import Verification from "./page/Verification";
import Verified from "./page/Verified";
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
          <Route element={<RequireAuth />}>
            <Route path="/users" element={<Users />} />
          </Route>

          <Route path="/:userName/:quizSlug" element={<Quiz />} />

          <Route path="*" element={<NotFound />} />
        </Route>
        <Route path="/flashcards" element={<Flashcards />} />
        <Route path="/test" element={<Test />} />
      </Route>
    </Routes>
  );
}
