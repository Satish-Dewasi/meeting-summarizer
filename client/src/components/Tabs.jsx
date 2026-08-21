const TAB_ICONS = {
  transcript: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4"
    >
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <path d="M14 2v6h6" />
      <path d="M9 13h6M9 17h6M9 9h1" />
    </svg>
  ),
  summary: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4"
    >
      <rect x="3" y="4" width="18" height="18" rx="2" />
      <path d="M16 2v4M8 2v4M3 10h18" />
      <path d="m9 15 2 2 4-4" />
    </svg>
  ),
  actions: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4"
    >
      <rect x="8" y="2" width="8" height="4" rx="1" />
      <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
      <path d="M9 12h6M9 16h6" />
    </svg>
  ),
};

function Tabs({ activeTab, setActiveTab, loading }) {
  const tabs = ["transcript", "summary", "actions"];

  return (
    <div className="flex border-b border-[#16233a]">
      {tabs.map((tab) => {
        const disabled = loading && tab !== "transcript";
        const isActive = activeTab === tab;

        return (
          <button
            key={tab}
            type="button"
            disabled={disabled}
            onClick={() => setActiveTab(tab)}
            className={`flex flex-1 cursor-pointer items-center justify-center gap-2 px-4 py-4 text-sm font-semibold capitalize transition md:text-base ${
              isActive
                ? "border-b-2 border-[#3B82F6] text-[#3B82F6] shadow-[inset_0_-6px_10px_-8px_rgba(59,130,246,0.8)]"
                : disabled
                  ? "cursor-not-allowed text-[#3a3a44]"
                  : "text-[#6b6b78] hover:text-[#3B82F6]"
            }`}
          >
            {TAB_ICONS[tab]}
            {tab}
          </button>
        );
      })}
    </div>
  );
}

export default Tabs;
