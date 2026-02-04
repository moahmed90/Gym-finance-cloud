"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const nav = [
  { name: "Dashboard", href: "/dashboard" },
  { name: "Members", href: "/members" },
  { name: "Plans", href: "/plans" },
  { name: "Invoices", href: "/invoices" },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 border-r bg-white px-4 py-6">
      <div className="mb-8">
        <div className="text-lg font-semibold">Gym Finance</div>
        <div className="text-sm text-gray-500">Admin Portal</div>
      </div>

      <nav className="space-y-1">
        {nav.map((item) => {
          const active = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={[
                "block rounded-lg px-3 py-2 text-sm transition",
                active ? "bg-gray-100 font-medium" : "hover:bg-gray-100",
              ].join(" ")}
            >
              {item.name}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}