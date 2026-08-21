import { useState } from "react";
import Header from "./components/Header";
import UploadSection from "./components/UploadSection";
import ResultsSection from "./components/ResultsSection";
import Footer from "./components/Footer";

function App() {
  const [activeTab, setActiveTab] = useState("transcript");
  const [selectedFile, setSelectedFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [result, setResult] = useState(null);
  const [processingStatus, setProcessingStatus] = useState("");

  const handleFileChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      setSelectedFile(file);
    }
  };

  const handleUpload = async () => {
    if (!selectedFile) {
      setError("Please select an audio file first.");
      return;
    }

    setActiveTab("transcript");
    setLoading(true);
    setProcessingStatus("Processing meeting...");
    setError("");

    try {
      const formData = new FormData();
      formData.append("audio", selectedFile);

      const response = await fetch("http://localhost:5000/api/meetings", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to process meeting.");
      }

      setResult(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
      setProcessingStatus("");
    }
  };

  return (
    <div className="min-h-screen bg-[#07070b] px-4 py-6">
      <div className="relative mx-auto flex min-h-[calc(100vh-4rem)] max-w-310 flex-col overflow-hidden rounded-2xl border border-[#1e3a5f] bg-gradient-to-b from-[#0d0d15] to-[#09090e] px-6 py-10 shadow-[0_0_80px_rgba(59,130,246,0.08)] md:px-12">
        <svg
          viewBox="0 0 100 100"
          className="pointer-events-none absolute bottom-0 left-0 h-32 w-32 opacity-20"
          fill="none"
        >
          <path
            d="M0 80 Q30 90 40 60 T80 50"
            stroke="#3B82F6"
            strokeWidth="1"
          />
          <path d="M0 60 Q20 75 35 50" stroke="#3B82F6" strokeWidth="0.7" />
        </svg>
        <svg
          viewBox="0 0 100 100"
          className="pointer-events-none absolute bottom-0 right-0 h-32 w-32 -scale-x-100 opacity-20"
          fill="none"
        >
          <path
            d="M0 80 Q30 90 40 60 T80 50"
            stroke="#3B82F6"
            strokeWidth="1"
          />
          <path d="M0 60 Q20 75 35 50" stroke="#3B82F6" strokeWidth="0.7" />
        </svg>

        <Header />

        <UploadSection
          selectedFile={selectedFile}
          loading={loading}
          error={error}
          onFileChange={handleFileChange}
          onUpload={handleUpload}
        />

        <ResultsSection
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          loading={loading}
          processingStatus={processingStatus}
          result={result}
        />

        <Footer />
      </div>
    </div>
  );
}

export default App;
