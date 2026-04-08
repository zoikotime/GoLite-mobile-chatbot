import {
  MdDarkMode,
  MdLightMode,
  MdOutlineDeleteSweep,
  MdOutlineSupportAgent,
} from "react-icons/md";
import { useTheme } from "../context/ThemeContext";
import { useChat } from "../hooks/useChat";

export function ChatHeader() {
  const { sendMessage, clearChat } = useChat();
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="flex flex-col gap-2 border-b border-border bg-panel/90 px-3 py-2.5 backdrop-blur sm:gap-3 sm:px-4 sm:py-3 lg:flex-row lg:items-center lg:justify-between lg:px-6 2xl:px-7">
      <div className="flex min-w-0 items-center gap-2.5 sm:gap-3 sm:gap-4">
        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl border border-accent/30 bg-card/80 p-1.5 shadow-[0_10px_30px_rgba(14,165,233,0.16)] sm:h-10 sm:w-10 sm:rounded-[16px] sm:p-2 md:h-12 md:w-12 md:rounded-[18px]">
          <img
            src="/logo.png"
            alt="GoLite logo"
            className="h-full w-full object-contain"
          />
        </div>
        <div className="min-w-0 flex-1">
          <h1 className="truncate font-display text-sm font-bold text-ink sm:text-base md:text-lg">
            GoLite Guide
          </h1>
          <p className="line-clamp-1 text-[10px] leading-4 text-muted sm:line-clamp-2 sm:text-xs sm:leading-5">
            Website search, help center flows, and support guidance aligned to
            the GoLite support guide
          </p>
        </div>
      </div>

      <div className="flex gap-1.5 overflow-x-auto pb-0.5 sm:gap-2 lg:flex-wrap lg:justify-end lg:overflow-visible lg:pb-0">
        <button
          type="button"
          onClick={toggleTheme}
          className="inline-flex shrink-0 min-h-9 items-center justify-center gap-1.5 rounded-xl border border-border bg-card px-2.5 py-1.5 text-center text-[11px] text-ink transition hover:border-accent hover:bg-card/80 sm:min-h-10 sm:rounded-2xl sm:px-3 sm:text-xs lg:rounded-full lg:px-4 lg:text-sm"
        >
          {theme === "light" ? (
            <MdDarkMode className="text-sm sm:text-base" />
          ) : (
            <MdLightMode className="text-sm sm:text-base" />
          )}
          <span className="whitespace-nowrap">{theme === "light" ? "Dark" : "Light"}</span>
        </button>
        <button
          type="button"
          onClick={() => sendMessage("Help and support")}
          className="inline-flex shrink-0 min-h-9 items-center justify-center gap-1.5 rounded-xl border border-border bg-card px-2.5 py-1.5 text-center text-[11px] text-ink transition hover:border-accent hover:bg-card/80 sm:min-h-10 sm:rounded-2xl sm:px-3 sm:text-xs lg:rounded-full lg:px-4 lg:text-sm"
        >
          <MdOutlineSupportAgent className="text-sm sm:text-base" />
          <span className="whitespace-nowrap">Help center</span>
        </button>
        <button
          type="button"
          onClick={clearChat}
          className="inline-flex shrink-0 min-h-9 items-center justify-center gap-1.5 rounded-xl border border-border bg-card px-2.5 py-1.5 text-center text-[11px] text-ink transition hover:border-accent hover:bg-card/80 sm:min-h-10 sm:rounded-2xl sm:px-3 sm:text-xs lg:rounded-full lg:px-4 lg:text-sm"
        >
          <MdOutlineDeleteSweep className="text-sm sm:text-base" />
          <span className="whitespace-nowrap">Clear chat</span>
        </button>
      </div>
    </header>
  );
}