function Metric({ title, value }: { title: string; value: string }) {
  return (
    <div className="rounded-2xl border bg-white p-4 shadow-sm">
      <div className="text-sm text-gray-500">{title}</div>
      <div className="mt-2 text-2xl font-semibold">{value}</div>
    </div>
  );
}

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold">Dashboard</h1>
        <p className="mt-1 text-sm text-gray-500">
          Overview of members, dues, and outstanding balances.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Metric title="Active members" value="128" />
        <Metric title="Monthly revenue" value="£9,240" />
        <Metric title="Overdue invoices" value="14" />
        <Metric title="Churn risk" value="6" />
      </div>

      <div className="rounded-2xl border bg-white p-6 shadow-sm">
        <div className="text-sm font-medium">Next actions</div>
        <div className="mt-2 text-sm text-gray-500">
          Add members, create plans, and generate invoices.
        </div>
      </div>
    </div>
  );
}
