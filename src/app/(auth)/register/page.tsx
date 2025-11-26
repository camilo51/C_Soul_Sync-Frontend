import RegisterView from "@/features/auth/RegisterForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Registrarse | C-Soul Sync",
};

export default function Register() {
    return <RegisterView />;
}
