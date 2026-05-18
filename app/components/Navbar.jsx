import React from "react";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav>
      <Link href="/"> Home </Link>
      <Link href="/about">About</Link>
      <Link href="/news">News</Link>
   
      <Link href="/tickets">Tickets</Link>
      <Link href="/news/latest">Latest News</Link>
    </nav>
  );
}
