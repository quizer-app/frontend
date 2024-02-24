import Background from "@/components/layout/Background/Background";
import { HashLoader } from "react-spinners";

export default function Loading() {
  return (
    <>
      <Background />
      <div className="text-white w-full h-[80vh] top-0 left-0 flex flex-col gap-16 items-center justify-center font-bold caret-transparent">
        <HashLoader color="white" size={80} />
        <p className="text-3xl text-center">Loading...</p>
      </div>
    </>
  );
}
