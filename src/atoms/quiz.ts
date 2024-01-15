import { api } from "@/api/axios";
import { QuizResponse } from "@/api/types/quiz";
import { atom } from "jotai";
import { atomWithQuery } from "jotai-tanstack-query";

export const userNameAtom = atom<string | undefined>("");
export const quizSlugAtom = atom<string | undefined>("");

export const quizAtom = atomWithQuery(get => ({
  queryKey: ["quiz", get(userNameAtom), get(quizSlugAtom)],
  queryFn: () =>
    api.get<QuizResponse>(
      `/api/v1/Quiz/${get(userNameAtom)}/${get(quizSlugAtom)}`
    ),
}));

interface updateParamsAtom {
  newName: string | undefined;
  newSlug: string | undefined;
}

export const updateParamsAtom = atom(
  null,
  (get, set, { newName, newSlug }: updateParamsAtom) => {
    if (newName !== get(userNameAtom) || newSlug !== get(quizSlugAtom)) {
      set(userNameAtom, newName);
      set(quizSlugAtom, newSlug);
    }
  }
);
