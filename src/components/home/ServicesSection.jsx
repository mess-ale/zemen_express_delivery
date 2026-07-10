import { useEffect, useMemo, useRef, useState } from "react";
import CarouselDots from "../ui/CarouselDots";
import ServiceCard from "./ServiceCard";

/**
 * ServicesSection
 * - Scroll-snap carousel that shifts by 1 card per dot
 * - 4 dots (0..3)
 * - xl: 3 visible, lg: 2 visible, md/sm: 1 visible
 * - Wrap effect on last dot via duplicated items
 */
export default function ServicesSection() {
  const services = useMemo(
    () => [
      {
        title: "Speed and Reliability",
        desc: "We ensure your parcel reaches its destination quickly and securely, with most deliveries completed in under 24 hours.",
      },
      {
        title: "Cost-Effective Solutions",
        desc: "Our prices are highly competitive, offering unmatched value in the market.",
      },
      {
        title: "Professionalism",
        desc: "We cater to businesses, universities, and families needing secure, professional services.",
      },
      {
        title: "Wide Coverage",
        desc: "Serving all Ethiopian Airlines and Zemen Bus destinations, covering remote and urban areas alike.",
      },
      {
        title: "Community Focus",
        desc: "Discounts on educational and essential items to support growth and development in Ethiopia.",
      },
    ],
    [],
  );

  const DOTS = 5;
  const [activeDot, setActiveDot] = useState(0);

  // Duplicate list so dot 3 can show [3,0,1] naturally
  const trackItems = useMemo(() => [...services, ...services], [services]);

  const scrollerRef = useRef(null);
  const itemRefs = useRef([]);

  // Scroll to the active card (one-card step behavior)
  // useEffect(() => {
  //   const el = itemRefs.current[activeDot];
  //   if (!el) return;
  //   el.scrollIntoView({
  //     behavior: "smooth",
  //     inline: "start",
  //     block: "nearest",
  //   });
  // }, [activeDot]);
useEffect(() => {
  const container = scrollerRef.current;
  const el = itemRefs.current[activeDot];

  if (!container || !el) return;

  container.scrollTo({
    left: el.offsetLeft,
    behavior: "smooth",
  });
}, [activeDot]);

  return (
    <section className="bg-white py-16 md:py-24" id="services">
      <div className="px-4">
        {/* Heading */}
        <div className="relative text-center">
          <div className="pointer-events-none absolute left-1/2 -top-23 hidden -translate-x-1/2 select-none text-[100px] font-extrabold tracking-tight text-black/7 lg:block">
            Why Choose Us
          </div>

          <p className="text-sm font-semibold tracking-[0.25em] text-[#210c81]">
            Why Choose
          </p>
          <h2 className="mt-4 text-4xl font-extrabold text-[#210c81] sm:text-5xl">
             Zemen Express Delivery?
          </h2>
        </div>

        {/* Panel */}
        <div className="bg-gray-200">
          <div className="relative mt-14 w-full max-w-7xl mx-auto overflow-hidden px-4 py-14">
            {/* Subtle diagonal shapes */}
            <div className="pointer-events-none absolute inset-0 opacity-60">
              <div className="absolute -left-40 top-10 h-56 w-130 rotate-[-25deg] bg-white/70" />
              <div className="absolute left-1/3 top-24 h-56 w-130 rotate-[-25deg] bg-white/60" />
              <div className="absolute -right-55 top-10 h-56 w-130 rotate-[-25deg] bg-white/50" />
            </div>

            {/* Carousel (scroll-snap) */}
            <div
              ref={scrollerRef}
              className="relative no-scrollbar overflow-x-auto scroll-smooth"
            >
              <div className="flex snap-x snap-mandatory gap-5">
                {trackItems.map((item, i) => {
                  // Active card is the first visible card (index = activeDot)
                  const isActive = i === activeDot;

                  return (
                    <div
                      key={`${item.title}-${i}`}
                      ref={(node) => {
                        if (i < DOTS) itemRefs.current[i] = node; // only need refs for 0..3
                      }}
                      className={[
                        "snap-start shrink-0",
                        "w-full", // mobile
                        "l:w-[60%]", // 2 cards look larger
                        "xl:w-[45%]", // 3 cards but wider
                      ].join(" ")}
                    >
                      <ServiceCard
                        title={item.title}
                        desc={item.desc}
                        active={isActive}
                      />
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Dots */}
            <div className="relative mt-10">
              <CarouselDots
                count={DOTS}
                activeIndex={activeDot}
                onChange={setActiveDot}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
