function Summary({ result }) {
  return (
    <div>
      {result ? (
        <p className="whitespace-pre-wrap text-[#c4c4cf]">{result.summary}</p>
      ) : (
        <p className="text-[#5c5c68]">Meeting summary will appear here...</p>
      )}
    </div>
  );
}

export default Summary;
