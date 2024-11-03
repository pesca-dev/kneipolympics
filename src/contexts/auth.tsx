import {
  createContext,
  PropsWithChildren,
  useEffect,
  useMemo,
  useState,
} from "react";
import { useAppwrite } from "../hooks/useAppwrite";
import { Account, Models } from "appwrite";

export type AuthContextValue = {
  session?: Models.Session;
  user?: Models.User<Models.Preferences>;
  loggedIn: boolean;
  login(username: string, password: string): Promise<void>;
  logout(): Promise<void>;
};

export const AuthContext = createContext({} as AuthContextValue);

export function AuthContextProvider({ children }: PropsWithChildren) {
  const { client } = useAppwrite();
  const account = useMemo(() => new Account(client), [client]);

  const [session, setSession] = useState<Models.Session | undefined>();
  const [user, setUser] = useState<
    Models.User<Models.Preferences> | undefined
  >();

  useEffect(() => {
    account
      .getSession("current")
      .then((session) => {
        account
          .get()
          .then((user) => {
            setSession(session);
            setUser(user);
          })
          .catch(() => account.deleteSession("current"));
      })
      .catch(console.error);
  }, [account]);

  async function login(username: string, password: string): Promise<void> {
    try {
      const session = await account.createEmailPasswordSession(
        username,
        password,
      );

      account
        .get()
        .then((user) => {
          setSession(session);
          setUser(user);
        })
        .catch(() => account.deleteSession("current"));
    } catch (e) {
      console.error(e);
    }
  }

  async function logout(): Promise<void> {
    try {
      await account.deleteSession("current");
      setSession(undefined);
      setUser(undefined);
    } catch (e) {
      console.error(e);
    }
  }

  const value = {
    login,
    session,
    logout,
    user,
    loggedIn: !!(session && user),
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
