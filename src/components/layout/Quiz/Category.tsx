interface CategoryProps {
  text: string;
}

export default function Category({ text }: CategoryProps) {
  return (
    <div
      className="bg-secondary flex items-center gap-3 rounded-md px-4 py-3 font-medium
                    max-w-[400px]"
    >
      <div className="bg-lightBlue w-8 h-8 rounded-md"></div>
      {text}
    </div>
  );
}
