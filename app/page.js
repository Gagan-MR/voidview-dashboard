import React from 'react';

export default function SciFiDashboard() {
  return (
    <div className="min-h-screen bg-black text-[#5adeff] font-mono p-4 overflow-hidden select-none">
      
      {/* HEADER */}
      <header className="flex justify-between items-center border-b border-[#5adeff]/30 pb-4 mb-6">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold tracking-[0.3em] text-white" style={{ textShadow: '0 0 10px #5adeff' }}>
            VOID_VIEW // GAGAN-MR
          </h1>
          <p className="text-[10px] md:text-xs text-[#5adeff]/70 tracking-widest mt-1">GLOBAL INTELLIGENCE NETWORK v2.0</p>
        </div>
        <div className="hidden md:flex gap-4 text-xs font-bold tracking-wider">
          <span className="px-3 py-1 border border-[#5adeff]/50 bg-[#5adeff]/10">STATUS: ONLINE</span>
          <span className="px-3 py-1 border border-emerald-500/50 text-emerald-400 bg-emerald-500/10 animate-pulse">SYS: STABLE</span>
        </div>
      </header>

      {/* MAIN GRID */}
      <div className="grid grid-cols-1 xl:grid-cols-4 gap-6 min-h-[80vh]">
        
        {/* LEFT COLUMN: Data Feeds */}
        <div className="col-span-1 flex flex-col gap-6">
          
          {/* Panel 1: Live Traffic */}
          <div className="border border-[#5adeff]/30 bg-[#00101a]/60 p-5 relative shadow-[0_0_15px_rgba(90,222,255,0.05)]">
            <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-[#5adeff]"></div>
            <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-[#5adeff]"></div>
            
            <h2 className="text-xs mb-4 text-white tracking-widest">LIVE_TRAFFIC_FEED</h2>
            <div className="flex justify-between items-end border-b border-[#5adeff]/20 pb-2 mb-4">
              <span className="text-4xl font-light text-white">28,869</span>
              <span className="text-[10px] text-[#5adeff]/70">ACTIVE_NODES</span>
            </div>
            
            {/* CSS Bar Chart Simulation */}
            <div className="h-20 w-full flex items-end gap-1 opacity-80 mt-4">
              {[3, 5, 4, 7, 5, 8, 9, 6, 8, 10, 7, 5, 4, 6, 8].map((h, i) => (
                <div key={i} className="flex-1 bg-gradient-to-t from-[#5adeff]/20 to-[#5adeff]" style={{ height: `${h * 10}%` }}></div>
              ))}
            </div>
          </div>

          {/* Panel 2: Regional Distribution */}
          <div className="border border-[#5adeff]/30 bg-[#00101a]/60 p-5 flex-grow relative">
            <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-[#5adeff]"></div>
            
            <h2 className="text-xs mb-4 text-white tracking-widest">REGIONAL_DISTRIBUTION</h2>
            <ul className="space-y-4 text-xs mt-6">
              {[
                { region: 'APAC', val: 88 },
                { region: 'EMEA', val: 45 },
                { region: 'NA', val: 92 },
                { region: 'LATAM', val: 34 }
              ].map((item, i) => (
                <li key={i} className="flex justify-between items-center group cursor-pointer">
                  <span className="group-hover:text-white transition-colors">[{item.region}]</span>
                  <div className="flex-grow mx-4 border-b border-dashed border-[#5adeff]/30 group-hover:border-[#5adeff] transition-colors"></div>
                  <span className="text-white font-bold">{item.val}%</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* CENTER COLUMN: The Radar/Globe View */}
        <div className="col-span-1 xl:col-span-2 flex flex-col items-center justify-center relative border border-[#5adeff]/20 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#002845] to-black min-h-[400px]">
          
          <div className="absolute top-4 left-4 text-[10px] text-[#5adeff]/60">&lt;UQ2513_GS2513&gt; _ESTABLISHING_LINK...</div>
          <div className="absolute bottom-4 right-4 text-[10px] text-[#5adeff]/60">RENDER_ENGINE_v9.2</div>
          
          {/* CSS Wireframe Radar/Globe */}
          <div className="w-64 h-64 md:w-96 md:h-96 rounded-full border-2 border-[#5adeff]/40 shadow-[0_0_60px_rgba(90,222,255,0.15)] relative flex items-center justify-center overflow-hidden">
            
            {/* Latitude / Longitude lines */}
            <div className="absolute inset-0 rounded-full border border-[#5adeff]/20" style={{ transform: 'scale(1, 0.3)' }}></div>
            <div className="absolute inset-0 rounded-full border border-[#5adeff]/20" style={{ transform: 'scale(1, 0.6)' }}></div>
            <div className="absolute inset-0 rounded-full border border-[#5adeff]/20" style={{ transform: 'scale(0.3, 1)' }}></div>
            <div className="absolute inset-0 rounded-full border border-[#5adeff]/20" style={{ transform: 'scale(0.6, 1)' }}></div>
            
            {/* Crosshairs */}
            <div className="w-[1px] h-full bg-[#5adeff]/30 absolute"></div>
            <div className="h-[1px] w-full bg-[#5adeff]/30 absolute"></div>
            
            {/* Active Pings */}
            <div className="absolute top-[30%] right-[35%] w-2 h-2 bg-white rounded-full shadow-[0_0_15px_#fff] animate-ping"></div>
            <div className="absolute bottom-[40%] left-[25%] w-1.5 h-1.5 bg-[#5adeff] rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
          </div>
        </div>

        {/* RIGHT COLUMN: Alerts & Logs */}
        <div className="col-span-1 flex flex-col gap-6">
           
           {/* Panel 3: Early Warning System */}
           <div className="border border-[#5adeff]/30 bg-[#00101a]/60 p-5 relative">
            <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-[#5adeff]"></div>
            
            <h2 className="text-xs mb-4 text-white tracking-widest">EARLY_WARNING_SYS</h2>
            <div className="space-y-3 mt-4">
              <div className="bg-red-950/40 p-3 text-[10px] border-l-2 border-red-500">
                <span className="text-red-400 font-bold block mb-1">CRITICAL_ALERT // 13:15</span>
                <span className="text-white">Anomaly detected in Sector 7 routing.</span>
              </div>
              <div className="bg-amber-950/40 p-3 text-[10px] border-l-2 border-amber-500">
                <span className="text-amber-400 font-bold block mb-1">WARNING // 13:12</span>
                <span className="text-white">Bandwidth fluctuation in primary node.</span>
              </div>
            </div>
          </div>

          {/* Panel 4: Terminal Logs */}
          <div className="border border-[#5adeff]/30 bg-[#00101a]/60 p-5 flex-grow relative">
            <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-[#5adeff]"></div>
            
            <h2 className="text-xs mb-4 text-white tracking-widest">SYSTEM_LOGS</h2>
            <div className="text-[10px] space-y-2 opacity-80 font-mono mt-4">
              <p className="text-[#5adeff]/50">[11:21:02] Initializing sequence alpha...</p>
              <p className="text-[#5adeff]/50">[11:21:05] Connecting to relays... <span className="text-emerald-400">OK</span></p>
              <p className="text-[#5adeff]/50">[11:21:08] Decrypting data stream... <span className="text-emerald-400">OK</span></p>
              <p className="text-[#5adeff]/50">[11:21:12] Syncing clock with atomic standard...</p>
              <p className="text-white mt-4 animate-pulse">root@voidview:~# _</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
