import UserQuizes from "@/components/Dashboard/UserQuizes";
import Error from "@/components/Status/Error";
import Loading from "@/components/Status/Loading";
import useUserData from "@/hooks/quizes/useUserData";
import { quizSearchSchema } from "@/types/schema/quizSearchSchema";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_layout/_auth/$username")({
  component: Dashboard,
  validateSearch: quizSearchSchema,
});

export default function Dashboard() {
  const searchParams = Route.useSearch();
  const { username } = Route.useParams();
  const { isLoading, isError, user } = useUserData(username);

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

          <UserQuizes fullPath={Route.fullPath} searchParams={searchParams} />
        </div>
      </div>
    </>
  );
}
