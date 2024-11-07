import { useContext } from "react";
import { AppwriteContext } from "../contexts/appwrite.context";

export function useAppwrite() {
  return useContext(AppwriteContext);
}
