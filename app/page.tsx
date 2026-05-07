import React from 'react';

export default function BentoDashboard() {
  return (
    <main className="p-6 md:p-12 max-w-[1400px] mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[180px]">
        
        <div className="bento-card bg-bento-dark text-white md:col-span-1 md:row-span-1">
          <h3 className="text-xl font-bold text-bento-cyan">Show the world time</h3>
          <p className="text-sm opacity-80 mt-2">Indian time with world time</p>
        </div>

        <div className="bento-card border-4 border-bento-cyan bg-white md:col-span-1 md:row-span-1">
          <h3 className="text-xl font-bold text-bento-cyan leading-tight">no of satellites orbiting</h3>
        </div>

        <div className="bento-card bg-bento-dark text-white md:col-span-2 md:row-span-2">
          <h2 className="text-3xl font-bold text-bento-cyan">Flight Radar</h2>
          <p className="text-lg opacity-60">Interactive</p>
        </div>

        <div className="bento-card border-4 border-bento-orange bg-white md:col-span-1 md:row-span-1">
          <h3 className="text-xl font-bold text-bento-orange">AQI</h3>
        </div>

        <div className="bento-card bg-bento-dark text-white md:col-span-2 md:row-span-2">
          <h3 className="text-2xl font-bold">Map of the War on going now</h3>
          <p className="text-sm opacity-60 mt-4">World map interactive with graph hover for info</p>
        </div>

        <div className="bento-card border-4 border-bento-purple bg-white md:col-span-1 md:row-span-1">
          <h3 className="text-xl font-bold text-bento-purple">GitHub</h3>
          <p className="text-bento-purple opacity-70">@Gagan-MR</p>
        </div>

        <div className="bento-card bg-bento-blue text-white md:col-span-1 md:row-span-1">
          <h3 className="text-xl font-bold">Weather</h3>
        </div>

        <div className="bento-card bg-bento-dark text-white md:col-span-1 md:row-span-1 text-[10px]">
          <p className="text-bento-cyan leading-tight">Indian railway map select stations for live update with visualization</p>
        </div>

        <div className="bento-card bg-bento-cyan text-bento-dark md:col-span-1 md:row-span-1">
          <h3 className="text-xl font-bold">A simple game</h3>
          <p className="text-sm">Like floppy bird</p>
        </div>

        <div className="bento-card bg-bento-green text-white md:col-span-1 md:row-span-1">
          <h3 className="text-xl font-bold">Weather Forecast</h3>
        </div>

      </div>
    </main>
  );
}
