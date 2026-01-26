import React, { useState } from 'react';
import { itineraryData } from './data/itinerary';
import ItineraryCard from './components/ItineraryCard';
import { Calendar } from 'lucide-react';

function App() {
  const [activeDay, setActiveDay] = useState(1);

  // Filter current day's data
  const currentDayData = itineraryData.find(d => d.day === activeDay);

  return (
    <div className="min-h-screen bg-gray-50 flex justify-center">
      {/* Mobile Container Limit */}
      <div className="w-full max-w-md bg-background min-h-screen shadow-2xl relative pb-12 overflow-hidden">

        {/* Hero / Header */}
        <header className="relative h-64 bg-gradient-to-br from-primary via-secondary to-purple-600 text-white p-6 flex flex-col justify-end overflow-hidden">
          {/* Abstract Aurora Effect */}
          <div className="absolute top-0 left-0 w-full h-full opacity-30">
            <div className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] bg-gradient-to-r from-cyan-300 via-purple-300 to-pink-300 blur-3xl rounded-full animate-spin-slow"></div>
          </div>

          <div className="relative z-10 w-full">
            <div className="flex justify-between items-end w-full">
              <div>
                <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-xs font-bold tracking-wider mb-3">
                  TOKYO TRIP 2026
                </span>
                <h1 className="text-4xl font-heading font-black leading-tight mb-1">
                  霓虹 <br /> <span className="text-cyan-200">東京.</span>
                </h1>
              </div>
              {/* Visual Accent */}
              <span className="text-5xl opacity-20 font-black absolute right-0 bottom-0 select-none">JP</span>
            </div>

            <p className="text-sm text-white/90 max-w-[200px] mt-2">
              六天五夜 · 美食購物 · 親子回憶
            </p>
          </div>
        </header>

        {/* Day Selector (Horizontal Scroll) */}
        <div className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-gray-100 py-3 px-4 overflow-x-auto no-scrollbar scroll-smooth">
          <div className="flex gap-3">
            {itineraryData.map((day) => (
              <button
                key={day.day}
                onClick={() => setActiveDay(day.day)}
                className={`
                  flex flex-col items-center justify-center min-w-[60px] p-2 rounded-xl transition-all duration-200 shrink-0
                  ${activeDay === day.day
                    ? 'bg-primary text-white shadow-lg scale-105'
                    : 'bg-white text-gray-400 hover:bg-gray-50'
                  }
                `}
              >
                <span className="text-[10px] font-bold uppercase tracking-wider opacity-80">第</span>
                <span className="text-xl font-black font-heading">{day.day}</span>
                <span className="text-[10px] font-bold uppercase tracking-wider opacity-80">天</span>
              </button>
            ))}
          </div>
        </div>

        {/* Content Area */}
        <main className="p-5 animate-fadeIn">
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-1">{currentDayData.title}</h2>
            <div className="flex items-center gap-2 text-primary font-medium text-sm">
              <Calendar size={14} />
              <span>{currentDayData.date}</span>
            </div>
            <p className="mt-2 text-gray-500 text-sm leading-relaxed">
              {currentDayData.summary}
            </p>
          </div>

          <div className="space-y-2">
            {currentDayData.activities.map((activity, index) => (
              <ItineraryCard
                key={index}
                activity={activity}
                isLast={index === currentDayData.activities.length - 1}
              />
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
