import { useEffect, useRef } from "react";

import { popularSearches, searchSuggestionGroups } from "../data/uiConfig";
import { useChat } from "../hooks/useChat";

function normalizePrefix(value) {
  return (value || "")
    .toLowerCase()
    .replace(/[^a-z]/g, "")
    .trim();
}

export function ChatInput() {
  const { input, setInput, handleInputKeyDown, sendMessage } = useChat();
  const textareaRef = useRef(null);
  const normalizedPrefix = normalizePrefix(input).slice(0, 3);
  const suggestionOptions = searchSuggestionGroups[normalizedPrefix] || [];
  const hasAutocomplete =
    input.trim().length > 0 && suggestionOptions.length > 0;

  useEffect(() => {
    if (!textareaRef.current) {
      return;
    }

    textareaRef.current.style.height = "auto";
    textareaRef.current.style.height = `${Math.min(textareaRef.current.scrollHeight, 120)}px`;
  }, [input]);

  return (
    <div className="border-t border-border bg-panel/90 px-2.5 pb-[calc(env(safe-area-inset-bottom)+0.75rem)] pt-2 sm:px-4 sm:pb-4 sm:pt-3 lg:px-6">
      <div className="mx-auto w-full max-w-6xl 2xl:max-w-[1320px]">
        <div className="rounded-[16px] border border-border bg-card/70 p-2 shadow-panel sm:rounded-[20px] sm:p-2.5 md:rounded-3xl md:p-3">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:gap-3">
            <textarea
              ref={textareaRef}
              value={input}
              rows={1}
              placeholder="Search plans, help, or anything..."
              onChange={(event) => setInput(event.target.value)}
              onKeyDown={handleInputKeyDown}
              className="min-h-[40px] max-h-[120px] flex-1 resize-none bg-transparent px-2 py-2 text-sm text-ink outline-hidden placeholder:text-muted sm:min-h-6 sm:px-1 sm:py-1 md:px-0 md:py-0"
            />
            <button
              type="button"
              onClick={() => sendMessage()}
              className="min-h-10 w-full rounded-full bg-linear-to-br from-accentDeep to-accent px-4 py-2.5 text-sm font-semibold text-white transition hover:brightness-110 sm:min-h-11 sm:w-auto sm:px-5 sm:py-3"
            >
              Search
            </button>
          </div>
        </div>

        <div className="mt-2 sm:mt-3">
          <p className="text-[10px] font-semibold uppercase tracking-[0.20em] text-muted sm:text-[11px] sm:tracking-[0.22em]">
            {hasAutocomplete ? "Search Suggestions" : "Top Searches"}
          </p>
          <div className="mt-1.5 flex gap-1.5 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:flex-wrap sm:overflow-visible sm:pb-0 sm:gap-2">
            {(hasAutocomplete ? suggestionOptions : popularSearches).map(
              (item) => (
                <button
                  key={`${item.label}-${item.value}`}
                  type="button"
                  onClick={() => sendMessage(item.value)}
                  className="shrink-0 whitespace-nowrap rounded-full border border-accent/30 bg-accent/10 px-3 py-1.5 text-[11px] font-medium text-accent transition hover:bg-accent/20 sm:shrink sm:whitespace-normal sm:text-xs"
                >
                  {item.label}
                </button>
              ),
            )}
          </div>
        </div>
      </div>
    </div>
  );
}