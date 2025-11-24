import LoginView from "@/views/auth/LoginView";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ingresar | C-Soul Sync",
};


export default function Login() {
  return <LoginView />;
}