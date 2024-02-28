import { isAuthenticatedAtom, tokenDataAtom } from "@/atoms/auth";
import useLogout from "@/hooks/auth/useLogout";
import { Link } from "@tanstack/react-router";
import { useAtomValue } from "jotai";

export default function NavButtons() {
  const isAuthenticated = useAtomValue(isAuthenticatedAtom);
  const tokenData = useAtomValue(tokenDataAtom);
  const logout = useLogout();

  return (
    <div className="hidden sm:block font-bold z-50">
      {isAuthenticated ? (
        <>
          <Link
            to={"/$username"}
            params={{
              username: tokenData?.given_name ? tokenData.given_name : "",
            }}
            className="py-4 px-6 hover:text-textHover"
          >
            Dashboard ({tokenData?.given_name})
          </Link>
          <button className="buttonPrimary" onClick={logout}>
            Log Out
          </button>
        </>
      ) : (
        <>
          <Link to="/signin" className="py-4 px-6 textHover">
            Sign In
          </Link>
          <Link to="/signup" className="buttonPrimary">
            Sign Up
          </Link>
        </>
      )}
    </div>
  );
}
