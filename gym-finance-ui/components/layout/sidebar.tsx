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
    <aside className="w-[280px] shrink-0 p-6 pt-8">
      <div className="relative rounded-3xl bg-white/70 backdrop-blur-xl shadow-xl ring-1 ring-black/10">
        {/* subtle glass highlight */}
        <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-br from-white/40 to-transparent" />

        <div className="relative p-5">
          {/* Brand */}
          <div className="mb-8 px-2">
            <div className="text-lg font-semibold tracking-tight">
              Gym Finance
            </div>
            <div className="text-sm text-gray-500">Admin Portal</div>
          </div>

          {/* Navigation */}
          <nav className="space-y-1">
            {nav.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={[
                    "block rounded-xl px-3 py-2 text-sm transition-all",
                    active
                      ? "bg-black text-white shadow-sm"
                      : "text-gray-700 hover:bg-black/5",
                  ].join(" ")}
                >
                  {item.name}
                </Link>
              );
            })}
          </nav>
        </div>
      </div>
    </aside>
  );
}