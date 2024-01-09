import { api } from "@/api/axios";
import { QuizResponse } from "@/api/types/quiz";
import Loading from "@/components/pages/Status/Loading";
import { useQuery } from "@tanstack/react-query";
import TileGridView from "./TileGridView";

export default function TileGrid() {
  const { isLoading, data } = useQuery({
    queryKey: ["quizes"],
    queryFn: () => api.get<QuizResponse[]>("/api/v1/Quiz"),
  });

  return (
    <section className="bg-primary w-full flex items-center justify-center py-14 md:py-16 lg:py-20">
      {isLoading && <Loading />}
      {!isLoading && data && data.data && <TileGridView quizes={data.data} />}
    </section>
  );
}
