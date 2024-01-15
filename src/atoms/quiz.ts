// import { api } from "@/api/axios";
// import { QuizResponse } from "@/api/types/quiz";
// import { useQuery } from "@tanstack/react-query";
// import { atom } from "jotai";
// import { atomWithQuery } from "jotai-tanstack-query";

// export const userNameToken = atom<string>("");
// export const quizSlugToken = atom<string>("");

// const { isLoading, isError, data } = useQuery({
//   queryKey: ["quiz", userNameToken, quizSlugToken],
//   queryFn: () =>
//     api.get<QuizResponse>(`/api/v1/Quiz/${userNameToken}/${quizSlugToken}`),
// });

// export const todosAtom = atomWithQuery(() => ({
//   queryKey: ["todos"],
// }));
