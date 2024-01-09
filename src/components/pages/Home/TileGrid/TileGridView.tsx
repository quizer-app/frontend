import { QuizResponse } from "@/api/types/quiz";
import QuizTile from "./QuizTile";

export type TileGridViewProps = {
  quizes: QuizResponse[];
};

export default function TileGridView({ quizes } : TileGridViewProps) {
  return (
    <div className="mainContainer grid grid-cols-1 gap-4 lg:gap-6 md:grid-cols-2 xl:grid-cols-3">
      {quizes.map((el, id) => {
        return (
          <QuizTile
            quiz={el}
            key={id}
          />
        );
      })}
    </div>
  );
}
