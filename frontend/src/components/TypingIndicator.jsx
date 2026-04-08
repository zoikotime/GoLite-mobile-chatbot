import { MdSupportAgent } from "react-icons/md";

export function TypingIndicator() {
  return (
    <div className="px-2.5 pb-1.5 sm:px-4 sm:pb-2 md:px-6 lg:px-7">
      <div className="mx-auto flex max-w-6xl items-center gap-2 sm:gap-3">
        <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-xl border border-accent/30 bg-accent/10 text-sm font-semibold text-accent sm:h-9 sm:w-9 sm:rounded-[14px] md:h-10 md:w-10">
          <MdSupportAgent className="text-sm sm:text-base md:text-lg" />
        </div>
        <div className="flex items-center gap-1 rounded-full border border-accent/20 bg-bubbleBot px-3 py-2 sm:px-4 sm:py-3">
          <span className="h-1.5 w-1.5 rounded-full bg-accent animate-bounceSoft sm:h-2 sm:w-2" />
          <span className="h-1.5 w-1.5 rounded-full bg-accent animate-bounceSoft [animation-delay:150ms] sm:h-2 sm:w-2" />
          <span className="h-1.5 w-1.5 rounded-full bg-accent animate-bounceSoft [animation-delay:300ms] sm:h-2 sm:w-2" />
        </div>
      </div>
    </div>
  );
}