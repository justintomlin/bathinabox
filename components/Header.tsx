"use client";

import Link from "next/link";
import { useState } from "react";

function LogoMark() {
  return (
    <div className="flex items-center gap-3">
      <div className="grid h-9 w-9 place-items-center rounded-xl bg-neutral-900 text-white shadow-sm">
        <span className="text-sm font-semibold">B</span>
      </div>
      <div className="leading-tight">
        <div className="text-sm font-semibold tracking-tight">Bath-in-a-Box</div>
        <div className="hidden text-xs text-neutral-500 sm:block">
          Luxury bathing, delivered
        </div>
      </div>
    </div>
  );
}

const navLinks = [
  { href: "/#styles", label: "Styles" },
  { href: "/gallery", label: "Gallery" },
  { href: "/trade-partners", label: "Trade Partners" },
  { href: "/process", label: "Process" },
  { href: "/#faq", label: "FAQ" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b bg-white/85 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        {/* Logo */}
        <Link href="/" className="select-none">
          <LogoMark />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-3 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-xl border px-4 py-2 text-sm font-semibold text-neutral-900 transition hover:bg-neutral-100"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right side: CTA + mobile toggle */}
        <div className="flex items-center gap-3">
          <Link
            href="/#quote"
            className="rounded-xl bg-[#1f3b34] px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-[#18312b]"
          >
            Get a Quote
          </Link>

          {/* Hamburger button (mobile only) */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="grid h-9 w-9 place-items-center rounded-xl border md:hidden"
            aria-label="Toggle menu"
          >
            <svg
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile nav drawer */}
      {mobileOpen && (
        <nav className="border-t bg-white px-4 pb-4 md:hidden">
          <div className="flex flex-col gap-2 pt-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="rounded-xl border px-4 py-3 text-sm font-semibold text-neutral-900 transition hover:bg-neutral-100"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}