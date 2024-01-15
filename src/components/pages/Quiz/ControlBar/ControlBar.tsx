import Arrow from "./Arrow";

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
    <>
      {max > 0 && (
        <div className="flex items-center justify-center gap-8">
          <Arrow onClick={left} dir="left" />
          <p>{`${curr} / ${max}`}</p>
          <Arrow onClick={right} dir="right" />
        </div>
      )}
    </>
  );
}
