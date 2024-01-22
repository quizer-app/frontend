import { api } from "@/api/axios";
import { GetQuizesQueryParams, PaginatedQuizResponse } from "@/api/types/quiz";
import { useQuery } from "@tanstack/react-query";
import Loading from "../../Status/Loading";
import { QuizResponse } from "@/api/types/quiz";
import QuizTile from "./QuizTile";
import NotFound from "../../Status/NotFound/NotFound";

export type TileGridViewProps = {
  quizes: QuizResponse[];
};

export default function TileGrid() {
  const { isLoading, isError, data } = useQuery({
    queryKey: ["quizes"],
    queryFn: () =>
      api.get<PaginatedQuizResponse>("/api/v1/Quiz", {
        params: {
          pageNumber: 1,
          pageSize: 6,
          sortColumn: "createdAt",
          sortOrder: "desc",
        } as GetQuizesQueryParams,
      }),
  });

  return (
    <section className="bg-primary w-full flex items-center justify-center py-14 md:py-16 lg:py-20">
      {isLoading && <Loading />}
      {isError && <NotFound />}
      {data?.data && (
        <div className="mainContainer grid grid-cols-1 gap-4 lg:gap-6 md:grid-cols-2 xl:grid-cols-3">
          {data.data.items.map((el, id) => {
            return <QuizTile quiz={el} key={id} />;
          })}
        </div>
      )}
    </section>
  );
}
