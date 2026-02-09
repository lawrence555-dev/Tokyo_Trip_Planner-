import React, { useState, useEffect } from 'react';
import { Cloud, DollarSign, RefreshCw, Sun, CloudRain, Snowflake } from 'lucide-react';

export default function DashboardStatus() {
    const [weather, setWeather] = useState(null);
    const [rates, setRates] = useState(null);
    const [loading, setLoading] = useState(true);

    // Tokyo Coordinates
    const TOKYO_LAT = 35.6895;
    const TOKYO_LON = 139.6917;

    useEffect(() => {
        const fetchData = async () => {
            try {
                // 1. Fetch Weather (Open-Meteo)
                const weatherRes = await fetch(
                    `https://api.open-meteo.com/v1/forecast?latitude=${TOKYO_LAT}&longitude=${TOKYO_LON}&current=temperature_2m,weather_code&timezone=Asia%2FTokyo`
                );
                const weatherData = await weatherRes.json();

                // 2. Fetch Exchange Rates (Exchangerate-API) - Base JPY
                // We want to know 1 JPY = ? TWD (for cost calculation)
                const rateRes = await fetch('https://open.er-api.com/v6/latest/JPY');
                const rateData = await rateRes.json();

                if (weatherData && rateData) {
                    setWeather({
                        temp: Math.round(weatherData.current.temperature_2m),
                        code: weatherData.current.weather_code
                    });
                    setRates({
                        TWD: rateData.rates.TWD.toFixed(3), // 0.215
                    });
                }
            } catch (error) {
                console.error("Failed to fetch dashboard data:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    // Weather Code Interpretation
    const getWeatherIcon = (code) => {
        if (code <= 3) return <Sun size={16} className="text-red-500" />;
        if (code >= 71) return <Snowflake size={16} className="text-cyan-400" />;
        if (code >= 51) return <CloudRain size={16} className="text-cyan-500" />;
        return <Cloud size={16} className="text-zinc-400" />;
    };

    if (loading) return null;

    return (
        <div className="mx-6 mt-4 mb-2 grid grid-cols-2 gap-3 animate-fadeIn">
            {/* Weather Widget */}
            <div className="bg-white/80 backdrop-blur-sm border border-zinc-200 rounded-xl p-3 flex items-center gap-3 shadow-sm">
                <div className="bg-zinc-50 p-2 rounded-full">
                    {weather ? getWeatherIcon(weather.code) : <Cloud size={16} />}
                </div>
                <div>
                    <h3 className="text-[10px] uppercase font-bold text-zinc-400 tracking-wider">Tokyo Weather</h3>
                    <div className="flex items-baseline gap-1">
                        <span className="text-lg font-bold text-zinc-900 font-mono">{weather?.temp}°C</span>
                    </div>
                </div>
            </div>

            {/* Currency Widget */}
            <div className="bg-white/80 backdrop-blur-sm border border-zinc-200 rounded-xl p-3 flex flex-col justify-center shadow-sm relative overflow-hidden">
                <div className="absolute top-0 right-0 p-1 opacity-10">
                    <DollarSign size={40} className="text-zinc-500" />
                </div>
                <h3 className="text-[10px] uppercase font-bold text-zinc-400 tracking-wider mb-1">Exchange Rates</h3>
                <div className="flex flex-col gap-0.5">
                    <div className="flex justify-between items-baseline">
                        <span className="text-xs font-medium text-zinc-500">JP¥ 1 = </span>
                        <div className="flex items-baseline gap-1">
                            <span className="text-sm font-bold text-red-500 font-mono">NT$ {rates?.TWD}</span>
                        </div>
                    </div>
                    <div className="flex justify-between items-baseline border-t border-zinc-100 pt-1 mt-1">
                        <span className="text-[10px] text-zinc-400">TWD to JPY</span>
                        <span className="text-[10px] font-mono text-zinc-500">1 = {(1 / rates?.TWD).toFixed(1)}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
