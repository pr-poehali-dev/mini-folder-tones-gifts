import { useState } from "react";

// ── NFT ──────────────────────────────────────────────────────────────────────
const NFT_ITEMS = [
  { emoji: "🦋", name: "Crystal Butterfly", rarity: "Редкий", price: "120 ⭐", color: "#00d4ff" },
  { emoji: "🔥", name: "Flame Spirit", rarity: "Эпический", price: "500 ⭐", color: "#ff6b35" },
  { emoji: "💜", name: "Purple Galaxy", rarity: "Легендарный", price: "2000 ⭐", color: "#a855f7" },
  { emoji: "🐉", name: "Dragon Seal", rarity: "Мифический", price: "5000 ⭐", color: "#ffd700" },
  { emoji: "🌊", name: "Ocean Wave", rarity: "Обычный", price: "50 ⭐", color: "#0ea5e9" },
  { emoji: "🌺", name: "Sakura Bloom", rarity: "Редкий", price: "200 ⭐", color: "#ff0080" },
];

export function NftTab() {
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

export function HistoryTab() {
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

export function ShopTab() {
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
