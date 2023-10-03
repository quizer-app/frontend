import FillHeight from "../layout/Other/FillHeight";
import QuizTile from "../layout/QuizGrid/QuizTile";

export default function Home() {
  return (
    <div className="bg-primary w-full flex items-center justify-center py-16 px-4">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
        <QuizTile />
        <QuizTile />
        <QuizTile />
        <QuizTile />
        <QuizTile />
        <QuizTile />
      </div>
    </div>
  );
}
