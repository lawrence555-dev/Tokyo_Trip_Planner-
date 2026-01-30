import React, { useState } from 'react';
import { Camera, Sun, Moon, Coffee, Utensils, Info } from 'lucide-react';

const SETTINGS = [
    {
        id: "c1",
        name: "C1: 日系空氣感",
        desc: "白天街頭 / 淺草 / 透明感",
        icon: Sun,
        color: "bg-blue-50 text-blue-600 border-blue-200",
        sim: "Pro Neg. Std",
        dr: "DR200",
        wb: "Auto (R:-2 B:+4)",
        highlight: "-1.0",
        shadow: "-2.0",
        colorLevel: "+2",
        grain: "關",
        clarity: "0",
        tips: "應對盛夏強光，降高光+偏藍中和酷暑。太亮可減 EV -0.3。"
    },
    {
        id: "c2",
        name: "C2: 賽博夜晚",
        desc: "新宿澀谷 / 霓虹燈 / 電影感",
        icon: Moon,
        color: "bg-purple-50 text-purple-600 border-purple-200",
        sim: "Classic Neg.",
        dr: "DR400",
        wb: "Auto (R:+1 B:-2)",
        highlight: "+1.0",
        shadow: "+2.0",
        colorLevel: "+1",
        grain: "強 / 大",
        clarity: "0",
        tips: "紅白青三色會非常突出。適合迷失東京風格。"
    },
    {
        id: "c3",
        name: "C3: 日系暖木",
        desc: "咖啡廳 / 室內 / 溫暖氛圍",
        icon: Coffee,
        color: "bg-orange-50 text-orange-600 border-orange-200",
        sim: "Nostalgic Neg.",
        dr: "DR400",
        wb: "Auto (R:+2 B:-4)",
        highlight: "-1.0",
        shadow: "-1.5",
        colorLevel: "+1",
        grain: "弱 / 小",
        clarity: "-2",
        tips: "注意：Clarity -2 會導致存檔慢 1 秒。連拍時請歸零。"
    },
    {
        id: "c4",
        name: "C4: 甜點美食",
        desc: "人像 / 食物 / 膚色還原",
        icon: Utensils,
        color: "bg-pink-50 text-pink-600 border-pink-200",
        sim: "Astia",
        dr: "DR200",
        wb: "Auto (R:+1 B:+1)",
        highlight: "-1.0",
        shadow: "-1.0",
        colorLevel: "+1",
        grain: "關",
        clarity: "0",
        tips: "拍老婆女兒的保險牌，膚色最自然討喜。"
    }
];

export default function CameraGuide() {
    const [activeTab, setActiveTab] = useState("c1");

    return (
        <div className="bg-zinc-50 border-x border-b border-zinc-200 rounded-b-xl p-4 transition-all duration-300">

            {/* Quick Tabs */}
            <div className="grid grid-cols-4 gap-2 mb-4">
                {SETTINGS.map((s) => (
                    <button
                        key={s.id}
                        onClick={(e) => { e.stopPropagation(); setActiveTab(s.id); }}
                        className={`
                flex flex-col items-center justify-center p-2 rounded-xl border-2 transition-all
                ${activeTab === s.id ? s.color + " border-current shadow-sm scale-105" : "bg-white border-transparent text-zinc-300 hover:bg-zinc-100"}
              `}
                    >
                        <s.icon size={20} className="mb-1" strokeWidth={activeTab === s.id ? 2.5 : 2} />
                        <span className="text-[10px] font-bold">{s.id.toUpperCase()}</span>
                    </button>
                ))}
            </div>

            {/* Active Card Content */}
            {SETTINGS.map((s) => (
                activeTab === s.id && (
                    <div key={s.id} className="bg-white rounded-2xl shadow-sm border border-zinc-100 overflow-hidden animate-in fade-in zoom-in duration-300">

                        {/* Card Header Minimal */}
                        <div className={`p-4 border-b border-zinc-100 flex justify-between items-center ${s.color.replace('border-', 'border-b-').replace('text-', 'bg-').replace('50', '50/50')}`}>
                            <div>
                                <h2 className="text-zinc-800 font-bold text-lg leading-none">{s.name.split(':')[0]}</h2>
                                <span className="text-[10px] text-zinc-500 font-medium">{s.sim}</span>
                            </div>
                            <div className={`p-2 rounded-full ${s.color}`}>
                                <s.icon size={18} />
                            </div>
                        </div>

                        {/* Specs Grid Compact */}
                        <div className="p-4 grid grid-cols-2 gap-x-2 gap-y-3 text-xs">
                            <SpecItem label="DR" value={s.dr} />
                            <SpecItem label="WB" value={s.wb} highlight />
                            <SpecItem label="H/S" value={`H${s.highlight} S${s.shadow}`} />
                            <SpecItem label="Color" value={s.colorLevel} />
                            <SpecItem label="Sharp" value="-2" />
                            <SpecItem label="Clarity" value={s.clarity} warn={s.clarity !== '0'} />
                        </div>

                        {/* Tips Footer */}
                        <div className="bg-zinc-50/80 p-3 border-t border-zinc-100">
                            <p className="text-xs text-zinc-600 leading-relaxed font-medium flex gap-2">
                                <Info size={14} className="shrink-0 mt-0.5 text-zinc-400" />
                                {s.tips}
                            </p>
                        </div>
                    </div>
                )
            ))}
        </div>
    );
}

function SpecItem({ label, value, highlight, warn }) {
    return (
        <div className="flex justify-between items-baseline border-b border-zinc-50 pb-1">
            <span className="text-[10px] text-zinc-400 font-bold uppercase tracking-wider">{label}</span>
            <span className={`
        font-mono font-bold tracking-tight
        ${highlight ? "text-blue-600" : "text-zinc-600"}
        ${warn && "text-red-500"}
      `}>
                {value}
            </span>
        </div>
    );
}
