import { Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./page/Home";
import SignIn from "./page/SignIn";
import Test from "./page/Test";
import Users from "./page/Users";
import PersistLogin from "./router/PersistLogin";
import RequireAuth from "./router/RequireAuth";
import NotFound from "./status/NotFound";

export default function App() {
	return (
		<Routes>
			<Route element={<PersistLogin />}>
				<Route path="/" element={<Layout />}>
					<Route path="/" element={<Home />} />
					<Route path="signin" element={<SignIn />} />

					<Route path="test" element={<Test />} />

					<Route element={<RequireAuth />}>
						<Route path="users" element={<Users />} />
					</Route>

					<Route path="*" element={<NotFound />} />
				</Route>
			</Route>
		</Routes>
	);
}
