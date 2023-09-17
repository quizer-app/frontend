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
    <div className="flex p-3">
      <button onClick={toggleDarkMode}>
        {theme === "dark" ? (
          <Sun className="w-8 h-8" />
        ) : (
          <Moon className="w-8 h-8" />
        )}
      </button>
    </div>
  );
}
