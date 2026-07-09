import logo from "../../../assets/logo/logo1.png";

export default function BlogSidebarHelpCard() {
  return (
    <div className="rounded-2xl bg-[#210c81] p-8 text-white shadow-[0_20px_60px_rgba(0,0,0,0.14)]">
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-3">
          {/* Logo placeholder */}

          <div>
            <img
              src={logo}
              // alt={label}
              className="h-14 w-28.1 object-cover"
            />
          </div>
        </div>
      </div>

      <p className="mt-8 text-sm font-semibold text-white/85">
        Need Help? We Are <br /> Here To Help You
      </p>

      <a href="/contact">
        <button
          type="button"
          className="mt-8 rounded-xl bg-[#ff7700] px-6 py-3 text-sm font-semibold text-[#ffffff] hover:text-[#000000] cursor-pointer"
        >
          Contact Us
        </button>
      </a>
    </div>
  );
}
