import RegisterView from "@/views/auth/RegisterView";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Registrarse | C-Soul Sync",
};

export default function Register() {
    return <RegisterView />;
}
