import { useState, useEffect, useRef } from "react";
import icon from "../../assets/icons/planning.png";

/**
 * StatsStrip - Counters animate when scrolled into view
 */
export default function StatsStrip() {
  const stats = [
    { target: 50000, label: "SUCCESSFUL DELIVERY", suffix: "+", image: icon },
    { target: 300, label: "MEDIA ACTIVITIES", suffix: "+", image: icon },
    { target: 50, label: "SKILLED EXPERTS", suffix: "+", image: icon },
    { target: 38000, label: "HAPPY CLIENTS", suffix: "+", image: icon },
  ];

  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  // Intersection Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Run only once
        }
      },
      {
        threshold: 0.3, // Trigger when 30% of the section is visible
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="relative w-full bg-[#210c81] py-10"
    >
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s, index) => (
            <div key={s.label} className="flex items-center gap-5">
              {/* Icon circle */}
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white">
                <img src={s.image} alt={s.label} className="h-12 w-12" />
              </div>

              {/* Text */}
              <div>
                <Counter 
                  target={s.target} 
                  suffix={s.suffix} 
                  delay={index * 100}
                  trigger={isVisible}
                />
                <div className="mt-1 text-xs font-semibold tracking-wide text-white/90">
                  {s.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/**
 * Counter - Animates when trigger becomes true
 */
function Counter({ target, suffix = "", delay = 0, trigger }) {
  const [count, setCount] = useState(0);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!trigger || hasAnimated.current) return;

    hasAnimated.current = true;

    let startTime;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const duration = 1200; // Fast but smooth

      let progress = elapsed / duration;
      if (progress > 1) progress = 1;

      // Ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);

      const current = Math.floor(target * eased);
      setCount(current);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(target);
      }
    };

    const timeout = setTimeout(() => {
      requestAnimationFrame(animate);
    }, delay);

    return () => clearTimeout(timeout);
  }, [trigger, target, delay]);

  const formattedCount = count.toLocaleString("en-US");

  return (
    <div className="text-3xl font-extrabold text-white">
      {formattedCount}
      {suffix}
    </div>
  );
}