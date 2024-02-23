import { useAtomValue } from "jotai";
import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { accessTokenAtom } from "../../atoms/auth";
import useRefreshToken from "../../hooks/useRefreshToken";
import Loading from "../pages/Status/Loading";

export default function PersistLogin() {
  const [isLoading, setIsLoading] = useState(true);
  const refresh = useRefreshToken();
  const accessToken = useAtomValue(accessTokenAtom);

  useEffect(() => {
    const verifyRefreshToken = async () => {
      try {
        await refresh();
      } catch (err) {
        if (err instanceof Error) {
          console.log(err.message);
        }
      } finally {
        setIsLoading(false);
      }
    };

    !accessToken ? verifyRefreshToken() : setIsLoading(false);
  }, [refresh, accessToken]);

  return <>{isLoading ? <Loading /> : <Outlet />}</>;
}
