"use client";
import { useState } from "react";
import { colleges } from "@/data/colleges";
import Link from "next/link";

const SearchIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="square" strokeLinejoin="miter" className="text-[#111]">
    <circle cx="11" cy="11" r="8"></circle>
    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
  </svg>
);

const PinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square" strokeLinejoin="miter" className="text-[#111]">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
    <circle cx="12" cy="10" r="3"></circle>
  </svg>
);

const StarIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" stroke="none">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
  </svg>
);

export default function Home() {
  const [search, setSearch] = useState("");
  const [locationFilters, setLocationFilters] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState<"rating" | "highestPackage" | "fees" | "">("");
  const [compareList, setCompareList] = useState<string[]>([]);

  let filtered = colleges.filter((c) => {
    const s = search.toLowerCase().trim();
    const matchesSearch =
      s === "" ||
      c.name.toLowerCase().includes(s) ||
      c.location.toLowerCase().includes(s) ||
      c.courses.some((course) => course.toLowerCase().includes(s));
    
    const matchesLocation = locationFilters.length === 0 || locationFilters.includes(c.location);
    
    return matchesSearch && matchesLocation;
  });

  // Apply sorting
  if (sortBy === "rating") filtered.sort((a, b) => b.rating - a.rating);
  else if (sortBy === "highestPackage") filtered.sort((a, b) => b.highestPackage - a.highestPackage);
  else if (sortBy === "fees") filtered.sort((a, b) => a.fees - b.fees);

  const toggleCompare = (id: string) => {
    setCompareList((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : prev.length < 3 ? [...prev, id] : prev
    );
  };

  const toggleLocation = (loc: string) => {
    setLocationFilters((prev) =>
      prev.includes(loc) ? prev.filter((l) => l !== loc) : [...prev, loc]
    );
  };

  const locations = [...new Set(colleges.map((c) => c.location))];

  return (
    <main className="flex-1 w-full flex flex-col">
      {/* Hero Section */}
      <section className="w-full flex flex-col items-center justify-center pt-32 pb-20 px-6 text-center">
        <h1 className="text-5xl md:text-8xl font-black tracking-tighter text-[#111] mb-6 uppercase">
          Find Your <br/> <span className="italic font-serif font-medium">Institution.</span>
        </h1>
        <p className="text-lg md:text-xl text-[#111] max-w-2xl mb-16 font-medium">
          SCOUT is a highly curated directory of the best educational experiences in India.
        </p>

        {/* Search Bar */}
        <div className="relative w-full max-w-2xl group mb-12">
          <div className="absolute inset-y-0 left-0 flex items-center pl-5 pointer-events-none">
            <SearchIcon />
          </div>
          <input
            className="w-full bg-[#f4f1ea] text-[#111] py-5 pl-14 pr-6 border-4 border-[#111] focus:outline-none placeholder:text-[#111]/50 font-bold text-lg transition-transform duration-300 focus:-translate-y-1 focus:shadow-[8px_8px_0px_0px_#111]"
            placeholder="SEARCH COLLEGES..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </section>

      {/* Filters Section */}
      <section className="max-w-7xl mx-auto w-full px-6 mb-12">
        <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-8 border-b-4 border-[#111] pb-6">
          <div>
            <h2 className="text-sm font-black uppercase tracking-widest text-[#111] mb-4">Location Filters</h2>
            <div className="flex flex-wrap gap-4">
              {locations.map((loc) => (
                <button
                  key={loc}
                  onClick={() => toggleLocation(loc)}
                  className={`px-6 py-2 font-black uppercase tracking-widest border-2 border-[#111] transition-all
                  ${
                    locationFilters.includes(loc)
                      ? "bg-[#111] text-[#f4f1ea] shadow-[4px_4px_0px_0px_#111] translate-x-[-2px] translate-y-[-2px]"
                      : "bg-[#f4f1ea] text-[#111] hover:bg-[#111] hover:text-[#f4f1ea] hover:shadow-[4px_4px_0px_0px_#111] hover:translate-x-[-2px] hover:translate-y-[-2px]"
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <span className={`w-3 h-3 border-2 border-current rounded-full ${locationFilters.includes(loc) ? "bg-current" : ""}`}></span>
                    {loc}
                  </span>
                </button>
              ))}
            </div>
          </div>
          
          {/* Sort By Dropdown */}
          <div className="w-full md:w-auto">
             <h2 className="text-sm font-black uppercase tracking-widest text-[#111] mb-4">Sort Results</h2>
             <select 
               className="w-full md:w-64 bg-[#f4f1ea] text-[#111] font-bold uppercase tracking-widest border-4 border-[#111] p-3 focus:outline-none focus:shadow-[4px_4px_0px_0px_#111] transition-shadow cursor-pointer appearance-none"
               value={sortBy}
               onChange={(e) => setSortBy(e.target.value as any)}
               style={{ backgroundImage: `url("data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%23111%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22square%22%20stroke-linejoin%3D%22miter%22%3E%3Cpolyline%20points%3D%226%209%2012%2015%2018%209%22%3E%3C%2Fpolyline%3E%3C%2Fsvg%3E")`, backgroundRepeat: "no-repeat", backgroundPosition: "right 10px center" }}
             >
               <option value="">Default Sorting</option>
               <option value="highestPackage">Highest Package</option>
               <option value="rating">Highest Rating</option>
               <option value="fees">Lowest Fees</option>
             </select>
          </div>
        </div>
      </section>

      {/* Compare Floating Bar (if items selected) */}
      {compareList.length > 0 && (
        <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 bg-[#111] p-4 border-4 border-[#f4f1ea] shadow-[8px_8px_0px_0px_#111] flex items-center gap-6 animate-fade-in-up">
          <span className="text-[#f4f1ea] font-bold tracking-wide">
            {compareList.length} SELECTED
          </span>
          {compareList.length >= 2 ? (
            <Link
              href={`/compare?ids=${compareList.join(",")}`}
              className="bg-[#f4f1ea] text-[#111] px-6 py-2 font-black uppercase hover:bg-white transition-colors border-2 border-transparent btn-glitch"
            >
              Compare
            </Link>
          ) : (
            <span className="text-[#f4f1ea]/50 text-sm font-bold uppercase tracking-widest">
              Need 1 more
            </span>
          )}
        </div>
      )}

      {/* College Grid */}
      <section className="max-w-7xl mx-auto w-full px-6 pb-32">
        {locationFilters.length === 0 && search === "" ? (
          <div className="text-center py-24 text-[#111] border-4 border-[#111] bg-[#f4f1ea] btn-brutal relative overflow-hidden group max-w-4xl mx-auto">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#11111115_1px,transparent_1px),linear-gradient(to_bottom,#11111115_1px,transparent_1px)] bg-[size:2rem_2rem] opacity-50 group-hover:opacity-100 transition-opacity"></div>
            <div className="relative z-10">
              <div className="w-16 h-16 bg-[#111] text-[#f4f1ea] rounded-full mx-auto flex items-center justify-center mb-6 shadow-[4px_4px_0px_0px_rgba(17,17,17,0.3)]">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="square" strokeLinejoin="miter">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
              </div>
              <p className="text-3xl font-black uppercase tracking-widest mb-2">Awaiting Region or Search</p>
              <p className="font-serif italic text-xl opacity-80">Select a region from the filters or enter a search query to unlock the directory.</p>
            </div>
          </div>
        ) : filtered.length === 0 ? (
          <div className="text-center py-20 text-[#111]">
            <div className="w-16 h-16 border-4 border-[#111] mx-auto loader-square mb-6"></div>
            <p className="text-2xl font-bold uppercase tracking-widest">No results found.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((college) => (
              <div
                key={college.id}
                className="group flex flex-col bg-[#f4f1ea] border-4 border-[#111] p-6 btn-brutal relative"
              >
                {/* Decorative Pin */}
                <div className="absolute -top-3 -right-3 w-6 h-6 bg-[#111] rounded-full border-2 border-[#f4f1ea]"></div>

                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h2 className="text-2xl font-black text-[#111] mb-2 uppercase leading-tight">
                      {college.name}
                    </h2>
                    <div className="flex items-center text-[#111]/70 font-bold text-sm gap-1.5 uppercase tracking-widest">
                      <PinIcon />
                      <span>{college.location}</span>
                    </div>
                  </div>
                </div>

                <div className="mt-auto pt-6 border-t-4 border-[#111] space-y-4">
                  <div className="flex justify-between items-center">
                    <p className="font-bold text-[#111] text-lg">
                      ₹{college.fees.toLocaleString("en-IN")}<span className="text-sm">/YR</span>
                    </p>
                    <div className="flex items-center gap-1 bg-[#111] text-[#f4f1ea] px-3 py-1 font-bold">
                      <StarIcon />
                      {college.rating}
                    </div>
                  </div>

                  <div className="flex gap-3 pt-2">
                    <Link
                      href={`/college/${college.id}`}
                      className="flex-1 text-center bg-[#111] text-[#f4f1ea] px-4 py-3 font-bold uppercase hover:bg-black transition-colors btn-glitch"
                    >
                      Details
                    </Link>
                    <button
                      onClick={() => toggleCompare(college.id)}
                      className={`flex-1 text-center px-4 py-3 font-bold uppercase border-2 border-[#111] transition-colors btn-glitch ${
                        compareList.includes(college.id)
                          ? "bg-[#111] text-[#f4f1ea]"
                          : "bg-transparent text-[#111] hover:bg-[#e8e4d9]"
                      }`}
                    >
                      {compareList.includes(college.id) ? "Added" : "Compare"}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}