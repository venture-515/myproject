export default function Home() {
  return (
    <main className="px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl space-y-10">
        <section className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-xl shadow-slate-200 sm:p-10">
          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div className="space-y-6">
              <h1 className="text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
                Dashboard
              </h1>
              <div className="flex flex-col gap-4 sm:flex-row">
                <a
                  href="/tickets"
                  className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-sky-400 via-cyan-400 to-emerald-400 px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-200/40 hover:scale-[1.02]"
                >
                  Browse tickets
                </a>
                <a
                  href="/news"
                  className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-slate-100 px-6 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-200"
                >
                  View news
                </a>
              </div>
            </div>
            <div className="rounded-[1.75rem] bg-slate-50 p-6 shadow-xl shadow-slate-200 sm:p-8">
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="rounded-3xl bg-white p-6 shadow-md shadow-slate-200">
                  <p className="text-sm uppercase tracking-[0.24em] text-sky-500">
                    Active projects
                  </p>
                  <p className="mt-4 text-4xl font-semibold text-slate-900">
                    128
                  </p>
                </div>
                <div className="rounded-3xl bg-white p-6 shadow-md shadow-slate-200">
                  <p className="text-sm uppercase tracking-[0.24em] text-fuchsia-500">
                    Fresh stories
                  </p>
                  <p className="mt-4 text-4xl font-semibold text-slate-900">
                    24
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
