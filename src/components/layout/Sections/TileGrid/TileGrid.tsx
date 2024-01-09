import { api } from "@/api/axios";
import { useQuery } from "@tanstack/react-query";
import QuizTile from "./QuizTile";

interface QuizesQueryProps {
  userName: string;
  name: string;
  description: string;
}

export default function TileGrid() {
  

  const { isLoading, isError, error, data } = useQuery({
    queryKey: ["quizes"],
    queryFn: () => api.get<QuizesQueryProps[]>("/api/v1/Quiz"),
  });

  return (
    <section className="bg-primary w-full flex items-center justify-center py-14 md:py-16 lg:py-20">
      <div className="mainContainer grid grid-cols-1 gap-4 lg:gap-6 md:grid-cols-2 xl:grid-cols-3">
        <div className="text-red-600">
          {isLoading && "Loading..."}
          {isError && JSON.stringify(error)}
        </div>
        {data?.data.map((el, id) => {
          return (
            <QuizTile
              name={el.name}
              userName={el.userName}
              desc={el.description}
              key={id}
            />
          );
        })}
      </div>
    </section>
  );
}
