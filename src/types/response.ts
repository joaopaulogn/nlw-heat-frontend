import { ReactNode } from "react"
import { User } from "./user"

export type AuthContextData = {
  user: User | null;
  signInUrl: string;
  signOut: () => void;
}

export type AuthProviderData = {
  children: ReactNode;
}

export type AuthResponse = {
  token: string;
  user: {
    id: string;
    avatar_url: string;
    name: string;
    login: string;
  }
}