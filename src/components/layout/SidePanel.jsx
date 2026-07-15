import { useEffect } from "react";
import facebookIcon from "../../assets/social-icons/facebook.svg";
import TelegramIcon from "../../assets/social-icons/telegram.svg";
import instagramIcon from "../../assets/social-icons/instagram.svg";
import TiktokIcon from "../../assets/social-icons/tiktok.svg";
import { Globe, MailCheck, MapPin, Phone } from "lucide-react";
import logo from "../../assets/logo/logo.png";

/**
 * SidePanel (Desktop off-canvas modal)
 * - Slides in from the right
 * - Backdrop click + ESC closes
 * - Locks body scroll while open
 */

const socialIcons = [
  { label: "facebook Icon", image: facebookIcon, url: "https://rb.gy/rdxx16" },
  { label: "telegram Icon", image: TelegramIcon, url: "https://t.me/ZemenED" },
  {
    label: "instagram Icon",
    image: instagramIcon,
    url: "https://rb.gy/xdzgec",
  },
  {
    label: "tiktok Icon",
    image: TiktokIcon,
    url: "http://www.tiktok.com/@zemen_express",
  },
];

export default function SidePanel({ open, onClose }) {
  // Close on ESC
  useEffect(() => {
    if (!open) return;

    const onKeyDown = (e) => {
      if (e.key === "Escape") onClose?.();
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, onClose]);

  // Lock body scroll while open
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 hidden md:block">
      {/* Backdrop */}
      <button
        className="absolute inset-0 bg-black/40"
        aria-label="Close side panel backdrop"
        onClick={onClose}
      />

      {/* Panel */}
      <aside className="absolute right-0 top-0 h-full w-[420px] max-w-[92vw] bg-white shadow-xl">
        {/* Close button */}
        <div className="p-4">
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center bg-[#1F2A30] text-white"
            aria-label="Close side panel"
            onClick={onClose}
          >
            ✕
          </button>
        </div>

        <div className="px-8 pb-10">
          {/* Logo */}
          <div className="flex items-center gap-3">
            {/* Logo placeholder */}

            <div>
              <img
                src={logo}
                // alt={label}
                className="h-14 w-28.1 object-cover bg-white"
              />
            </div>
          </div>

          {/* Description */}
          <p className="mt-6 max-w-sm text-[15px] leading-7 text-[#6B7780] text-justify">
            At Zemen Express Delivery, we specialize in providing fast,
            reliable, and affordable parcel delivery services across Ethiopia.
            Whether you’re sending important documents, valuable goods, or
            everyday items, we guarantee delivery to intercity destinations in
            less than 24 hours.
          </p>

          {/* Contact block */}
          <h3 className="mt-8 text-lg font-extrabold text-[#1F2A30]">
            Get In Touch
          </h3>

          <ul className="mt-5 space-y-4 text-[15px] text-[#5C6B73]">
            <li className="flex items-center gap-3">
              <IconBubble>
                <Phone />
              </IconBubble>
              <span>7273</span>
            </li>
            <li className="flex items-center gap-3">
              <IconBubble>
                <MailCheck />
              </IconBubble>
              <span>info@zemenexpress.com</span>
            </li>
            <li className="flex items-center gap-3">
              <IconBubble>
                <MapPin />
              </IconBubble>
              <div className="">
                <span>1. ሀይሌ ጋርመንት, 2. አዲሱ ገበያ, 3. እስጢፋኖስ,</span>
                <span>4. ላምበረት, 5. ሜክሲኮ, 6. ፒያሳ, 7. ጀሞ,</span>
              </div>
            </li>
          </ul>

          {/* Socials */}
          <div className="mt-8 flex items-center gap-4">
            {socialIcons.map((icon, idx) => (
                <a
                  key={idx}
                  href={icon.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cursor-pointer"
                >
              <SocialCircle key={idx} label={icon.label} image={icon.image} /></a>
            ))}
          </div>
        </div>
      </aside>
    </div>
  );
}

/** Small icon bubble (placeholder icons) */
function IconBubble({ children }) {
  return (
    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-black/5">
      {children}
    </span>
  );
}

/** Social circle placeholder */
function SocialCircle({ label, image }) {
  return (
    <div>
      <img
        src={image}
        alt={label}
        className="h-12 w-12 object-cover bg-white rounded-full"
      />
    </div>
  );
}
