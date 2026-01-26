import React from 'react';

const ItineraryCard = ({ activity, isLast }) => {
    const { time, title, desc, icon: Icon, type, highlight } = activity;

    // Type-based styling
    const getTypeColor = (type) => {
        switch (type) {
            case 'transit': return 'text-gray-400';
            case 'dining': return 'text-orange-500';
            case 'shopping': return 'text-pink-500';
            case 'stay': return 'text-indigo-500';
            case 'chore': return 'text-blue-400';
            default: return 'text-primary';
        }
    };

    return (
        <div className={`relative flex gap-4 ${isLast ? '' : 'pb-8'}`}>
            {/* Timeline Line */}
            {!isLast && (
                <div className="absolute left-[19px] top-10 bottom-0 w-[2px] bg-gradient-to-b from-gray-200 to-transparent" />
            )}

            {/* Time & Icon Column */}
            <div className="flex flex-col items-center flex-shrink-0 w-10 pt-1">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center bg-white shadow-sm border border-gray-100 z-10 ${getTypeColor(type)}`}>
                    <Icon size={18} />
                </div>
            </div>

            {/* Content Column */}
            <div className="flex-1 pt-1 min-w-0">
                <div className="flex items-baseline justify-between mb-1">
                    <span className="text-xs font-bold text-gray-400 uppercase tracking-wide">{time}</span>
                    {highlight && (
                        <span className="px-2 py-0.5 bg-yellow-100 text-yellow-700 text-[10px] font-bold rounded-full uppercase tracking-wider">重點行程</span>
                    )}
                </div>

                <div className={`card ${highlight ? 'border-l-4 border-l-primary ring-1 ring-primary/10' : ''}`}>
                    <h3 className="text-lg font-heading font-bold text-gray-800 mb-1 leading-snug">{title}</h3>
                    <p className="text-sm text-gray-500 leading-relaxed font-sans">{desc}</p>
                </div>
            </div>
        </div>
    );
};

export default ItineraryCard;
