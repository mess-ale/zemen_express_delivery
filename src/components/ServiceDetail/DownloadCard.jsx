import { Download } from 'lucide-react'; // Optional: Install lucide-react for icons

export default function DownloadCard() {
  const handleDownload = (fileName, downloadName) => {
  const link = document.createElement("a");

  link.href = `${import.meta.env.BASE_URL}${fileName}`;
  link.download = downloadName || fileName;

  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

  return (
    <div className="rounded-3xl bg-[#F5F7F9] p-6 shadow-sm border border-gray-100">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 bg-primary/10 rounded-2xl flex items-center justify-center">
          <Download className="w-5 h-5 text-primary" />
        </div>
        <h4 className="text-xl font-bold text-[#1F2A30]">Download Resources</h4>
      </div>

      <div className="space-y-3">
        {/* Brochure Download */}
        <button
          onClick={() => handleDownload('Brochure.pdf', 'Brochure.pdf')}
          className="w-full flex items-center justify-between rounded-2xl bg-white px-5 py-4 text-left hover:bg-primary hover:text-[#210c81] group transition-all duration-300 shadow-sm cursor-pointer hover:shadow-md"
        >
          <div>
            <p className="font-medium text-[#1F2A30] group-hover:text-[#210c81]">
              Our Brochure
            </p>
            <p className="text-xs text-gray-500 group-hover:text-[#311d87]">
              የግንዛቤ ስልጠና ብሮሹር
            </p>
          </div>
          <Download className="w-5 h-5 text-gray-400 group-hover:text-[#210c81] transition-colors" />
        </button>

        {/* Company Details Download */}
        <button
          onClick={() => handleDownload('company-details.pdf', 'Company_Details.pdf')}
          className="w-full flex items-center justify-between rounded-2xl bg-white cursor-pointer px-5 py-4 text-left hover:bg-primary hover:text-[#210c81] group transition-all duration-300 shadow-sm hover:shadow-md"
        >
          <div>
            <p className="font-medium text-[#1F2A30] group-hover:text-[#210c81]">
              Company Details
            </p>
            <p className="text-xs text-gray-500 group-hover:text-[#210c81]">
              የኩባንያ መረጃ
            </p>
          </div>
          <Download className="w-5 h-5 text-gray-400 group-hover:text-[#210c81] transition-colors" />
        </button>
      </div>

      <p className="text-center text-xs text-gray-500 mt-6">
        PDF • Instant Download
      </p>
    </div>
  );
}