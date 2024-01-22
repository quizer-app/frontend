import Background from "@/components/layout/Background/Background";
import NotFoundSvg from "./NotFoundSvg";
import HomePageButton from "../../../other/HomePageButton";

export default function NotFound() {
  return (
    <>
      <Background />
      <div className="text-white w-full h-[80vh] top-0 left-0 flex flex-col gap-10 items-center justify-center font-bold caret-transparent">
        <NotFoundSvg />
        <p className="text-4xl text-center">This page can't be reached</p>
        <HomePageButton />
      </div>
    </>
  );
}
