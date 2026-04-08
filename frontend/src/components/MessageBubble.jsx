import { formatMessage, formatSuggestionLabel } from "../utils/chat";
import { useChat } from "../hooks/useChat";

export function MessageBubble({ message }) {
  const { sendMessage } = useChat();
  const isUser = message.sender === "user";

  return (
    <div
      className={`mb-3 flex gap-2 sm:gap-2.5 md:gap-3 lg:gap-4 ${isUser ? "justify-end" : "justify-start"}`}
    >
      {!isUser ? (
        <div className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-xl border border-accent/30 bg-card/80 p-1 shadow-[0_10px_30px_rgba(14,165,233,0.16)] sm:h-9 sm:w-9 sm:p-1.5 md:h-10 md:w-10 md:rounded-2xl md:p-2">
          <img
            src="/logo.png"
            alt="GoLite logo"
            className="h-full w-full object-contain"
          />
        </div>
      ) : null}

      <div
        className={`flex flex-col gap-2 max-w-[92%] sm:max-w-[88%] lg:max-w-[min(880px,82%)] 2xl:max-w-[960px] ${isUser ? "items-end" : "items-start"}`}
      >
        <div
          className={`w-full break-words rounded-[18px] border px-3 py-2 text-[12px] leading-5 shadow-panel [&_a]:break-all sm:rounded-[22px] sm:px-3.5 sm:py-2.5 sm:text-[13px] sm:leading-6 md:rounded-3xl md:px-4 md:py-3 md:text-sm md:leading-7 lg:px-5 ${
            isUser
              ? "border-sky-500/20 bg-bubbleUser text-white"
              : "border-accent/20 bg-bubbleBot text-ink"
          }`}
          dangerouslySetInnerHTML={{ __html: formatMessage(message.text) }}
        />

        {message.suggestions?.length ? (
          <div
            className={`flex flex-wrap gap-1.5 sm:gap-2 ${isUser ? "justify-end" : "justify-start"}`}
          >
            {message.suggestions.map((suggestion) => (
              <button
                key={`${message.id}-${suggestion}`}
                type="button"
                onClick={() => sendMessage(suggestion)}
                className="max-w-full rounded-full border border-accent/30 bg-accent/10 px-2.5 py-1.5 text-[10px] font-medium text-accent transition hover:bg-accent/20 sm:px-3 sm:py-2 sm:text-[11px] md:text-xs"
              >
                {formatSuggestionLabel(suggestion)}
              </button>
            ))}
          </div>
        ) : null}

        <div className="text-[10px] text-muted sm:text-xs">{message.time}</div>
      </div>

      {isUser ? (
        <div className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-xl border border-accent/30 bg-card/80 p-1 shadow-[0_10px_30px_rgba(14,165,233,0.16)] sm:h-9 sm:w-9 sm:p-1.5 md:h-10 md:w-10 md:rounded-2xl md:p-2">
          <img
            src="/avatar.svg"
            alt="User avatar"
            className="h-full w-full object-contain"
          />
        </div>
      ) : null}
    </div>
  );
}