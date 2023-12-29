import SignUp from "@/components/page/SignUp";
import { Button } from "../../ContentBox/Button";

export default function Intro() {
  return (
    <section className="bg-primary w-full">
      <div className="text-white w-full items-center justify-center pt-14 pb-20 md:pt-20 md:pb-32 lg:pt-28 lg:pb-60">
        <div className="max-w-xl md:max-w-3xl mx-auto flex flex-col gap-8 px-4">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center">
            Fredsa afg FIX LETTER SPACING WDSAD GEAFD ekflsmfksdl
          </h2>
          <p className="text-lg  lg:text-xl text-center font-semibold">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Praesentium, neque. Excepturi velit cumque accusantium veniam,
            eveniet non repudiandae possimus officiis, repudiandae possimus
            officiis!
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-5 font-bold">
            <button className="bg-lightBlue py-4 px-8 rounded-md hover:bg-opacity-95">
              Log Out
            </button>
            <button className="bg-lightBlue py-4 px-8 rounded-md hover:bg-opacity-95">
              Log Out
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}