import { useState } from "react";
import Icon from "@/components/ui/icon";

// ── Tons ─────────────────────────────────────────────────────────────────────
export function TonsTab() {
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
export function StarsTab() {
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
