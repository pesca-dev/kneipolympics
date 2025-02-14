import { Client } from "appwrite";
import { createContext } from "react";

export type AppwriteContextValue = {
  client: Client;
};

export const AppwriteContext = createContext<AppwriteContextValue>(
  {} as AppwriteContextValue,
);
