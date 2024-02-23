import { twMerge } from "tailwind-merge";

interface PagingButtonProps {
  text: number | "NEXT" | "PREV" | "...";
  onClick?: () => void;
  current?: boolean;
  dots?: string;
}

export default function PagingButton({
  text,
  onClick,
  current,
  dots,
}: PagingButtonProps) {
  return (
    <>
      {dots === "BEFORE" ? (
        <button
          className="bg-secondary text-textPrimary text-sm font-semibold rounded-md min-w-10 min-h-10 px-3 py-2"
          // id={text === "PREV" ? -1 : text === "NEXT" ? 0 : text}
        >
          ...
        </button>
      ) : null}
      <button
        onClick={onClick}
        className={twMerge(
          "bg-secondary text-textPrimary text-sm font-semibold rounded-md min-w-10 min-h-10 px-3 py-2",
          current ? "bg-lightBlue text-white" : ""
        )}
        // id={text === "PREV" ? -1 : text === "NEXT" ? 0 : text}
      >
        {text}
      </button>
      {dots === "AFTER" ? (
        <button
          className="bg-secondary text-textPrimary text-sm font-semibold rounded-md min-w-10 min-h-10 px-3 py-2"
          // id={text === "PREV" ? -1 : text === "NEXT" ? 0 : text}
        >
          ...
        </button>
      ) : null}
    </>
  );
}
