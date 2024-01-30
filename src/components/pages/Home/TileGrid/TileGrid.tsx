import Loading from "../../Status/Loading";
import { QuizResponse } from "@/api/types/quiz";
import QuizTile from "./QuizTile";
import NotFound from "../../Status/NotFound/NotFound";
import useQuizesPaging from "@/hooks/useQuizesPaging";
import PagingButton from "./PagingButton";
// import { useState } from "react";

export type TileGridViewProps = {
  quizes: QuizResponse[];
};

export default function TileGrid() {
  const { isLoading, isError, quiz } = useQuizesPaging({
    pageNumber: 1,
    pageSize: 3,
    sortColumn: "createdAt",
    sortOrder: "desc",
  });

  // // get this for query
  // const numberOfPages = 100;
  // const [elements, setElements] = useState<number[]>(
  //   Array.from({ length: numberOfPages }, (_, index) => index + 1)
  // );

  // const maxButtons = 5;
  // const currButton = 37;

  return (
    <section className="bg-primary flex-col gap-16 w-full flex items-center justify-center py-14 md:py-16 lg:py-20">
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
        <PagingButton text="<<" />

        <PagingButton text=">>" />
      </div>
    </section>
  );
}
