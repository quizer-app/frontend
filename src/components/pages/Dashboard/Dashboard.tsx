import useUserData from "@/hooks/quizes/useUserData";
import Loading from "../Status/Loading";
import Error from "../Status/Error";
import UserQuizes from "./UserQuizes";

export default function Dashboard() {
  const { isLoading, isError, user } = useUserData();

  return (
    <>
      {isLoading && <Loading />}
      {isError && <Error />}
      <div className="bg-primary w-full text-white">
        <div className="flex flex-col gap-28 py-16 md:py-20 lg:py-28 px-4 mainContainer mx-auto">
          <div className="flex gap-8 items-center">
            <div className="w-16 h-16 rounded-full bg-lightBlue"></div>
            <p className="text-3xl font-bold">{user?.username}</p>
          </div>
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
          <UserQuizes />
        </div>
      </div>
    </>
  );
}
