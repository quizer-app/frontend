import { Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./page/Home";
import Login from "./page/Login";
import Register from "./page/Register";
import Users from "./page/Users";
import NotFound from "./status/NotFound";
import Unauthorized from "./status/Unauthorized";

export default function App() {
	return (
		<Routes>
			<Route path="/" element={<Layout />}>
				<Route path="login" element={<Login />} />
				<Route path="register" element={<Register />} />
				<Route path="unauthorized" element={<Unauthorized />} />
				<Route path="users" element={<Users />} />
				<Route path="/" element={<Home />} />

				{/* <Route element={<RequireAuth />}>
				</Route> */}

				<Route path="*" element={<NotFound />} />
			</Route>
		</Routes>
	);
}
