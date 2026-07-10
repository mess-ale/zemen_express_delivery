import { useEffect, useMemo, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import SidePanel from "./SidePanel";
import ServiceDropdown from "./ServiceDropdown";
import { Mail, Clock, Search, Menu, X, ChevronDown } from "lucide-react";
import facebookIcon from "../../assets/social-icons/facebook.svg";
import instagramIcon from "../../assets/social-icons/instagram.svg";
import TelegramIcon from "../../assets/social-icons/telegram.svg";
import TiktokIcon from "../../assets/social-icons/tiktok.svg";
import logo from "../../assets/logo/logo.png";

const socialIcons = [
  { label: "facebook Icon", image: facebookIcon, url: "https://rb.gy/rdxx16" },
  { label: "telegram Icon", image: TelegramIcon, url: "https://t.me/zeemen" },
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

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [sidePanelOpen, setSidePanelOpen] = useState(false);

  // Services dropdown
  const [servicesOpen, setServicesOpen] = useState(false);
  const closeTimerRef = useRef(null);

  const navItems = useMemo(
    () => [
      { label: "Home", to: "/", hasDropdown: false },
      { label: "Service", to: "/services/creative-ideas", hasDropdown: true },
      { label: "Blog", to: "/blog", hasDropdown: false },
      { label: "Contact", to: "/contact", hasDropdown: false },
      { label: "About", to: "/about", hasDropdown: false },
    ],
    [],
  );

  // ✅ NEW: refs + state to pin ONLY the main navbar after top bar scrolls away
  const topBarRef = useRef(null);
  const mainNavRef = useRef(null);
  const [pinMainNav, setPinMainNav] = useState(false);
  const [mainNavHeight, setMainNavHeight] = useState(0);

  // ESC closes
  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === "Escape") {
        setMobileOpen(false);
        setServicesOpen(false);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  // body scroll lock
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  // Helpers for premium hover (delay close + cancel close)
  const openServices = () => {
    if (closeTimerRef.current) window.clearTimeout(closeTimerRef.current);
    setServicesOpen(true);
  };

  const scheduleCloseServices = () => {
    if (closeTimerRef.current) window.clearTimeout(closeTimerRef.current);
    closeTimerRef.current = window.setTimeout(() => {
      setServicesOpen(false);
    }, 140);
  };

  const scheduleCloseServices2 = () => {
    if (closeTimerRef.current) window.clearTimeout(closeTimerRef.current);
    closeTimerRef.current = window.setTimeout(() => {
      setServicesOpen(false);
    }, 20);
  };

  // ✅ NEW: pin main nav after scrolling past top bar
  useEffect(() => {
    const measure = () => {
      const h = mainNavRef.current?.offsetHeight || 0;
      setMainNavHeight(h);
    };

    const onScroll = () => {
      const topBarH = topBarRef.current?.offsetHeight || 0;
      setPinMainNav(window.scrollY > topBarH);
    };

    measure();
    onScroll();

    window.addEventListener("resize", measure);
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("resize", measure);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <header className="w-full">
      {/* Top utility bar (desktop) */}
      <div
        ref={topBarRef}
        className="hidden w-full bg-[#210c81] text-white md:block"
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
          <div className="flex items-center gap-8 text-sm">
            <div className="flex items-center gap-2">
              <span className="grid h-6 w-6 place-items-center rounded bg-white/10">
                <Mail className="h-4 w-4 text-white/90" />
              </span>
              <span>info@zemenexpress.com</span>
            </div>

            <div className="flex items-center gap-2">
              <span className="grid h-6 w-6 place-items-center rounded bg-white/10">
                <Clock className="h-4 w-4 text-white/90" />
              </span>
              <span>Working: 7:30am - 4:30pm</span>
            </div>
          </div>

          <div className="flex items-center gap-6 text-sm">
            <nav className="flex items-center gap-6">
              <a className="opacity-90 hover:opacity-100" href="/blog">
                Company news
              </a>
              <a className="opacity-90 hover:opacity-100" href="/contact">
                Contact us
              </a>
            </nav>

            <span className="h-4 w-px bg-white/20" />

            <div className="flex items-center gap-4">
              {socialIcons.map((icon, idx) => (
                <a
                  key={idx}
                  href={icon.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cursor-pointer"
                >
                  <SocialDot label={icon.label} image={icon.image} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ✅ Spacer only when main nav is pinned (prevents jump) */}
      {pinMainNav ? <div style={{ height: mainNavHeight }} /> : null}

      {/* Main navbar */}
      <div
        ref={mainNavRef}
        className={[
          "w-full bg-white border-b border-gray-400 transition-all",
          pinMainNav ? "fixed top-0 left-0 right-0 z-50" : "",
        ].join(" ")}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <NavLink to="/" className="flex items-center gap-3">
            <div>
              <img
                src={logo}
                // alt={label}
                className="h-14 w-28.1 object-cover bg-white"
              />
            </div>
          </NavLink>

          {/* Desktop nav */}
          <nav className="relative hidden items-center gap-8 md:flex">
            {navItems.map((item) => {
              if (item.label === "Service") {
                return (
                  <div
                    key={item.label}
                    className="relative"
                    onMouseEnter={openServices}
                    onMouseLeave={scheduleCloseServices}
                  >
                    <NavLink
                      to={item.to}
                      className={({ isActive }) =>
                        [
                          "flex items-center gap-2 text-[16px] font-semibold text-[#210c81] hover:text-black",
                          isActive ? "text-black" : "",
                        ].join(" ")
                      }
                    >
                      <span onClick={scheduleCloseServices2}>{item.label}</span>
                      <ChevronDown className="h-4 w-4 opacity-70" />
                    </NavLink>

                    <ServiceDropdown
                      open={servicesOpen}
                      onMouseEnter={openServices}
                      onMouseLeave={scheduleCloseServices}
                      onClose={() => setServicesOpen(false)}
                    />
                  </div>
                );
              }

              return (
                <NavLink
                  key={item.label}
                  to={item.to}
                  className={({ isActive }) =>
                    [
                      "flex items-center gap-2 text-[16px] font-semibold text-[#210c81] hover:text-black",
                      isActive ? "text-black" : "",
                    ].join(" ")
                  }
                >
                  <span>{item.label}</span>
                  {item.hasDropdown ? (
                    <ChevronDown className="h-4 w-4 opacity-70" />
                  ) : null}
                </NavLink>
              );
            })}
          </nav>

          {/* Right actions */}
          <div className="flex items-center gap-3">
            <button
              type="button"
              className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#F2F3F4] text-[#1F2A30] hover:bg-[#E9EBEC]"
              aria-label="Search"
            >
              <Search className="h-5 w-5" />
            </button>

            <button
              type="button"
              className="hidden rounded-2xl bg-[#210c81] px-7 py-3 font-semibold text-white hover:bg-black md:inline-flex"
            >
              Zemen Go
            </button>

            <button
              type="button"
              className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#F2F3F4] text-[#1F2A30] hover:bg-[#E9EBEC] md:hidden"
              aria-label="Open menu"
              onClick={() => setMobileOpen(true)}
            >
              <Menu className="h-5 w-5" />
            </button>

            <button
              type="button"
              className="hidden h-12 w-12 items-center justify-center rounded-2xl bg-[#F2F3F4] text-[#1F2A30] hover:bg-[#E9EBEC] md:inline-flex"
              aria-label="Open side panel"
              onClick={() => setSidePanelOpen(true)}
            >
              ≡
            </button>
          </div>
        </div>
      </div>

      {/* Mobile slide-in menu */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          <button
            className="absolute inset-0 bg-black/40"
            aria-label="Close menu backdrop"
            onClick={() => setMobileOpen(false)}
          />

          <aside className="absolute right-0 top-0 h-full w-[84%] max-w-sm bg-white shadow-xl">
            <div className="p-4">
              <button
                type="button"
                className="inline-flex h-10 w-10 items-center justify-center bg-[#210c81] text-white"
                aria-label="Close menu"
                onClick={() => setMobileOpen(false)}
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="px-6 pb-8">
              <div className="flex items-center gap-3 pb-6">
                <NavLink to="/" className="flex items-center gap-3">
                  <div>
                    <img
                      src={logo}
                      // alt={label}
                      className="h-14 w-28.1 object-cover bg-white"
                    />
                  </div>
                </NavLink>
              </div>

              <div className="divide-y divide-gray-100 border-t border-gray-100">
                <a
                  href="/"
                  className="flex items-center justify-between py-4 text-[15px] font-semibold text-[#1F2A30]"
                >
                  home
                </a>
                <a
                  href="/services/creative-ideas"
                  className="flex items-center justify-between py-4 text-[15px] font-semibold text-[#1F2A30]"
                >
                  Services
                </a>
                <a
                  href="/blog"
                  className="flex items-center justify-between py-4 text-[15px] font-semibold text-[#1F2A30]"
                >
                  Blog
                </a>
                <a
                  href="/contact"
                  className="flex items-center justify-between py-4 text-[15px] font-semibold text-[#1F2A30]"
                >
                  Contact Us
                </a>
                <a
                  href="/about"
                  className="flex items-center justify-between py-4 text-[15px] font-semibold text-[#1F2A30]"
                >
                  About us
                </a>
              </div>

              <div className="mt-10 flex items-center gap-6">
                {socialIcons.map((icon, idx) => (
                <a
                  key={idx}
                  href={icon.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cursor-pointer"
                >
                  <SocialDot label={icon.label} 
                  image={icon.image} /></a>
                ))}
              </div>
            </div>
          </aside>
        </div>
      )}

      <SidePanel open={sidePanelOpen} onClose={() => setSidePanelOpen(false)} />
    </header>
  );
}

function SocialDot({ label, image }) {
  return (
    <div>
      <img
        src={image}
        alt={label}
        className="h-6 w-6 object-cover bg-white rounded-full"
      />
    </div>
  );
}
