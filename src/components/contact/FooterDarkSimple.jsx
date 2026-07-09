import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Mail,
  MapPin,
  Phone,
  ArrowRight,
} from "lucide-react";
import { NavLink } from "react-router-dom";
import facebookIcon from "../../assets/social-icons/facebook.svg";
import instagramIcon from "../../assets/social-icons/instagram.svg";
import TelegramIcon from "../../assets/social-icons/telegram.svg";
import TiktokIcon from "../../assets/social-icons/tiktok.svg";
import logo from "../../assets/logo/logo1.png";

export default function FooterDarkSimple() {
  return (
    <footer className="relative overflow-hidden bg-[#210c81] text-white">
      {/* Subtle diamond shapes */}
      <div className="pointer-events-none absolute -left-24 top-28 h-28 w-28 rotate-45 bg-white/5" />
      <div className="pointer-events-none absolute left-12 bottom-28 h-20 w-20 rotate-45 bg-white/5" />
      <div className="pointer-events-none absolute -right-12 top-24 h-28 w-28 rotate-45 bg-white/5" />
      <div className="pointer-events-none absolute right-10 top-44 h-16 w-16 rotate-45 bg-white/5" />

      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-3 lg:gap-20">
          {/* Brand */}
          <div>
              <NavLink to="/" className="flex items-center gap-3">
                <div>
                  <img
                    src={logo}
                    // alt={label}
                    className="h-14 w-28.1 object-cover"
                  />
                </div>
              </NavLink>

            <p className="mt-6 max-w-sm text-sm leading-6 text-white/55">
              Stay Connected Follow us on social media to stay updated and get in touch
            </p>

            {/* Social icons */}
            <div className="mt-7 flex items-center gap-3">
              <SocialIcon href="#" label="Facebook">
                <img src={facebookIcon} className="h-7 w-7" />
              </SocialIcon>
              <SocialIcon href="#" label="Twitter">
                <img src={TelegramIcon} className="h-7 w-7" />
              </SocialIcon>
              <SocialIcon href="#" label="LinkedIn">
                <img src={TiktokIcon} className="h-7 w-7" />
              </SocialIcon>
              <SocialIcon href="#" label="Instagram">
                <img src={instagramIcon} className="h-7 w-7" />
              </SocialIcon>
              <SocialIcon href="#" label="LinkedIn 2">
                <img src={TiktokIcon} className="h-7 w-7" />
              </SocialIcon>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:pl-8">
            <h4 className="text-lg font-bold">Quick Links</h4>

            {/* underline like screenshot */}
            <div className="mt-3 flex items-center gap-2">
              <div className="h-[3px] w-10 rounded bg-white/20" />
              <div className="h-[3px] w-3 rounded bg-white/10" />
            </div>

            <div className="mt-7 grid gap-6 sm:grid-cols-2">

              <ul className="space-y-3 text-sm text-white/70">
                <FooterArrowLink to="/Home" label="Home Page" />
                <FooterArrowLink to="/Service" label="Service" />
                <FooterArrowLink to="/contact" label="Contact Us" />
                <FooterArrowLink to="/about" label="About Us" />
                <FooterArrowLink to="/Privacy Policy" label="Privacy Policy" />
              </ul>

              <ul className="space-y-2 text-sm text-white/70">
                <div className="flex gap-4">
                  <Phone className="h-5 w-5" />
                  7273
                </div>
                <div className="flex gap-4">
                  <Phone className="h-5 w-5" />
                  6162
                </div>
                <div className="flex gap-4">
                  <Phone className="h-5 w-5" />
                  0961213333
                </div>
                <div className="flex gap-4">
                  <Phone className="h-5 w-5" />
                  0930272727
                </div>
                <div className="flex gap-4">
                  <Phone className="h-5 w-5" />
                  0961202020
                </div>
              </ul>
            </div>
          </div>

          {/* Contact Us */}
          <div className="lg:pl-8">
            <h4 className="text-lg font-bold">Contact Us</h4>

            <div className="mt-3 flex items-center gap-2">
              <div className="h-[3px] w-10 rounded bg-white/20" />
              <div className="h-[3px] w-3 rounded bg-white/10" />
            </div>

            <div className="mt-8 space-y-7">
              <ContactLine
                  icon={<Phone className="h-5 w-5" />}
                  title="Call Us 24/7"
                  value="(+251) 96 121 3333"
              />
              <ContactLine
                  icon={<Mail className="h-5 w-5" />}
                  title="Work with us"
                  value="info@zemenexpress.com"
              />
              <ContactLine
                  icon={<MapPin className="h-5 w-5" />}
                  title="Our Locations"
                  value="1. ሀይሌ ጋርመንት 2. አዲሱ ገበያ 3. እስጢፋኖስ 4. ላምበረት 5. ሜክሲኮ 6. ፒያሳ 7. ጀሞ"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-6 text-xs text-white/70 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <p>Zemen - Copyright 2026. All rights reserved.</p>

          <div className="flex items-center gap-5">
            <Link to="/privacy" className="hover:text-white">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-white">
              Terms &amp; Condition
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

/** Small squared social icon button (matches screenshot vibe) */
function SocialIcon({ href, label, children }) {
  return (
    <a
      href={href}
      aria-label={label}
      className="grid h-10 w-10 place-items-center rounded-md bg-white text-white/90 transition hover:bg-[#ff7700]"
    >
      {children}
    </a>
  );
}

/** Arrow link line (left small arrow like screenshot) */
function FooterArrowLink({ to, label }) {
  return (
    <li>
      <Link
        to={to}
        className="group inline-flex items-center gap-3 hover:text-white"
      >
        <ArrowRight className="h-4 w-4 text-white/25 group-hover:text-white/60" />
        <span>{label}</span>
      </Link>
    </li>
  );
}

/** Contact item row */
function ContactLine({ icon, title, value }) {
  return (
    <div className="flex items-start gap-4">
      <div className="grid h-10 w-10 place-items-center rounded-md bg-white/10 text-white">
        {icon}
      </div>

      <div>
        <p className="text-sm font-semibold text-white">{title}</p>
        <p className="mt-1 text-sm text-white/60">{value}</p>
      </div>
    </div>
  );
}
