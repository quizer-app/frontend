import { updateParamsAtom } from "@/atoms/quizSearch";
import { useAtom } from "jotai";
import { SearchIcon, XCircle } from "lucide-react";

interface SearchInputProps {
  input: string;
  setInput: (e: string) => void;
}

export default function SearchInput({ input, setInput }: SearchInputProps) {
  const [, setParams] = useAtom(updateParamsAtom);

  const handleChange = (e: string) => {
    setInput(e);
    setParams({ searchTerm: e });
  };

  const clearInput = () => {
    setInput("");
    setParams({ searchTerm: "" });
  };

  return (
    <div className="relative">
      <input
        onChange={e => handleChange(e.target.value)}
        value={input}
        className="bg-secondary w-full rounded-md p-3 text-textPrimary pl-12 focus:outline-none min-w-96"
        placeholder="Search for quizes..."
      />
      <SearchIcon color="white" className="absolute top-3 left-3" />
      <button onClick={clearInput}>
        <XCircle color="#959CB1" className="absolute top-3 right-3" />
      </button>
    </div>
  );
}
