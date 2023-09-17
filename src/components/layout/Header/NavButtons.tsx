import { isAuthenticatedAtom, tokenDataAtom } from "@/atoms/auth";
import useLogout from "@/hooks/useLogout";
import { useAtomValue } from "jotai";
import { Link } from "react-router-dom";

export default function NavButtons() {
  const isAuthenticated = useAtomValue(isAuthenticatedAtom);
  const tokenData = useAtomValue(tokenDataAtom);

  const logout = useLogout();

  return (
    <div className="hidden sm:block font-bold">
      {isAuthenticated ? (
        <>
          <Link to="/dashboard" className="py-4 px-6 hover:text-[#959cb1]">
            Dashboard ({tokenData?.user.username})
          </Link>
          <button
            className="bg-blueButtonHover py-4 px-8 rounded-md hover:bg-opacity-95"
            onClick={logout}
          >
            Log Out
          </button>
        </>
      ) : (
        <>
          <Link to="/signin" className="py-4 px-6 hover:text-[#959cb1]">
            Sign In
          </Link>
          <Link
            to="/signup"
            className="bg-blueButtonHover py-4 px-8 rounded-md hover:bg-opacity-95"
          >
            Sign Up
          </Link>
        </>
      )}
    </div>
  );
}
