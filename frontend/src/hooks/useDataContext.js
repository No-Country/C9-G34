import { DataContext } from "../context/useContext";
import { useContext } from "react";

// ----------------------------------------------------------------------

export default function useDataContext() {
  return useContext(DataContext);
}