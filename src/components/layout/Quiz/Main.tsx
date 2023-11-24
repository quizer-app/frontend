import { useState } from "react";
import Category from "./Category";
import Term from "./Term";
import { TermProps } from "./Term";

export default function Main() {
  const [currTerm, setCurrTerm] = useState<number>(0);
  const [isFlipped, setIsFlipped] = useState<boolean>(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  const terms: TermProps[] = [
    {
      term: "Quicksortdw",
      desc: "WDA WDs fers graadw fdh ret ger gerf wdw d  dwadwadawdaw  dwadwadwa  wdwadawddwad wadwaddgef rgergre g45yt45y455 6utyiu76u gr",
    },
    { term: "Quicksort", desc: "WDAWDsfersgretgergregerg" },
    { term: "Quicksort", desc: "WDAWDsfersgretgergregerg" },
    { term: "Quicksort", desc: "WDAWDsfersgret gergregerg" },
    { term: "Quicksort", desc: "WDAWDsfersgretgergregerg" },
  ];

  return (
    <>
      <h2 className="text-2xl font-bold mb-10 xl:text-3xl">Karaluch</h2>
      <div className="flex flex-col gap-10 w-full mb-16">
        <div className="flex items-center justify-center h-[280px] sm:h-[320px] md:h-[360px] lg:h-[420px]">
          <button
            onClick={handleFlip}
            className={`w-full h-full transition-transform duration-300 [transform-style:preserve-3d] ${
              isFlipped ? `[transform:rotateY(180deg)]` : ``
            }`}
          >
            <div className="bg-secondary flex items-center justify-center rounded-md p-4 absolute w-full h-full [backface-visibility:hidden]">
              <p className="text-xl sm:text-2xl xl:text-3xl">
                {terms[currTerm].term}
              </p>
            </div>
            <div className="bg-secondary flex items-center justify-center rounded-md p-4 w-full h-full overflow-auto [backface-visibility:hidden] [transform:rotateY(180deg)]">
              <p className="text-xl sm:text-2xl xl:text-3xl">
                {terms[currTerm].desc}
              </p>
            </div>
          </button>
        </div>

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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat illum
          explicabo necessitatibus fugiat soluta adipisci porro sit atque.
          Repellendus magnam harum iure eaque atque aspernatur sapiente
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
    </>
  );
}
