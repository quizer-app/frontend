import queryClient from "@/utils/queryClient";
import { queryClientAtom } from "jotai-tanstack-query";
import { useHydrateAtoms } from "jotai/react/utils";

export default function HydrateAtoms({
  children,
}: {
  children: React.ReactNode;
}) {
  useHydrateAtoms([[queryClientAtom, queryClient]]);
  return children;
}
