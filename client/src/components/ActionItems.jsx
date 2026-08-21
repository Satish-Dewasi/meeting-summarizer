function ActionItems({ result }) {
  return (
    <div>
      {result ? (
        result.action_items.length > 0 ? (
          <div className="space-y-4">
            {result.action_items.map((item, index) => (
              <div
                key={index}
                className="rounded-lg border border-[#16233a] bg-[#0e0e16] p-4"
              >
                <p className="font-medium text-[#3B82F6]">{item.task}</p>

                <div className="mt-2 text-sm text-[#8a8a96]">
                  <p>Assignee: {item.assignee || "Not specified"}</p>

                  <p>Timestamp: {item.timestamp || "Not available"}</p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-[#5c5c68]">No action items found.</p>
        )
      ) : (
        <p className="text-[#5c5c68]">Action items will appear here...</p>
      )}
    </div>
  );
}

export default ActionItems;
