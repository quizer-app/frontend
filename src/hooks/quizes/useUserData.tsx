import { userAtom, userNameAtom } from "@/atoms/user";
import { useParams } from "@tanstack/react-router";
import { useAtom, useSetAtom } from "jotai";

export default function useUserData() {
  const { userName } = useParams();
  const setUser = useSetAtom(userNameAtom);
  setUser(userName);

  const [{ isLoading, isError, data }] = useAtom(userAtom);
  const user = data?.data;

  return { isLoading, isError, user };
}
