import Image from "next/image";
import Link from "next/link";

const styleCards = [
  {
    name: "Modern Spa",
    tagline: "Clean lines. Bold contrasts. Quiet luxury.",
    image: "/styles/modern spa 01.png",
    href: "/styles#modern-spa",
  },
  {
    name: "Traditional Spa",
    tagline: "Timeless warmth. Refined details. Enduring elegance.",
    image: "/styles/traditional spa 01.png",
    href: "/styles#traditional-spa",
  },
  {
    name: "Craftsman Spa",
    tagline: "Handcrafted character. Natural tones. Honest materials.",
    image: "/styles/craftsman spa 01.png",
    href: "/styles#craftsman-spa",
  },
];

export default function Home() {
  return (
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute left-1/2 top-[-120px] h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-neutral-100 blur-3xl" />
          <div className="absolute right-[-200px] top-[140px] h-[420px] w-[420px] rounded-full bg-neutral-100 blur-3xl" />
        </div>

        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-14 md:grid-cols-2 md:py-20">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border bg-white px-3 py-1 text-xs text-neutral-700 shadow-sm">
              <span className="h-2 w-2 rounded-full bg-neutral-900" />
              Builder + remodeler friendly. Clean logistics.
            </div>

            <h1 className="mt-5 text-4xl font-semibold tracking-tight md:text-5xl">
              Bathroom packages that ship fast and install clean.
            </h1>

            <p className="mt-4 max-w-xl text-lg text-neutral-600">
              Curated bath packages (fixtures + wall options + accessories) with a streamlined quote-to-order
              flow. Built for speed, clarity, and fewer surprises.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#quote"
                className="rounded-2xl bg-neutral-900 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-neutral-800"
              >
                Request a Quote
              </a>
              <Link
                href="/styles"
                className="rounded-2xl border bg-white px-6 py-3 text-sm font-semibold text-neutral-950 hover:bg-neutral-50"
              >
                View Styles
              </Link>
            </div>

            <div className="mt-10 grid grid-cols-3 gap-3 text-sm">
              <div className="rounded-2xl border bg-white p-4 shadow-sm">
                <div className="font-semibold">Fast</div>
                <div className="mt-1 text-neutral-600">Package-led quoting</div>
              </div>
              <div className="rounded-2xl border bg-white p-4 shadow-sm">
                <div className="font-semibold">Clean</div>
                <div className="mt-1 text-neutral-600">Install-ready BOM</div>
              </div>
              <div className="rounded-2xl border bg-white p-4 shadow-sm">
                <div className="font-semibold">Streamlined</div>
                <div className="mt-1 text-neutral-600">Single Configurator Intake</div>
              </div>
            </div>
          </div>

          {/* Hero visual */}
          <div className="relative">
            <div className="rounded-3xl border bg-white p-4 shadow-sm">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-gradient-to-br from-neutral-200 to-white">
                <Image src="/hero.jpg" alt="Bathroom" fill className="object-cover" priority />
                <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-black/10 to-transparent" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.10),transparent_45%),radial-gradient(circle_at_80%_40%,rgba(0,0,0,0.10),transparent_55%)]" />
              </div>

              <div className="mt-4 grid gap-3 md:grid-cols-2">
                <div className="rounded-2xl border p-4">
                  <div className="text-sm font-semibold">What you get</div>
                  <ul className="mt-2 space-y-1 text-sm text-neutral-600">
                    <li>Curated package options</li>
                    <li>Quote + spec checklist</li>
                    <li>Freight and logistics included</li>
                  </ul>
                </div>
                <div className="rounded-2xl border p-4">
                  <div className="text-sm font-semibold">{"Who it's for"}</div>
                  <ul className="mt-2 space-y-1 text-sm text-neutral-600">
                    <li>Remodelers</li>
                    <li>Builders</li>
                    <li>Homeowners (guided)</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Credibility band */}
      <section className="border-y bg-[#f3efe6]">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-4 px-4 py-8 text-sm md:grid-cols-4">
          {["Package clarity", "Freight-aware quotes", "Pro-friendly options", "Fast turnaround"].map((t) => (
            <div key={t} className="rounded-2xl border bg-[#fffdf8] p-4 text-neutral-700 shadow-sm">
              <div className="font-semibold text-neutral-950">{t}</div>
              <div className="mt-1 text-xs text-neutral-500">Designed to reduce friction.</div>
            </div>
          ))}
        </div>
      </section>

      {/* Styles */}
      <section id="styles" className="mx-auto max-w-6xl px-4 py-14 md:py-20">
        <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight">Styles</h2>
            <p className="mt-2 max-w-2xl text-neutral-600">
              Three curated directions. Pick a style to explore the full collection.
            </p>
          </div>
          <Link
            href="/styles"
            className="rounded-2xl border bg-white px-5 py-3 text-sm font-semibold hover:bg-neutral-50"
          >
            View all styles
          </Link>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {styleCards.map((card) => (
            <Link
              key={card.name}
              href={card.href}
              className="group relative overflow-hidden rounded-3xl border bg-neutral-100 shadow-sm transition hover:shadow-lg"
            >
              <div className="relative aspect-[4/3]">
                <Image
                  src={card.image}
                  alt={card.name}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
              <div className="absolute bottom-0 left-0 p-5">
                <div className="text-lg font-semibold text-white">{card.name}</div>
                <div className="mt-1 text-sm text-white/80">{card.tagline}</div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Configurator */}
      <section id="configurator" className="mx-auto max-w-6xl px-4 py-14 md:py-20">
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight">1 Simple Configurator</h2>
            <p className="mt-2 text-neutral-600">
              Build your bath package in minutes. Get a clean bill of materials, package options, and a quote-ready summary.
            </p>

            <div className="mt-6 rounded-3xl border bg-[#fffdf8] p-6 text-sm text-neutral-700 shadow-sm">
              <div className="font-semibold text-neutral-950">{"What you'll get"}</div>
              <ul className="mt-3 space-y-2">
                <li>Package recommendation + options</li>
                <li>Bill of Materials (BOM) you can hand to a contractor</li>
                <li>Freight-aware pricing guidance</li>
                <li>{"Next steps checklist (order \u2192 ship \u2192 install)"}</li>
              </ul>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#"
                className="rounded-2xl bg-[#1f3b34] px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-[#18312b]"
              >
                Launch Configurator
              </a>
              <Link
                href="/styles"
                className="rounded-2xl border bg-white px-6 py-3 text-sm font-semibold text-neutral-950 hover:bg-neutral-50"
              >
                Explore Styles
              </Link>
            </div>
          </div>

          <div className="rounded-3xl border bg-white p-6 shadow-sm">
            <div className="text-sm font-semibold text-neutral-950">Quick Preview</div>
            <p className="mt-1 text-sm text-neutral-600">
              A guided flow that captures scope, layout basics, finish direction, and timeline.
            </p>

            <div className="mt-6 grid gap-4">
              {[
                { k: "Step 1", v: "Project type (shower / tub / full bath)" },
                { k: "Step 2", v: "Rough dimensions + constraints" },
                { k: "Step 3", v: "Finish + package tier" },
                { k: "Step 4", v: "Location + timeline (freight + availability)" },
              ].map((row) => (
                <div key={row.k} className="flex items-start justify-between gap-4 rounded-2xl border bg-[#fbfaf7] p-4">
                  <div className="text-xs font-semibold text-neutral-500">{row.k}</div>
                  <div className="text-sm text-neutral-800">{row.v}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="border-t bg-neutral-50">
        <div className="mx-auto max-w-6xl px-4 py-14 md:py-20">
          <h2 className="text-3xl font-semibold tracking-tight">FAQ</h2>

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {[
              {
                q: "Is this only for contractors?",
                a: "No. We're contractor-friendly, but homeowners can request a guided package quote too.",
              },
              {
                q: "Do you install?",
                a: "Not currently. The model is package + logistics clarity. Install partner options can come later.",
              },
              {
                q: "How fast can you quote?",
                a: "If we have ZIP + scope + basic dims, we can usually turn a quote within 1 business day.",
              },
              {
                q: "Can I customize beyond the package?",
                a: "Yes. Packages are the baseline for speed. Customization is where it matters most.",
              },
            ].map((f) => (
              <div key={f.q} className="rounded-3xl border bg-white p-6 shadow-sm">
                <div className="font-semibold">{f.q}</div>
                <div className="mt-2 text-sm text-neutral-600">{f.a}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
