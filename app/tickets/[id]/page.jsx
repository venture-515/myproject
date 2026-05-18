import Link from "next/link";

async function getticket(id) {
  const res = await fetch(`http://localhost:4000/tickets/${id}`, {
    cache: "no-store",
  });
  if (!res.ok) {
    return null;
  }
  return res.json();
}

function priorityBadge(priority) {
  const classes = {
    high: "bg-rose-100 text-rose-700",
    medium: "bg-amber-100 text-amber-700",
    low: "bg-emerald-100 text-emerald-700",
  };
  return classes[priority?.toLowerCase()] || "bg-slate-100 text-slate-700";
}

export default async function TicketDetails({ params }) {
  const { id } = await params;
  const ticket = await getticket(id);

  return (
    <main className="px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl space-y-8">
        <div className="flex items-center justify-between gap-4 rounded-[2rem] border border-slate-200 bg-white p-6 shadow-xl shadow-slate-200 sm:p-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">
              Ticket Details
            </p>
            <h1 className="mt-3 text-3xl font-semibold text-slate-900">
              {ticket?.title || "Ticket not found"}
            </h1>
          </div>
          <Link
            href="/tickets"
            className="rounded-full border border-slate-200 bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-900 transition hover:bg-slate-200"
          >
            Back to tickets
          </Link>
        </div>

        {!ticket ? (
          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8 text-center text-slate-700 shadow-md">
            <p className="text-lg font-semibold">Ticket not found.</p>
            <p className="mt-2 text-sm text-slate-500">
              Please return to the list and select a valid ticket.
            </p>
          </div>
        ) : (
          <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-xl shadow-slate-200 sm:p-10">
            <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
              <div className="space-y-2">
                <p className="text-sm text-slate-500">Priority</p>
                <span
                  className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${priorityBadge(ticket.priority)}`}
                >
                  {ticket.priority || "Unknown"}
                </span>
              </div>
              <div className="rounded-3xl bg-slate-50 px-4 py-2 text-sm text-slate-600">
                Ticket #{ticket.id}
              </div>
            </div>

            {ticket.description && (
              <div className="mb-6 rounded-3xl bg-slate-50 p-6">
                <h2 className="text-lg font-semibold text-slate-900">
                  Description
                </h2>
                <p className="mt-3 text-slate-600">{ticket.description}</p>
              </div>
            )}

            <div className="space-y-6">
              <section className="rounded-3xl bg-slate-50 p-6">
                <h2 className="text-lg font-semibold text-slate-900">
                  Details
                </h2>
                <p className="mt-3 text-slate-600 whitespace-pre-line">
                  {ticket.body || "No additional details available."}
                </p>
              </section>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
