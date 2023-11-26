interface ControlBarProps {
  curr: number;
  max: number;
  left: () => void;
  right: () => void;
}

export default function ControlBar({
  curr,
  max,
  left,
  right,
}: ControlBarProps) {
  return (
    <div className="flex items-center justify-center gap-8">
      <button onClick={left} className="bg-lightBlue w-12 h-12 rounded-3xl" />
      <p>{`${curr} / ${max}`}</p>
      <button onClick={right} className="bg-lightBlue w-12 h-12 rounded-3xl" />
    </div>
  );
}
