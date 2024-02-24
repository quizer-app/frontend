import TestBlock from "./TestBlock";

export default function Test() {
  return (
    <>
      <div className="bg-primary text-white px-4 py-10 sm:py-14 md:py-16 lg:py-20">
        <div className="mx-auto rounded-md max-w-[592px] md:max-w-[720px] lg:max-w-[976px]">
          <div className="flex flex-col gap-10 w-full mb-16">
            <div className="flex flex-col gap-10 items-center">
              <TestBlock title="Title" number={1} max={4} />
              <TestBlock title="Title" number={2} max={4} />
              <TestBlock title="Title" number={3} max={4} />
              <TestBlock title="Title" number={4} max={4} />
              <div className="w-full">
                <div className="bg-lightBlue px-8 py-4 lg:px-19 lg:py-5 rounded-md hover:bg-opacity-95 cursor-pointer float-right">
                  Check Answers
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
