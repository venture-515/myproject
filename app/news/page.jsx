export default function News() {
  return (
    <main className="px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl space-y-8">
        <section className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-xl shadow-slate-200 sm:p-10">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h1 className="text-3xl font-semibold text-slate-900">News</h1>
            </div>
            <a
              href="/news/latest"
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-fuchsia-500 to-violet-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-fuchsia-200/40 hover:opacity-90"
            >
              Read latest
            </a>
          </div>
        </section>

        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          <article className="rounded-3xl bg-white p-6 shadow-md shadow-slate-200 ring-1 ring-slate-100 transition hover:-translate-y-1 hover:shadow-lg">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-500">
              Product news
            </p>
            <h2 className="mt-4 text-xl font-semibold text-slate-900">
              New feature rollout
            </h2>
          </article>
          <article className="rounded-3xl bg-white p-6 shadow-md shadow-slate-200 ring-1 ring-slate-100 transition hover:-translate-y-1 hover:shadow-lg">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-fuchsia-500">
              Insights
            </p>
            <h2 className="mt-4 text-xl font-semibold text-slate-900">
              Design trends 2026
            </h2>
          </article>
          <article className="rounded-3xl bg-white p-6 shadow-md shadow-slate-200 ring-1 ring-slate-100 transition hover:-translate-y-1 hover:shadow-lg">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-500">
              Community
            </p>
            <h2 className="mt-4 text-xl font-semibold text-slate-900">
              Tools for better focus
            </h2>
          </article>
        </div>
      </div>
    </main>
  );
}
