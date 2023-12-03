import { Toaster } from "react-hot-toast";
import QuizHeader from "./QuizHeader";
import TestBlock from "./TestBlock";

export default function Test() {
  return (
    <>
      <Toaster />
      <QuizHeader name={"Karaluch"} />
      <div className="bg-primary text-white px-4 py-10 sm:py-14 md:py-16 lg:py-20">
        <div className="mx-auto rounded-md max-w-[592px] md:max-w-[720px] lg:max-w-[976px]">
          <div className="flex flex-col gap-10 w-full mb-16">
            <div className="flex flex-col gap-10 items-center justify-center">
              <TestBlock />
              <TestBlock />
              <TestBlock />
              <TestBlock />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
