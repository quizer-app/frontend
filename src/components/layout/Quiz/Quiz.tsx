import { useState } from "react";
import Category from "./Category";
import Term from "./Term";
import { TermProps } from "./Term";
import ControlBar from "./ControlBar";
import Flashcard from "./Flashcard";

export default function Quiz() {
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
    <div className="bg-primary w-full text-white px-4 py-10 sm:py-12 md:py-16 lg:py-20">
      <div className="mx-auto rounded-md max-w-[592px] md:max-w-[720px] lg:max-w-[976px] bg-red-500">
        <h2 className="text-2xl font-bold mb-10 xl:text-3xl">Karaluch</h2>
        <div className="flex flex-col gap-10 w-full mb-16 bg-blue-400">
          <div className="flex items-center justify-center h-[280px] sm:h-[320px] md:h-[360px] lg:h-[420px] [perspective:1000px]">
            <Flashcard currTerm={currTerm} terms={terms} />
          </div>

          <ControlBar
            curr={currTerm + 1}
            max={terms.length}
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
            <p className="font-semibold">Szymon Budziak</p>
          </div>
          <p className="overflow-auto">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
            illum explicabo necessitatibus fugiat soluta adipisci porro sit
            atque. Repellendus magnam harum iure eaque atque aspernatur sapiente
            obcaecati ad impedit et amet tempore mollitia quis quasi nihil
            recusandae distinctio, voluptatem pariatur illo reprehenderit illum
            esse fuga incidunt facere. Soluta, inventore doloribus.
          </p>
        </div>
        <h3 className="text-xl font-bold mb-10 xl:text-2xl">
          Pojęcia w tym zestawie
        </h3>
        <div className="flex flex-col gap-5">
          {terms.map((el, id) => {
            return <Term key={id} term={el.term} desc={el.desc} />;
          })}
        </div>
      </div>
    </div>
  );
}
