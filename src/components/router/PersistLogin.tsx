import { useAtomValue } from "jotai";
import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { accessTokenAtom, persistAtom } from "../../atoms/auth";
import useRefreshToken from "../../hooks/useRefreshToken";

export default function PersistLogin() {
  const [isLoading, setIsLoading] = useState(true);
  const refresh = useRefreshToken();
  const accessToken = useAtomValue(accessTokenAtom);
  const persist = useAtomValue(persistAtom);

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

  return (
    <>{!persist ? <Outlet /> : isLoading ? <p>Loading...</p> : <Outlet />}</>
  );
}
