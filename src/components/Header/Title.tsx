import { oswald } from "@/lib/fonts";
import Link from "next/link";

export default function Title() {
  return (
    <Link href="/">
        <h1 className={`${oswald.className} font-bold text-4xl uppercase`}>C-Soul Sync</h1>
    </Link>
  );
}
