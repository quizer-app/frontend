export default function ContentBox({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full text-white px-4 py-14 sm:py-16 md:py-20 lg:py-28">
      <div
        className="bg-secondary mx-auto rounded-md 
                        max-w-[420px] sm:max-w-[500px] py-10 px-6 sm:p-[60px]"
      >
        {children}
      </div>
    </div>
  );
}
