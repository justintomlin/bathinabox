import Image from "next/image";
import Link from "next/link";

const styles = [
  {
    name: "Modern Spa",
    slug: "modern-spa",
    headline: "Clean lines. Bold contrasts. Quiet luxury.",
    description:
      "The Modern Spa aesthetic strips away the unnecessary and lets materials speak for themselves. Think frameless glass, large-format wall panels, and matte black or polished chrome hardware. Every surface is intentional, every detail minimal. The result is a bathroom that feels like a high-end retreat — calm, architectural, and effortlessly current.",
    features: [
      "Frameless glass enclosures",
      "Large-format wall panels (Fibo or equivalent)",
      "Matte black, polished chrome, or brushed nickel hardware",
      "Wall-mounted or floating vanity options",
      "Clean-edge, zero-threshold shower bases",
      "Linear drain options",
      "Integrated LED or recessed lighting",
    ],
    images: [
      { src: "/styles/modern spa 01.png", label: "Modern Spa 01" },
      { src: "/styles/modern spa 02.png", label: "Modern Spa 02" },
      { src: "/styles/modern spa 03.png", label: "Modern Spa 03" },
    ],
  },
  {
    name: "Traditional Spa",
    slug: "traditional-spa",
    headline: "Timeless warmth. Refined details. Enduring elegance.",
    description:
      "The Traditional Spa draws from classic design principles — framed cabinetry, warm metallic finishes, and layered textures that create depth and richness. This style prioritizes craftsmanship and familiarity, pairing timeless tile patterns with decorative accents that feel established and intentional. It is a bathroom that ages gracefully and never goes out of style.",
    features: [
      "Framed or raised-panel cabinetry",
      "Oil-rubbed bronze or brushed nickel fixtures",
      "Classic subway or mosaic tile patterns",
      "Decorative trim and crown molding accents",
      "Pedestal or furniture-style vanities",
      "Traditional tub/shower combinations",
      "Warm, layered color palettes",
    ],
    images: [
      { src: "/styles/traditional spa 01.png", label: "Traditional Spa 01" },
      { src: "/styles/traditional spa 02.png", label: "Traditional Spa 02" },
      { src: "/styles/traditional spa 03.png", label: "Traditional Spa 03" },
    ],
  },
  {
    name: "Craftsman Spa",
    slug: "craftsman-spa",
    headline: "Handcrafted character. Natural tones. Honest materials.",
    description:
      "The Craftsman Spa is rooted in the Arts and Crafts tradition — an emphasis on natural materials, handcrafted details, and warm earth tones. Wood-look vanities, textured tile, and hardware with a hand-forged feel define this aesthetic. It bridges the gap between rustic charm and modern functionality, creating a bathroom that feels grounded, authentic, and built to last.",
    features: [
      "Shaker-style or mission-profile cabinetry",
      "Matte or satin-finish hardware in warm tones",
      "Wood-look vanity options with natural grain",
      "Handcrafted or textured tile selections",
      "Earth-tone color palettes with warm neutrals",
      "Brushed or aged brass accent options",
      "Durable, low-maintenance surface materials",
    ],
    images: [
      { src: "/styles/craftsman spa 01.png", label: "Craftsman Spa 01" },
      { src: "/styles/craftsman spa 02.png", label: "Craftsman Spa 02" },
      { src: "/styles/craftsman spa 03.png", label: "Craftsman Spa 03" },
    ],
  },
];

export default function StylesPage() {
  return (
    <main>
      {/* Page Hero */}
      <section className="mx-auto max-w-6xl px-4 py-14 md:py-20">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border bg-white px-3 py-1 text-xs text-neutral-700 shadow-sm">
            <span className="h-2 w-2 rounded-full bg-neutral-900" />
            Three curated directions. One clean process.
          </div>

          <h1 className="mt-5 text-4xl font-semibold tracking-tight md:text-5xl">
            Bath Styles
          </h1>

          <p className="mt-4 text-lg text-neutral-600">
            Every Bath-in-a-Box package starts with a style direction. Choose
            the aesthetic that fits your project, then explore the products and
            finishes available within that collection.
          </p>
        </div>
      </section>

      {/* Style Sections */}
      {styles.map((style, i) => (
        <section
          key={style.slug}
          id={style.slug}
          className={`border-t ${i % 2 === 0 ? "bg-white" : "bg-[#fbfaf7]"}`}
        >
          <div className="mx-auto max-w-6xl px-4 py-14 md:py-20">
            {/* Style Header */}
            <div className="max-w-3xl">
              <div className="text-xs font-semibold tracking-wide text-[#1f3b34]">
                {style.name.toUpperCase()}
              </div>
              <h2 className="mt-2 text-3xl font-semibold tracking-tight">
                {style.headline}
              </h2>
              <p className="mt-4 text-neutral-600">{style.description}</p>
            </div>

            {/* Image Thumbnails */}
            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {style.images.map((img) => (
                <a
                  key={img.src}
                  href={img.src}
                  target="_blank"
                  rel="noreferrer"
                  className="group relative overflow-hidden rounded-3xl border bg-neutral-100 shadow-sm transition hover:shadow-lg"
                >
                  <div className="relative aspect-[4/3]">
                    <Image
                      src={img.src}
                      alt={img.label}
                      fill
                      className="object-cover transition duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/0 to-transparent" />
                  <div className="absolute bottom-4 left-4 rounded-full bg-white/85 px-3 py-1 text-xs font-semibold text-neutral-900 backdrop-blur">
                    {img.label}
                  </div>
                </a>
              ))}
            </div>

            {/* Product Features */}
            <div className="mt-10 rounded-3xl border bg-white p-6 shadow-sm md:p-8">
              <div className="text-lg font-semibold">
                {"What's included in the " + style.name + " package"}
              </div>
              <p className="mt-2 text-sm text-neutral-600">
                Products and options available within this style direction.
              </p>

              <div className="mt-6 grid gap-3 md:grid-cols-2">
                {style.features.map((feature, j) => (
                  <div
                    key={j}
                    className="flex items-start gap-3 rounded-2xl border bg-[#fbfaf7] p-4"
                  >
                    <span className="mt-0.5 inline-block h-2 w-2 shrink-0 rounded-full bg-[#1f3b34]" />
                    <span className="text-sm text-neutral-700">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="mt-6">
                <Link
                  href="/#quote"
                  className="inline-flex items-center justify-center rounded-2xl bg-neutral-900 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-neutral-800"
                >
                  {"Quote the " + style.name + " package"}
                </Link>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Bottom CTA */}
      <section className="border-t">
        <div className="mx-auto max-w-3xl px-4 py-14 text-center md:py-20">
          <h2 className="text-3xl font-semibold tracking-tight">
            Not sure which style fits?
          </h2>
          <p className="mt-3 text-neutral-600">
            No problem. Request a quote and tell us about your project. We will
            help you find the right direction.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/#quote"
              className="rounded-2xl bg-neutral-900 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-neutral-800"
            >
              Request a Quote
            </Link>
            <Link
              href="/gallery"
              className="rounded-2xl border bg-white px-6 py-3 text-sm font-semibold text-neutral-950 hover:bg-neutral-50"
            >
              Browse the Gallery
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}