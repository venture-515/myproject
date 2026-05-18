import Link from "next/link";

async function gettickets() {
  const res = await fetch("http://localhost:4000/tickets", {
    cache: "no-store",
  });
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

export default async function Ticketlist() {
  const tickets = await gettickets();

  return (
    <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
      {(tickets || []).map((ticket) => (
        <article
          key={ticket.id}
          className="rounded-3xl border border-slate-200 bg-white p-6 shadow-md shadow-slate-200 transition hover:-translate-y-1 hover:shadow-lg"
        >
          <div className="mb-5 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div className="space-y-3">
              <h2 className="text-xl font-semibold text-slate-900">
                {ticket.title}
              </h2>
              {ticket.description && (
                <p className="text-sm text-slate-500">{ticket.description}</p>
              )}
            </div>
            <div className="flex flex-wrap items-center gap-2">
              {ticket.priority && (
                <span
                  className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${priorityBadge(ticket.priority)}`}
                >
                  {ticket.priority}
                </span>
              )}
              <span className="inline-flex rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">
                #{ticket.id}
              </span>
            </div>
          </div>

          <p className="text-sm leading-6 text-slate-600">
            {ticket.body
              ? ticket.body.slice(0, 200) +
                (ticket.body.length > 200 ? "..." : "")
              : ""}
          </p>

          <div className="mt-6 flex items-center justify-between gap-4 pt-6 border-t border-slate-100">
            <Link
              href={`/tickets/${ticket.id}`}
              className="rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-800"
            >
              View details
            </Link>
            <span className="text-xs uppercase tracking-[0.24em] text-slate-400">
              Ticket #{ticket.id}
            </span>
          </div>
        </article>
      ))}

      {(tickets || []).length === 0 && (
        <div className="rounded-3xl border border-dashed border-slate-200 bg-slate-50 p-10 text-center text-slate-700 shadow-sm">
          <p className="text-lg font-medium text-slate-900">
            No tickets found.
          </p>
          <p className="mt-2 text-sm text-slate-500">
            Check your data source or add some tickets to see them appear here.
          </p>
        </div>
      )}
    </div>
  );
}
