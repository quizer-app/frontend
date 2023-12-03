export default function TestBlock() {
  return (
    <div className="bg-secondary rounded-md w-full px-12 py-20 flex flex-col justify-between h-[420px] sm:h-[460px] md:h-[460px] lg:h-[500px]">
      <p className="text-lg font-semibold">Title</p>

      <div>
        <p className="mb-6 text-textPrimary">Your answer</p>
        <input
          className="bg-input text-textPrimary rounded-md w-full py-3 pl-6 shadow-md
                    border border-transparent focus:border-lightBlue outline-none"
          placeholder="Your answer"
        ></input>
      </div>
    </div>
  );
}
