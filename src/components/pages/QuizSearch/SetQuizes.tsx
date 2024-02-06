import { paramsAtom, updateQuizesAtom } from "@/atoms/quizSearch";
import useQuizesPaging from "@/hooks/useQuizesPaging";
import { useAtom, useAtomValue } from "jotai";

export default function SetQuizes() {
  const [, setQuizes] = useAtom(updateQuizesAtom);
  const params = useAtomValue(paramsAtom);
  setQuizes(useQuizesPaging(params));
}
