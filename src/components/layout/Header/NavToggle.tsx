import { Menu, X } from "lucide-react";

export default function NavToggle({
  toggleNavbar,
  isOpen,
}: {
  toggleNavbar: () => void;
  isOpen: boolean;
}) {
  return (
    <div className="flex pl-3 lg:hidden z-50">
      <button onClick={toggleNavbar}>
        {isOpen ? <X className="w-9 h-9" /> : <Menu className="w-9 h-9" />}
      </button>
    </div>
  );
}
