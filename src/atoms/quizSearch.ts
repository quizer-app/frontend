import { api } from "@/api/axios";
import { GetQuizesQueryParams, PaginatedQuizResponse } from "@/api/types/quiz";
import { atom } from "jotai";
import { atomWithQuery } from "jotai-tanstack-query";

export const elementsAtom = atom([1]);

export const quizesAtom = atomWithQuery(get => ({
  queryKey: [
    "quizes",
    Object.getOwnPropertyNames(get(paramsAtom)),
    Object.values(get(paramsAtom)),
  ],
  queryFn: () =>
    api.get<PaginatedQuizResponse>("/api/v1/Quiz", {
      params: get(paramsAtom),
    }),
}));

export const paramsAtom = atom<GetQuizesQueryParams>({
  pageNumber: 1,
  pageSize: 9,
  sortColumn: "createdAt",
  sortOrder: "asc",
});

export const updateParamsAtom = atom(
  null,
  (get, set, params: GetQuizesQueryParams) => {
    set(paramsAtom, { ...get(paramsAtom), ...params });
    // delay??
    set(
      elementsAtom,
      Array.from(
        Array(get(quizesAtom).data.data.totalPages),
        (_, index) => index + 1
      )
    );
  }
);
