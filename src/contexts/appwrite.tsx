import { Client } from "appwrite";
import { createContext, PropsWithChildren } from "react";

export type AppwriteContextValue = {
  client: Client;
};

export const AppwriteContext = createContext<AppwriteContextValue>(
  {} as AppwriteContextValue,
);

type Props = PropsWithChildren;

export function AppwriteContextProvider({ children }: Props) {
  const client = new Client();
  client.setProject("67257b8d001f6f36d0be");

  const value = {
    client,
  };

  return (
    <AppwriteContext.Provider value={value}>
      {children}
    </AppwriteContext.Provider>
  );
}
