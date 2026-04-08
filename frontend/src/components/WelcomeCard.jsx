import {
  MdBusinessCenter,
  MdCreditCard,
  MdOutlineRocketLaunch,
  MdOutlinePhoneIphone,
  MdOutlineSupportAgent,
  MdOutlineWifi,
  MdOutlineSecurity,
  MdSimCard,
} from "react-icons/md";
import { popularSearches, welcomeTiles } from "../data/uiConfig";
import { useChat } from "../hooks/useChat";

const tileIcons = {
  rocket: MdOutlineRocketLaunch,
  plans: MdOutlineWifi,
  phone: MdOutlinePhoneIphone,
  sim: MdSimCard,
  billing: MdCreditCard,
  support: MdOutlineSupportAgent,
  shield: MdOutlineSecurity,
  business: MdBusinessCenter,
};

export function WelcomeCard({ time }) {
  const { sendMessage } = useChat();

  return (
    <div className="mb-4 flex items-start gap-2 sm:mb-5 sm:gap-3 md:mb-6 md:gap-4">
      <div className="hidden h-8 w-8 shrink-0 items-center justify-center rounded-xl border border-accent/30 bg-card/80 p-1.5 shadow-[0_10px_30px_rgba(14,165,233,0.16)] sm:flex sm:h-10 sm:w-10 sm:rounded-2xl sm:p-2 md:h-11 md:w-11">
        <img
          src="/logo.png"
          alt="GoLite logo"
          className="h-full w-full object-contain"
        />
      </div>

      <div className="w-full max-w-6xl">
        <div className="rounded-[16px] border border-border bg-[linear-gradient(135deg,rgba(14,165,233,0.10),rgba(255,255,255,0.14),rgba(244,114,182,0.10))] p-3 shadow-panel sm:rounded-[20px] sm:p-4 md:rounded-[26px] md:p-5 lg:rounded-[30px] lg:p-7">
          <p className="mb-1.5 text-[10px] font-semibold uppercase tracking-[0.22em] text-accent sm:mb-2 sm:text-xs sm:tracking-[0.24em]">
            GoLite Support
          </p>
          <h2 className="font-display text-base font-bold text-ink sm:text-xl md:text-2xl">
            We&apos;re here to help you stay connected
          </h2>
          <p className="mt-2 max-w-3xl text-xs leading-5 text-ink/80 sm:mt-3 sm:text-sm sm:leading-6 md:leading-7">
            What can we help you with today? Search plans, help, or anything, or
            jump straight into the help center sections below.
          </p>

          <div className="mt-3 sm:mt-4 md:mt-5 lg:mt-6">
            <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.20em] text-muted sm:mb-3 sm:text-[11px] sm:tracking-[0.22em]">
              Main Categories
            </p>
          </div>

          <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 sm:gap-2.5 md:gap-3 xl:grid-cols-3">
            {welcomeTiles.map((tile) => {
              const Icon = tileIcons[tile.icon] || MdOutlineWifi;

              return (
                <button
                  key={tile.title}
                  type="button"
                  onClick={() => sendMessage(tile.value)}
                  className="min-w-0 rounded-xl border border-border bg-card/70 p-2.5 text-left transition hover:-translate-y-0.5 hover:border-accent hover:bg-card sm:rounded-2xl sm:p-3 md:p-4 xl:min-h-[100px]"
                >
                  <div className="flex items-center gap-2 sm:gap-3">
                    <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent sm:h-9 sm:w-9 md:h-10 md:w-10 md:rounded-2xl">
                      <Icon className="text-base sm:text-lg md:text-xl" />
                    </span>
                    <div className="min-w-0">
                      <div className="text-xs font-semibold text-ink sm:text-sm">
                        {tile.title}
                      </div>
                      <div className="mt-0.5 text-[10px] leading-4 text-muted sm:mt-1 sm:text-xs sm:leading-5">
                        {tile.subtitle}
                      </div>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        <div className="mt-1.5 text-[10px] text-muted sm:mt-2 sm:text-xs">{time}</div>
      </div>
    </div>
  );
}