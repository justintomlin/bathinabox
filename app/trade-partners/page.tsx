import Image from "next/image";

const tradePartners = [
  {
    name: "Acquabella",
    logo: "/brands/acquabelle.jpg",
    url: "https://www.acquabella.com/en",
  },
  {
    name: "Delta",
    logo: "/brands/Delta.png",
    url: "https://www.deltafaucet.com/bathroom",
  },
  {
    name: "Fibo",
    logo: "/brands/Fibo.png",
    url: "https://fibosystemusa.com/",
  },
  {
    name: "Kaolifina",
    logo: "/brands/Kaolifina.png",
    url: "http://kaolifona.com/",
  },
  {
    name: "MSI",
    logo: "/brands/msi.png",
    url: "https://www.msisurfaces.com/luxury-vinyl-tile/trecento/",
  },
  {
    name: "Toto",
    logo: "/brands/toto.jpg",
    url: "https://www.totousa.com/",
  },
];

export default function TradePartnersPage() {
  return (
    <main>
      {/* Page Intro */}
      <section className="mx-auto max-w-6xl px-4 py-14 md:py-20">
        <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">
          Trade Partners
        </h1>

        <p className="mt-4 max-w-2xl text-neutral-600">
          Bath-in-a-Box integrates select manufacturing partners whose
          products meet our standards for durability, compatibility, and
          installation efficiency.
        </p>

        <p className="mt-4 max-w-2xl text-neutral-600">
          We intentionally limit our partner network to ensure clean kit
          integration, predictable quoting, and streamlined ordering.
        </p>

        {/* Brand Grid */}
        <div className="mt-14">
          <div className="text-xs font-semibold tracking-wide text-neutral-500">
            STRATEGIC MANUFACTURING PARTNERS
          </div>

          <div className="mt-10 grid grid-cols-2 gap-8 md:grid-cols-3">
            {tradePartners.map((partner) => (
              <a
                key={partner.name}
                href={partner.url}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center justify-center rounded-3xl border bg-white p-8 shadow-sm transition duration-300 hover:shadow-lg"
              >
                <div className="relative h-16 w-44">
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    fill
                    className="object-contain grayscale transition duration-300 group-hover:grayscale-0"
                  />
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Why It Matters */}
        <div className="mt-20 rounded-3xl border bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-semibold tracking-tight">
            Why Our Trade Partnerships Matter
          </h2>

          <div className="mt-6 grid gap-6 md:grid-cols-3">
            <div>
              <div className="text-lg font-semibold">Integration</div>
              <p className="mt-2 text-sm text-neutral-600">
                Each partner product is pre-evaluated for compatibility within
                our bath kit system.
              </p>
            </div>

            <div>
              <div className="text-lg font-semibold">Reliability</div>
              <p className="mt-2 text-sm text-neutral-600">
                We work with established manufacturers known for quality,
                warranty support, and long-term availability.
              </p>
            </div>

            <div>
              <div className="text-lg font-semibold">Efficiency</div>
              <p className="mt-2 text-sm text-neutral-600">
                Limiting product lines reduces installation friction and
                speeds project completion.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
