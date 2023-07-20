import { Link } from "react-router-dom";
import NavbarLink from "./NavbarLink";

export default function Navbar() {
	const links = [
		{
			to: "/",
			text: "Home",
		},
		{
			to: "/users",
			text: "Users",
		},
	];

	return (
		<div className="navbar bg-base-300 drop-shadow-2xl rounded-3xl px-5 w-[99.5%] my-2 mx-auto">
			<div className="navbar-start">
				<div className="dropdown">
					<label tabIndex={0} className="btn btn-ghost lg:hidden">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-5 w-5"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor">
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M4 6h16M4 12h8m-8 6h16"
							/>
						</svg>
					</label>
					<ul
						tabIndex={0}
						className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
						{links.map((link) => (
							<NavbarLink key={link.to} to={link.to}>
								{link.text}
							</NavbarLink>
						))}
					</ul>
				</div>
				<a className="btn btn-ghost normal-case text-xl">Quizer</a>
			</div>
			<div className="navbar-center hidden lg:flex">
				<ul className="menu menu-horizontal px-1">
					{links.map((link) => (
						<NavbarLink key={link.to} to={link.to}>
							{link.text}
						</NavbarLink>
					))}
				</ul>
			</div>
			<div className="navbar-end">
				<Link className="btn btn-info rounded-2xl mr-1" to="/login">
					Login
				</Link>
				<Link className="btn btn-success rounded-2xl" to="/register">
					Register
				</Link>
			</div>
		</div>
	);
}
