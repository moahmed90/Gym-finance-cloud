"use client";

import { usePathname } from "next/navigation";

function titleFromPath(pathname: string) {
  if (pathname === "/members") return "Members";
  if (pathname === "/plans") return "Plans";
  if (pathname === "/invoices") return "Invoices";
  return "Dashboard";
}

export function Topbar() {
  return (
    <header className="sticky top-0 z-10 border-b bg-white/70 backdrop-blur-xl">
      <div className="flex h-14 items-center justify-between px-6">
        <div className="text-sm text-gray-500">
          Search members, invoices, plans...
        </div>
        <div className="text-sm font-medium">mo-admin</div>
      </div>
    </header>
  );
}