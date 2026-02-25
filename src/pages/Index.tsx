import { useState, useEffect } from "react";
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

// ── Profile ──────────────────────────────────────────────────────────────────
function ProfileTab({ onNav }: { onNav: (t: Tab) => void }) {
  const stats = [
    { label: "TON", value: "1 248.50", icon: "💎", grad: "grad-cyan" },
    { label: "Звёзды", value: "3 670", icon: "⭐", grad: "grad-gold" },
    { label: "NFT", value: "12 шт.", icon: "🎁", grad: "grad-pink" },
    { label: "Реф. бонус", value: "420 TON", icon: "🎯", grad: "grad-green" },
  ];

  return (
    <div className="space-y-5">
      <div className="glass-card p-6 animate-fade-slide-up" style={{ background: "linear-gradient(135deg, rgba(0,212,255,0.1) 0%, rgba(255,0,128,0.1) 100%)" }}>
        <div className="flex items-center gap-4">
          <div className="relative animate-float">
            <div className="w-20 h-20 rounded-2xl flex items-center justify-center text-4xl" style={{ background: "linear-gradient(135deg, #00d4ff, #ff0080)" }}>
              🚀
            </div>
            <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-green-400 border-2 border-[#07080f] flex items-center justify-center">
              <div className="w-2 h-2 rounded-full bg-green-400 animate-ping absolute"></div>
            </div>
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-2">
              <h2 className="font-oswald text-2xl font-bold text-white">@VaultUser</h2>
              <span className="asset-badge badge-up">✓ Верифицирован</span>
            </div>
            <p className="text-sm mt-1" style={{ color: "rgba(255,255,255,0.5)" }}>ID: #VX-88291 · Joined Dec 2024</p>
            <div className="mt-2">
              <span className="px-3 py-1 text-xs font-bold rounded-full" style={{ background: "rgba(255,215,0,0.1)", color: "#ffd700", border: "1px solid rgba(255,215,0,0.3)" }}>
                🏆 GOLD Tier
              </span>
            </div>
          </div>
        </div>

        <div className="mt-5 grid grid-cols-2 gap-3">
          {stats.map((s, i) => (
            <div key={s.label} className={`glass-card p-3 animate-fade-slide-up delay-${i + 1}`}>
              <div className="text-2xl mb-1">{s.icon}</div>
              <div className={`text-lg font-bold font-oswald ${s.grad}`}>{s.value}</div>
              <div className="text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="glass-card p-5 animate-fade-slide-up delay-3">
        <h3 className="font-oswald text-lg font-bold text-white mb-4">Быстрые действия</h3>
        <div className="grid grid-cols-2 gap-3">
          <button className="btn-cyan py-3 px-4 text-sm flex items-center justify-center gap-2" onClick={() => onNav("tons")}>
            <span>⬆️</span> Вывести TON
          </button>
          <button className="btn-pink py-3 px-4 text-sm flex items-center justify-center gap-2" onClick={() => onNav("tons")}>
            <span>⬇️</span> Пополнить
          </button>
          <button className="btn-gold py-3 px-4 text-sm flex items-center justify-center gap-2" onClick={() => onNav("referral")}>
            <span>🎯</span> Пригласить
          </button>
          <button className="btn-outline py-3 px-4 text-sm flex items-center justify-center gap-2" onClick={() => onNav("shop")}>
            <span>🛒</span> Магазин
          </button>
        </div>
      </div>

      <div
        className="glass-card p-5 animate-fade-slide-up delay-4 cursor-pointer glass-card-hover"
        style={{ background: "linear-gradient(135deg, rgba(255,215,0,0.08), rgba(255,140,0,0.08))", borderColor: "rgba(255,215,0,0.2)" }}
        onClick={() => onNav("referral")}
      >
        <div className="flex items-center justify-between">
          <div>
            <div className="text-sm font-bold" style={{ color: "#ffd700" }}>🎯 Реферальная программа</div>
            <div className="text-xs mt-1" style={{ color: "rgba(255,255,255,0.5)" }}>Приглашай друзей — получай до 25% бонус</div>
          </div>
          <Icon name="ChevronRight" size={20} className="text-yellow-400" />
        </div>
        <div className="mt-3 progress-bar">
          <div className="progress-fill" style={{ width: "62%", background: "linear-gradient(90deg, #ffd700, #ff8c00)" }}></div>
        </div>
        <div className="flex justify-between text-xs mt-1" style={{ color: "rgba(255,255,255,0.4)" }}>
          <span>62 / 100 рефералов до Platinum</span>
          <span className="grad-gold font-bold">Platinum</span>
        </div>
      </div>
    </div>
  );
}

// ── Tons ─────────────────────────────────────────────────────────────────────
function TonsTab() {
  const [amount, setAmount] = useState("");
  const [address, setAddress] = useState("");
  const [mode, setMode] = useState<"send" | "receive">("send");

  return (
    <div className="space-y-5">
      <div className="glass-card p-6 animate-fade-slide-up" style={{ background: "linear-gradient(135deg, rgba(0,212,255,0.12), rgba(0,136,255,0.06))" }}>
        <div className="flex items-center gap-3 mb-2">
          <div className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl" style={{ background: "rgba(0,212,255,0.2)" }}>💎</div>
          <div>
            <div className="text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>Баланс TON</div>
            <div className="font-oswald text-3xl font-bold grad-cyan">1 248.50</div>
          </div>
          <div className="ml-auto">
            <span className="asset-badge badge-up">+3.2%</span>
          </div>
        </div>
        <div className="text-sm" style={{ color: "rgba(255,255,255,0.4)" }}>≈ $5 192.40 USD</div>
      </div>

      <div className="glass-card p-1.5 animate-fade-slide-up delay-1 flex gap-1">
        {(["send", "receive"] as const).map(m => (
          <button
            key={m}
            onClick={() => setMode(m)}
            className="flex-1 py-2.5 text-sm font-bold rounded-xl transition-all duration-300"
            style={mode === m
              ? { background: "linear-gradient(135deg, #00d4ff, #0088ff)", color: "#07080f" }
              : { color: "rgba(255,255,255,0.4)" }
            }
          >
            {m === "send" ? "⬆️ Вывести" : "⬇️ Получить"}
          </button>
        ))}
      </div>

      <div className="glass-card p-5 space-y-4 animate-fade-slide-up delay-2">
        {mode === "send" ? (
          <>
            <div>
              <label className="block text-xs font-semibold mb-2" style={{ color: "rgba(255,255,255,0.5)" }}>Адрес кошелька TON</label>
              <input className="app-input" placeholder="UQ..." value={address} onChange={e => setAddress(e.target.value)} />
            </div>
            <div>
              <label className="block text-xs font-semibold mb-2" style={{ color: "rgba(255,255,255,0.5)" }}>Сумма TON</label>
              <div className="relative">
                <input className="app-input pr-16" placeholder="0.00" type="number" value={amount} onChange={e => setAmount(e.target.value)} />
                <button className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-bold" style={{ color: "#00d4ff" }}>MAX</button>
              </div>
            </div>
            <div className="flex justify-between text-xs px-1" style={{ color: "rgba(255,255,255,0.4)" }}>
              <span>Комиссия сети</span>
              <span className="text-white">~0.05 TON</span>
            </div>
            <button className="btn-cyan w-full py-3.5 text-base">Отправить TON 🚀</button>
          </>
        ) : (
          <div className="text-center space-y-4">
            <div className="w-48 h-48 mx-auto rounded-2xl flex items-center justify-center text-8xl"
              style={{ background: "rgba(0,212,255,0.1)", border: "2px dashed rgba(0,212,255,0.3)" }}>
              📱
            </div>
            <div>
              <div className="text-xs mb-1" style={{ color: "rgba(255,255,255,0.4)" }}>Ваш TON-адрес</div>
              <div className="glass-card px-3 py-2 font-mono text-xs break-all" style={{ color: "#00d4ff" }}>
                UQBvGyhF…kP2nVXfL
              </div>
            </div>
            <button className="btn-outline w-full py-3 flex items-center justify-center gap-2">
              <Icon name="Copy" size={16} /> Скопировать адрес
            </button>
          </div>
        )}
      </div>

      <div className="glass-card p-5 animate-fade-slide-up delay-3">
        <h3 className="font-oswald text-base font-bold text-white mb-3">Последние операции</h3>
        {[
          { type: "in", label: "Получено от @CryptoKing", amount: "+250 TON", time: "2 мин назад", color: "#00ff88" },
          { type: "out", label: "Отправлено @StarFire", amount: "-80 TON", time: "1 ч назад", color: "#ff5050" },
          { type: "in", label: "Реферальный бонус", amount: "+15 TON", time: "3 ч назад", color: "#00ff88" },
        ].map((tx, i) => (
          <div key={i} className="tx-row">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center text-lg" style={{ background: tx.type === "in" ? "rgba(0,255,136,0.12)" : "rgba(255,80,80,0.12)" }}>
              {tx.type === "in" ? "⬇️" : "⬆️"}
            </div>
            <div className="flex-1">
              <div className="text-sm font-semibold text-white">{tx.label}</div>
              <div className="text-xs" style={{ color: "rgba(255,255,255,0.35)" }}>{tx.time}</div>
            </div>
            <div className="font-bold font-oswald" style={{ color: tx.color }}>{tx.amount}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ── Stars ─────────────────────────────────────────────────────────────────────
function StarsTab() {
  const [amount, setAmount] = useState("");
  const [mode, setMode] = useState<"send" | "buy">("send");

  return (
    <div className="space-y-5">
      <div className="glass-card p-6 animate-fade-slide-up" style={{ background: "linear-gradient(135deg, rgba(255,215,0,0.12), rgba(255,140,0,0.06))" }}>
        <div className="flex items-center gap-3 mb-2">
          <div className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl" style={{ background: "rgba(255,215,0,0.2)" }}>⭐</div>
          <div>
            <div className="text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>Баланс Звёзды</div>
            <div className="font-oswald text-3xl font-bold grad-gold">3 670</div>
          </div>
          <div className="ml-auto">
            <span className="asset-badge badge-up">+120 сег.</span>
          </div>
        </div>
        <div className="text-sm" style={{ color: "rgba(255,255,255,0.4)" }}>≈ 73.4 TON по курсу</div>
      </div>

      <div className="glass-card p-1.5 animate-fade-slide-up delay-1 flex gap-1">
        {(["send", "buy"] as const).map(m => (
          <button key={m} onClick={() => setMode(m)} className="flex-1 py-2.5 text-sm font-bold rounded-xl transition-all duration-300"
            style={mode === m ? { background: "linear-gradient(135deg, #ffd700, #ff8c00)", color: "#07080f" } : { color: "rgba(255,255,255,0.4)" }}>
            {m === "send" ? "⭐ Отправить" : "💰 Купить"}
          </button>
        ))}
      </div>

      <div className="glass-card p-5 space-y-4 animate-fade-slide-up delay-2">
        {mode === "send" ? (
          <>
            <div>
              <label className="block text-xs font-semibold mb-2" style={{ color: "rgba(255,255,255,0.5)" }}>Получатель (username)</label>
              <input className="app-input" placeholder="@username" />
            </div>
            <div>
              <label className="block text-xs font-semibold mb-2" style={{ color: "rgba(255,255,255,0.5)" }}>Количество звёзд</label>
              <div className="relative">
                <input className="app-input pr-16" placeholder="0" type="number" value={amount} onChange={e => setAmount(e.target.value)} />
                <span className="absolute right-3 top-1/2 -translate-y-1/2 text-lg">⭐</span>
              </div>
            </div>
            <div className="glass-card p-3 flex justify-between text-xs" style={{ background: "rgba(255,215,0,0.06)" }}>
              <span style={{ color: "rgba(255,255,255,0.4)" }}>Стоимость</span>
              <span className="grad-gold font-bold">{amount ? `${(+amount * 0.02).toFixed(2)} TON` : "—"}</span>
            </div>
            <button className="btn-gold w-full py-3.5 text-base">Отправить ⭐</button>
          </>
        ) : (
          <>
            <div className="text-xs font-semibold mb-1" style={{ color: "rgba(255,255,255,0.5)" }}>Выберите пакет</div>
            {[
              { stars: "100 ⭐", ton: "2 TON", bonus: "" },
              { stars: "500 ⭐", ton: "9 TON", bonus: "+50 бонус" },
              { stars: "1000 ⭐", ton: "17 TON", bonus: "+150 бонус" },
              { stars: "5000 ⭐", ton: "80 TON", bonus: "+1000 бонус" },
            ].map((pkg, i) => (
              <button key={i} className="glass-card glass-card-hover w-full p-4 flex items-center justify-between">
                <div className="text-base font-bold text-white">{pkg.stars}</div>
                <div className="flex items-center gap-2">
                  {pkg.bonus && <span className="asset-badge badge-up text-xs">{pkg.bonus}</span>}
                  <span className="btn-gold px-4 py-2 text-sm">{pkg.ton}</span>
                </div>
              </button>
            ))}
          </>
        )}
      </div>
    </div>
  );
}

// ── NFT ──────────────────────────────────────────────────────────────────────
const NFT_ITEMS = [
  { emoji: "🦋", name: "Crystal Butterfly", rarity: "Редкий", price: "120 ⭐", color: "#00d4ff" },
  { emoji: "🔥", name: "Flame Spirit", rarity: "Эпический", price: "500 ⭐", color: "#ff6b35" },
  { emoji: "💜", name: "Purple Galaxy", rarity: "Легендарный", price: "2000 ⭐", color: "#a855f7" },
  { emoji: "🐉", name: "Dragon Seal", rarity: "Мифический", price: "5000 ⭐", color: "#ffd700" },
  { emoji: "🌊", name: "Ocean Wave", rarity: "Обычный", price: "50 ⭐", color: "#0ea5e9" },
  { emoji: "🌺", name: "Sakura Bloom", rarity: "Редкий", price: "200 ⭐", color: "#ff0080" },
];

function NftTab() {
  const [selected, setSelected] = useState<number | null>(null);
  const [activeView, setActiveView] = useState(0);

  return (
    <div className="space-y-5">
      <div className="glass-card p-5 animate-fade-slide-up" style={{ background: "linear-gradient(135deg, rgba(255,0,128,0.1), rgba(168,85,247,0.08))" }}>
        <div className="flex items-center justify-between">
          <div>
            <div className="text-xs mb-1" style={{ color: "rgba(255,255,255,0.4)" }}>NFT Коллекция</div>
            <div className="font-oswald text-3xl font-bold grad-pink">12 предметов</div>
          </div>
          <div className="text-5xl animate-float">🎁</div>
        </div>
        <div className="text-xs mt-2" style={{ color: "rgba(255,255,255,0.35)" }}>Общая стоимость ≈ 18 500 ⭐</div>
      </div>

      <div className="glass-card p-1.5 animate-fade-slide-up delay-1 flex gap-1">
        {["Мои NFT", "Маркет", "Подарить"].map((t, i) => (
          <button key={t} onClick={() => setActiveView(i)} className="flex-1 py-2.5 text-xs font-bold rounded-xl transition-all"
            style={activeView === i ? { background: "linear-gradient(135deg, #ff0080, #a855f7)", color: "white" } : { color: "rgba(255,255,255,0.4)" }}>
            {t}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-3">
        {NFT_ITEMS.map((nft, i) => (
          <div key={i}
            className={`nft-card animate-fade-slide-up delay-${Math.min(i + 1, 6)} glass-card-hover relative`}
            style={{ background: `linear-gradient(135deg, ${nft.color}22, ${nft.color}08)`, border: `1px solid ${nft.color}33`, borderRadius: "20px", overflow: "hidden" }}
            onClick={() => setSelected(selected === i ? null : i)}>
            <div className="p-4 text-center">
              <div className="text-5xl mb-3 animate-float">{nft.emoji}</div>
              <div className="text-sm font-bold text-white">{nft.name}</div>
              <div className="text-xs mt-1 font-semibold" style={{ color: nft.color }}>{nft.rarity}</div>
              <div className="mt-3 flex items-center justify-between">
                <span className="text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>Цена</span>
                <span className="text-xs font-bold grad-gold">{nft.price}</span>
              </div>
            </div>
            {selected === i && (
              <div className="p-3 space-y-2" style={{ background: "rgba(0,0,0,0.6)" }}>
                <button className="btn-pink w-full py-2 text-xs">🎁 Подарить</button>
                <button className="btn-outline w-full py-2 text-xs">💱 Обменять</button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

// ── History ───────────────────────────────────────────────────────────────────
const TX_DATA = [
  { icon: "⬇️", label: "Получено TON", sub: "от @CryptoKing", amount: "+250 TON", time: "2 мин", color: "#00ff88", tag: "TON" },
  { icon: "⭐", label: "Отправлено звёзды", sub: "к @StarFire", amount: "-500 ⭐", time: "1 ч", color: "#ff5050", tag: "Stars" },
  { icon: "🎁", label: "NFT получен", sub: "Crystal Butterfly", amount: "Подарок", time: "3 ч", color: "#00d4ff", tag: "NFT" },
  { icon: "⬆️", label: "Выведено TON", sub: "в холодный кошелёк", amount: "-100 TON", time: "5 ч", color: "#ff5050", tag: "TON" },
  { icon: "🎯", label: "Реф. бонус", sub: "от приглашённого", amount: "+15 TON", time: "1 д", color: "#00ff88", tag: "Реф" },
  { icon: "💰", label: "Куплены звёзды", sub: "пакет 500⭐", amount: "-9 TON", time: "2 д", color: "#ff5050", tag: "Stars" },
  { icon: "⭐", label: "Получены звёзды", sub: "бонус за активность", amount: "+100 ⭐", time: "3 д", color: "#00ff88", tag: "Stars" },
  { icon: "🎁", label: "NFT продан", sub: "Dragon Seal", amount: "+5000 ⭐", time: "1 нед", color: "#00ff88", tag: "NFT" },
];

function HistoryTab() {
  const [filter, setFilter] = useState("Все");
  const filters = ["Все", "TON", "Stars", "NFT", "Реф"];
  const filtered = filter === "Все" ? TX_DATA : TX_DATA.filter(t => t.tag === filter);

  return (
    <div className="space-y-5">
      <div className="glass-card p-4 animate-fade-slide-up">
        <div className="grid grid-cols-3 gap-3">
          {[
            { label: "Получено", val: "+265 TON", color: "#00ff88" },
            { label: "Отправлено", val: "-189 TON", color: "#ff5050" },
            { label: "NFT сделки", val: "3 шт", color: "#00d4ff" },
          ].map(s => (
            <div key={s.label} className="text-center">
              <div className="font-oswald text-lg font-bold" style={{ color: s.color }}>{s.val}</div>
              <div className="text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex gap-2 overflow-x-auto pb-1 animate-fade-slide-up delay-1">
        {filters.map(f => (
          <button key={f} onClick={() => setFilter(f)} className="px-4 py-1.5 text-xs font-bold rounded-full whitespace-nowrap transition-all"
            style={filter === f
              ? { background: "linear-gradient(135deg, #00d4ff, #0088ff)", color: "#07080f" }
              : { background: "rgba(255,255,255,0.06)", color: "rgba(255,255,255,0.5)", border: "1px solid rgba(255,255,255,0.08)" }
            }>
            {f}
          </button>
        ))}
      </div>

      <div className="glass-card p-5 animate-fade-slide-up delay-2">
        {filtered.map((tx, i) => (
          <div key={i} className="tx-row">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center text-lg" style={{ background: "rgba(255,255,255,0.06)" }}>
              {tx.icon}
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-sm font-semibold text-white truncate">{tx.label}</div>
              <div className="text-xs truncate" style={{ color: "rgba(255,255,255,0.35)" }}>{tx.sub} · {tx.time} назад</div>
            </div>
            <div className="text-right">
              <div className="font-bold font-oswald text-sm" style={{ color: tx.color }}>{tx.amount}</div>
              <span className="text-xs px-2 py-0.5 rounded-full" style={{ background: "rgba(255,255,255,0.06)", color: "rgba(255,255,255,0.4)" }}>{tx.tag}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ── Shop ──────────────────────────────────────────────────────────────────────
const SHOP_ITEMS = [
  { emoji: "🔥", name: "Fire Bundle", desc: "500 ⭐ + Flame Spirit NFT", price: "25 TON", hot: true, color: "#ff6b35" },
  { emoji: "💎", name: "Diamond Pack", desc: "1000 ⭐ + 10 TON кэшбэк", price: "45 TON", hot: false, color: "#00d4ff" },
  { emoji: "👑", name: "Royal Pass", desc: "Premium статус на 30 дней", price: "15 TON", hot: false, color: "#ffd700" },
  { emoji: "🌙", name: "Moon Box", desc: "Случайный редкий NFT подарок", price: "8 TON", hot: true, color: "#a855f7" },
  { emoji: "⚡", name: "Turbo Boost", desc: "x2 реферальный бонус 7 дней", price: "12 TON", hot: false, color: "#00ff88" },
  { emoji: "🎰", name: "Lucky Chest", desc: "Шанс выиграть 500 TON", price: "3 TON", hot: true, color: "#ff0080" },
];

function ShopTab() {
  return (
    <div className="space-y-5">
      <div className="glass-card p-5 animate-fade-slide-up" style={{ background: "linear-gradient(135deg, rgba(168,85,247,0.1), rgba(0,212,255,0.06))" }}>
        <h3 className="font-oswald text-xl font-bold text-white mb-1">🛒 Магазин VaultX</h3>
        <p className="text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>Покупай, обменивай, получай бонусы</p>
      </div>

      <div className="grid grid-cols-2 gap-3">
        {SHOP_ITEMS.map((item, i) => (
          <div key={i} className={`glass-card glass-card-hover p-4 relative animate-fade-slide-up delay-${Math.min(i + 1, 6)}`}
            style={{ border: `1px solid ${item.color}22` }}>
            {item.hot && (
              <div className="absolute -top-2 -right-2 px-2 py-0.5 text-xs font-bold rounded-full z-10"
                style={{ background: "linear-gradient(135deg, #ff0080, #ff6b35)", color: "white" }}>
                🔥 HOT
              </div>
            )}
            <div className="text-4xl mb-3">{item.emoji}</div>
            <div className="text-sm font-bold text-white mb-1">{item.name}</div>
            <div className="text-xs mb-3" style={{ color: "rgba(255,255,255,0.4)" }}>{item.desc}</div>
            <button className="w-full py-2 text-sm font-bold rounded-xl transition-all hover:-translate-y-0.5"
              style={{ background: `linear-gradient(135deg, ${item.color}cc, ${item.color}88)`, color: "#07080f" }}>
              {item.price}
            </button>
          </div>
        ))}
      </div>

      <div className="glass-card p-5 animate-fade-slide-up" style={{ background: "linear-gradient(135deg, rgba(0,255,136,0.08), rgba(0,204,102,0.05))", borderColor: "rgba(0,255,136,0.2)" }}>
        <div className="flex items-center gap-3">
          <span className="text-3xl">💱</span>
          <div className="flex-1">
            <div className="font-bold text-white mb-0.5">Обмен активов</div>
            <div className="text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>TON ↔ Звёзды ↔ NFT по текущему курсу</div>
          </div>
          <button className="btn-outline px-4 py-2 text-sm">Обменять</button>
        </div>
      </div>
    </div>
  );
}

// ── Settings ──────────────────────────────────────────────────────────────────
function SettingsTab() {
  const [notifs, setNotifs] = useState(true);
  const [twofa, setTwofa] = useState(false);
  const [biometric, setBiometric] = useState(true);

  return (
    <div className="space-y-5">
      <div className="glass-card p-5 animate-fade-slide-up">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl" style={{ background: "linear-gradient(135deg, #00d4ff, #ff0080)" }}>🚀</div>
          <div>
            <div className="font-oswald text-lg font-bold text-white">@VaultUser</div>
            <div className="text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>vaultuser@example.com</div>
            <button className="text-xs mt-1 font-semibold" style={{ color: "#00d4ff" }}>Редактировать профиль</button>
          </div>
        </div>
      </div>

      <div className="glass-card p-5 animate-fade-slide-up delay-1">
        <h3 className="font-oswald text-base font-bold text-white mb-4">Безопасность</h3>
        <div className="space-y-4">
          {[
            { label: "2FA аутентификация", sub: "Защита через приложение", val: twofa, set: setTwofa, color: "#ff0080" },
            { label: "Биометрия", sub: "Face ID / отпечаток", val: biometric, set: setBiometric, color: "#00d4ff" },
          ].map((item, ii) => (
            <div key={ii} className="flex items-center justify-between">
              <div>
                <div className="text-sm font-semibold text-white">{item.label}</div>
                <div className="text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>{item.sub}</div>
              </div>
              <button onClick={() => item.set(!item.val)} className="w-12 h-6 rounded-full transition-all duration-300 relative flex-shrink-0"
                style={{ background: item.val ? `linear-gradient(135deg, ${item.color}, ${item.color}99)` : "rgba(255,255,255,0.1)" }}>
                <div className="w-5 h-5 rounded-full bg-white absolute top-0.5 transition-all duration-300"
                  style={{ left: item.val ? "26px" : "2px", boxShadow: item.val ? `0 0 8px ${item.color}` : "none" }} />
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className="glass-card p-5 animate-fade-slide-up delay-2">
        <h3 className="font-oswald text-base font-bold text-white mb-4">Уведомления</h3>
        <div className="flex items-center justify-between">
          <div>
            <div className="text-sm font-semibold text-white">Push уведомления</div>
            <div className="text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>Транзакции и бонусы</div>
          </div>
          <button onClick={() => setNotifs(!notifs)} className="w-12 h-6 rounded-full transition-all duration-300 relative flex-shrink-0"
            style={{ background: notifs ? "linear-gradient(135deg, #00ff88, #00cc66)" : "rgba(255,255,255,0.1)" }}>
            <div className="w-5 h-5 rounded-full bg-white absolute top-0.5 transition-all duration-300"
              style={{ left: notifs ? "26px" : "2px", boxShadow: notifs ? "0 0 8px #00ff88" : "none" }} />
          </button>
        </div>
      </div>

      {[
        { icon: "🔑", label: "Сменить пароль", bg: "rgba(255,255,255,0.03)" },
        { icon: "📱", label: "Привязать Telegram", bg: "rgba(0,136,204,0.08)" },
        { icon: "🗑️", label: "Удалить аккаунт", bg: "rgba(255,80,80,0.06)" },
      ].map((item, i) => (
        <button key={i} className={`glass-card glass-card-hover w-full p-4 flex items-center gap-3 animate-fade-slide-up delay-${i + 3}`}
          style={{ background: item.bg }}>
          <span className="text-xl">{item.icon}</span>
          <span className="font-semibold text-white">{item.label}</span>
          <Icon name="ChevronRight" size={18} className="ml-auto" style={{ color: "rgba(255,255,255,0.3)" }} />
        </button>
      ))}

      <div className="text-center py-4 animate-fade-slide-up delay-5">
        <div className="text-xs" style={{ color: "rgba(255,255,255,0.2)" }}>VaultX v1.0.0 · @vaultx_support</div>
      </div>
    </div>
  );
}

// ── Referral ──────────────────────────────────────────────────────────────────
const TIERS = [
  { name: "Bronze", req: "1–9 рефералов", bonus: "10%", style: "tier-bronze", color: "#cd7f32", bg: "rgba(205,127,50,0.1)" },
  { name: "Silver", req: "10–29 рефералов", bonus: "15%", style: "tier-silver", color: "#c0c0c0", bg: "rgba(192,192,192,0.1)" },
  { name: "Gold", req: "30–99 рефералов", bonus: "20%", style: "tier-gold", color: "#ffd700", bg: "rgba(255,215,0,0.1)" },
  { name: "Platinum", req: "100+ рефералов", bonus: "25%", style: "tier-platinum", color: "#00d4ff", bg: "rgba(0,212,255,0.1)" },
];

function ReferralTab() {
  const [copied, setCopied] = useState(false);

  const copyCode = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-5">
      <div className="glass-card p-6 animate-fade-slide-up text-center"
        style={{ background: "linear-gradient(135deg, rgba(255,215,0,0.12), rgba(255,140,0,0.06))", borderColor: "rgba(255,215,0,0.25)" }}>
        <div className="text-5xl mb-3 animate-float">🎯</div>
        <h2 className="font-oswald text-2xl font-bold grad-gold mb-1">Приглашай — зарабатывай</h2>
        <p className="text-sm" style={{ color: "rgba(255,255,255,0.5)" }}>Получай до 25% с каждой транзакции твоих рефералов навсегда</p>
      </div>

      <div className="grid grid-cols-3 gap-3 animate-fade-slide-up delay-1">
        {[
          { val: "62", label: "Рефералов", icon: "👥", color: "#00d4ff" },
          { val: "420", label: "TON заработано", icon: "💎", color: "#ffd700" },
          { val: "20%", label: "Текущий бонус", icon: "🎯", color: "#00ff88" },
        ].map(s => (
          <div key={s.label} className="glass-card p-3 text-center">
            <div className="text-2xl mb-1">{s.icon}</div>
            <div className="font-oswald text-xl font-bold" style={{ color: s.color }}>{s.val}</div>
            <div className="text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>{s.label}</div>
          </div>
        ))}
      </div>

      <div className="glass-card p-5 animate-fade-slide-up delay-2">
        <h3 className="font-oswald text-base font-bold text-white mb-3">Твой реферальный код</h3>
        <div className="glass-card p-4 flex items-center justify-between mb-3"
          style={{ background: "rgba(255,215,0,0.06)", borderColor: "rgba(255,215,0,0.2)" }}>
          <span className="font-oswald text-xl font-bold grad-gold tracking-widest">VAULT-88291</span>
          <button onClick={copyCode} className="btn-gold px-4 py-2 text-sm flex items-center gap-2">
            {copied ? "✓ Скопировано" : <><Icon name="Copy" size={14} /> Копировать</>}
          </button>
        </div>
        <div className="flex gap-2">
          <button className="btn-cyan flex-1 py-2.5 text-sm flex items-center justify-center gap-2">
            <Icon name="Share2" size={16} /> Поделиться ссылкой
          </button>
          <button className="btn-outline px-4 py-2.5 text-sm">📱 QR</button>
        </div>
      </div>

      <div className="glass-card p-5 animate-fade-slide-up delay-3">
        <h3 className="font-oswald text-base font-bold text-white mb-4">Уровни программы</h3>
        <div className="space-y-3">
          {TIERS.map((tier, i) => (
            <div key={i} className={`tier-card ${tier.style} flex items-center justify-between relative`}
              style={{ background: tier.bg, border: `1px solid ${tier.color}33` }}>
              <div>
                <div className="font-oswald font-bold" style={{ color: tier.color }}>{tier.name}</div>
                <div className="text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>{tier.req}</div>
              </div>
              <div className="text-right">
                <div className="font-oswald text-2xl font-black" style={{ color: tier.color }}>{tier.bonus}</div>
                <div className="text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>бонус</div>
              </div>
              {i === 2 && (
                <div className="absolute -top-2 right-3 px-2 py-0.5 text-xs font-bold rounded-full"
                  style={{ background: "#ffd700", color: "#07080f" }}>
                  Твой уровень
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="glass-card p-5 animate-fade-slide-up delay-4">
        <h3 className="font-oswald text-base font-bold text-white mb-3">Последние рефералы</h3>
        {[
          { name: "@CryptoKing", date: "2 дня назад", earned: "+8.5 TON" },
          { name: "@StarFire99", date: "5 дней назад", earned: "+3.2 TON" },
          { name: "@MoonWalker", date: "1 нед назад", earned: "+12 TON" },
        ].map((f, i) => (
          <div key={i} className="tx-row">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center text-lg" style={{ background: "rgba(255,255,255,0.06)" }}>
              👤
            </div>
            <div className="flex-1">
              <div className="text-sm font-semibold text-white">{f.name}</div>
              <div className="text-xs" style={{ color: "rgba(255,255,255,0.35)" }}>Присоединился {f.date}</div>
            </div>
            <div className="font-bold font-oswald text-sm" style={{ color: "#00ff88" }}>{f.earned}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ── App ───────────────────────────────────────────────────────────────────────
export default function Index() {
  const [tab, setTab] = useState<Tab>("profile");

  const renderContent = () => {
    switch (tab) {
      case "profile": return <ProfileTab onNav={setTab} />;
      case "tons": return <TonsTab />;
      case "stars": return <StarsTab />;
      case "nft": return <NftTab />;
      case "history": return <HistoryTab />;
      case "shop": return <ShopTab />;
      case "settings": return <SettingsTab />;
      case "referral": return <ReferralTab />;
    }
  };

  const currentTab = TABS.find(t => t.id === tab);

  return (
    <div className="app-bg min-h-screen" style={{ fontFamily: "'Golos Text', sans-serif" }}>
      <div className="relative z-10 max-w-md mx-auto min-h-screen flex flex-col">
        {/* Header */}
        <header className="px-5 pt-5 pb-4 flex items-center justify-between sticky top-0 z-20"
          style={{ background: "rgba(7,8,15,0.9)", backdropFilter: "blur(20px)", borderBottom: "1px solid rgba(255,255,255,0.04)" }}>
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
              onClick={() => setTab("history")}>
              <Icon name="Bell" size={18} className="text-white opacity-60" />
              <div className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full" style={{ background: "#ff0080" }} />
            </button>
            <button
              className="w-10 h-10 rounded-xl flex items-center justify-center text-lg glass-card glass-card-hover"
              onClick={() => setTab("profile")}>
              🚀
            </button>
          </div>
        </header>

        {/* Content */}
        <main className="flex-1 overflow-y-auto px-4 pb-32 pt-4" key={tab}>
          {renderContent()}
        </main>

        {/* Bottom Nav */}
        <nav className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-md px-3 pb-4 pt-2 z-30"
          style={{ background: "linear-gradient(to top, rgba(7,8,15,1) 70%, transparent)" }}>
          <div className="glass-card p-1.5 flex items-center justify-around"
            style={{ background: "rgba(12,15,28,0.97)", backdropFilter: "blur(30px)", border: "1px solid rgba(255,255,255,0.07)" }}>
            {TABS.map(t => (
              <button key={t.id} onClick={() => setTab(t.id)}
                className={`nav-item ${tab === t.id ? "active" : ""}`}>
                <Icon name={t.icon} size={18} />
                <span>{t.label}</span>
              </button>
            ))}
          </div>
        </nav>
      </div>
    </div>
  );
}
