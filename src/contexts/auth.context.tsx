import { createContext } from "react";
import { Models } from "appwrite";

export type AuthContextType = {
  session?: Models.Session;
  user?: Models.User<Models.Preferences>;
  loggedIn: boolean;
  login(email: string, password: string): Promise<void>;
  logout(): Promise<void>;
  register(email: string, password: string, name: string): Promise<void>;
};

export const AuthContext = createContext({} as AuthContextType);
