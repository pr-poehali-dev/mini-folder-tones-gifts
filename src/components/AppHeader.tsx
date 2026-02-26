import Icon from "@/components/ui/icon";

type Tab = "profile" | "tons" | "stars" | "nft" | "history" | "shop" | "settings" | "referral";

const TABS = [
  { id: "profile" as Tab, label: "Профиль", icon: "User" },
  { id: "tons" as Tab, label: "Тоны", icon: "Coins" },
  { id: "stars" as Tab, label: "Звёзды", icon: "Star" },
  { id: "nft" as Tab, label: "NFT", icon: "Gem" },
  { id: "history" as Tab, label: "История", icon: "Clock" },
  { id: "shop" as Tab, label: "Магазин", icon: "ShoppingBag" },
  { id: "settings" as Tab, label: "Настройки", icon: "Settings" },
  { id: "referral" as Tab, label: "Рефералы", icon: "Users" },
];

interface AppHeaderProps {
  tab: Tab;
  setTab: (t: Tab) => void;
}

export default function AppHeader({ tab, setTab }: AppHeaderProps) {
  const currentTab = TABS.find(t => t.id === tab);

  return (
    <>
      <header
        className="px-5 pt-5 pb-4 flex items-center justify-between sticky top-0 z-20"
        style={{ background: "rgba(7,8,15,0.9)", backdropFilter: "blur(20px)", borderBottom: "1px solid rgba(255,255,255,0.04)" }}
      >
        <div>
          <div className="font-oswald text-xl font-bold text-white">
            Vault<span className="grad-cyan">X</span>
          </div>
          <div className="text-xs" style={{ color: "rgba(255,255,255,0.35)" }}>
            {currentTab?.label ?? "Рефералы"}
          </div>
        </div>
        <div className="flex items-center gap-3">
          <button
            className="relative w-10 h-10 rounded-xl flex items-center justify-center glass-card glass-card-hover"
            onClick={() => setTab("history")}
          >
            <Icon name="Bell" size={18} className="text-white opacity-60" />
            <div className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full" style={{ background: "#ff0080" }} />
          </button>
          <button
            className="w-10 h-10 rounded-xl flex items-center justify-center text-lg glass-card glass-card-hover"
            onClick={() => setTab("profile")}
          >
            🚀
          </button>
        </div>
      </header>

      <nav
        className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-md px-3 pb-4 pt-2 z-30"
        style={{ background: "linear-gradient(to top, rgba(7,8,15,1) 70%, transparent)" }}
      >
        <div
          className="glass-card p-1.5 flex items-center justify-around"
          style={{ background: "rgba(12,15,28,0.97)", backdropFilter: "blur(30px)", border: "1px solid rgba(255,255,255,0.07)" }}
        >
          {TABS.map(t => (
            <button
              key={t.id}
              onClick={() => setTab(t.id)}
              className={`nav-item ${tab === t.id ? "active" : ""}`}
            >
              <Icon name={t.icon} size={18} />
              <span>{t.label}</span>
            </button>
          ))}
        </div>
      </nav>
    </>
  );
}
