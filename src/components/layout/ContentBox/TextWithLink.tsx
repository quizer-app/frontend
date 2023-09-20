import { Link } from "react-router-dom";

export default function TextWithLink({
  children,
  link,
  path,
}: {
  children: React.ReactNode;
  link: string;
  path: string;
}) {
  return (
    <p className="text-textPrimary font-medium text-center">
      {children}
      <Link to={path} className="text-lightBlue">
        {" " + link}
      </Link>
    </p>
  );
}
