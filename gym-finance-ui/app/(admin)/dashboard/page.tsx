function Metric({
  title,
  value,
  highlight,
}: {
  title: string;
  value: string;
  highlight?: boolean;
}) {
  return (
    <div className="group rounded-2xl border border-zinc-200 bg-white/80 p-4 shadow-sm backdrop-blur transition hover:-translate-y-0.5 hover:shadow-md">
      <div className="text-sm text-zinc-500">{title}</div>
      <div
        className={[
          "mt-2 text-2xl font-semibold",
          highlight ? "text-indigo-600" : "text-zinc-900",
        ].join(" ")}
      >
        {value}
      </div>
      <div className="mt-3 h-1 w-12 rounded-full bg-zinc-100 transition group-hover:bg-indigo-100" />
    </div>
  );
}

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-semibold text-zinc-900">Dashboard</h2>
        <p className="mt-1 text-sm text-zinc-500">
          Overview of members, dues, and outstanding balances.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Metric title="Active members" value="128" />
        <Metric title="Monthly revenue" value="£9,240" highlight />
        <Metric title="Overdue invoices" value="14" />
        <Metric title="Churn risk" value="6" />
      </div>

      <div className="rounded-2xl border border-zinc-200 bg-white/80 p-6 shadow-sm backdrop-blur">
        <div className="text-sm font-medium text-zinc-900">Next actions</div>
        <div className="mt-2 text-sm text-zinc-500">
          Add members, create plans, and generate invoices.
        </div>
      </div>
    </div>
  );
}