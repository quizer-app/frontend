import { Link } from "react-router-dom";

export default function ListElement({
  children,
  href,
  auth,
}: {
  children?: React.ReactNode;
  href: string;
  auth?: boolean;
}) {
  return (
    <li className={`${auth ? "sm:hidden" : ""}`}>
      <Link
        className={`${auth ? "" : "lg:w-auto"} flex w-52 textHover`}
        to={href}
      >
        {children}
      </Link>
    </li>
  );
}
