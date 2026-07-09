import { Search } from "lucide-react";
import SidebarCard from "./SidebarCard";

export default function BlogSidebarSearch() {
  return (
    <SidebarCard title="Search Hear">
      <div className="flex overflow-hidden rounded-lg border border-black/10 bg-white">
        <input
          className="w-full px-4 py-3 text-sm text-[#210c81] outline-none"
          placeholder="Enter Keyword"
        />
        <button
          type="button"
          className="grid w-12 place-items-center bg-[#210c81] text-white"
          aria-label="Search"
        >
          <Search className="h-4 w-4" />
        </button>
      </div>
    </SidebarCard>
  );
}
