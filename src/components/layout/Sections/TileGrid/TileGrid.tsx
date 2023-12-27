import { useEffect, useState } from "react";
import QuizTile from "./QuizTile";
import { api } from "@/api/axios";
import { useQuery } from "@tanstack/react-query";

interface QuizesQueryProps {
  userName: string;
  name: string;
  description: string;
}

export default function TileGrid() {
  const quizes = [
    {
      userName: "Michał Pazdan",
      name: "Best UI components for modern websites",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet dictum neque, laoreet dolor",
    },
    {
      userName: "Michał Pazdan",
      name: "Best UI components for modern websites",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet dictum neque, laoreet dolor",
    },
    {
      userName: "Michał Pazdan",
      name: "Best UI components for modern websites",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet dictum neque, laoreet dolor",
    },
    {
      userName: "Michał Pazdan",
      name: "Best UI components for modern websites",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet dictum neque, laoreet dolor",
    },
    {
      userName: "Michał Pazdan",
      name: "Best UI components for modern websites",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet dictum neque, laoreet dolor",
    },
    {
      userName: "Michał Pazdan",
      name: "Best UI components for modern websites",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet dictum neque, laoreet dolor",
    },
  ];

  // const { isLoading, isError, error, data } = useQuery({
  //   queryKey: ["quizes"],
  //   queryFn: () => api.get<QuizesQueryProps[]>("/api/v1/Quiz"),
  // });

  return (
    <section className="bg-primary w-full flex items-center justify-center py-14 md:py-16 lg:py-20">
      <div className="mainContainer max-sm:max-w-md grid grid-cols-1 gap-4 lg:gap-6 md:grid-cols-2 xl:grid-cols-3">
        {quizes.map((el, id) => {
          return (
            <QuizTile
              name={el.name}
              userName={el.userName}
              desc={el.description}
              key={id}
            />
          );
        })}
        {/* <div className="text-red-600">
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
        })} */}
      </div>
    </section>
  );
}
