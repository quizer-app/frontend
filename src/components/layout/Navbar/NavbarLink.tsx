import { Link } from "react-router-dom";

interface NavbarLinkProps {
	to: string;
	target?: string;
	rel?: string;
	children: React.ReactNode;
}

export default function NavbarLink({
	to,
	target,
	rel,
	children,
}: NavbarLinkProps) {
	return (
		<li>
			<Link to={to} target={target} rel={rel}>
				{children}
			</Link>
		</li>
	);
}
