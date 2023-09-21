import { twMerge } from "tailwind-merge";

export default function Text({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <p
      className={twMerge(
        "text-textPrimary text-center font-medium mb-11",
        className
      )}
    >
      {children}
    </p>
  );
}
