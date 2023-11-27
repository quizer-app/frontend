import { X } from "lucide-react";
import MainLogo from "@/assets/images/light.png";
import DarkModeButton from "../Header/DarkModeButton";
import Logo from "../Header/Logo";
import { Link } from "react-router-dom";

interface QuizHeaderProps {
  name: string;
}

export default function QuizHeader({ name }: { name: string }) {
  return (
    <nav className="bg-primary text-white top-0 w-full z-10 font-primary">
      <div className="grid grid-cols-3 gap-2 container mx-auto px-4 sm:px-6 py-2 sm:py-3 lg:py-4 xl:px-8 2xl:px-12">
        <div className="col-start-1 flex items-center">
          <Logo logo={MainLogo} />
        </div>
        <div className="col-start-2 flex items-center justify-center">
          <p className="textHover hidden sm:block text-lg font-semibold md:text-xl xl:text-2xl">
            {name}
          </p>
        </div>

        <div className="col-start-3 flex items-center ml-auto">
          <DarkModeButton />
          <Link to="/quiz" className="flex pl-3">
            <X className="w-10 h-10" />
          </Link>
        </div>
      </div>
    </nav>
  );
}
