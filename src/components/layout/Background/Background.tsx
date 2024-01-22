import Left from "./Left";
import Right from "./Right";

export default function Background() {
  return (
    <>
      <div className="absolute top-0 w-full h-full bg-primary z-[-100]" />
      <Right />
      <Left />
    </>
  );
}
