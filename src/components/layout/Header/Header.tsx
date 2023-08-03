import MainLogo from "@/assets/images/light.png";
import { useState } from "react";
import DarkModeButton from "./DarkModeButton";
import Logo from "./Logo";
import NavButtons from "./NavButtons";
import NavLinks from "./NavLinks";
import NavToggle from "./NavToggle";

export function Header() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-transparent absolute text-white top-0 right-0 left-0 z-[1000] font-primary">
      <div className="flex justify-between items-center h-[88px] mx-[10%]">
        <Logo logo={MainLogo} />
        <div className="flex justify-between items-center grow my-8 mr-[6px]">
          <NavLinks isOpen={isOpen} />
          <NavButtons />
        </div>
        <div className="flex justify-between items-center">
          <DarkModeButton />
          <NavToggle toggleNavbar={toggleNavbar} isOpen={isOpen} />
        </div>
      </div>
    </header>
  );
}
