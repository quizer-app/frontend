import { Link } from "react-router-dom";

interface CategoryProps {
  text: string;
  to?: string;
  state?: { term: number };
}

export default function Category({ text, to, state }: CategoryProps) {
  return (
    <Link
      state={state}
      to={to ? to : "/"}
      className="bg-secondary flex items-center gap-3 rounded-md px-4 py-3 font-medium w-full
                    max-w-[592px] sm:max-w-[500px] hover:bg-opacity-90"
    >
      <div className="bg-lightBlue w-8 h-8 rounded-md"></div>
      {text}
    </Link>
  );
}
