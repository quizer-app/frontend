import { Outlet } from "react-router-dom";
import { Header } from "./Header/Header";

export default function Layout() {
	return (
		<>
			{/* <Navbar /> */}
			<Header />
			<main className="container mx-auto">
				<Outlet />
			</main>
		</>
	);
}
