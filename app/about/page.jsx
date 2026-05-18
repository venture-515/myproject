import React from "react";

export default function about() {
  return (
    <main className="px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl space-y-8">
        <section className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-xl shadow-slate-200 sm:p-10">
          <h1 className="text-3xl font-semibold text-slate-900 sm:text-4xl">
            About Our Platform
          </h1>
        </section>
        <div className="grid gap-6 lg:grid-cols-2">
          <section className="rounded-3xl bg-white p-6 shadow-md shadow-slate-200">
            <h2 className="text-xl font-semibold text-slate-900">
              Built for clarity
            </h2>
          </section>
          <section className="rounded-3xl bg-white p-6 shadow-md shadow-slate-200">
            <h2 className="text-xl font-semibold text-slate-900">
              Made for action
            </h2>
          </section>
        </div>
      </div>
    </main>
  );
}
