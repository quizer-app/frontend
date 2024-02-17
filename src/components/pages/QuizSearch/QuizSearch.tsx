import { useState } from "react";
import QuizTile from "../Home/TileGrid/QuizTile";
import Loading from "../Status/Loading";
import NotFound from "../Status/NotFound/NotFound";
import { useAtom } from "jotai";
import { quizesAtom, updateParamsAtom } from "@/atoms/quizSearch";
import { QuizResponse } from "@/api/types/quiz";

export default function QuizSearch() {
  const [input, setInput] = useState<string>("");
  const [{ isLoading, isError, data }] = useAtom(quizesAtom);
  const [, setParams] = useAtom(updateParamsAtom);

  const handleChange = (e: string) => {
    setInput(e);
    setParams({ searchTerm: e });
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
        <input
          onChange={e => handleChange(e.target.value)}
          value={input}
          className="bg-secondary rounded-md p-3 text-textPrimary focus:outline-none min-w-96"
          placeholder="Search for quizes..."
        />
      </div>
      <div className="bg-primary flex-col gap-16 w-full flex items-center justify-center py-14 md:py-16 lg:py-20">
        {isLoading && <Loading />}
        {isError && <NotFound />}
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
