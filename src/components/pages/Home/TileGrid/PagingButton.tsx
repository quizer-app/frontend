import { twMerge } from "tailwind-merge";

interface PagingButtonProps {
  text: string;
  checked?: boolean;
}

export default function PagingButton({ text, checked }: PagingButtonProps) {
  return (
    <button
      className={twMerge(
        "bg-secondary text-textPrimary text-sm font-semibold rounded-md transition hover:bg-lightBlue hover:text-white min-w-10 min-h-10 px-3 py-2",
        checked ? "border-[1px] border-textPrimary/30" : ""
      )}
    >
      {text}
    </button>
  );
}
