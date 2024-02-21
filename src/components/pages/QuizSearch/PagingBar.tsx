import { PaginatedQuizResponse } from "@/api/types/quiz";
import PagingButton from "./PagingButton";
import { paramsAtom, updateParamsAtom } from "@/atoms/quizSearch";
import { useAtom } from "jotai";

interface PagingBarProps {
  quizes: PaginatedQuizResponse;
}

export default function PagingBar({ quizes }: PagingBarProps) {
  const [params] = useAtom(paramsAtom);
  const [, setParams] = useAtom(updateParamsAtom);
  const elements = Array.from(
    Array(quizes?.totalCount ? quizes.totalCount : 1),
    (_, index) => index + 1
  );

  const setCurrPage = (action: number | "increment" | "decrement") => {
    if (typeof action === "number") {
      setParams({ pageNumber: action });
    } else if (
      action === "decrement" &&
      params?.pageNumber &&
      quizes.hasPreviousPage
    ) {
      setParams({ pageNumber: params.pageNumber - 1 });
    } else if (
      action === "increment" &&
      params?.pageNumber &&
      quizes.hasNextPage
    ) {
      setParams({ pageNumber: params.pageNumber + 1 });
    }
  };

  const isDisplayed = (n: number) => {
    let currPage = 1;
    let maxPage = 1;

    if (quizes?.pageNumber) {
      currPage = quizes.pageNumber;
      maxPage = quizes.totalPages;
    }

    if (
      maxPage <= 6 ||
      Math.abs(currPage - n) <= 1 ||
      n === 1 ||
      n === maxPage
    ) {
      return true;
    } else if (currPage === maxPage && n + 2 === maxPage) {
      return true;
    } else if (currPage === 1 && n === 3) {
      return true;
    }

    return false;
  };

  return (
    <div className="flex gap-2 text-white">
      <PagingButton text="PREV" onClick={() => setCurrPage("decrement")} />

      {elements
        .slice(0, quizes?.totalPages ? quizes.totalPages : 1)
        .map((el, id) => {
          return isDisplayed(el) ? (
            <PagingButton
              text={el}
              onClick={() => setCurrPage(el)}
              current={
                quizes?.pageNumber !== null &&
                quizes?.pageNumber !== undefined &&
                id + 1 === quizes.pageNumber
              }
              dots={
                quizes?.pageNumber && quizes.pageNumber >= 4 && el === 1
                  ? "AFTER"
                  : quizes?.pageNumber &&
                      quizes.pageNumber <= quizes.totalPages - 3 &&
                      el === quizes.totalPages
                    ? "BEFORE"
                    : ""
              }
            />
          ) : null;
        })}

      <PagingButton text="NEXT" onClick={() => setCurrPage("increment")} />
    </div>
  );
}
