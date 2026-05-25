"use client";
import { colleges } from "@/data/colleges";
import Link from "next/link";
import { useState } from "react";

const StarIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" stroke="none">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
  </svg>
);

export default function RankingsPage() {
  const [filter, setFilter] = useState<"rating" | "fees">("rating");

  // Sort by rating desc, or by fees asc
  const sortedColleges = [...colleges].sort((a, b) => {
    if (filter === "rating") return b.rating - a.rating;
    if (filter === "fees") return a.fees - b.fees;
    return 0;
  });

  return (
    <main className="flex-1 w-full max-w-5xl mx-auto px-6 py-20 relative z-20">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 border-b-4 border-[#111] pb-6">
        <div>
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter uppercase text-[#111]">Rankings.</h1>
          <p className="font-serif italic text-xl text-[#111]/70 mt-2">The definitive list of top institutions.</p>
        </div>
        <div className="flex gap-4">
          <button 
            onClick={() => setFilter("rating")}
            className={`px-4 py-2 font-black uppercase text-sm border-2 border-[#111] transition-colors btn-glitch ${filter === "rating" ? "bg-[#111] text-[#f4f1ea]" : "bg-transparent text-[#111] hover:bg-[#e8e4d9]"}`}
          >
            By Rating
          </button>
          <button 
            onClick={() => setFilter("fees")}
            className={`px-4 py-2 font-black uppercase text-sm border-2 border-[#111] transition-colors btn-glitch ${filter === "fees" ? "bg-[#111] text-[#f4f1ea]" : "bg-transparent text-[#111] hover:bg-[#e8e4d9]"}`}
          >
            By Fees (Low to High)
          </button>
        </div>
      </div>

      <div className="space-y-6">
        {sortedColleges.map((college, index) => (
          <div key={college.id} className="bg-[#f4f1ea] border-4 border-[#111] p-6 btn-brutal flex flex-col md:flex-row items-center gap-6 group">
            <div className="text-4xl md:text-6xl font-black text-[#111] w-20 md:w-32 shrink-0 text-center opacity-30 group-hover:opacity-100 transition-opacity">
              #{index + 1}
            </div>
            <div className="flex-1 w-full border-l-4 border-[#111] pl-6 py-2">
              <h2 className="text-2xl font-black text-[#111] uppercase leading-tight mb-2">
                {college.name}
              </h2>
              <p className="text-[#111]/70 font-bold uppercase tracking-widest text-sm mb-4">
                {college.location}
              </p>
              <div className="flex flex-wrap gap-4">
                <span className="bg-[#111] text-[#f4f1ea] px-3 py-1 font-bold text-sm flex items-center gap-1 border-2 border-[#111]">
                  <StarIcon /> {college.rating}
                </span>
                <span className="bg-[#f4f1ea] text-[#111] px-3 py-1 font-bold text-sm border-2 border-[#111]">
                  ₹{college.fees.toLocaleString("en-IN")} / YR
                </span>
              </div>
            </div>
            <div className="w-full md:w-auto">
              <Link
                href={`/college/${college.id}`}
                className="block text-center bg-[#111] text-[#f4f1ea] px-8 py-4 font-black uppercase hover:bg-black transition-colors w-full btn-glitch"
              >
                View Profile
              </Link>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
