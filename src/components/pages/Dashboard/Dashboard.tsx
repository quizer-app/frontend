import useUserData from "@/hooks/useUserData";
import Loading from "../Status/Loading";
import Error from "../Status/Error";

export default function Dashboard() {
  const { isLoading, isError, user } = useUserData();

  console.log(user);

  return (
    <>
      {isLoading && <Loading />}
      {isError && <Error />}
      {user.username}
      <div className="bg-primary w-full text-white">
        <div className="flex flex-col gap-28 py-16 md:py-20 lg:py-28 px-4 mainContainer mx-auto">
          <div className="flex gap-8">
            <button className="buttonSecondary bg-secondary px-5 py-3">
              Information
            </button>
            <button className="buttonSecondary bg-secondary px-5 py-3">
              Quizes
            </button>
            <button className="buttonSecondary bg-secondary px-5 py-3">
              Tab 3
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
// 1. fetch user data
// 2. fetch quiz data on clilc (setParams and quizes atoms)
