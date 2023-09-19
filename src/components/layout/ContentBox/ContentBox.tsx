export default function ContentBox({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-primary w-full text-white px-4 py-14 md:py-16 lg:py-20">
      <div className="bg-secondary mx-auto rounded-md max-w-[420px] sm:max-w-[500px] py-10 px-6 sm:p-[60px]">
        {children}
      </div>
    </div>
  );
}
