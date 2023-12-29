import { themeAtom, toggleThemeAtom } from "@/atoms/theme";
import { useAtomValue, useSetAtom } from "jotai";
import { Moon, Sun } from "lucide-react";

export default function DarkModeButton() {
  const theme = useAtomValue(themeAtom);
  const toggleTheme = useSetAtom(toggleThemeAtom);

  const toggleDarkMode = () => {
    toggleTheme();
  };

  return (
    <div className="flex p-3 lg:pr-0 z-50">
      <button onClick={toggleDarkMode}>
        {theme === "dark" ? (
          <Sun className="w-8 h-8 lg:w-9 lg:h-9" />
        ) : (
          <Moon className="w-8 h-8 lg:w-9 lg:h-9" />
        )}
      </button>
    </div>
  );
}
