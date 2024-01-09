import { api } from "@/api/axios";
import { QuizResponse } from "@/api/types/quiz";
import { useQuery } from "@tanstack/react-query";
import QuizTile from "./QuizTile";


export default function TileGrid() {
  const { isLoading, data } = useQuery({
    queryKey: ["quizes"],
    queryFn: () => api.get<QuizResponse[]>("/api/v1/Quiz"),
  });

  return (
    <section className="bg-primary w-full flex items-center justify-center py-14 md:py-16 lg:py-20">
      <div className="text-red-600">
          {isLoading && "Loading..."}
        </div>
      <div className="mainContainer grid grid-cols-1 gap-4 lg:gap-6 md:grid-cols-2 xl:grid-cols-3">
        {data?.data.map((el, id) => {
          return (
            <QuizTile
              quiz={el}
              key={id}
            />
          );
        })}
      </div>
    </section>
  );
}
