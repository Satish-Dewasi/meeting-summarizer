function LoadingState({ processingStatus }) {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3">
        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#1FD8CC]/10">
          <div className="h-4 w-4 animate-spin rounded-full border-2 border-[#1FD8CC] border-t-transparent" />
        </div>

        <div>
          <p className="font-medium text-[#4DE8DC]">{processingStatus}</p>

          <p className="mt-1 text-sm text-[#6b6b78]">
            This may take a few moments...
          </p>
        </div>
      </div>

      <div className="animate-pulse space-y-4">
        <div className="h-4 w-3/4 rounded bg-gradient-to-r from-[#17171f] via-[#0f2e2c] to-[#17171f]" />
        <div className="h-4 w-full rounded bg-[#17171f]" />
        <div className="h-4 w-5/6 rounded bg-[#17171f]" />

        <div className="h-4 w-2/3 rounded bg-[#17171f]" />
        <div className="h-4 w-full rounded bg-gradient-to-r from-[#17171f] via-[#0f2e2c] to-[#17171f]" />
        <div className="h-4 w-4/5 rounded bg-[#17171f]" />

        <div className="h-4 w-3/4 rounded bg-[#17171f]" />
        <div className="h-4 w-5/6 rounded bg-[#17171f]" />
      </div>
    </div>
  );
}

export default LoadingState;
