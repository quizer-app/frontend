import { PaginatedQuizResponse } from "@/api/types/quiz";
import PagingButton from "./PagingButton";
import { paramsAtom, updateParamsAtom } from "@/atoms/quizSearch";
import { useAtom } from "jotai";

interface PagingBarProps {
  quizes: PaginatedQuizResponse;
}

export default function PagingBar({ quizes }: PagingBarProps) {
  const [, setParams] = useAtom(updateParamsAtom);
  const [params] = useAtom(paramsAtom);

  const setCurrPage = (n: number) => {
    setParams({ pageNumber: n });
  };

  const decrement = () => {
    if (params?.pageNumber && quizes.hasPreviousPage) {
      setCurrPage(params.pageNumber - 1);
    }
  };
  const increment = () => {
    if (params?.pageNumber && quizes.hasNextPage) {
      setCurrPage(params.pageNumber + 1);
    }
  };

  return (
    <div className="flex gap-2 text-white">
      {params.pageNumber}

      <PagingButton text="PREV" onClick={decrement} />
      <PagingButton text="NEXT" onClick={increment} />
    </div>
  );
}
