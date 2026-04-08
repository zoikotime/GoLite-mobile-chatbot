import {
  MdBusinessCenter,
  MdCreditCard,
  MdLocalOffer,
  MdOutlineAutoAwesome,
  MdOutlineInventory2,
  MdOutlinePhoneIphone,
  MdOutlineRocketLaunch,
  MdOutlineSecurity,
  MdOutlineSupportAgent,
  MdOutlineTravelExplore,
  MdOutlineWifi,
  MdSimCard,
  MdSwapHoriz,
} from "react-icons/md";
import { featureTags, quickActions } from "../data/uiConfig";
import { useChat } from "../hooks/useChat";

const actionIcons = {
  rocket: MdOutlineRocketLaunch,
  plans: MdOutlineWifi,
  phone: MdOutlinePhoneIphone,
  switch: MdSwapHoriz,
  sim: MdSimCard,
  billing: MdCreditCard,
  support: MdOutlineSupportAgent,
  discount: MdLocalOffer,
  business: MdBusinessCenter,
  shield: MdOutlineSecurity,
};

const featureIcons = {
  Activate: MdSimCard,
  International: MdOutlineTravelExplore,
  "Student discount": MdLocalOffer,
  "Special offers": MdLocalOffer,
  "Network status": MdOutlineWifi,
  "Track order": MdOutlineInventory2,
  "Business plans": MdBusinessCenter,
  "Device protection": MdOutlineSecurity,
  FAQ: MdOutlineAutoAwesome,
};

function SidebarAction({ action, onAction }) {
  const Icon = actionIcons[action.icon] || MdOutlineSupportAgent;

  return (
    <button
      type="button"
      onClick={() => onAction(action.value)}
      className="flex w-full items-center gap-3 rounded-2xl border border-border bg-card/45 px-3 py-2.5 text-left text-sm text-ink transition hover:-translate-y-0.5 hover:border-accent hover:bg-card/80 xl:px-4 xl:py-3 2xl:py-3.5"
    >
      <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent xl:h-9 xl:w-9">
        <Icon className="text-base xl:text-lg" />
      </span>
      <span className="min-w-0 truncate">{action.label}</span>
    </button>
  );
}

export function Sidebar() {
  const { sendMessage } = useChat();

  return (
    <aside className="hidden h-full w-[280px] min-w-[280px] flex-col overflow-hidden rounded-[24px] border border-border bg-panel/95 xl:flex xl:w-[300px] xl:min-w-[300px] 2xl:w-[340px] 2xl:min-w-[340px]">
      <div className="border-b border-border bg-[linear-gradient(145deg,rgba(14,165,233,0.12)_0%,rgba(255,255,255,0.18)_42%,rgba(244,114,182,0.12)_100%)] px-4 pb-3 pt-5 xl:px-5 xl:pt-6">
        <div className="flex items-center justify-center gap-2">
          <img src="/logo.png" alt="GoLite Mobile" className="h-8 xl:h-10" />
          <div className="inline-flex items-center gap-2 rounded-full border border-accent/25 bg-card/80 px-2.5 py-1 text-[11px] font-medium text-accent xl:px-3 xl:py-1.5 xl:text-xs">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulseSoft" />
            GoLite Guide - Online now
          </div>
        </div>

        <p className="mt-2 text-xs leading-5 text-ink/80 xl:text-sm xl:leading-6">
          Search plans, help, or anything, then jump into the exact GoLite help
          category or popular search from the flow guide.
        </p>
      </div>

      <div className="scrollbar-slim flex-1 overflow-y-auto px-4 py-3 xl:px-5 xl:py-4 2xl:px-6">
        <div>
          <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-muted xl:text-[11px] xl:tracking-[0.24em]">
            Help Center
          </p>
          <div className="space-y-1.5 xl:space-y-2">
            {quickActions.map((action) => (
              <SidebarAction
                key={action.label}
                action={action}
                onAction={sendMessage}
              />
            ))}
          </div>
        </div>

        <div className="mt-4 xl:mt-6">
          <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-muted xl:mb-3 xl:text-[11px] xl:tracking-[0.24em]">
            Popular Topics
          </p>
          <div className="flex flex-wrap gap-1.5 xl:gap-2">
            {featureTags.map((tag) => {
              const Icon = featureIcons[tag] || MdLocalOffer;

              return (
                <button
                  key={tag}
                  type="button"
                  onClick={() => sendMessage(tag)}
                  className="inline-flex items-center gap-1.5 rounded-full border border-blue-400/25 bg-blue-400/10 px-2.5 py-1 text-[10px] font-medium text-blue-400 xl:px-3 xl:text-[11px]"
                >
                  <Icon className="text-xs xl:text-sm" />
                  {tag}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </aside>
  );
}