import QuizTile from "./QuizTile";

export default function TileGrid() {
  return (
    <section className="bg-primary w-full flex items-center justify-center py-14 md:py-16 lg:py-20 px-4">
      <div className="grid grid-cols-1 gap-4 lg:gap-6 md:grid-cols-2 xl:grid-cols-3">
        <QuizTile
          title="Best UI components for modern websites"
          author="Michał Pazdan"
        />
        <QuizTile
          title="Simple ways to improve your design skills"
          author="Kamil Glik"
        />
        <QuizTile
          title="Tips to quickly improve your coding speed"
          author="Andrzej Duda"
        />
        <QuizTile
          title="Best UI components for modern websites"
          author="Michał Pazdan"
        />
        <QuizTile
          title="Simple ways to improve your design skills"
          author="Kamil Glik"
        />
        <QuizTile
          title="Tips to quickly improve your coding speed"
          author="Andrzej Duda"
        />
      </div>
    </section>
  );
}
