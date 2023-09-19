export default function Content({ children }: { children?: React.ReactNode }) {
  return (
    <div className="pt-36 flex justify-center font-primary">
      <div className="container text-white">
        <div className="flex flex-wrap">{children}</div>
      </div>
      <div className="absolute top-0 right-0 w-full h-[300vh] -z-50"></div>
    </div>
  );
}
