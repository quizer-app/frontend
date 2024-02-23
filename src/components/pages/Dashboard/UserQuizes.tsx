import { QuizResponse } from "@/api/types/quiz";
import { paramsAtom, quizesAtom, updateParamsAtom } from "@/atoms/quizSearch";
import { useAtom } from "jotai";
import Loading from "../Status/Loading";
import Error from "../Status/Error";
import QuizStripe from "./QuizStripe";
import { useEffect, useState } from "react";
import SearchInput from "../QuizSearch/SearchInput";
import { useParams } from "react-router-dom";

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
