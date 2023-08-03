import { atom } from "jotai";
import { atomWithStorage } from "jotai/utils";

function systemTheme() {
  if (
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
  ) {
    return "dark";
  } else {
    return "light";
  }
}

export const themeAtom = atomWithStorage<"light" | "dark">(
  "theme",
  systemTheme()
);

export const toggleThemeAtom = atom(null, (get, set) => {
  const theme = get(themeAtom);
  set(themeAtom, theme === "light" ? "dark" : "light");
});
