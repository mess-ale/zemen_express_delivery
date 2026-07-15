import avatar from "../../assets/images/hero3.png";

export default function BlogDetailAuthorCard() {
  return (
    <div className="mt-8 flex gap-4 rounded-2xl bg-white p-5 ring-1 ring-black/5">
      <div className="h-14 w-14 overflow-hidden rounded-xl bg-black/5">
        <img src={avatar} alt="Zemen Express Team" className="h-full w-full object-cover" />
      </div>

      <div className="flex-1">
        <p className="text-xs font-semibold text-black/50">Logistics & Operations</p>
        <p className="mt-2 text-xs leading-6 text-black/55">
          Specializing in logistics optimization and secure distribution networks, focusing on creating efficient, reliable, and swift intercity courier solutions across Ethiopia.
        </p>
      </div>
    </div>
  );
}