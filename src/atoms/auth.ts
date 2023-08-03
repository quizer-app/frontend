import { TokenData } from "@/api/tokenData";
import { atom } from "jotai";
import { atomWithStorage } from "jotai/utils";

export const accessTokenAtom = atom<string | null>(null);

export const isAuthenticatedAtom = atom<boolean>((get) => {
  return get(accessTokenAtom) !== null;
});

export const tokenDataAtom = atom<TokenData | null>((get) => {
  const token = get(accessTokenAtom);
  if (token === null) {
    return null;
  }
  const tokenData = JSON.parse(atob(token.split(".")[1])) as TokenData;
  return tokenData;
});

export const persistAtom = atomWithStorage<boolean>("persist", false);
