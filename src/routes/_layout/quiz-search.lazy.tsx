import { QuizResponse } from "@/api/types/quiz";
import { quizesAtom, updateParamsAtom } from "@/atoms/quizSearch";
import QuizTile from "@/components/Home/TileGrid/QuizTile";
import FiltersBar from "@/components/QuizSearch/FiltersBar";
import PagingBar from "@/components/QuizSearch/PagingBar";
import Loading from "@/components/Status/Loading";
import NotFound from "@/components/Status/NotFound/NotFound";
import { createLazyFileRoute } from "@tanstack/react-router";
import { useAtom } from "jotai";
import { useEffect, useState } from "react";

export const Route = createLazyFileRoute("/_layout/quiz-search")({
  component: QuizSearch,
});

function QuizSearch() {
  const [{ isLoading, isError, data }] = useAtom(quizesAtom);
  const [, setParams] = useAtom(updateParamsAtom);

  const [input, setInput] = useState<string>("");

  const resetFilters = () => {
    setInput("");
    setParams({
      pageNumber: 1,
      pageSize: 12,
      sortColumn: "name",
      sortOrder: "asc",
      searchTerm: "",
      userName: "",
    });
  };

  useEffect(() => {
    resetFilters();
  }, []);

  return (
    <>
      <div className="bg-primary flex items-center justify-center gap-20 p-20">
        <FiltersBar input={input} setInput={setInput} />
        {data?.data && <PagingBar quizes={data?.data} />}
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
