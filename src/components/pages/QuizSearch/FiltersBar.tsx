import PageSizeButton from "./PageSizeButton";
import DropDown from "./DropDown";
import SearchInput from "./SearchInput";

interface FiltersBarProps {
  input: string;
  setInput: (e: string) => void;
}

export default function FiltersBar({ input, setInput }: FiltersBarProps) {
  return (
    <>
      <div className="flex flex-col gap-6">
        <SearchInput input={input} setInput={setInput} />

        <div className="flex gap-4">
          <PageSizeButton pageSize={1} />
          <PageSizeButton pageSize={3} />
          <PageSizeButton pageSize={6} />
          <PageSizeButton pageSize={9} />
          <PageSizeButton pageSize={12} />
          <DropDown text="Order By" />
        </div>
      </div>
    </>
  );
}
