import { atom } from "jotai";
import { atomWithStorage } from "jotai/utils";

export const themeAtom = atomWithStorage<"light" | "dark">("theme", "dark");

export const toggleThemeAtom = atom(null, (get, set) => {
	const theme = get(themeAtom);
	set(themeAtom, theme === "light" ? "dark" : "light");
});
