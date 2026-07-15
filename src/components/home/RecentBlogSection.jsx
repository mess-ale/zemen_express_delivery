import { useEffect, useMemo, useRef, useState } from "react";
import BlogCard from "./BlogCard";
import blogImg1 from "../../assets/blog/blog1.png";
import blogImg2 from "../../assets/blog/blog2.png";
import blogImg3 from "../../assets/blog/blog3.png";
import blogImg4 from "../../assets/blog/blog4.png";
import blogImg5 from "../../assets/blog/blog5.png";
import blogImg6 from "../../assets/blog/blog6.png";

/**
 * RecentBlogSection
 * - Continuous horizontal slider (right -> left)
 * - Duplicates list for loop illusion
 * - Dots are shown for UI feel (optional click to jump)
 */
export default function RecentBlogSection() {
  const posts = useMemo(
    () => [
      {
        slug: "fast-delivery-tips",
        category: "Logistics Insights",
        author: "Zemen Team",
        title: "How to ensure your parcels arrive in under 24 hours",
        image: blogImg1,
      },
      {
        slug: "building-trust-in-delivery",
        category: "Logistics Insights",
        author: "Zemen Team",
        title: "Building a reliable delivery brand in Ethiopia",
        image: blogImg2,
      },
      {
        slug: "optimizing-delivery-routes",
        category: "Logistics Insights",
        author: "Zemen Team",
        title: "Transforming how we move goods across intercity routes",
        image: blogImg3,
      },
      // Extra item(s) to make the slider feel continuous
      {
        slug: "safe-parcel-handling",
        category: "Logistics Insights",
        author: "Zemen Team",
        title: "Best practices for shipping valuable goods safely",
        image: blogImg4,
      },
      {
        slug: "scaling-your-logistics",
        category: "Logistics Insights",
        author: "Zemen Team",
        title: "Strategy fundamentals that scale your delivery needs",
        image: blogImg5,
      },
      {
        slug: "future-of-ethiopian-logistics",
        category: "Logistics Insights",
        author: "Zemen Team",
        title: "Designing better delivery systems for long-term success",
        image: blogImg6,
      },
    ],
    [],
  );

  // Duplicate for loop illusion
  const track = useMemo(() => [...posts, ...posts], [posts]);

  const scrollerRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);
  const [activeDot, setActiveDot] = useState(0);

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;

    // Start closer to the beginning so the loop reset is less noticeable
    if (el.scrollLeft === 0) el.scrollLeft = 1;

    const tick = () => {
      if (isPaused) return;

      // Move right -> left by scrolling to the right (content moves left)
      el.scrollBy({ left: 340, behavior: "smooth" });

      // Loop illusion: if far enough, jump back
      const maxBeforeReset = el.scrollWidth * 0.55;
      if (el.scrollLeft > maxBeforeReset) {
        el.scrollLeft = 1;
      }

      // Update a simple dot state (visual)
      setActiveDot((d) => (d + 1) % 6);
    };

    const id = window.setInterval(tick, 3500);
    return () => window.clearInterval(id);
  }, [isPaused]);

  const jumpTo = (dotIndex) => {
    const el = scrollerRef.current;
    if (!el) return;
    setActiveDot(dotIndex);

    // Rough jump amount per "page"
    el.scrollTo({ left: dotIndex * 360, behavior: "smooth" });
  };

  return (
    <section className="bg-white py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="relative text-center">
          {/* Watermark */}
          <div className="pointer-events-none absolute left-1/2 -top-20 hidden -translate-x-1/2 select-none text-[120px] font-extrabold tracking-wider text-black/7 lg:block">
            Blog
          </div>

          <p className="text-sm font-semibold tracking-[0.22em] text-[#210c81]">
            BLOG &amp; NEWS
          </p>

          <h2 className="mt-4 text-4xl font-extrabold text-[#210c81] sm:text-5xl">
            Recent blog post
          </h2>
        </div>

        {/* Slider */}
        <div
          className="mt-14"
          onMouseEnter={() => setIsPaused(true)} // pause when hovering the section
          onMouseLeave={() => setIsPaused(false)}
        >
          <div ref={scrollerRef} className="no-scrollbar overflow-x-auto">
            <div className="flex gap-10">
              {track.map((post, idx) => (
                <div
                  key={`${post.slug}-${idx}`}
                  className={[
                    "shrink-0",
                    "w-[320px]", // mobile
                    "sm:w-[360px]",
                    "lg:w-[360px]",
                    "xl:w-[380px]",
                  ].join(" ")}
                >
                  <BlogCard post={post} />
                </div>
              ))}
            </div>
          </div>

          {/* Dots */}
          <div className="mt-10 flex items-center justify-center gap-3">
            {Array.from({ length: 6 }).map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => jumpTo(i)}
                aria-label={`Go to blog slide ${i + 1}`}
                className={[
                  "h-2 w-2 rounded-full transition-all",
                  activeDot === i
                    ? "bg-[#210c81] ring-4 ring-black/10"
                    : "bg-black/20",
                ].join(" ")}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
