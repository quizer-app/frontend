interface ErrorProps {
  msg: string;
}

export default function Error({ msg }: ErrorProps) {
  return (
    <div className="absolute w-full h-full top-0 left-0 text-red-600 flex items-center justify-center text-4xl font-bold">
      {msg}
    </div>
  );
}
