"use client";
import { useState, useMemo } from "react";
import { colleges } from "@/data/colleges";
import Link from "next/link";

type SortKey = "name" | "location" | "averagePackage" | "highestPackage" | "fees";

export default function SalariesPage() {
  const [search, setSearch] = useState("");
  const [sortKey, setSortKey] = useState<SortKey>("averagePackage");
  const [sortDesc, setSortDesc] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const ITEMS_PER_PAGE = 10;

  // Filter & Sort
  const filteredAndSorted = useMemo(() => {
    let result = colleges.filter((c) =>
      c.name.toLowerCase().includes(search.toLowerCase()) || 
      c.location.toLowerCase().includes(search.toLowerCase())
    );

    result.sort((a, b) => {
      let aVal = a[sortKey];
      let bVal = b[sortKey];
      
      if (typeof aVal === "string" && typeof bVal === "string") {
        return sortDesc ? bVal.localeCompare(aVal) : aVal.localeCompare(bVal);
      } else if (typeof aVal === "number" && typeof bVal === "number") {
        return sortDesc ? bVal - aVal : aVal - bVal;
      }
      return 0;
    });

    return result;
  }, [search, sortKey, sortDesc]);

  // Pagination
  const totalPages = Math.ceil(filteredAndSorted.length / ITEMS_PER_PAGE);
  const paginatedData = filteredAndSorted.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const handleSort = (key: SortKey) => {
    if (sortKey === key) {
      setSortDesc(!sortDesc);
    } else {
      setSortKey(key);
      setSortDesc(true);
    }
    setCurrentPage(1);
  };

  const SortIcon = ({ columnKey }: { columnKey: SortKey }) => {
    if (sortKey !== columnKey) return <span className="opacity-20 ml-2">↕</span>;
    return <span className="ml-2">{sortDesc ? "↓" : "↑"}</span>;
  };

  return (
    <main className="flex-1 w-full max-w-7xl mx-auto px-6 py-20 relative z-20">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 border-b-4 border-[#111] pb-6">
        <div>
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter uppercase text-[#111]">Compensation</h1>
          <p className="font-serif italic text-xl text-[#111]/70 mt-2">Searchable salary database across {colleges.length} institutions.</p>
        </div>
      </div>

      {/* Search Input */}
      <div className="relative w-full max-w-2xl group mb-12">
        <div className="absolute inset-y-0 left-0 flex items-center pl-5 pointer-events-none">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="square" strokeLinejoin="miter" className="text-[#111]">
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
        </div>
        <input
          className="w-full bg-[#f4f1ea] text-[#111] py-5 pl-14 pr-6 border-4 border-[#111] focus:outline-none placeholder:text-[#111]/50 font-bold text-lg transition-transform duration-300 focus:-translate-y-1 focus:shadow-[8px_8px_0px_0px_#111]"
          placeholder="SEARCH INSTITUTIONS OR LOCATIONS..."
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setCurrentPage(1);
          }}
        />
      </div>

      {/* Data Table */}
      <div className="bg-[#f4f1ea] border-4 border-[#111] btn-brutal overflow-hidden mb-8">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[900px]">
            <thead>
              <tr className="bg-[#111] text-[#f4f1ea]">
                <th className="p-4 border-b-4 border-r-4 border-[#111] cursor-pointer hover:bg-black transition-colors" onClick={() => handleSort("name")}>
                  <span className="font-black uppercase tracking-widest text-sm flex items-center">Institution <SortIcon columnKey="name" /></span>
                </th>
                <th className="p-4 border-b-4 border-r-4 border-[#111] cursor-pointer hover:bg-black transition-colors" onClick={() => handleSort("location")}>
                  <span className="font-black uppercase tracking-widest text-sm flex items-center">Location <SortIcon columnKey="location" /></span>
                </th>
                <th className="p-4 border-b-4 border-r-4 border-[#111] cursor-pointer hover:bg-black transition-colors" onClick={() => handleSort("averagePackage")}>
                  <span className="font-black uppercase tracking-widest text-sm flex items-center">Avg Package <SortIcon columnKey="averagePackage" /></span>
                </th>
                <th className="p-4 border-b-4 border-r-4 border-[#111] cursor-pointer hover:bg-black transition-colors" onClick={() => handleSort("highestPackage")}>
                  <span className="font-black uppercase tracking-widest text-sm flex items-center">Top Package <SortIcon columnKey="highestPackage" /></span>
                </th>
                <th className="p-4 border-b-4 border-[#111]">
                  <span className="font-black uppercase tracking-widest text-sm">Top Roles Profile</span>
                </th>
              </tr>
            </thead>
            <tbody className="divide-y-4 divide-[#111]">
              {paginatedData.length === 0 ? (
                <tr>
                  <td colSpan={5} className="p-12 text-center text-[#111] font-bold uppercase tracking-widest">
                    No results found.
                  </td>
                </tr>
              ) : (
                paginatedData.map((c) => (
                  <tr key={c.id} className="bg-[#f4f1ea] hover:bg-[#e8e4d9] transition-colors group">
                    <td className="p-4 border-r-4 border-[#111]">
                      <Link href={`/college/${c.id}`} className="font-black text-[#111] uppercase hover:underline decoration-2 underline-offset-4">
                        {c.name}
                      </Link>
                    </td>
                    <td className="p-4 border-r-4 border-[#111] font-serif italic text-[#111]">
                      {c.location}
                    </td>
                    <td className="p-4 border-r-4 border-[#111] font-black text-xl text-[#111]">
                      {c.averagePackage} LPA
                    </td>
                    <td className="p-4 border-r-4 border-[#111] font-black text-xl text-[#111]">
                      {c.highestPackage} LPA
                    </td>
                    <td className="p-4 text-[#111]">
                      <div className="flex flex-col gap-1">
                        {c.topRoles.map(tr => (
                          <div key={tr.role} className="flex justify-between items-center text-xs font-bold uppercase tracking-widest">
                            <span>{tr.role}</span>
                            <span className="bg-[#111]/10 px-1 py-0.5">{tr.salary} LPA</span>
                          </div>
                        ))}
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <div className="flex justify-between items-center bg-[#f4f1ea] border-4 border-[#111] p-4 btn-brutal">
          <button 
            disabled={currentPage === 1}
            onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
            className="px-6 py-2 font-black uppercase text-[#111] border-2 border-[#111] disabled:opacity-30 hover:bg-[#111] hover:text-[#f4f1ea] transition-colors btn-glitch"
          >
            Previous
          </button>
          <span className="font-bold uppercase tracking-widest text-[#111]">
            Page {currentPage} of {totalPages}
          </span>
          <button 
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
            className="px-6 py-2 font-black uppercase text-[#111] border-2 border-[#111] disabled:opacity-30 hover:bg-[#111] hover:text-[#f4f1ea] transition-colors btn-glitch"
          >
            Next
          </button>
        </div>
      )}

    </main>
  );
}
