import Category from "./Category";

export default function Main() {
  return (
    <div className="bg-primary w-full text-white">
      <div className="flex items-center justify-center flex-col p-20 gap-20">
        <div className="bg-secondary rounded-md w-20 h-20"></div>
        <div className="flex flex-col gap-2">
          <Category text="Fiszki" />
          <Category text="Ucz się" />
          <Category text="Test" />
          <Category text="Dopasowania" />
        </div>
      </div>
    </div>
  );
}
