export default function WeatherForecast() {
  return (
    <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 text-white">
      <h3 className="text-lg font-semibold mb-4">5 Günlük Tahmin</h3>
      
      <div className="grid grid-cols-5 gap-4">
        {['Pzt', 'Sal', 'Çar', 'Per', 'Cum'].map((day, index) => (
          <div key={index} className="text-center">
            <p className="text-sm text-white/70 mb-2">{day}</p>
            <div className="flex justify-center mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
              </svg>
            </div>
            <div className="flex justify-center gap-2">
              <span className="font-semibold">24°</span>
              <span className="text-white/50">18°</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 