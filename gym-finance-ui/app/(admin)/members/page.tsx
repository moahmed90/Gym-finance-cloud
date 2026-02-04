const members = [
  { name: "Aisha Khan", plan: "Unlimited", status: "Active", balance: "£0" },
  { name: "Mo Ahmed", plan: "Standard", status: "Overdue", balance: "£25" },
  { name: "Sam Patel", plan: "Off-peak", status: "Active", balance: "£0" },
  { name: "Leah Johnson", plan: "Unlimited", status: "Paused", balance: "£0" },
];

function StatusBadge({ status }: { status: string }) {
  const base = "inline-flex items-center rounded-full px-2 py-1 text-xs font-medium";
  if (status === "Active") return <span className={`${base} bg-green-50 text-green-700`}>Active</span>;
  if (status === "Overdue") return <span className={`${base} bg-red-50 text-red-700`}>Overdue</span>;
  return <span className={`${base} bg-gray-100 text-gray-700`}>Paused</span>;
}

export default function MembersPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h1 className="text-2xl font-semibold">Members</h1>
          <p className="mt-1 text-sm text-gray-500">Manage members, plans, and balances.</p>
        </div>
        <button className="rounded-xl bg-black px-4 py-2 text-sm font-medium text-white hover:opacity-90">
          Add member
        </button>
      </div>

      <div className="rounded-2xl border bg-white shadow-sm">
        <div className="border-b p-4">
          <input
            className="w-full max-w-md rounded-xl border px-3 py-2 text-sm outline-none focus:ring-2"
            placeholder="Search members..."
          />
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="text-left text-gray-500">
              <tr className="border-b">
                <th className="px-4 py-3 font-medium">Member</th>
                <th className="px-4 py-3 font-medium">Plan</th>
                <th className="px-4 py-3 font-medium">Status</th>
                <th className="px-4 py-3 font-medium">Balance</th>
              </tr>
            </thead>
            <tbody>
              {members.map((m) => (
                <tr key={m.name} className="border-b last:border-0 hover:bg-gray-50">
                  <td className="px-4 py-3 font-medium">{m.name}</td>
                  <td className="px-4 py-3">{m.plan}</td>
                  <td className="px-4 py-3"><StatusBadge status={m.status} /></td>
                  <td className="px-4 py-3">{m.balance}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
