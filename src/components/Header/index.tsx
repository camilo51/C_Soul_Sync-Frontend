'use client'

import Title from "./Title";
import Search from "./Search";
import Nav from "./Nav";

export default function Header() {
  return (
        <header className="p-5 flex justify-between items-center">
            <Title />
            <Search />
            <Nav />
        </header>
  );
}
