import { updateParamsAtom } from "@/atoms/quizSearch";
import { useAtom } from "jotai";
import { SearchIcon } from "lucide-react";
import PageSizeButton from "./PageSizeButton";
import DropDown from "./DropDown";

interface FiltersBarProps {
  input: string;
  setInput: (e: string) => void;
}

export default function FiltersBar({ input, setInput }: FiltersBarProps) {
  const [, setParams] = useAtom(updateParamsAtom);

  const handleChange = (e: string) => {
    setInput(e);
    setParams({ searchTerm: e });
  };

  return (
    <>
      <div className="relative flex flex-col gap-6">
        <input
          onChange={e => handleChange(e.target.value)}
          value={input}
          className="bg-secondary rounded-md p-3 text-textPrimary pl-12 focus:outline-none min-w-96"
          placeholder="Search for quizes..."
        />
        <SearchIcon color="white" className="absolute top-3 left-3" />
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
