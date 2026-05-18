import React from "react";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-200 bg-white px-5 py-4 text-sm text-slate-800 shadow-sm shadow-slate-200">
      <div className="flex items-center gap-3">
        <div className="rounded-3xl bg-gradient-to-r from-cyan-400 via-sky-500 to-violet-500 px-4 py-2 text-sm font-semibold text-slate-950 shadow-md shadow-cyan-200/40">
          MyProject
        </div>
        <p className="hidden text-slate-500 sm:block">
          Smart dashboards for modern users
        </p>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
        <Link
          className="rounded-full px-4 py-2 text-slate-700 transition hover:bg-slate-100 hover:text-slate-900"
          href="/"
        >
          Home
        </Link>
        <Link
          className="rounded-full px-4 py-2 text-slate-700 transition hover:bg-slate-100 hover:text-slate-900"
          href="/about"
        >
          About
        </Link>
        <Link
          className="rounded-full px-4 py-2 text-slate-700 transition hover:bg-slate-100 hover:text-slate-900"
          href="/news"
        >
          News
        </Link>
        <Link
          className="rounded-full px-4 py-2 text-slate-700 transition hover:bg-slate-100 hover:text-slate-900"
          href="/news/latest"
        >
          Latest
        </Link>
      </div>

      <Link
        href="/tickets"
        className="rounded-full bg-gradient-to-r from-sky-400 to-cyan-300 px-4 py-2 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-200/40 transition hover:opacity-90"
      >
        Tickets
      </Link>
    </nav>
  );
}
