"use client"
import { useState } from 'react';


export default function SearchBar() {
  return (
    <div className="relative">
      <input
        type="text"
        placeholder="Şehir ara..."
        className="w-full px-4 py-3 rounded-lg bg-white/10 backdrop-blur-md text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
      />
      <button className="absolute right-3 top-1/2 -translate-y-1/2 text-white/70 hover:text-white">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </button>
    </div>
  );
} 