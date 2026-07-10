import { act, useMemo, useState } from "react";
import image1 from "../../assets/images/hero2.png";

/**
 * ClientReviews
 * - 3-review slider
 * - Prev/Next arrows update the active review
 * - Counter shows 01 / 03 style
 * - Image + dark quote card layout
 */
export default function ClientReviews() {
  const reviews = useMemo(
    () => [
      {
        quote:
          "Online Marketers & Digital Shops: Helping businesses deliver goods to customers quickly and affordably.",
        name: "Small Business Owners: Reliable delivery for products and supplies.",
        image: image1,
      },
      {
        quote:
          "Medical Laboratories: Secure transport of samples with proper documentation.",
        name: "University Students & Families: Sending packages, books, and essentials across cities.",
        image: image1,
      },
      {
        quote:
          "Construction & Agriculture Operators: Delivery of tools, spare parts, and machinery.",
        image: image1,
      },
    ],
    [],
  );

  const total = reviews.length;
  const [index, setIndex] = useState(0);

  const goPrev = () => setIndex((i) => (i - 1 + total) % total);
  const goNext = () => setIndex((i) => (i + 1) % total);

  const counter = `${String(index + 1).padStart(2, "0")} / ${String(
    total,
  ).padStart(2, "0")}`;

  const active = reviews[index];

  return (
    <section className="bg-white py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Top: heading left, controls right */}
        <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
          <div className="relative">
            {/* Watermark */}
            <div className="pointer-events-none absolute -top-20 left-0 hidden select-none text-[110px] font-extrabold tracking-tight text-black/7 lg:block">
              Serve
            </div>

            <p className="text-sm font-semibold tracking-[0.22em] text-[#210c81]">
              Who We Serve
            </p>

            <h2 className="mt-4 text-4xl font-extrabold text-[#210c81] sm:text-5xl">
              Who We Serve
            </h2>
          </div>

          {/* Controls */}
          <div className="flex items-center gap-3 lg:pt-6">
            <button
              type="button"
              onClick={goPrev}
              aria-label="Previous review"
              className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-black/5 text-[#210c81] hover:bg-black/10"
            >
              ←
            </button>

            <div className="rounded-lg bg-black/5 px-4 py-2 text-sm font-semibold text-[#210c81]">
              {counter}
            </div>

            <button
              type="button"
              onClick={goNext}
              aria-label="Next review"
              className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-black/5 text-[#210c81] hover:bg-black/10"
            >
              →
            </button>
          </div>
        </div>

        {/* Main card */}
        <div className="mt-12 overflow-hidden rounded-3xl bg-white shadow-sm">
          <div className="grid lg:grid-cols-2 h-full">
            {/* Left image placeholder */}
            <div className="bg-[#210c81]">
              {/* Replace with <img /> later */}
              <img src={active.image} className="h-[280px] w-full sm:h-[360px] lg:h-full" />
            </div>

            {/* Right quote panel */}
            <div className="bg-[#210c81] px-8 py-10 text-white sm:px-10 sm:py-10">
                <p className="text-xl sm:leading-8 lg:leading-9 sm:text-1xl">{active.quote}</p>
                <p className="text-xl sm:leading-8 lg:leading-9 sm:text-1xl py-10 sm:py-8">{active.name}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
