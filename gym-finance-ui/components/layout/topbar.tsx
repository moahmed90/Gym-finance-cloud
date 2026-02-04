export function Topbar() {
  return (
    <header className="border-b bg-white px-6 py-4">
      <div className="flex items-center justify-between gap-4">
        <div className="text-sm text-gray-500">Gym Finance</div>

        <div className="w-full max-w-md">
          <input
            className="w-full rounded-lg border px-3 py-2 text-sm outline-none focus:ring-2"
            placeholder="Search members, invoices, plans..."
          />
        </div>

        <div className="text-sm">mo-admin</div>
      </div>
    </header>
  );
}
