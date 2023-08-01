import { Outlet } from "react-router-dom";
import { Header } from "./Header/Header";

export default function Layout() {
	return (
		<>
			<Header />

			<section className="pt-36 flex justify-center font-primary">
				<div className="container text-white">
					<div className="flex flex-wrap">
						<Outlet />
					</div>
				</div>
				<div className="bg-primary absolute top-0 right-0 w-full h-[300vh] -z-50"></div>
			</section>
		</>
	);
}
