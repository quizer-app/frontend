import { Toaster } from "react-hot-toast";
import { useState } from "react";
import { TermProps } from "./Term";
import ControlBar from "./ControlBar";
import Flashcard from "./Flashcard";
import QuizHeader from "./QuizHeader";

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

      {/* <div className="bg-primary text-white w-full h-full fixed px-4 flex items-center">
        <div className="mx-auto rounded-md w-[592px] md:w-[720px] lg:w-[976px] h-[50%]">
          <div className="flex flex-col gap-10">
            <div className="flex items-center justify-center h-[500px] sm:h-[320px] md:h-[360px] lg:h-[420px] [perspective:1000px]">
              <Flashcard currTerm={currTerm} terms={terms} />
            </div>

            <ControlBar
              curr={currTerm + 1}
              max={terms.length}
              left={decrement}
              right={increment}
            />
          </div>
        </div>
      </div> */}
      <div className="bg-primary text-white w-[100vw] h-[100vh] flex flex-col">
        <QuizHeader name={"Karaluch"} />
        <div className="grow flex flex-col justify-center items-center gap-10 px-4">
          <div className="flex items-center justify-center h-[280px] sm:h-[320px] md:h-[360px] lg:h-[420px] [perspective:1000px]">
            <Flashcard currTerm={currTerm} terms={terms} />
          </div>

          <ControlBar
            curr={currTerm + 1}
            max={terms.length}
            left={decrement}
            right={increment}
          />
        </div>
      </div>
    </>
  );
}
