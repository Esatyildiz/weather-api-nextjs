"use client";
import SearchBar from "@/components/SearchBar";
import WeatherCard from "@/components/WeatherCard";
import WeatherInfo from "@/components/WeatherInfo";
import WeatherForecast from "@/components/WeatherForecast";
import { useSWRConfig } from "swr";

export default function Home() {
  const { data, error, isLoading } = useSWRConfig(
    `${process.env.NEXT_PUBLIC_API_URL}/data/3.0/onecall?lat=33.44&lon=-94.04&appid=${process.env.NEXT_PUBLIC_API_KEY}`
  );
  console.log("data", data);
  if (isLoading) return <div>Yükleniyor...</div>;
  if (error) return <div>Hata: {error.message}</div>;

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-400 to-blue-600 p-4 sm:p-8">
      <div className="max-w-4xl mx-auto space-y-6">
        <h1 className="text-3xl font-bold text-white text-center mb-8">
          Hava Durumu
        </h1>

        <SearchBar />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <WeatherCard />
          </div>
          <div className="lg:col-span-1">
            <WeatherInfo />
          </div>
        </div>

        <WeatherForecast />
      </div>
    </div>
  );
}
