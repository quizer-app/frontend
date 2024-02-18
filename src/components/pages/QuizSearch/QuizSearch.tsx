import QuizTile from "../Home/TileGrid/QuizTile";
import Loading from "../Status/Loading";
import NotFound from "../Status/NotFound/NotFound";
import { useAtom } from "jotai";
import { paramsAtom, quizesAtom, updateParamsAtom } from "@/atoms/quizSearch";
import { QuizResponse } from "@/api/types/quiz";
import FiltersBar from "./FiltersBar";
import { useState } from "react";
import PagingBar from "./PagingBar";

export default function QuizSearch() {
  const [{ isLoading, isError, data }] = useAtom(quizesAtom);
  const [, setParams] = useAtom(updateParamsAtom);
  const [params] = useAtom(paramsAtom);

  const [input, setInput] = useState<string>(
    params.searchTerm ? params.searchTerm : ""
  );

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

  return (
    <>
      <div className="bg-primary flex items-center justify-center gap-20 p-20">
        <FiltersBar input={input} setInput={setInput} />
        <PagingBar quizes={data?.data} />
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
      </div>
    </>
  );
}
