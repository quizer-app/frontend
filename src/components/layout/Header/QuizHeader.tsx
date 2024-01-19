import MainLogo from "@/assets/images/light.png";
import { X } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import DarkModeButton from "./DarkModeButton";
import Logo from "./Logo";
import { useAtomValue } from "jotai";
import { quizNameAtom } from "@/atoms/quiz";

export default function QuizHeader() {
  const navigate = useNavigate();
  const name = useAtomValue(quizNameAtom);

  return (
    <nav className="bg-primary text-white top-0 w-full z-10 font-primary">
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 container mx-auto px-4 sm:px-6 py-2 sm:py-3 lg:py-4 xl:px-8 2xl:px-12 z-50">
        <div className="col-start-1 flex items-center">
          <Logo logo={MainLogo} />
        </div>
        <div className="hidden sm:flex sm:items-center sm:justify-center sm:col-start-2">
          <p className="textHover hidden sm:block text-lg font-semibold md:text-xl xl:text-2xl z-50">
            <button onClick={() => navigate(-1)}>{name}</button>
          </p>
        </div>

        <div className="col-start-2 sm:col-start-3 flex items-center ml-auto">
          <DarkModeButton />
          <Link to="/quiz" className="flex pl-3">
            <button onClick={() => navigate(-1)}>
              <X className="w-10 h-10 z-50" />
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
}
