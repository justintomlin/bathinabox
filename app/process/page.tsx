export default function ProcessPage() {
  return (
    <main>
      {/* Page Content */}
      <section className="mx-auto max-w-5xl px-4 py-16">
        <h1 className="text-4xl font-semibold tracking-tight">
          Our Process
        </h1>

        <p className="mt-4 text-neutral-600">
          This is where the Bath-in-a-Box process lives.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {[
            {
              title: "1. Define Your Scope",
              desc: "Select your bath type, rough dimensions, and preferred style direction.",
            },
            {
              title: "2. Receive Package Quote",
              desc: "We provide a clean, freight-aware package with material clarity and next steps.",
            },
            {
              title: "3. Order + Ship",
              desc: "We coordinate logistics to keep installation predictable and efficient.",
            },
          ].map((step) => (
            <div key={step.title} className="rounded-3xl border bg-white p-6 shadow-sm">
              <div className="text-lg font-semibold">{step.title}</div>
              <p className="mt-3 text-sm text-neutral-600">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}