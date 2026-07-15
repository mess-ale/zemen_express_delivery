import image1 from "../../assets/images/cover.jpg";
import image2 from "../../assets/images/vision.jpg";
import icon from "../../assets/icons/developing.png";
import { Play } from "lucide-react";
import { NavLink } from "react-router-dom";

/**
 * BusinessGlobalSection
 * - Left: heading + 2 feature rows + buttons
 * - Right: stacked image collage
 * - Includes faint watermark text behind
 */
export default function BusinessGlobalSection() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="relative mx-auto flex flex-col lg:flex-row max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8 justify-between">
        {/* Watermark */}
        <div className="pointer-events-none absolute -top-20 left-0 hidden select-none text-[125px] font-extrabold tracking-wide text-black/7 lg:block">
Vision and Mission        </div>
        {/* LEFT */}
        <div className="relative">

          <h2 className="mt-4 text-4xl font-semibold leading-[1.08] text-[#210c81] sm:text-5xl">
            Our Vision and Mission
          </h2>

          {/* Features */}
          <div className="mt-10 space-y-8">
            <FeatureRow
              title="Our Vision"
              desc="To become Ethiopia’s leading courier service, fostering economic growth and connectivity while maintaining unmatched reliability, speed, and customer satisfaction."
            />
            <FeatureRow
              title="Our Mission"
              desc="We strive to provide efficient, secure, and affordable delivery services, meeting the diverse needs of our customers. By leveraging technology and a dedicated team, we ensure every package is delivered on time, every time, with professionalism and care."
            />
          </div>

          {/* Buttons */}
          <div className="mt-12 flex items-center gap-6">
            
            <NavLink to="contact">
            <button
              type="button"
              className="h-14 rounded-2xl bg-[#ff7700] px-10 text-sm font-semibold text-white hover:text-black/85 cursor-pointer"
            >
              Contact Us
            </button></NavLink>

            <button
              type="button"
              aria-label="Play video"
              className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-black/5 text-[#210c81] hover:bg-black/10"
            >
              <Play size={30} color="#000000" />
            </button>
          </div>
        </div>

        {/* RIGHT */}
        <div className="relative mx-auto w-full max-w-110 lg:mx-0">
          {/* Big image placeholder */}
          <div className="overflow-hidden rounded-3xl bg-gray-200">
            {/* Replace with your image */}
            <img
              src={image1}
              alt="Business Global Section"
              className="h-140 w-full lg:h-140 object-cover"
            />
          </div>

          {/* Small overlapping image placeholder */}
          <div className="absolute left-10 top-50 lg:-left-30 lg:top-24 w-65 overflow-hidden rounded-3xl border-10 border-white bg-gray-200 shadow-lg sm:w-75">
            {/* Replace with your image */}
            <img src={image2} className="h-80 w-full sm:h-90 object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
}

/** Feature row item (icon + text) */
function FeatureRow({ title, desc }) {
  return (
    <div className="flex items-start gap-5">
      {/* Icon placeholder */}
      <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-black/5">
        {/* swap with icon later */}

        <img src={icon} alt="icon" className="h-12 w-12" />
      </div>

      <div>
        <h3 className="text-lg font-extrabold text-[#210c81]">{title}</h3>
        <p className="mt-2 max-w-md text-[15px] leading-7 text-[#351f97]">
          {desc}
        </p>
      </div>
    </div>
  );
}
