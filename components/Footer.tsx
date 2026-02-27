import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t bg-white">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3">
              <div className="grid h-9 w-9 place-items-center rounded-xl bg-neutral-900 text-white shadow-sm">
                <span className="text-sm font-semibold">B</span>
              </div>
              <span className="text-sm font-semibold tracking-tight">
                Bath-in-a-Box
              </span>
            </div>
            <p className="mt-3 max-w-xs text-sm text-neutral-500">
              Curated bathroom packages built for speed, clarity, and fewer
              surprises.
            </p>
          </div>

          {/* Link columns */}
          <div className="flex gap-16 text-sm">
            <div>
              <div className="font-semibold text-neutral-950">Pages</div>
              <div className="mt-3 flex flex-col gap-2 text-neutral-500">
                <Link href="/#styles" className="hover:text-neutral-900">Styles</Link>
                <Link href="/gallery" className="hover:text-neutral-900">Gallery</Link>
                <Link href="/trade-partners" className="hover:text-neutral-900">Trade Partners</Link>
                <Link href="/process" className="hover:text-neutral-900">Process</Link>
              </div>
            </div>
            <div>
              <div className="font-semibold text-neutral-950">Quick Links</div>
              <div className="mt-3 flex flex-col gap-2 text-neutral-500">
                <Link href="/#quote" className="hover:text-neutral-900">Get a Quote</Link>
                <Link href="/#faq" className="hover:text-neutral-900">FAQ</Link>
                <Link href="/#configurator" className="hover:text-neutral-900">Configurator</Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 border-t pt-6 text-sm text-neutral-400">
          © {new Date().getFullYear()} Bath-in-a-Box. All rights reserved.
        </div>
      </div>
    </footer>
  );
}