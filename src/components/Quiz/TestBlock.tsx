interface TestBlockProps {
  title: string;
  number: number;
  max: number;
}

export default function TestBlock({ title, number, max }: TestBlockProps) {
  return (
    <div className="bg-secondary flex flex-col justify-between rounded-sm w-full px-6 py-14 sm:px-8 md:py-16 lg:px-12 lg:py-20 gap-20 xl:gap-28">
      <div className="flex items-center justify-between font-semibold">
        <p className="text-lg">{title}</p>
        <p className="text-textPrimary">{`${number} / ${max}`}</p>
      </div>
      <input
        className="bg-input text-textPrimary rounded-sm w-full py-3 pl-6 shadow-md
                    border border-transparent focus:border-lightBlue outline-none"
        placeholder="Your answer"
      ></input>
    </div>
  );
}
