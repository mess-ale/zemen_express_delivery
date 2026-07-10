import { useState } from "react";
import { ChevronDown } from "lucide-react";

const DEFAULT_FAQS = [
  {
    q: "01. Parcel Delivery:",
    a: "Seamless parcel services to over 20 major Ethiopian cities, including Mekele, Bahir Dar, Dire Dawa, Hawassa, Jimma, and more.",
  },
  {
    q: "02. Affordable Rates:",
    a: "Starting from just 250 Birr, with special discounts for books and consumable items.",
  },
  {
    q: "03. Reliable Receipts:",
    a: "Ideal for official offices and medical laboratories requiring formal invoices for package handling.",
  },
  {
    q: "04. Our Service Areas",
    a: "We cover a wide network of destinations, including but not limited to: Mekele, Axum, Shire, Dessie, Kombolcha, Bahir Dar, Gondar, Lalibela, Hawassa, Arbaminch, Jinka, Wolaita Sodo, Jimma, Gambela, Asossa, Hossaena, Shashemene, Harar, Dire Dawa, Jigjiga, and Gode.",
  },
];

export default function ServiceFaq({ faqs = DEFAULT_FAQS }) {
  const [openIdx, setOpenIdx] = useState(0);

  return (
    <section className="mt-14">
      <h3 className="text-2xl font-extrabold text-[#1F2A30]">Our Services</h3>

      <p className="mt-4 max-w-3xl text-sm leading-7 text-black/60">
        Reliable, affordable, and professional parcel delivery connecting you to
        over 20 major cities across Ethiopia with formal invoicing for your
        peace of mind.
      </p>

      <div className="mt-8 space-y-4">
        {faqs.map((f, idx) => {
          const open = openIdx === idx;

          return (
            <div
              key={`${f.q}-${idx}`}
              className={[
                "overflow-hidden rounded-xl border border-black/10",
                open ? "bg-[#F5F7F9]" : "bg-[#F5F7F9]",
              ].join(" ")}
            >
              <button
                type="button"
                onClick={() => setOpenIdx(open ? -1 : idx)}
                className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left"
              >
                <span className="text-sm font-extrabold text-[#1F2A30]">
                  {f.q}
                </span>

                <ChevronDown
                  className={[
                    "h-4 w-4 text-black/60 transition duration-200",
                    open ? "rotate-180" : "",
                  ].join(" ")}
                />
              </button>

              {/* Answer */}
              <div
                className={[
                  "grid transition-all duration-300 ease-out",
                  open ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
                ].join(" ")}
              >
                <div className="overflow-hidden">
                  <div className="px-6 pb-6 text-xs leading-6 text-black/55">
                    {f.a}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
