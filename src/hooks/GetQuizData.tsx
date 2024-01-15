import { useParams } from "react-router-dom";
import { useAtom } from "jotai";
import { quizAtom, updateParamsAtom } from "@/atoms/quiz";

export default function GetQuizData() {
  const { userName, quizSlug } = useParams();
  const [, updateParams] = useAtom(updateParamsAtom);
  updateParams({ newName: userName, newSlug: quizSlug });

  return useAtom(quizAtom);
}
