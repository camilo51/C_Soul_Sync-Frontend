import LoginForm from "@/features/auth/LoginForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ingresar",
};

export default function Login() {
  return <LoginForm />;
}