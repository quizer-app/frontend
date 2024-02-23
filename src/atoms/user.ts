import { api } from "@/api/axios";
import { UserResponse } from "@/api/types/user";
import { atom } from "jotai";
import { atomWithQuery } from "jotai-tanstack-query";

export const userNameAtom = atom<string | undefined>("");

export const userAtom = atomWithQuery(get => ({
  queryKey: ["user", get(userNameAtom)],
  queryFn: () => api.get<UserResponse>(`/api/v1/User/${get(userNameAtom)}`),
}));
