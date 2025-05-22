"use client"

export default function WeatherCard() {
  return (
    <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 text-white">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-semibold">İstanbul</h2>
          <p className="text-white/70">Bugün, 15 Mart</p>
        </div>
        <div className="text-5xl font-bold">23°</div>
      </div>
      
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
          </svg>
          <span>Parçalı Bulutlu</span>
        </div>
        <div className="text-right">
          <p className="text-sm text-white/70">Hissedilen</p>
          <p className="text-xl font-semibold">25°</p>
        </div>
      </div>
    </div>
  );
} 