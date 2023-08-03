interface ContentProps {
  children?: React.ReactNode;
}

export default function Content({ children }: ContentProps) {
  return (
    <section className="pt-36 flex justify-center font-primary">
      <div className="container text-white">
        <div className="flex flex-wrap">{children}</div>
      </div>
      <div className="bg-primary absolute top-0 right-0 w-full h-[300vh] -z-50"></div>
    </section>
  );
}
