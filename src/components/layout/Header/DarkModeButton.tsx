import { themeAtom, toggleThemeAtom } from "@/components/atoms/theme";
import { useAtomValue, useSetAtom } from "jotai";
import { Moon, Sun } from "lucide-react";

export default function DarkModeButton() {
	const theme = useAtomValue(themeAtom);
	const toggleTheme = useSetAtom(toggleThemeAtom);

	const toggleDarkMode = () => {
		toggleTheme();
	};

	return (
		<div className="flex p-[13px]">
			<button onClick={toggleDarkMode}>
				{theme === "dark" ? (
					<Sun width={30} height={30} />
				) : (
					<Moon width={30} height={30} />
				)}
			</button>
		</div>
	);
}
