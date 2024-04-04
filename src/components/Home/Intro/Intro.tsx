import { twMerge } from "tailwind-merge";
import Bottom from "./Bottom";
import Top from "./Top";

export default function Intro() {
  return (
    <>
      <section className="bg-primary dark:bg-primaryDark w-full relative">
        <div
          className="text-black dark:text-white w-full items-center justify-center 
        pt-28 pb-36 sm:pt-36 sm:pb-44 md:pt-36 md:pb-44 lg:pt-36 lg:pb-60"
        >
          <div className="max-w-xl md:max-w-3xl mx-auto flex flex-col gap-8 px-4">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center z-20">
              Ignite Your Knowledge with Fun
            </h1>
            <p className="text-lg  lg:text-xl text-center font-semibold text-textPrimary z-20">
              Dive into Quizer for an immersive blend of entertainment and
              education! Explore captivating quizzes across diverse subjects,
              from history to science and beyond. Challenge your mind, expand
              your knowledge, and embark on an exciting journey of discovery.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-5 font-bold z-20">
              <button className="bg-lightBlue py-4 px-10 rounded-sm hover:bg-opacity-95 text-white font-bold">
                Get Pro
              </button>
              <button className="bg-secondaryDark py-4 px-10 rounded-sm hover:bg-opacity-95 text-white font-bold">
                Star on GitHub
              </button>
            </div>
          </div>
        </div>
        <div className="absolute left-0 bottom-0 opacity-30 lg:opacity-100">
          <Bottom />
        </div>
      </section>
      <div className="absolute top-0 right-0 z-10 opacity-30 lg:opacity-100">
        <Top />
      </div>
    </>
  );
}
