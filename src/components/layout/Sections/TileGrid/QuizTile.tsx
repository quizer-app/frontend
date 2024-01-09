import { QuizResponse } from "@/api/types/quiz";
import { formatDate } from "@/utils/date";
import { Link } from "react-router-dom";
import img from "../../../../assets/images/office.jpg";

type QuizTileProps = {
  quiz: QuizResponse;
};

export default function QuizTile({ quiz }: QuizTileProps) {
  return (
    <div className="bg-secondary rounded-md w-full">
      <Link to={quiz.link} className="relative">
        <img src={img} className="w-full rounded-t-md" />
        <div className="text-white text-sm font-bold absolute top-4 right-4 px-4 py-2 bg-lightBlue rounded-3xl">
          Category/QS
        </div>
      </Link>
      <div className="p-6">
        <Link to={quiz.link} className="relative">
          <h3 className="text-white text-2xl font-bold mb-3">{quiz.name}</h3>
          <p className="text-textPrimary font-medium">{quiz.description}</p>
        </Link>
        <span className="h-[1px] bg-white bg-opacity-10 block my-6"></span>
        <div className="flex items-center gap-4">
          <img src={img} className="w-10 h-10 rounded-3xl" />
          <div className="border-r-[1px] border-white border-opacity-10 pr-4">
            <h4 className="text-white font-semibold text-sm">By {quiz.userName}</h4>
            <p className="text-textPrimary text-xs font-medium">
              Graphic Designer
            </p>
          </div>
          <div>
            <h4 className="text-white font-semibold text-sm">Date</h4>
            <p className="text-textPrimary text-xs font-medium">{formatDate(quiz.createdAt)}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
