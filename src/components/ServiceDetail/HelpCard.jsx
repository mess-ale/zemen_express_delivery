import { NavLink } from "react-router-dom";

export default function HelpCard() {
  return (
    <div className="rounded-2xl bg-[#0F1A24] p-6 text-white">
      <h4 className="text-lg font-extrabold">
        Need Help? We Are Here To Help You
      </h4>

            <NavLink to="/contact">
      <button className="mt-6 w-full rounded-xl bg-[#ff7700] py-3 text-sm font-semibold text-[#ffffff] hover:text-[#0f0f0f] cursor-pointer">
        Contact Us
      </button></NavLink>
    </div>
  );
}