import { useParams } from "react-router-dom";
import { useAtom } from "jotai";
import { quizAtom, updateParamsAtom } from "@/atoms/quiz";

export default function useQuizData() {
  const { userName, quizSlug } = useParams();
  const [, updateParams] = useAtom(updateParamsAtom);
  updateParams({ newName: userName, newSlug: quizSlug });

  const [{ isLoading, isError, data }] = useAtom(quizAtom);
  const quiz = data?.data;

  return { isLoading, isError, quiz };
}
