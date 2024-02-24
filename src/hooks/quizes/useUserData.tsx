import { useParams } from "react-router-dom";
import { useAtom, useSetAtom } from "jotai";
import { userAtom, userNameAtom } from "@/atoms/user";

export default function useUserData() {
  const { userName } = useParams();
  const setUser = useSetAtom(userNameAtom);
  setUser(userName);

  const [{ isLoading, isError, data }] = useAtom(userAtom);
  const user = data?.data;

  return { isLoading, isError, user };
}
