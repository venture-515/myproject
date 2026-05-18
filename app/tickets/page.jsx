import React from "react";
import Ticketlist from "./Ticketlist";

export default function tickets() {
  return (
    <main className="px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl space-y-8">
        <section className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-xl shadow-slate-200 sm:p-10">
          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div className="space-y-5">
              <h1 className="text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
                Tickets
              </h1>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl bg-slate-50 p-5 shadow-md shadow-slate-200">
                <p className="text-sm font-medium uppercase tracking-[0.2em] text-sky-500">
                  Open tickets
                </p>
                <p className="mt-4 text-3xl font-semibold text-slate-900">83</p>
              </div>
              <div className="rounded-3xl bg-slate-50 p-5 shadow-md shadow-slate-200">
                <p className="text-sm font-medium uppercase tracking-[0.2em] text-violet-500">
                  High priority
                </p>
                <p className="mt-4 text-3xl font-semibold text-slate-900">14</p>
              </div>
            </div>
          </div>
        </section>

        <section className="grid gap-6">
          <Ticketlist />
        </section>
      </div>
    </main>
  );
}
