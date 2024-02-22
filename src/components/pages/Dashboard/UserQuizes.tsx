import { QuizResponse } from "@/api/types/quiz";
import { quizesAtom } from "@/atoms/quizSearch";
import { useAtom } from "jotai";
import Loading from "../Status/Loading";
import Error from "../Status/Error";
import QuizStripe from "./QuizStripe";
import { useState } from "react";
import SearchInput from "../QuizSearch/SearchInput";

export default function UserQuizes() {
  const [{ isLoading, isError, data }] = useAtom(quizesAtom);

  const [input, setInput] = useState<string>("");

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
    </>
  );
}
