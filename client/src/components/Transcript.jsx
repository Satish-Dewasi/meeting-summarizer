import LoadingState from "./LoadingState";

function Transcript({ loading, processingStatus, result }) {
  return (
    <div>
      {loading ? (
        <LoadingState processingStatus={processingStatus} />
      ) : result ? (
        <p className="whitespace-pre-wrap text-[#c4c4cf]">
          {result.transcript}
        </p>
      ) : (
        <p className="text-[#5c5c68]">Transcript will appear here...</p>
      )}
    </div>
  );
}

export default Transcript;
