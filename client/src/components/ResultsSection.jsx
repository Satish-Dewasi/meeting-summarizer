import Tabs from "./Tabs";
import Transcript from "./Transcript";
import Summary from "./Summary";
import ActionItems from "./ActionItems";

function ResultsSection({
  activeTab,
  setActiveTab,
  loading,
  processingStatus,
  result,
}) {
  return (
    <section className="mt-10 flex-1 overflow-hidden rounded-xl border border-[#0f2e2e] bg-[#0b0b12]">
      <Tabs
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        loading={loading}
      />

      <div className="relative min-h-87.5 p-6 md:p-8">
        {activeTab === "transcript" && (
          <Transcript
            loading={loading}
            processingStatus={processingStatus}
            result={result}
          />
        )}

        {activeTab === "summary" && <Summary result={result} />}

        {activeTab === "actions" && <ActionItems result={result} />}
      </div>
    </section>
  );
}

export default ResultsSection;
