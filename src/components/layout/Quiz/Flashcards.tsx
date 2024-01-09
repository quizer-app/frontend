import { useState } from "react";
import { Toaster } from "react-hot-toast";
import ControlBar from "./ControlBar";
import Flashcard from "./Flashcard";
import QuizHeader from "./QuizHeader";
import { TermProps } from "./Term";

export default function Flashcards() {
  const [currTerm, setCurrTerm] = useState<number>(0);

  const terms: TermProps[] = [
    { term: "Quicksort1", desc: "XXXXXXXXX1" },
    { term: "Quicksort2", desc: "XXXXXXXXX2" },
    { term: "Quicksort3", desc: "XXXXXXXXX3" },
    { term: "Quicksort4", desc: "XXXXXXXXX4" },
    { term: "Quicksort5", desc: "XXXXXXXXX5" },
  ];

  const increment = () => {
    currTerm === terms.length - 1
      ? setCurrTerm(0)
      : setCurrTerm(prev => prev + 1);
  };

  const decrement = () => {
    currTerm === 0
      ? setCurrTerm(terms.length - 1)
      : setCurrTerm(prev => prev - 1);
  };
  return (
    <>
      <Toaster />
      <QuizHeader name={"Karaluch"} />
      <div className="bg-primary text-white fixed w-full h-[100vh] px-4 py-14 sm:py-16 md:py-20 lg:py-24">
        <div className="mx-auto rounded-md max-w-[592px] md:max-w-[720px] lg:max-w-[976px]">
          <div className="flex flex-col gap-10 w-full mb-16">
            <div className="flex items-center justify-center h-[420px] sm:h-[460px] md:h-[460px] lg:h-[500px] [perspective:1000px]">
              <Flashcard currTerm={currTerm} question={terms} />
            </div>

            <ControlBar
              curr={currTerm + 1}
              max={terms.length}
              left={decrement}
              right={increment}
            />
          </div>
        </div>
      </div>
    </>
  );
}
