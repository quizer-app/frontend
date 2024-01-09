import { api } from "@/api/axios";
import { QuestionResponse, QuizResponse } from "@/api/types/quiz";
import NotFound from "@/components/status/NotFound";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { useParams } from "react-router-dom";
import Category from "./Category";
import ControlBar from "./ControlBar";
import Flashcard from "./Flashcard";
import Term from "./Term";

export default function Quiz() {
  const [currTerm, setCurrTerm] = useState<number>(0);
  const { userName, quizSlug } = useParams();
  
  const { isLoading, isError, data } = useQuery({
    queryKey: ["quizes"],
    queryFn: () => api.get<QuizResponse>(`/api/v1/Quiz/${userName}/${quizSlug}`),
  });

  const getNumberOfQuestions = (questions: QuestionResponse[] | undefined) => {
    if(!questions) return 0;
    return questions.length;
  }

  const increment = () => {
    currTerm === getNumberOfQuestions(data?.data.questions) - 1
      ? setCurrTerm(0)
      : setCurrTerm(prev => prev + 1);
  };

  const decrement = () => {
    currTerm === 0
      ? setCurrTerm(getNumberOfQuestions(data?.data.questions) - 1)
      : setCurrTerm(prev => prev - 1);
  };

  return ( 
    <>
      {isError && <NotFound />}
      {isLoading && <div className="text-red-600">Loading...</div>}
      {!isError && !isLoading && <div className="bg-primary w-full text-white px-4 py-10 sm:py-12 md:py-16 lg:py-20">
        <div className="mx-auto rounded-md max-w-[592px] md:max-w-[720px] lg:max-w-[976px]">
          <h2 className="text-2xl font-bold mb-10 xl:text-3xl">{data?.data.name}</h2>
          <div className="flex flex-col gap-10 w-full mb-16">
            <div className="flex items-center justify-center h-[280px] sm:h-[320px] md:h-[360px] lg:h-[420px] [perspective:1000px]">
              <Flashcard question={data?.data.questions[currTerm]} />
            </div>

            <ControlBar
              curr={currTerm + 1}
              max={getNumberOfQuestions(data?.data.questions)}
              left={decrement}
              right={increment}
            />

            <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
              <Category text="Fiszki" />
              <Category text="Ucz się" />
              <Category text="Test" />
              <Category text="Dopasowania" />
            </div>
          </div>
          <div className="mb-16">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-lightBlue rounded-3xl"></div>
              <p className="font-semibold">{data?.data.userName}</p>
            </div>
            <p className="overflow-auto">
              {data?.data.description}
            </p>
          </div>
          <h3 className="text-xl font-bold mb-10 xl:text-2xl">
            Pojęcia w tym zestawie
          </h3>
          <div className="flex flex-col gap-5">
            {data?.data.questions.map((el, id) => {
              return <Term key={id} term={el.question} desc={el.answers[0].text} />;
            })}
          </div>
        </div>
      </div>
      }
    </>
  );
}
