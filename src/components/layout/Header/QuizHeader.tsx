import MainLogo from "@/assets/images/light.png";
import { X } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import DarkModeButton from "./DarkModeButton";
import Logo from "./Logo";

export default function QuizHeader() {
  const navigate = useNavigate();

  return (
    <nav className="bg-primary text-white top-0 w-full z-10 font-primary">
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 container mx-auto px-4 sm:px-6 py-2 sm:py-3 lg:py-4 xl:px-8 2xl:px-12 z-50">
        <div className="col-start-1 flex items-center">
          <Logo logo={MainLogo} />
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
