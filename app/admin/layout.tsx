"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const links = [
    { href: "/admin", label: "Portfolio" },
    { href: "/admin/carousel", label: "Carousel" },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-brand text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-8">
              <span className="font-display text-xl font-bold">Admin</span>
              <div className="flex gap-1">
                {links.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                      pathname === link.href
                        ? "bg-white/20"
                        : "hover:bg-white/10"
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
            <Link
              href="/"
              className="text-sm hover:bg-white/10 px-4 py-2 rounded-lg transition-colors"
              target="_blank"
            >
              View Site
            </Link>
          </div>
        </div>
      </nav>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {children}
      </div>
    </div>
  );
}
