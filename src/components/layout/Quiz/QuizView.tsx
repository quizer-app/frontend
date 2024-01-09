import { QuestionResponse, QuizResponse } from "@/api/types/quiz";
import { useState } from "react";
import Category from "./Category";
import ControlBar from "./ControlBar";
import Flashcard from "./Flashcard";
import Term from "./Term";

export type QuizViewProps = {
  quiz: QuizResponse;
};

export default function QuizView({ quiz }: QuizViewProps) {
  const [currTerm, setCurrTerm] = useState<number>(0);

  const getNumberOfQuestions = (questions: QuestionResponse[] | undefined) => {
    if(!questions) return 0;
    return questions.length;
  }

  const increment = () => {
    currTerm === getNumberOfQuestions(quiz.questions) - 1
      ? setCurrTerm(0)
      : setCurrTerm(prev => prev + 1);
  };

  const decrement = () => {
    currTerm === 0
      ? setCurrTerm(getNumberOfQuestions(quiz.questions) - 1)
      : setCurrTerm(prev => prev - 1);
  };

  return ( 
    <div className="bg-primary w-full text-white px-4 py-10 sm:py-12 md:py-16 lg:py-20">
      <div className="mx-auto rounded-md max-w-[592px] md:max-w-[720px] lg:max-w-[976px]">
        <h2 className="text-2xl font-bold mb-10 xl:text-3xl">{quiz.name}</h2>
        <div className="flex flex-col gap-10 w-full mb-16">
          <div className="flex items-center justify-center h-[280px] sm:h-[320px] md:h-[360px] lg:h-[420px] [perspective:1000px]">
            <Flashcard question={quiz.questions[currTerm]} />
          </div>

          <ControlBar
            curr={currTerm + 1}
            max={getNumberOfQuestions(quiz.questions)}
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
            <p className="font-semibold">{quiz.userName}</p>
          </div>
          <p className="overflow-auto">
            {quiz.description}
          </p>
        </div>
        <h3 className="text-xl font-bold mb-10 xl:text-2xl">
          Pojęcia w tym zestawie
        </h3>
        <div className="flex flex-col gap-5">
          {quiz.questions.map((el, id) => {
            return <Term key={id} term={el.question} desc={el.answers[0].text} />;
          })}
        </div>
      </div>
    </div>
  );
}
