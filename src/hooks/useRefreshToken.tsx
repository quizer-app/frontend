
import { accessTokenAtom } from "@/atoms/auth";
import { useSetAtom } from "jotai";

export default function useRefreshToken() {
  const setAccessToken = useSetAtom(accessTokenAtom);

  const refresh = async () => {
    // const response = await api.post<AuthResponse>(
    //   "/auth/token",
    //   {},
    //   {
    //     withCredentials: true,
    //   }
    // );
    // const { accessToken } = response.data;
    const accessToken = null; // TODO: remove when api is ready
    setAccessToken(accessToken ?? null);
    return accessToken;
  };

  return refresh;
}
