import { GetQuizesQueryParams, PaginatedQuizResponse } from "@/api/types/quiz";
import { atom } from "jotai";

interface updateQuizesAtomProps {
  isLoading: boolean;
  isError: boolean;
  quizes: PaginatedQuizResponse | undefined;
}

export const isLoadingAtom = atom<boolean>(false);
export const isErrorAtom = atom<boolean>(false);
export const quizesAtom = atom<PaginatedQuizResponse | undefined>(
  {} as PaginatedQuizResponse
);
export const paramsAtom = atom<GetQuizesQueryParams>({
  pageNumber: 1,
  pageSize: 9,
  sortColumn: "createdAt",
  sortOrder: "desc",
});

export const updateQuizesAtom = atom(
  null,
  (get, set, { isLoading, isError, quizes }: updateQuizesAtomProps) => {
    set(isLoadingAtom, isLoading);
    set(isErrorAtom, isError);
    set(quizesAtom, quizes);
  }
);

export const updateParamsAtom = atom(
  null,
  (get, set, params: GetQuizesQueryParams) => {
    set(paramsAtom, { ...get(paramsAtom), ...params });
  }
);
