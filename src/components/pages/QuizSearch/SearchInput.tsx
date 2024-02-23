import { updateParamsAtom } from "@/atoms/quizSearch";
import { useAtom } from "jotai";
import { SearchIcon, XCircle } from "lucide-react";
import { useRef } from "react";

interface SearchInputProps {
  input: string;
  setInput: (e: string) => void;
}

export default function SearchInput({ input, setInput }: SearchInputProps) {
  const [, setParams] = useAtom(updateParamsAtom);
  const inputRef = useRef<HTMLInputElement>(null);

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
        ref={inputRef}
        className="bg-secondary w-full rounded-md p-3 text-textPrimary pl-12 focus:outline-none min-w-99"
        placeholder="Search for quizes..."
      />
      <SearchIcon
        onClick={() => inputRef.current?.focus()}
        color="white"
        className="absolute top-3 left-3 cursor-text"
      />
      <XCircle
        onClick={clearInput}
        color="#959CB1"
        className="absolute top-3 right-3 cursor-pointer"
      />
    </div>
  );
}
