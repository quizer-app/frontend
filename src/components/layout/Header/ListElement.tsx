import { GetQuizesQueryParams } from "@/types/schema/quizSearchSchema";
import { Link } from "@tanstack/react-router";

interface ListElementProps {
  children?: React.ReactNode;
  href: string;
  auth?: boolean;
  onClick: () => void;
  search?: GetQuizesQueryParams;
}

export default function ListElement({
  children,
  href,
  auth,
  onClick,
  search,
}: ListElementProps) {
  return (
    <li className={`${auth ? "sm:hidden" : ""}`}>
      <Link
        className={`${auth ? "" : "lg:w-auto"} flex w-52 textHover`}
        onClick={onClick}
        to={href}
        search={search}
      >
        {children}
      </Link>
    </li>
  );
}
