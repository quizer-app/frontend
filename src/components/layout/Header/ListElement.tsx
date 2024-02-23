import { Link } from "react-router-dom";

interface ListElementProps {
  children?: React.ReactNode;
  href: string;
  auth?: boolean;
  onClick: () => void;
}

export default function ListElement({
  children,
  href,
  auth,
  onClick,
}: ListElementProps) {
  return (
    <li className={`${auth ? "sm:hidden" : ""}`}>
      <Link
        className={`${auth ? "" : "lg:w-auto"} flex w-52 textHover`}
        onClick={onClick}
        to={href}
      >
        {children}
      </Link>
    </li>
  );
}
