import { api } from "@/api/axios";
import { QuizResponse } from "@/api/types/quiz";
import { atom } from "jotai";
import { atomWithQuery } from "jotai-tanstack-query";

interface updateParamsAtom {
  newName: string | undefined;
  newSlug: string | undefined;
}

interface updateCurrTermProps {
  value: number;
  length: number;
}

export const userNameAtom = atom<string | undefined>("");
export const quizSlugAtom = atom<string | undefined>("");
export const currTermAtom = atom<number>(0);

export const quizAtom = atomWithQuery(get => ({
  queryKey: ["quiz", get(userNameAtom), get(quizSlugAtom)],
  queryFn: () =>
    api.get<QuizResponse>(
      `/api/v1/Quiz/${get(userNameAtom)}/${get(quizSlugAtom)}`
    ),
}));

export const updateParamsAtom = atom(
  null,
  (get, set, { newName, newSlug }: updateParamsAtom) => {
    if (newName !== get(userNameAtom) || newSlug !== get(quizSlugAtom)) {
      set(userNameAtom, newName);
      set(quizSlugAtom, newSlug);
      set(currTermAtom, 0);
    }
  }
);

export const updateCurrTermAtom = atom(
  null,
  (get, set, { value, length }: updateCurrTermProps) => {
    const prev = get(currTermAtom);
    value > 0
      ? prev === length - 1
        ? set(currTermAtom, 0)
        : set(currTermAtom, prev + 1)
      : prev === 0
        ? set(currTermAtom, length - 1)
        : set(currTermAtom, prev - 1);
  }
);
