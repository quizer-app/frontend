import { atom } from "jotai";

export const accessTokenAtom = atom<string | null>(null);

export const isAuthenticatedAtom = atom((get) => {
	return get(accessTokenAtom) !== null;
});
