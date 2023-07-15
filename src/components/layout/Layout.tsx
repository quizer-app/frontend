import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

export default function Layout() {
	return (
		<>
			<Navbar />
			<main className="lg:w-4/5 md:w-full mx-auto bg-blue-100 p-5 rounded-b-lg">
				<Outlet />
			</main>
		</>
	);
}
