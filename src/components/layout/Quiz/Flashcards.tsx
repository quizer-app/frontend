import { Toaster } from "react-hot-toast";
import { Header } from "../Header/Header";
import { useState } from "react";
import { TermProps } from "./Term";
import ControlBar from "./ControlBar";
import Flashcard from "./Flashcard";

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
      <Header />
      <div className="bg-primary text-white w-full h-full fixed px-4 py-10 sm:py-12 md:py-16 lg:py-20">
        <div className="mx-auto rounded-md max-w-[592px] md:max-w-[720px] lg:max-w-[976px]">
          {/* <h2 className="text-2xl font-bold mb-10 xl:text-3xl">Karaluch</h2> */}
          <div className="flex flex-col gap-10 w-full mb-16">
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
      </div>
    </>
  );
}
