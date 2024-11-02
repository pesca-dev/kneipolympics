import { createContext, PropsWithChildren, useState } from "react";
import { useAppwrite } from "../hooks/useAppwrite";
import { Account, Models } from "appwrite";

export type AuthContextValue = {
  session?: Models.Session;
  login(username: string, password: string): Promise<void>;
  logout(): Promise<void>;
};

export const AuthContext = createContext({} as AuthContextValue);

export function AuthContextProvider({ children }: PropsWithChildren) {
  const { client } = useAppwrite();
  const account = new Account(client);

  const [session, setSession] = useState<Models.Session | undefined>();

  async function login(username: string, password: string): Promise<void> {
    try {
      const session = await account.createEmailPasswordSession(
        username,
        password,
      );

      setSession(session);
    } catch (e) {
      console.error(e);
    }
  }

  async function logout(): Promise<void> {
    try {
      await account.deleteSession("current");
    } catch (e) {
      console.error(e);
    }
  }

  const value = {
    login,
    session,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
