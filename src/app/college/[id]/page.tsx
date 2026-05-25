"use client";
import { useState, use } from "react";
import { colleges } from "@/data/colleges";
import { notFound } from "next/navigation";
import Link from "next/link";

const StarIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="square" strokeLinejoin="miter">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
  </svg>
);

const WalletIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="square" strokeLinejoin="miter">
    <path d="M21 12V7H5a2 2 0 0 1 0-4h14v4"></path>
    <path d="M3 5v14a2 2 0 0 0 2 2h16v-5"></path>
    <path d="M18 12a2 2 0 0 0 0 4h4v-4Z"></path>
  </svg>
);

const BriefcaseIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="square" strokeLinejoin="miter">
    <rect x="2" y="7" width="20" height="14"></rect>
    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
  </svg>
);

export default function CollegePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const college = colleges.find((c) => c.id === id);
  const [activeTab, setActiveTab] = useState("Overview");

  if (!college) return notFound();

  const tabs = ["Overview", "Courses", "Placements", "Reviews"];

  return (
    <main className="flex-1 w-full flex flex-col pb-32">
      {/* Editorial Header */}
      <div className="w-full bg-[#f4f1ea] border-b-4 border-[#111] py-20 px-6 relative overflow-hidden">
        {/* Background Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#11111115_1px,transparent_1px),linear-gradient(to_bottom,#11111115_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
        
        <div className="relative z-10 max-w-5xl mx-auto w-full">
          <Link href="/" className="inline-flex items-center text-[#111] font-bold uppercase tracking-widest text-xs mb-10 hover:underline decoration-2 underline-offset-4">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="square" strokeLinejoin="miter" className="mr-2">
              <line x1="19" y1="12" x2="5" y2="12"></line>
              <polyline points="12 19 5 12 12 5"></polyline>
            </svg>
            BACK TO DIRECTORY
          </Link>
          <h1 className="text-5xl md:text-7xl font-black text-[#111] mb-4 uppercase tracking-tighter leading-none">{college.name}</h1>
          <div className="flex items-center gap-4">
            <span className="bg-[#111] text-[#f4f1ea] px-3 py-1 font-bold tracking-widest uppercase text-sm border-2 border-[#111]">
              {college.location}
            </span>
            <span className="text-[#111] font-serif italic text-xl">
              Established Excellence
            </span>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto w-full px-6 -mt-8 relative z-20">
        {/* Stats Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="bg-[#f4f1ea] border-4 border-[#111] p-6 btn-brutal flex flex-col">
            <div className="mb-4">
              <WalletIcon />
            </div>
            <p className="text-xs text-[#111]/70 font-bold tracking-widest uppercase mb-1">Annual Fees</p>
            <p className="text-3xl font-black text-[#111]">₹{college.fees.toLocaleString("en-IN")}</p>
          </div>
          
          <div className="bg-[#111] text-[#f4f1ea] border-4 border-[#111] p-6 btn-brutal flex flex-col">
            <div className="mb-4 text-[#f4f1ea]">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="none">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
              </svg>
            </div>
            <p className="text-xs text-[#f4f1ea]/70 font-bold tracking-widest uppercase mb-1">Student Rating</p>
            <p className="text-3xl font-black">{college.rating} <span className="text-lg font-normal">/ 5.0</span></p>
          </div>

          <div className="bg-[#f4f1ea] border-4 border-[#111] p-6 btn-brutal flex flex-col">
            <div className="mb-4">
              <BriefcaseIcon />
            </div>
            <p className="text-xs text-[#111]/70 font-bold tracking-widest uppercase mb-1">Placements Avg</p>
            <p className="text-3xl font-black text-[#111]">{college.placements.split("|")[0].replace("Avg package: ", "")}</p>
          </div>
        </div>

        {/* Minimalist Tabs */}
        <div className="border-b-4 border-[#111] mb-12 flex overflow-x-auto scrollbar-hide">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-4 px-8 text-lg font-black uppercase tracking-widest transition-colors whitespace-nowrap relative ${
                activeTab === tab ? "text-[#111]" : "text-[#111]/40 hover:text-[#111]/70"
              }`}
            >
              {tab}
              {activeTab === tab && (
                <div className="absolute -bottom-1 left-0 right-0 h-1 bg-[#111]"></div>
              )}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="min-h-[300px]">
          {activeTab === "Overview" && (
            <div className="animate-fade-in grid md:grid-cols-3 gap-10">
              <div className="md:col-span-2">
                <h2 className="text-3xl font-black uppercase mb-6 text-[#111]">About {college.name}</h2>
                <p className="text-[#111] leading-relaxed text-lg font-serif">
                  Located in the heart of <span className="font-bold">{college.location}</span>, {college.name} stands as a beacon of academic rigor. 
                  Renowned for its uncompromising standards and celebrated faculty, the institution has cultivated a legacy of excellence. 
                  The students collectively rate the experience a stellar <span className="font-bold">{college.rating} out of 5</span>, a testament to its enduring impact on careers and character.
                </p>
              </div>
              <div className="bg-[#f4f1ea] p-6 border-4 border-[#111] btn-brutal h-fit">
                <h3 className="font-black uppercase text-xl mb-4 border-b-2 border-[#111] pb-2">Quick Facts</h3>
                <ul className="space-y-4 text-[#111] font-bold uppercase tracking-wide text-sm">
                  <li className="flex justify-between items-center">
                    <span className="text-[#111]/60">Location</span> <span>{college.location}</span>
                  </li>
                  <li className="flex justify-between items-center">
                    <span className="text-[#111]/60">Fees</span> <span>₹{college.fees.toLocaleString("en-IN")}</span>
                  </li>
                  <li className="flex justify-between items-center">
                    <span className="text-[#111]/60">Top Offer</span> <span>{college.placements.split("|")[1]?.replace("Top: ", "") || "N/A"}</span>
                  </li>
                </ul>
              </div>
            </div>
          )}

          {activeTab === "Courses" && (
            <div className="animate-fade-in">
              <h2 className="text-3xl font-black uppercase mb-8 text-[#111]">Programs Offered</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {college.courses.map((course) => (
                  <div key={course} className="bg-[#f4f1ea] border-4 border-[#111] p-6 flex items-center gap-6 btn-brutal group">
                    <div className="w-12 h-12 bg-[#111] text-[#f4f1ea] flex items-center justify-center rounded-full group-hover:scale-110 transition-transform">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="square" strokeLinejoin="miter">
                        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-black text-xl text-[#111] uppercase">{course}</h3>
                      <p className="text-xs font-bold tracking-widest text-[#111]/60 uppercase mt-1">Full-time Program</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === "Placements" && (
            <div className="animate-fade-in">
              <h2 className="text-3xl font-black uppercase mb-8 text-[#111]">Placement Statistics</h2>
              <div className="bg-[#111] border-4 border-[#111] text-[#f4f1ea] p-12 text-center btn-brutal relative overflow-hidden">
                {/* Abstract shape */}
                <div className="absolute -right-20 -top-20 w-64 h-64 border-[20px] border-[#f4f1ea]/10 rounded-full loader-square"></div>
                <p className="text-[#f4f1ea]/60 font-bold tracking-widest uppercase mb-4 relative z-10">Overall Highlights</p>
                <p className="text-4xl md:text-5xl font-black mb-4 relative z-10">{college.placements}</p>
                <p className="font-serif italic text-xl relative z-10">Latest Recruitment Drive</p>
              </div>
            </div>
          )}

          {activeTab === "Reviews" && (
            <div className="animate-fade-in">
              <h2 className="text-3xl font-black uppercase mb-8 text-[#111]">Student Reviews</h2>
              <div className="grid gap-6 md:grid-cols-2">
                {college.reviews.map((r, i) => (
                  <div key={i} className="bg-[#f4f1ea] border-4 border-[#111] p-8 btn-brutal relative">
                    <div className="absolute top-0 right-8 w-8 h-12 bg-[#111]"></div>
                    <div className="flex justify-between items-start mb-6">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 border-2 border-[#111] bg-[#f4f1ea] flex items-center justify-center text-[#111] font-black text-xl">
                          {r.user.charAt(0)}
                        </div>
                        <div>
                          <p className="font-black text-[#111] uppercase text-lg">{r.user}</p>
                          <p className="text-xs font-bold tracking-widest text-[#111]/60 uppercase">Verified</p>
                        </div>
                      </div>
                    </div>
                    <p className="font-serif italic text-[#111] text-xl leading-relaxed mb-6">"{r.text}"</p>
                    <div className="flex items-center gap-1 text-[#111]">
                      {[...Array(5)].map((_, idx) => (
                        <div key={idx} className={idx < r.rating ? "text-[#111]" : "text-[#111]/20"}>
                          <StarIcon />
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}