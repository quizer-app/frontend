import useQuizesPaging from "@/hooks/useQuizesPaging";
import QuizTile from "../Home/TileGrid/QuizTile";
import Loading from "../Status/Loading";
import NotFound from "../Status/NotFound/NotFound";
import PagingButton from "../Home/TileGrid/PagingButton";
import { useState } from "react";

export default function QuizSearch() {
  const { isLoading, isError, quiz } = useQuizesPaging({
    pageNumber: 1,
    pageSize: 6,
    sortColumn: "createdAt",
    sortOrder: "desc",
  });

  const [numberOfPages, setNumerOfPages] = useState<number>(10);
  const [currPage, setCurrPage] = useState<number>(1);
  const [elements, setElement] = useState<number[]>([
    1,
    2,
    3,
    0,
    numberOfPages,
  ]);

  const increment = () => {
    if (currPage !== numberOfPages) {
      setCurrPage(prev => prev + 1);
    }
  };

  const decrement = () => {
    if (currPage !== 1) {
      setCurrPage(prev => prev - 1);
    }
  };

  return (
    <>
      <div className="bg-primary flex items-center justify-center gap-20 p-20">
        <input
          className="bg-secondary rounded-md p-3 text-textPrimary focus:outline-none min-w-96"
          placeholder="Search for quizes..."
        ></input>
      </div>
      <div className="bg-primary flex-col gap-16 w-full flex items-center justify-center py-14 md:py-16 lg:py-20">
        {isLoading && <Loading />}
        {isError && <NotFound />}
        <div className="mainContainer grid grid-cols-1 gap-4 lg:gap-6 md:grid-cols-2 xl:grid-cols-3">
          {quiz?.items.map((el, id) => {
            return (
              <QuizTile
                quiz={el}
                questionsAmount={el.numberOfQuestions}
                key={id}
              />
            );
          })}
        </div>
        <div className="flex gap-2">
          <PagingButton text="PREV" onClick={decrement} />
          {elements.map((el, id) => {
            return (
              <PagingButton
                text={el}
                checked={currPage === el}
                onClick={() => {
                  setCurrPage(el);
                }}
                key={id}
              />
            );
          })}
          <PagingButton text="NEXT" onClick={increment} />
        </div>
      </div>
    </>
  );
}
