// import { atom, useAtom } from 'jotai';

// export const accessTokenAtom = atom<string | null>(null);

// export const isAuthenticatedAtom = atom<boolean>(get => {
//   return get(accessTokenAtom) !== null;
// });

// export const tokenDataAtom = atom<TokenData | null>(get => {
//   const token = get(accessTokenAtom);
//   if (token === null) {
//     return null;
//   }
//   const tokenData = JSON.parse(atob(token.split(".")[1])) as TokenData;
//   return tokenData;
// });


// export const toggleTheme = () => {
//   const htmlTag = document.querySelector("html");

//   if (htmlTag?.classList.contains("light")) {
//     htmlTag.setAttribute('class', 'dark');
//     localStorage.setItem('theme', 'dark')
//   } else {
//     htmlTag?.setAttribute('class', 'light');
//     localStorage.setItem('theme', 'light')
//   }
// };

// export const getTheme = (): string => {
//   const theme = localStorage.getItem('theme')
//   return theme ? theme : "dark"
// }

// export const setStartTheme = () => {
//   const htmlTag = document.querySelector("html");

//   if (localStorage.getItem("theme") === 'light') {
//     htmlTag?.setAttribute('class', 'light');
//   } else {
//     htmlTag?.setAttribute('class', 'dark');
//   }
// }


// export const themeAtom = atom<"dark" | "light">("dark")

// export const toggleThemeAtom = atom(get => {
//   const [theme, setTheme] = useAtom(themeAtom)

//   if (theme === "light") {
//     setTheme("dark")
//     localStorage.setItem()
//   } else {
//     setTheme("light")
//   }
// })