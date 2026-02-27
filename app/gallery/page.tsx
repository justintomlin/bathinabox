import Image from "next/image";

const images = [
  { src: "/gallery/Modern 01.jpg", label: "Modern 01" },
  { src: "/gallery/Modern 02.jpg", label: "Modern 02" },
  { src: "/gallery/Modern 03.jpg", label: "Modern 03" },
  { src: "/gallery/Traditional 01.jpg", label: "Traditional 01" },
  { src: "/gallery/Traditional 02.jpg", label: "Traditional 02" },
  { src: "/gallery/Transitional 01.jpg", label: "Transitional 01" },
  { src: "/gallery/Transitional 02.jpg", label: "Transitional 02" },
  { src: "/gallery/Transitional 03.jpg", label: "Transitional 03" },
];

export default function GalleryPage() {
  return (
    <main>
      {/* Page Content */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <h1 className="text-4xl font-semibold tracking-tight">
          Gallery
        </h1>

        <p className="mt-4 text-neutral-600">
          Explore Modern, Traditional, and Transitional bathroom inspiration.
        </p>

        {/* Gallery Grid */}
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {images.map((img) => (
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

              <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-black/0 to-transparent" />

              <div className="absolute bottom-4 left-4 rounded-full bg-white/85 px-3 py-1 text-xs font-semibold text-neutral-900 backdrop-blur">
                {img.label}
              </div>
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}
