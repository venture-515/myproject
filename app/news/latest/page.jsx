export default function LatestNews() {
  return (
    <main className="px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl space-y-8">
        <section className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-xl shadow-slate-200 sm:p-10">
          <h1 className="text-3xl font-semibold text-slate-900">
            Latest Headlines
          </h1>
        </section>

        <div className="grid gap-6 lg:grid-cols-2">
          <article className="rounded-3xl bg-white p-6 shadow-md shadow-slate-200 ring-1 ring-slate-100">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-500">
              Featured
            </p>
            <h2 className="mt-4 text-2xl font-semibold text-slate-900">
              Feel the pulse of progress
            </h2>
          </article>
          <article className="rounded-3xl bg-white p-6 shadow-md shadow-slate-200 ring-1 ring-slate-100">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-fuchsia-500">
              Highlights
            </p>
            <h2 className="mt-4 text-2xl font-semibold text-slate-900">
              Smarter updates every day
            </h2>
          </article>
        </div>
      </div>
    </main>
  );
}
