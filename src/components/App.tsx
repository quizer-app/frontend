import { Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./page/Home";
import SignIn from "./page/SignIn";
import Test from "./page/Test";
import Users from "./page/Users";
import PersistLogin from "./router/PersistLogin";
import RequireAuth from "./router/RequireAuth";
import NotFound from "./status/NotFound";
import SignUp from "./page/SignUp";
import Verification from "./page/Verification";
import Verified from "./page/Verified";
import PasswordReset from "./page/PasswordReset";
import ForgotPassword from "./page/ForgotPassword";
import Quiz from "./page/Quiz";

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
          <Route path="/quiz" element={<Quiz />} />

          <Route path="/test" element={<Test />} />

          <Route element={<RequireAuth />}>
            <Route path="/users" element={<Users />} />
          </Route>

          <Route path="*" element={<NotFound />} />
        </Route>
      </Route>
    </Routes>
  );
}
