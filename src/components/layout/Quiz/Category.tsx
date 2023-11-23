interface CategoryProps {
  text: string;
}

export default function Category({ text }: CategoryProps) {
  return (
    <button
      className="bg-secondary flex items-center gap-3 rounded-md px-4 py-3 font-medium w-full
                    max-w-[592px] sm:max-w-[500px] hover:bg-opacity-90"
    >
      <div className="bg-lightBlue w-8 h-8 rounded-md"></div>
      {text}
    </button>
  );
}
