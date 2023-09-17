import { Link } from "react-router-dom";

export default function NavLinks({ isOpen }: { isOpen: boolean }) {
  return (
    <div>
      <ul
        className={`${
          isOpen ? "flex" : "hidden"
        } flex-col border-[#959CB137] bg-[#1D2144]
          absolute right-4 top-20 rounded-sm border-[.5px] gap-[10px] p-5
          sm:gap-3 sm:top-[5.5rem] lg:bg-transparent lg:flex-row lg:static
          lg:border-none lg:flex lg:gap-7 lg:ml-3
          `}
      >
        <LiElement href="/">Home</LiElement>
        <LiElement href="/about">About</LiElement>
        <LiElement href="/users">Users</LiElement>
        <LiElement href="/support">Support</LiElement>
        <AuthElement href="/signin">Sign In</AuthElement>
        <AuthElement href="/signup">Sign Up</AuthElement>
      </ul>
    </div>
  );
}

function LiElement({
  children,
  href,
}: {
  href: string;
  children?: React.ReactNode;
}) {
  return (
    <li>
      <Link
        className="flex w-52 lg:w-auto hover:text-[#959cb1]"
        // className="lg:px-5 lg:py-auto lg:block lg:w-auto lg:h-auto"
        to={href}
      >
        {children}
      </Link>
    </li>
  );
}

function AuthElement({
  children,
  href,
}: {
  children?: React.ReactNode;
  href: string;
}) {
  return (
    <li className="sm:hidden">
      <Link className="flex w-52 hover:text-[#959CB1]" to={href}>
        {children}
      </Link>
    </li>
  );
}
