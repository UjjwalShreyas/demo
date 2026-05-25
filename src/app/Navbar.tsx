"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="sticky top-0 z-40 w-full bg-[#f4f1ea] border-b-2 border-[#111111]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-black tracking-tighter text-[#111111] hover:opacity-70 transition-opacity">
              SCOUT.
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              <Link
                href="/"
                className={`text-sm font-bold tracking-wide uppercase text-[#111111] decoration-2 underline-offset-4 hover:underline ${
                  pathname === "/" || pathname.startsWith("/college") ? "underline" : ""
                }`}
              >
                Home
              </Link>
              <Link
                href="/rankings"
                className={`text-sm font-bold tracking-wide uppercase text-[#111111] decoration-2 underline-offset-4 hover:underline ${
                  pathname.startsWith("/rankings") ? "underline" : ""
                }`}
              >
                Rankings
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
