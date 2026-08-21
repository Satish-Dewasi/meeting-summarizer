function UploadSection({
  selectedFile,
  loading,
  error,
  onFileChange,
  onUpload,
}) {
  return (
    <>
      <section className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
        <label className="flex cursor-pointer items-center gap-2 rounded-lg border border-[#1e3a5f] bg-[#0e0e16] px-6 py-3 font-medium text-[#3B82F6] transition hover:border-[#3B82F6] hover:bg-[#14141f]">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-5 w-5"
          >
            <path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
          </svg>
          Select File
          <input
            type="file"
            accept="audio/*"
            onChange={onFileChange}
            className="hidden"
          />
        </label>

        <button
          type="button"
          onClick={onUpload}
          disabled={loading}
          className="flex cursor-pointer items-center gap-2 rounded-lg bg-gradient-to-b from-[#60A5FA] via-[#3B82F6] to-[#1D4ED8] px-7 py-3 font-semibold text-white shadow-[0_2px_8px_rgba(59,130,246,0.15)] transition hover:brightness-110 disabled:opacity-50"
        >
          {loading ? (
            <span className="flex items-center gap-2">
              <span className="h-2 w-2 animate-pulse rounded-full bg-white" />
              Processing...
            </span>
          ) : (
            <>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
              >
                <path d="M18 13a4 4 0 0 0-3-6.85A6 6 0 0 0 4 8a4.5 4.5 0 0 0 .5 9H17a3 3 0 0 0 1-5.83" />
                <path d="M12 12v7M9 15l3-3 3 3" />
              </svg>
              Upload
            </>
          )}
        </button>

        {error && (
          <p className="mt-4 text-center text-sm text-red-400">{error}</p>
        )}
      </section>

      {selectedFile && (
        <p className="mt-4 text-center text-sm text-[#3B82F6]">
          Selected: {selectedFile.name}
        </p>
      )}
    </>
  );
}

export default UploadSection;
