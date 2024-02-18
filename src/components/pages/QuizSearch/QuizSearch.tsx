import QuizTile from "../Home/TileGrid/QuizTile";
import Loading from "../Status/Loading";
import NotFound from "../Status/NotFound/NotFound";
import { useAtom } from "jotai";
import { quizesAtom, updateParamsAtom } from "@/atoms/quizSearch";
import { QuizResponse } from "@/api/types/quiz";
import FiltersBar from "./FiltersBar";
import { useState } from "react";

export default function QuizSearch() {
  const [{ isLoading, isError, data }] = useAtom(quizesAtom);
  const [input, setInput] = useState<string>("");
  const [, setParams] = useAtom(updateParamsAtom);

  const resetFilters = () => {
    setInput("");
    setParams({
      pageNumber: 1,
      pageSize: 9,
      sortColumn: "createdAt",
      sortOrder: "asc",
      searchTerm: "",
    });
  };

  // BUTTONS
  // const [numberOfPages] = useState<number>(10);
  // const [currPage, setCurrPage] = useState<number>(1);
  // const [elements] = useState<number[]>([1, 2, 3, 0, numberOfPages]);

  // const increment = () => {
  //   if (currPage !== numberOfPages) {
  //     setCurrPage(prev => prev + 1);
  //   }
  // };

  // const decrement = () => {
  //   if (currPage !== 1) {
  //     setCurrPage(prev => prev - 1);
  //   }
  // };

  return (
    <>
      <div className="bg-primary flex items-center justify-center gap-20 p-20">
        <FiltersBar input={input} setInput={setInput} />
      </div>
      <div className="bg-primary flex-col gap-16 w-full flex items-center justify-center py-14 md:py-16 lg:py-20">
        {isLoading && <Loading />}
        {isError && <NotFound />}
        {data?.data.items.length !== 0 ? (
          <div className="mainContainer grid grid-cols-1 gap-4 lg:gap-6 md:grid-cols-2 xl:grid-cols-3">
            {data?.data.items.map((el: QuizResponse, id: number) => {
              return (
                <QuizTile
                  quiz={el}
                  questionsAmount={el.numberOfQuestions}
                  key={id}
                />
              );
            })}
          </div>
        ) : (
          <div className="flex flex-col gap-6">
            <p className="text-center text-white text-3xl font-bold">
              No Quizes Found
            </p>
            <button onClick={resetFilters} className="buttonPrimary mx-auto">
              Reset Filters
            </button>
          </div>
        )}

        {/* <div className="flex gap-2">
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
        </div> */}
      </div>
    </>
  );
}
