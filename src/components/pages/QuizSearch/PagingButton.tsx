import { twMerge } from "tailwind-merge";

interface PagingButtonProps {
  text: string | number;
  onClick: () => void;
  checked?: boolean;
}

export default function PagingButton({
  text,
  checked,
  onClick,
}: PagingButtonProps) {
  return (
    <button
      onClick={onClick}
      className={twMerge(
        "bg-secondary text-textPrimary text-sm font-semibold rounded-md transition  min-w-10 min-h-10 px-3 py-2",
        checked ? "border-[1px] border-textPrimary/30" : "",
        text !== 0
          ? "hover:border-0 hover:bg-lightBlue hover:text-white"
          : "cursor-not-allowed"
      )}
    >
      {text !== 0 ? text : "..."}
    </button>
  );
}
