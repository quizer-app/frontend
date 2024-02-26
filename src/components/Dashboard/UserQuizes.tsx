import { paramsAtom, quizesAtom, updateParamsAtom } from "@/atoms/quizSearch";
import { QuizResponse } from "@/types/types/quiz";
import { useParams } from "@tanstack/react-router";
import { useAtom } from "jotai";
import { useEffect, useState } from "react";
import SearchInput from "../QuizSearch/SearchInput";
import Error from "../Status/Error";
import Loading from "../Status/Loading";
import QuizStripe from "./QuizStripe";

export default function UserQuizes() {
  const [{ isLoading, isError, data }] = useAtom(quizesAtom);
  const [input, setInput] = useState<string>("");
  const [, setParams] = useAtom(updateParamsAtom);
  const [params] = useAtom(paramsAtom);
  const { userName } = useParams();

  useEffect(() => {
    setParams({
      pageNumber: 1,
      pageSize: 6,
      sortColumn: "createdAt",
      sortOrder: "desc",
      searchTerm: "",
      userName: userName,
    });
  }, []);

  const increaseQuery = () => {
    const newSize = params.pageSize ? params.pageSize + 3 : 12;
    setParams({ pageSize: newSize });
  };

  return (
    <>
      {isLoading && <Loading />}
      {isError && <Error />}
      <SearchInput input={input} setInput={setInput} />
      <div className="flex flex-col gap-6">
        {data?.data.items.map((el: QuizResponse, id: number) => {
          return <QuizStripe quiz={el} key={id}></QuizStripe>;
        })}
      </div>
      {data?.data.hasNextPage ? (
        <div>
          <button onClick={increaseQuery} className="buttonPrimary">
            Load More
          </button>
        </div>
      ) : null}
    </>
  );
}
