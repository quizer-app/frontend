import Bottom from "./Bottom";
import Top from "./Top";

export default function Intro() {
  return (
    <>
      <section className="bg-primary w-full relative">
        <div className="text-white w-full items-center justify-center pt-14 pb-20 md:pt-20 md:pb-32 lg:pt-28 lg:pb-60">
          <div className="max-w-xl md:max-w-3xl mx-auto flex flex-col gap-8 px-4">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center z-20">
              Fredsa afg FIX LETTER SPACING WDSAD GEAFD ekflsmfksdl
            </h1>
            <p className="text-lg  lg:text-xl text-center font-semibold z-20">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Praesentium, neque. Excepturi velit cumque accusantium veniam,
              eveniet non repudiandae possimus officiis, repudiandae possimus
              officiis!
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-5 font-bold z-20">
              <button className="buttonPrimary">Log Out</button>
              <button className="buttonPrimary">Log Out</button>
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
