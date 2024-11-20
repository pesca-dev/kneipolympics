import { Client } from "appwrite";
import { PropsWithChildren } from "react";
import { AppwriteContext } from "../contexts/appwrite.context";

type Props = PropsWithChildren;

export function AppwriteProvider({ children }: Props) {
  const client = new Client();
  client
    .setEndpoint("https://cloud.appwrite.io/v1")
    .setProject("67257b8d001f6f36d0be");

  const value = {
    client,
  };

  return (
    <AppwriteContext.Provider value={value}>
      {children}
    </AppwriteContext.Provider>
  );
}
