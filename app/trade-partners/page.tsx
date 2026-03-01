"use client";

import { useState } from "react";

export default function TradePartnersPage() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    bathroomsPerYear: "",
    serviceArea: "",
    projectTypes: [] as string[],
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const projectTypeOptions = [
    "New construction",
    "Full remodel",
    "Bathroom only remodel",
    "Multi-unit / development",
  ];

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleProjectTypeToggle(type: string) {
    setFormData((prev) => ({
      ...prev,
      projectTypes: prev.projectTypes.includes(type)
        ? prev.projectTypes.filter((t) => t !== type)
        : [...prev.projectTypes, type],
    }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/trade-partners", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <main>
      {/* Hero */}
      <section className="border-b bg-[#f3efe6]">
        <div className="mx-auto max-w-6xl px-4 py-14 md:py-20">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border bg-white px-3 py-1 text-xs text-neutral-700 shadow-sm">
              <span className="h-2 w-2 rounded-full bg-[#1f3b34]" />
              For contractors + remodelers
            </div>
            <h1 className="mt-5 text-4xl font-semibold tracking-tight md:text-5xl">
              Partner with Bath-in-a-Box.
            </h1>
            <p className="mt-4 max-w-xl text-lg text-neutral-600">
              We work with contractors and remodelers who want a faster, cleaner way to spec and source bathroom packages. Tell us a bit about your business and we'll be in touch.
            </p>
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="mx-auto max-w-6xl px-4 py-14 md:py-20">
        <div className="grid gap-12 md:grid-cols-2">

          {/* Left: why partner */}
          <div>
            <h2 className="text-2xl font-semibold tracking-tight">Why partner with us?</h2>
            <div className="mt-6 space-y-4">
              {[
                {
                  title: "Spec faster",
                  body: "Curated packages mean less back-and-forth with clients. Pick a style, configure the package, done.",
                },
                {
                  title: "Clean bill of materials",
                  body: "Every order comes with a contractor-ready BOM. No chasing down specs or coordinating multiple vendors.",
                },
                {
                  title: "Freight handled",
                  body: "We build freight into every quote. No surprise shipping costs mid-project.",
                },
                {
                  title: "Instant pricing",
                  body: "Give us scope + ZIP and you'll have pricing immediately — no waiting on quotes.",
                },
              ].map((item) => (
                <div key={item.title} className="rounded-2xl border bg-white p-5 shadow-sm">
                  <div className="font-semibold">{item.title}</div>
                  <div className="mt-1 text-sm text-neutral-600">{item.body}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: form */}
          <div>
            {status === "success" ? (
              <div className="rounded-3xl border bg-[#f3efe6] p-10 text-center shadow-sm">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-neutral-900 text-white text-xl">
                  ✓
                </div>
                <h3 className="mt-5 text-xl font-semibold">We got your inquiry.</h3>
                <p className="mt-2 text-sm text-neutral-600">
                  Thanks for reaching out. We'll review your details and be in touch shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="rounded-3xl border bg-white p-8 shadow-sm">
                <h2 className="text-xl font-semibold tracking-tight">Tell us about your business</h2>
                <p className="mt-1 text-sm text-neutral-500">All fields are required.</p>

                <div className="mt-6 space-y-4">
                  {/* Name + Company */}
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label className="mb-1.5 block text-sm font-medium text-neutral-700">
                        Your name
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Justin Smith"
                        className="w-full rounded-xl border bg-[#fbfaf7] px-4 py-2.5 text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-neutral-300"
                      />
                    </div>
                    <div>
                      <label className="mb-1.5 block text-sm font-medium text-neutral-700">
                        Company name
                      </label>
                      <input
                        type="text"
                        name="company"
                        required
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="ABC Remodeling"
                        className="w-full rounded-xl border bg-[#fbfaf7] px-4 py-2.5 text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-neutral-300"
                      />
                    </div>
                  </div>

                  {/* Email + Phone */}
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label className="mb-1.5 block text-sm font-medium text-neutral-700">
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="you@company.com"
                        className="w-full rounded-xl border bg-[#fbfaf7] px-4 py-2.5 text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-neutral-300"
                      />
                    </div>
                    <div>
                      <label className="mb-1.5 block text-sm font-medium text-neutral-700">
                        Phone number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="(555) 000-0000"
                        className="w-full rounded-xl border bg-[#fbfaf7] px-4 py-2.5 text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-neutral-300"
                      />
                    </div>
                  </div>

                  {/* Bathrooms per year */}
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-neutral-700">
                      How many bathrooms do you complete per year?
                    </label>
                    <select
                      name="bathroomsPerYear"
                      required
                      value={formData.bathroomsPerYear}
                      onChange={handleChange}
                      className="w-full rounded-xl border bg-[#fbfaf7] px-4 py-2.5 text-sm text-neutral-900 focus:outline-none focus:ring-2 focus:ring-neutral-300"
                    >
                      <option value="" disabled>Select a range</option>
                      <option value="1-10">1 – 10</option>
                      <option value="11-25">11 – 25</option>
                      <option value="26-50">26 – 50</option>
                      <option value="50+">50+</option>
                    </select>
                  </div>

                  {/* Service area */}
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-neutral-700">
                      Primary service area (ZIP code or city/state)
                    </label>
                    <input
                      type="text"
                      name="serviceArea"
                      required
                      value={formData.serviceArea}
                      onChange={handleChange}
                      placeholder="e.g. 90210 or Los Angeles, CA"
                      className="w-full rounded-xl border bg-[#fbfaf7] px-4 py-2.5 text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-neutral-300"
                    />
                  </div>

                  {/* Project types */}
                  <div>
                    <label className="mb-2 block text-sm font-medium text-neutral-700">
                      Types of projects you typically work on
                    </label>
                    <div className="grid gap-2 sm:grid-cols-2">
                      {projectTypeOptions.map((type) => (
                        <button
                          type="button"
                          key={type}
                          onClick={() => handleProjectTypeToggle(type)}
                          className={`rounded-xl border px-4 py-2.5 text-left text-sm font-medium transition ${
                            formData.projectTypes.includes(type)
                              ? "border-neutral-900 bg-neutral-900 text-white"
                              : "border-neutral-200 bg-[#fbfaf7] text-neutral-700 hover:bg-neutral-100"
                          }`}
                        >
                          {type}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {status === "error" && (
                  <p className="mt-4 text-sm text-red-600">
                    Something went wrong. Please try again or email us directly.
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === "loading" || formData.projectTypes.length === 0}
                  className="mt-6 w-full rounded-2xl bg-[#1f3b34] px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-[#18312b] disabled:opacity-50"
                >
                  {status === "loading" ? "Sending..." : "Submit inquiry"}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
