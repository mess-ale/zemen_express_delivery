import { Link } from "react-router-dom";
import {
  BriefcaseBusiness,
  HardHat,
  Lightbulb,
  LineChart,
  Wrench,
} from "lucide-react";
import dropdownImg from "../../assets/images/hero3.png";

export default function ServiceDropdown({
  open,
  onClose,
  onMouseEnter,
  onMouseLeave,
}) {
  const items = [
    {
      to: "/services/creative-ideas",
      title: "Parcel Delivery",
      desc: "Seamless parcel services to over 20 major Ethiopian cities, including Mekele, Bahir Dar, Dire Dawa, Hawassa, Jimma, and more.",
      icon: <BriefcaseBusiness className="h-6 w-6 text-[#210c81]" />,
    },
    {
      to: "/services/creative-ideas",
      title: "Affordable Rates",
      desc: "Starting from just 250 Birr, with special discounts for books and consumable items.",
      icon: <HardHat className="h-6 w-6 text-[#210c81]" />,
    },
    {
      to: "/services/creative-ideas",
      title: "Reliable Receipts",
      desc: " Ideal for official offices and medical laboratories requiring formal invoices for package handling.",
      icon: <Lightbulb className="h-6 w-6 text-[#210c81]" />,
    },
    // {
    //   // to: "/services/post-construction",
    //   title: "Our Service Areas",
    //   desc: "We cover a wide network of destinations, including but not limited to: Mekele, Axum, Shire, Dessie, Kombolcha, Bahir Dar, Gondar, Lalibela, Hawassa, Arbaminch, Jinka, Wolaita Sodo, Jimma, Gambela, Asossa, Hossaena, Shashemene, Harar, Dire Dawa, Jigjiga, and Gode.",
    //   icon: <Wrench className="h-6 w-6 text-[#1F2A30]" />,
    // },
    // {
    //   to: "/services/market-research",
    //   title: "Market Research",
    //   desc: "Elever Architecture is a New-York–based studio on modern...",
    //   icon: <LineChart className="h-6 w-6 text-[#1F2A30]" />,
    // },
  ];

  return (
    <div
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className={[
        // Position & size (centered)
        "fixed left-1/2 top-32 z-9999 w-[min(1120px,calc(100vw-2rem))] -translate-x-1/2",

        // Animation + interaction
        "origin-top transition-all duration-200 ease-out",
        open
          ? "pointer-events-auto translate-y-0 opacity-100 scale-100"
          : "pointer-events-none -translate-y-3 opacity-0 scale-[0.98]",
      ].join(" ")}
    >
      <div className="overflow-hidden rounded-b-xl bg-white shadow-[0_22px_70px_rgba(0,0,0,0.18)]">
        <div className="grid lg:grid-cols-[1.55fr_0.85fr]">
          {/* LEFT */}
          <div className="p-8">
            <div className="grid grid-cols-2 gap-6">
              {items.slice(0, 2).map((it) => (
                <Link
                  key={it.title}
                  to={it.to}
                  onClick={onClose}
                  className="group rounded-xl bg-[#F7F8F9] p-5 transition hover:bg-[#F2F4F6]"
                >
                  <div className="flex items-start gap-4">
                    <div className="mt-1">{it.icon}</div>
                    <div>
                      <p className="text-[16px] font-extrabold text-[#1F2A30]">
                        {it.title}
                      </p>
                      <p className="mt-2 text-sm leading-relaxed text-black/55">
                        {it.desc}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}

              {/* 5th item */}
              <Link
                to={items[2].to}
                onClick={onClose}
                className="group col-span-1 rounded-xl bg-[#F7F8F9] p-5 transition hover:bg-[#F2F4F6]"
              >
                <div className="flex items-start gap-4">
                  <div className="mt-1">{items[2].icon}</div>
                  <div>
                    <p className="text-[16px] font-extrabold text-[#1F2A30]">
                      {items[2].title}
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-black/55">
                      {items[2].desc}
                    </p>
                  </div>
                </div>
              </Link>

              {/* CTA bar */}
              <div className="col-span-1 rounded-xl bg-[#210c81] p-6 text-white">
                <p className="text-lg font-extrabold">zemen express delivery</p>
                <p className="mt-2 text-sm text-white/80">
                  Connecting 20+ cities from 250 Birr—trusted by individuals and
                  official offices alike.
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative hidden lg:block">
            <img
              src={dropdownImg}
              alt="Services preview"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
