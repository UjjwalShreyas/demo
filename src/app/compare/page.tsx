"use client";
import { useSearchParams } from "next/navigation";
import { colleges } from "@/data/colleges";
import Link from "next/link";
import { Suspense } from "react";

function CompareContent() {
  const params = useSearchParams();
  const ids = params.get("ids")?.split(",") ?? [];
  const selected = colleges.filter((c) => ids.includes(c.id));

  if (selected.length < 2) {
    return (
      <div className="flex flex-col items-center justify-center py-32 text-center">
        <div className="bg-[#f4f1ea] p-10 border-4 border-[#111] max-w-md w-full btn-brutal">
          <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" strokeLinejoin="miter" className="mx-auto text-[#111] mb-6">
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="12" y1="8" x2="12" y2="12"></line>
            <line x1="12" y1="16" x2="12.01" y2="16"></line>
          </svg>
          <h2 className="text-2xl font-black uppercase mb-4 text-[#111]">Insufficient Data</h2>
          <p className="font-serif italic text-lg text-[#111] mb-8">Select at least 2 institutions to unlock comparison analytics.</p>
          <Link href="/" className="bg-[#111] hover:bg-black text-[#f4f1ea] px-6 py-4 font-black uppercase tracking-widest transition-colors w-full block btn-glitch">
            Return to SCOUT
          </Link>
        </div>
      </div>
    );
  }

  const minFees = Math.min(...selected.map(c => c.fees));
  const maxRating = Math.max(...selected.map(c => c.rating));
  const maxCampusSize = Math.max(...selected.map(c => c.campusSize));
  const maxAveragePackage = Math.max(...selected.map(c => c.averagePackage));
  const maxHighestPackage = Math.max(...selected.map(c => c.highestPackage));

  // Colors for visualization
  const colors = ["#ff4500", "#1e90ff", "#32cd32", "#ffd700"]; // Red, Blue, Green, Yellow

  return (
    <div className="animate-fade-in-up">
      {/* Header */}
      <div className="flex items-center gap-6 mb-16">
        <Link href="/" className="flex items-center justify-center w-14 h-14 bg-[#f4f1ea] border-4 border-[#111] btn-brutal hover:bg-[#e8e4d9] transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="square" strokeLinejoin="miter" className="text-[#111]">
            <line x1="19" y1="12" x2="5" y2="12"></line>
            <polyline points="12 19 5 12 12 5"></polyline>
          </svg>
        </Link>
        <div>
          <h1 className="text-4xl md:text-5xl font-black tracking-tighter uppercase text-[#111]">Visual Analytics</h1>
          <p className="font-serif italic text-xl text-[#111]/70 mt-2">Deep dive into {selected.length} selected institutions.</p>
        </div>
      </div>

      <div className="space-y-16">

        {/* 1. Placements Bar Graph */}
        <div className="bg-[#f4f1ea] border-4 border-[#111] p-8 btn-brutal">
          <h2 className="text-2xl font-black uppercase tracking-widest text-[#111] mb-2">Sector Placements</h2>
          <p className="font-serif italic text-[#111]/70 mb-8">Percentage of students placed in IT, Core, and Finance sectors.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {selected.map((c, i) => (
              <div key={c.id}>
                <h3 className="text-xl font-black uppercase text-[#111] mb-6 flex items-center gap-2">
                  <div className="w-4 h-4 border-2 border-[#111]" style={{ backgroundColor: colors[i % colors.length] }}></div>
                  {c.name}
                </h3>
                
                <div className="flex flex-col gap-6">
                  {/* IT Bar */}
                  <div>
                    <div className="flex justify-between mb-1 font-bold uppercase tracking-widest text-xs">
                      <span>IT Sector</span>
                      <span>{c.placementSectors.it}%</span>
                    </div>
                    <div className="w-full h-8 border-2 border-[#111] bg-[#111]/5 relative overflow-hidden">
                      <div 
                        className="absolute top-0 left-0 h-full border-r-2 border-[#111] transition-all duration-1000"
                        style={{ width: `${c.placementSectors.it}%`, backgroundColor: colors[i % colors.length] }}
                      ></div>
                    </div>
                  </div>
                  
                  {/* Core Bar */}
                  <div>
                    <div className="flex justify-between mb-1 font-bold uppercase tracking-widest text-xs">
                      <span>Core Engineering</span>
                      <span>{c.placementSectors.core}%</span>
                    </div>
                    <div className="w-full h-8 border-2 border-[#111] bg-[#111]/5 relative overflow-hidden">
                      <div 
                        className="absolute top-0 left-0 h-full border-r-2 border-[#111] transition-all duration-1000"
                        style={{ width: `${c.placementSectors.core}%`, backgroundColor: colors[i % colors.length] }}
                      ></div>
                    </div>
                  </div>

                  {/* Finance Bar */}
                  <div>
                    <div className="flex justify-between mb-1 font-bold uppercase tracking-widest text-xs">
                      <span>Finance/Consulting</span>
                      <span>{c.placementSectors.finance}%</span>
                    </div>
                    <div className="w-full h-8 border-2 border-[#111] bg-[#111]/5 relative overflow-hidden">
                      <div 
                        className="absolute top-0 left-0 h-full border-r-2 border-[#111] transition-all duration-1000"
                        style={{ width: `${c.placementSectors.finance}%`, backgroundColor: colors[i % colors.length] }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 2. Demographics Pie Charts */}
        <div className="bg-[#111] border-4 border-[#111] p-8 btn-brutal text-[#f4f1ea]">
          <h2 className="text-2xl font-black uppercase tracking-widest mb-2">Student Demographics</h2>
          <p className="font-serif italic text-[#f4f1ea]/70 mb-8">Gender diversity ratio across campuses.</p>

          <div className="flex flex-wrap gap-12 justify-center">
            {selected.map((c) => {
              const d = c.demographics;
              // male, female, other
              const mDeg = (d.male / 100) * 360;
              const fDeg = (d.female / 100) * 360;
              // using exact conic gradient
              const gradient = `conic-gradient(#1e90ff 0deg ${mDeg}deg, #ff4500 ${mDeg}deg ${mDeg + fDeg}deg, #ffd700 ${mDeg + fDeg}deg 360deg)`;

              return (
                <div key={c.id} className="flex flex-col items-center">
                  <div 
                    className="w-48 h-48 rounded-full border-4 border-[#f4f1ea] shadow-[8px_8px_0px_0px_#f4f1ea] mb-8"
                    style={{ background: gradient }}
                  ></div>
                  <h3 className="text-xl font-black uppercase mb-4 text-center max-w-[200px]">{c.name}</h3>
                  <div className="flex flex-col gap-2 w-full text-sm font-bold uppercase tracking-widest">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-[#1e90ff]"></div>
                      <span>Male ({d.male}%)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-[#ff4500]"></div>
                      <span>Female ({d.female}%)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-[#ffd700]"></div>
                      <span>Other ({d.other}%)</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* 3. Campus Facilities (Mini bars) */}
        <div className="bg-[#f4f1ea] border-4 border-[#111] p-8 btn-brutal">
          <h2 className="text-2xl font-black uppercase tracking-widest text-[#111] mb-2">Campus Facilities</h2>
          <p className="font-serif italic text-[#111]/70 mb-8">Ratings out of 10 for key infrastructure metrics.</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {selected.map((c, i) => (
              <div key={c.id}>
                <h3 className="text-xl font-black uppercase text-[#111] mb-6 flex items-center gap-2">
                  <div className="w-4 h-4 border-2 border-[#111]" style={{ backgroundColor: colors[i % colors.length] }}></div>
                  {c.name}
                </h3>
                
                <div className="flex flex-col gap-6">
                  {/* Labs */}
                  <div>
                    <div className="flex justify-between mb-1 font-bold uppercase tracking-widest text-xs">
                      <span>Research Labs</span>
                      <span>{c.facilities.labs} / 10</span>
                    </div>
                    <div className="w-full h-4 border-2 border-[#111] bg-[#111]/5 relative overflow-hidden">
                      <div className="absolute top-0 left-0 h-full border-r-2 border-[#111]" style={{ width: `${(c.facilities.labs / 10) * 100}%`, backgroundColor: colors[i % colors.length] }}></div>
                    </div>
                  </div>
                  
                  {/* Sports */}
                  <div>
                    <div className="flex justify-between mb-1 font-bold uppercase tracking-widest text-xs">
                      <span>Sports Complexes</span>
                      <span>{c.facilities.sports} / 10</span>
                    </div>
                    <div className="w-full h-4 border-2 border-[#111] bg-[#111]/5 relative overflow-hidden">
                      <div className="absolute top-0 left-0 h-full border-r-2 border-[#111]" style={{ width: `${(c.facilities.sports / 10) * 100}%`, backgroundColor: colors[i % colors.length] }}></div>
                    </div>
                  </div>

                  {/* Library */}
                  <div>
                    <div className="flex justify-between mb-1 font-bold uppercase tracking-widest text-xs">
                      <span>Libraries</span>
                      <span>{c.facilities.library} / 10</span>
                    </div>
                    <div className="w-full h-4 border-2 border-[#111] bg-[#111]/5 relative overflow-hidden">
                      <div className="absolute top-0 left-0 h-full border-r-2 border-[#111]" style={{ width: `${(c.facilities.library / 10) * 100}%`, backgroundColor: colors[i % colors.length] }}></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 4. Metrics Grid (Table style) */}
        <div className="bg-[#f4f1ea] border-4 border-[#111] btn-brutal overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[700px]">
              <thead>
                <tr>
                  <th className="sticky left-0 z-20 bg-[#f4f1ea] border-b-4 border-r-4 border-[#111] p-6 w-56">
                    <span className="text-[#111] font-black uppercase tracking-widest text-sm">Key Metrics</span>
                  </th>
                  {selected.map((c) => (
                    <th key={c.id} className="border-b-4 border-[#111] bg-[#111] text-[#f4f1ea] p-6 align-top min-w-[250px] border-r-4 last:border-r-0 border-white/20">
                      <h2 className="text-2xl font-black mb-2 uppercase">{c.name}</h2>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y-4 divide-[#111]">
                <tr className="bg-[#f4f1ea] hover:bg-[#e8e4d9] transition-colors">
                  <td className="sticky left-0 z-10 bg-inherit border-r-4 border-[#111] p-6 font-black uppercase tracking-widest text-sm text-[#111]">
                    Location
                  </td>
                  {selected.map((c) => (
                    <td key={c.id} className="p-6 text-[#111] border-r-4 border-[#111] last:border-r-0 font-serif italic text-xl">
                      {c.location}
                    </td>
                  ))}
                </tr>

                <tr className="bg-[#f4f1ea] hover:bg-[#e8e4d9] transition-colors">
                  <td className="sticky left-0 z-10 bg-inherit border-r-4 border-[#111] p-6 font-black uppercase tracking-widest text-sm text-[#111]">
                    Annual Fees
                  </td>
                  {selected.map((c) => {
                    const isBest = c.fees === minFees;
                    return (
                      <td key={c.id} className="p-6 text-[#111] border-r-4 border-[#111] last:border-r-0">
                        <div className="flex flex-col items-start gap-2">
                          <span className={`font-serif italic text-xl ${isBest ? "font-bold text-[#111]" : ""}`}>
                            ₹{c.fees.toLocaleString("en-IN")}
                          </span>
                          {isBest && <span className="bg-[#111] text-[#f4f1ea] text-[10px] font-black uppercase tracking-widest px-2 py-1 border border-[#111]">Top Pick</span>}
                        </div>
                      </td>
                    );
                  })}
                </tr>

                <tr className="bg-[#f4f1ea] hover:bg-[#e8e4d9] transition-colors">
                  <td className="sticky left-0 z-10 bg-inherit border-r-4 border-[#111] p-6 font-black uppercase tracking-widest text-sm text-[#111]">
                    Student Rating
                  </td>
                  {selected.map((c) => {
                    const isBest = c.rating === maxRating;
                    return (
                      <td key={c.id} className="p-6 text-[#111] border-r-4 border-[#111] last:border-r-0">
                        <div className="flex flex-col items-start gap-2">
                          <span className={`font-serif italic text-xl ${isBest ? "font-bold text-[#111]" : ""}`}>
                            {c.rating} / 5.0
                          </span>
                          {isBest && <span className="bg-[#111] text-[#f4f1ea] text-[10px] font-black uppercase tracking-widest px-2 py-1 border border-[#111]">Highest Rated</span>}
                        </div>
                      </td>
                    );
                  })}
                </tr>

                <tr className="bg-[#f4f1ea] hover:bg-[#e8e4d9] transition-colors">
                  <td className="sticky left-0 z-10 bg-inherit border-r-4 border-[#111] p-6 font-black uppercase tracking-widest text-sm text-[#111]">
                    Campus Size
                  </td>
                  {selected.map((c) => {
                    const isBest = c.campusSize === maxCampusSize;
                    return (
                      <td key={c.id} className="p-6 text-[#111] border-r-4 border-[#111] last:border-r-0">
                        <div className="flex flex-col items-start gap-2">
                          <span className={`font-serif italic text-xl ${isBest ? "font-bold text-[#111]" : ""}`}>
                            {c.campusSize} Acres
                          </span>
                          {isBest && <span className="bg-[#111] text-[#f4f1ea] text-[10px] font-black uppercase tracking-widest px-2 py-1 border border-[#111]">Largest Campus</span>}
                        </div>
                      </td>
                    );
                  })}
                </tr>

                <tr className="bg-[#f4f1ea] hover:bg-[#e8e4d9] transition-colors">
                  <td className="sticky left-0 z-10 bg-inherit border-r-4 border-[#111] p-6 font-black uppercase tracking-widest text-sm text-[#111]">
                    Average Package
                  </td>
                  {selected.map((c) => {
                    const isBest = c.averagePackage === maxAveragePackage;
                    return (
                      <td key={c.id} className="p-6 text-[#111] border-r-4 border-[#111] last:border-r-0">
                        <div className="flex flex-col items-start gap-2">
                          <span className={`font-serif italic text-xl ${isBest ? "font-bold text-[#111]" : ""}`}>
                            {c.averagePackage} LPA
                          </span>
                          {isBest && <span className="bg-[#111] text-[#f4f1ea] text-[10px] font-black uppercase tracking-widest px-2 py-1 border border-[#111]">Highest Average</span>}
                        </div>
                      </td>
                    );
                  })}
                </tr>

                <tr className="bg-[#f4f1ea] hover:bg-[#e8e4d9] transition-colors">
                  <td className="sticky left-0 z-10 bg-inherit border-r-4 border-[#111] p-6 font-black uppercase tracking-widest text-sm text-[#111]">
                    Highest Package
                  </td>
                  {selected.map((c) => {
                    const isBest = c.highestPackage === maxHighestPackage;
                    return (
                      <td key={c.id} className="p-6 text-[#111] border-r-4 border-[#111] last:border-r-0">
                        <div className="flex flex-col items-start gap-2">
                          <span className={`font-serif italic text-xl ${isBest ? "font-bold text-[#111]" : ""}`}>
                            {c.highestPackage} LPA
                          </span>
                          {isBest && <span className="bg-[#111] text-[#f4f1ea] text-[10px] font-black uppercase tracking-widest px-2 py-1 border border-[#111]">Peak Offer</span>}
                        </div>
                      </td>
                    );
                  })}
                </tr>

                <tr className="bg-[#f4f1ea] hover:bg-[#e8e4d9] transition-colors">
                  <td className="sticky left-0 z-10 bg-inherit border-r-4 border-[#111] p-6 font-black uppercase tracking-widest text-sm text-[#111]">
                    Top Recruiters
                  </td>
                  {selected.map((c) => (
                    <td key={c.id} className="p-6 text-[#111] border-r-4 border-[#111] last:border-r-0">
                      <div className="flex flex-wrap gap-2">
                        {c.topRecruiters.map(tr => (
                          <span key={tr} className="border border-[#111]/30 bg-[#111]/5 px-2 py-1 text-xs font-bold uppercase tracking-widest text-[#111]">
                            {tr}
                          </span>
                        ))}
                      </div>
                    </td>
                  ))}
                </tr>

              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  );
}

export default function ComparePage() {
  return (
    <main className="flex-1 w-full max-w-7xl mx-auto px-6 py-20 relative z-20">
      <Suspense fallback={
        <div className="flex flex-col justify-center items-center py-32">
          <div className="w-16 h-16 border-4 border-[#111] mx-auto loader-square mb-6"></div>
          <p className="font-bold uppercase tracking-widest">Loading Analytics...</p>
        </div>
      }>
        <CompareContent />
      </Suspense>
    </main>
  );
}