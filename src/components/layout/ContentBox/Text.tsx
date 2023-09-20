export default function ContentText({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <p className="text-textPrimary text-center font-medium mb-11">{children}</p>
  );
}
