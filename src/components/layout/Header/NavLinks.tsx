import { Link } from "react-router-dom";

interface NavLinksProps {
	isOpen: boolean;
}

export default function NavLinks({ isOpen }: NavLinksProps) {
	return (
		<div>
			<nav>
				<ul
					className={`${
						isOpen ? "flex" : "hidden"
					} justify-center items-center ml-5 border-[#959cb137] 
            bg-[#1D2144] flex-col right-[6%] top-[88px] absolute
              rounded-md w-[250px] h-[274px] sm:h-[194px] border-[.5px]
              lg:bg-transparent lg:flex-row lg:right-auto lg:top-auto lg:static
              lg:rounded-none lg:w-auto lg:h-auto lg:border-none lg:flex lg:text-[17px]`}>
					<LiElement href="/">Home</LiElement>
					<LiElement href="/about">About</LiElement>
					<LiElement href="/blog">Blog</LiElement>
					<LiElement href="/support">Support</LiElement>
					<AuthElement href="/signin">Sign In</AuthElement>
					<AuthElement href="/signup">Sign Up</AuthElement>
				</ul>
			</nav>
		</div>
	);
}

interface LiElementProps {
	href: string;
	children?: React.ReactNode;
}

function LiElement({ children, href }: LiElementProps) {
	return (
		<li>
			<Link
				className="py-2 flex w-[200px] h-[40px] lg:py-auto lg:block lg:w-auto lg:h-auto lg:px-5"
				to={href}>
				{children}
			</Link>
		</li>
	);
}

interface AuthElementProps {
	children?: React.ReactNode;
	href: string;
}

function AuthElement({ children, href }: AuthElementProps) {
	return (
		<li className="sm:hidden">
			<Link className="py-2 flex w-[200px] h-[40px]" to={href}>
				{children}
			</Link>
		</li>
	);
}
