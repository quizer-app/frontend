import { paramsAtom, updateParamsAtom } from "@/atoms/quizSearch";
import { useAtom } from "jotai";
import { twMerge } from "tailwind-merge";

interface PageSizeButtonProps {
  pageSize: number;
}

export default function PageSizeButton({ pageSize }: PageSizeButtonProps) {
  const [, setParams] = useAtom(updateParamsAtom);
  const [params] = useAtom(paramsAtom);

  return (
    <button
      className={twMerge(
        "buttonSecondary w-12 h-12",
        params.pageSize === pageSize ? "bg-lightBlue" : "bg-secondary"
      )}
      onClick={() => setParams({ pageSize: pageSize })}
    >
      {pageSize}
    </button>
  );
}
