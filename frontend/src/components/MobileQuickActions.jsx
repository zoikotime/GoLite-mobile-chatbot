import { MdLocalOffer, MdOutlineSupportAgent, MdSimCard } from "react-icons/md";
import { mobileActions } from "../data/uiConfig";
import { useChat } from "../hooks/useChat";

const mobileIcons = {
  Activate: MdSimCard,
  "Technical support": MdOutlineSupportAgent,
  "Special offers": MdLocalOffer,
  "Student discount": MdLocalOffer,
  "Business plans": MdOutlineSupportAgent,
};

export function MobileQuickActions() {
  const { sendMessage } = useChat();

  return (
    <div className="border-b border-border bg-panel/70 px-2.5 py-2 sm:px-4 sm:py-2.5 xl:hidden">
      <div className="flex gap-1.5 overflow-x-auto pb-0.5 sm:grid sm:grid-cols-3 sm:gap-2 sm:overflow-visible sm:pb-0 md:grid-cols-3">
        {mobileActions.map((label) => {
          const Icon = mobileIcons[label] || MdOutlineSupportAgent;

          return (
            <button
              key={label}
              type="button"
              onClick={() => sendMessage(label)}
              className="inline-flex shrink-0 min-h-9 min-w-[120px] items-center justify-center gap-1.5 rounded-xl border border-accent/30 bg-accent/10 px-2.5 py-1.5 text-[10px] font-medium text-accent transition hover:bg-accent/20 sm:min-h-10 sm:min-w-0 sm:rounded-2xl sm:px-3 sm:text-[11px] md:text-xs"
            >
              <Icon className="shrink-0 text-sm" />
              <span className="truncate">{label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}