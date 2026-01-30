import React, { useState } from 'react';
import { itineraryData } from './data/itinerary';
import ItineraryCard from './components/ItineraryCard';
import { Calendar, Info, Aperture, ChevronDown, ChevronUp } from 'lucide-react';
import CameraGuide from './components/CameraGuide';

function App() {
  const [activeDay, setActiveDay] = useState(1);
  const [showCameraGuide, setShowCameraGuide] = useState(true);

  // Filter current day's data
  const currentDayData = itineraryData.find(d => d.day === activeDay);

  return (
    <div className="min-h-screen bg-[#FDFDFD] flex justify-center font-sans tracking-wide text-zinc-800">
      {/* Mobile Container Limit */}
      <div className="w-full max-w-md bg-white min-h-screen shadow-2xl shadow-zinc-200/50 relative pb-20 overflow-hidden border-x border-zinc-100">

        {/* Minimal Header */}
        <header className="pt-12 pb-6 px-6 bg-white relative">
          <div className="flex items-baseline justify-between mb-4">
            <h1 className="text-3xl font-serif font-bold text-zinc-900 tracking-tight">
              東京 <span className="text-zinc-300 font-light text-xl">2026</span>
            </h1>
            <span className="p-2 bg-zinc-50 rounded-full border border-zinc-100">
              <span className="text-[10px] font-bold tracking-[0.2em] text-zinc-400 block px-1">JP.TRIP</span>
            </span>
          </div>
          <p className="text-xs text-zinc-400 tracking-widest uppercase font-medium pl-1 border-l-2 border-zinc-200">
            A Family Photography Journey
          </p>
        </header>

        {/* Global Camera Guide (Collapsible) */}
        <div className="mx-6 mb-6">
          <button
            onClick={() => setShowCameraGuide(!showCameraGuide)}
            className="w-full flex items-center justify-between p-3 bg-zinc-900 text-white rounded-t-xl"
          >
            <div className="flex items-center gap-2">
              <Aperture size={16} className="text-cyan-400" />
              <span className="text-xs font-bold tracking-widest uppercase">X-M5 Master Config</span>
            </div>
            {showCameraGuide ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
          </button>

          {showCameraGuide && <CameraGuide />}
        </div>

        {/* Day Selector (Minimal Tab) */}
        <div className="sticky top-0 z-40 bg-white/95 backdrop-blur-sm border-b border-zinc-100 py-2 px-6 overflow-x-auto no-scrollbar scroll-smooth">
          <div className="flex gap-4">
            {itineraryData.map((day) => (
              <button
                key={day.day}
                onClick={() => setActiveDay(day.day)}
                className={`
                  flex flex-col items-center justify-center min-w-[50px] py-2 px-1 rounded-lg transition-all duration-300 shrink-0 select-none
                  ${activeDay === day.day
                    ? 'text-zinc-900'
                    : 'text-zinc-300 hover:text-zinc-500'
                  }
                `}
              >
                <span className={`text-[10px] font-bold uppercase tracking-widest mb-1 ${activeDay === day.day ? 'opacity-100' : 'opacity-0'}`}>DAY</span>
                <span className={`text-2xl font-serif font-light ${activeDay === day.day ? 'scale-110' : ''}`}>{day.day}</span>
                {activeDay === day.day && <div className="w-1 h-1 bg-red-500 rounded-full mt-1" />}
              </button>
            ))}
          </div>
        </div>

        {/* Content Area */}
        <main className="px-6 py-8 animate-fadeIn">
          <div className="mb-10 pl-2">
            <span className="text-xs font-bold text-zinc-400 tracking-widest uppercase mb-2 block">{currentDayData.date}</span>
            <h2 className="text-2xl font-serif font-medium text-zinc-800 mb-3 leading-snug">{currentDayData.title}</h2>
            <p className="text-sm text-zinc-500 leading-relaxed font-light border-l border-zinc-200 pl-4">
              {currentDayData.summary}
            </p>
          </div>

          <div className="space-y-4">
            {currentDayData.activities.map((activity, index) => (
              <ItineraryCard
                key={index}
                activity={activity}
                isLast={index === currentDayData.activities.length - 1}
              />
            ))}
          </div>

          {/* Practical Notes Section (Minimal) */}
          {currentDayData.notes && currentDayData.notes.length > 0 && (
            <div className="mt-12 border-t border-zinc-100 pt-8">
              <h3 className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest mb-6 flex items-center gap-2">
                <Info size={12} /> Notes & Backup
              </h3>
              <div className="space-y-4">
                {currentDayData.notes.map((note, idx) => (
                  <div key={idx} className="flex gap-4 p-4 bg-zinc-50 rounded-xl">
                    <div className="text-zinc-400 shrink-0 mt-0.5">
                      <note.icon size={16} />
                    </div>
                    <p className="text-xs text-zinc-600 leading-relaxed font-medium">{note.text}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

        </main>
      </div>
    </div>
  );
}

export default App;
