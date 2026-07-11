import { Check, PhoneCall } from "lucide-react";
import hero1 from "../../assets/images/hero1.png";
import hero2 from "../../assets/images/delivery.jpg";

/**
 * AboutSection
 * - Left: image collage with experience badge
 * - Right: headings, copy, checklist, phone + signature row
 */
export default function AboutSection() {
  return (
    <section className="bg-white py-14 md:py-20">
      <div className="mx-auto grid max-w-300 items-center px-4 sm:px-6 lg:grid-cols-2">
        {/* LEFT: image collage */}
        <div className="relative mx-auto w-full max-w-130 lg:mx-0">
          {/* Main image placeholder */}
          <div className="relative overflow-hidden rounded-3xl bg-gray-200">
            {/* Replace this div with your <img /> later */}
            <img src={hero2} className="h-105 w-full sm:h-120 object-cover" />
          </div>

          {/* Experience badge */}
          <div className="absolute left-0 top-24 -translate-x-6 rounded-2xl bg-[#ffffff] px-8 py-8 text-[#210c81] shadow-lg sm:-translate-x-10">
            <div className="text-5xl font-extrabold leading-none">2+</div>
            <div className="mt-4 text-sm font-semibold">Year of experience</div>
          </div>

          {/* Small bottom image placeholder */}
          <div className="absolute bottom-10 right-6 w-60 overflow-hidden rounded-2xl border-8 border-white bg-gray-200 shadow-lg sm:right-10 sm:w-70">
            <img src={hero1} alt="" className="h-40 w-full sm:h-45" />
          </div>
        </div>

        {/* RIGHT: content */}
        <div className="relative">
          {/* Watermark */}
          <div className="pointer-events-none absolute -top-23 left-0 hidden select-none text-[120px] font-extrabold tracking-tight text-black/8 lg:block">
            About Us
          </div>

          <p className="text-sm font-semibold tracking-[0.22em] text-[#210c81]">
            MORE ABOUT US
          </p>

          <h2 className="mt-4 text-3xl font-extrabold leading-[1.1] text-[#210c81] sm:text-4xl">
            On-Time,
            <br className="hidden sm:block" />
            Every Time
          </h2>

          <div className="mt-6 grid lg:grid-cols-[1.25fr_0.75fr] gap-4">
            {/* Paragraph */}
            <p className="text-[15px] leading-7 text-[#210c81] text-justify">
              At Zemen Express Delivery, we specialize in providing fast,
              reliable, and affordable parcel delivery services across Ethiopia.
              Whether you’re sending important documents, valuable goods, or
              everyday items, we guarantee delivery to intercity destinations in
              less than 24 hours.
            </p>

            {/* Checklist */}
            <ul className="space-y-3">
              <CheckItem text="24/7 Call Services Avilable" />
              <CheckItem text="Telephone: 7273" />
              <CheckItem text="Expert Team Members" />
            </ul>
          </div>

          {/* Bottom row */}
          <div className="mt-10 flex flex-col gap-6 border-t border-black/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
            {/* Call box */}
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#210c81] text-white">
                <PhoneCall />
              </div>
              <div>
                <p className="text-sm text-[#2c1888]">Call us anytime</p>
                <p className="text-lg font-extrabold text-[#210c81]">
                  +25196 121 3333
                </p>
              </div>
            </div>

            {/* Signature placeholder */}
            <div className="text-3xl font-semibold italic text-[#210c81]/80">
              Zemen Express
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/** Checklist row */
function CheckItem({ text }) {
  return (
    <li className="flex items-center gap-3 text-[15px] text-[#210c81]">
      <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-[#210c81] text-[11px] text-white">
        <Check size={15} color="#ffffff" />
      </span>
      <span className="font-semibold">{text}</span>
    </li>
  );
}
