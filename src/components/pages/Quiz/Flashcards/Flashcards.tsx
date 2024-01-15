// import { Toaster } from "react-hot-toast";
// import { useState } from "react";
// import Flashcard from "./Flashcard";
// import ControlBar from "../ControlBar";
// import { QuizResponse } from "@/api/types/quiz";

import GetQuizData from "@/hooks/getQuizData";

// interface FlashcardsProps {
//   quiz: QuizResponse;
// }

export default function Flashcards() {
  const [{ data }] = GetQuizData();

  return (
    <div className="text-red-600 text-3xl font-bold">
      {JSON.stringify(data?.data.questions[0].question)}
    </div>
  );
  // const [currTerm, setCurrTerm] = useState<number>(0);

  // const increment = () => {
  //   currTerm === quiz.questions.length - 1
  //     ? setCurrTerm(0)
  //     : setCurrTerm(prev => prev + 1);
  // };

  // const decrement = () => {
  //   currTerm === 0
  //     ? setCurrTerm(quiz.questions.length - 1)
  //     : setCurrTerm(prev => prev - 1);
  // };

  // return (
  //   <>
  //     <Toaster />
  //     <div className="bg-primary text-white fixed w-full h-[100vh] px-4 py-12 sm:py-16 md:py-20 lg:py-24">
  //       <div className="mx-auto rounded-md max-w-[592px] md:max-w-[720px] lg:max-w-[976px]">
  //         <div className="flex flex-col gap-10 w-full mb-16">
  //           <div className="flex items-center justify-center h-[420px] sm:h-[460px] md:h-[460px] lg:h-[500px] [perspective:1000px]">
  //             <Flashcard questions={quiz.questions[currTerm]} />
  //           </div>

  //           <ControlBar
  //             curr={currTerm + 1}
  //             max={quiz.questions.length}
  //             left={decrement}
  //             right={increment}
  //           />
  //         </div>
  //       </div>
  //     </div>
  //   </>
  // );
}
