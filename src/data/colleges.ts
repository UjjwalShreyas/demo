export type SalaryYear = {
  year: number;
  average: number;
  highest: number;
};

export type RoleSalary = {
  role: string;
  salary: number; // in LPA
};

export type College = {
  id: string;
  name: string;
  location: string;
  fees: number;
  rating: number;
  courses: string[];
  placements: string;
  highestPackage: number;
  averagePackage: number;
  campusSize: number; // in acres
  topRecruiters: string[];
  facilities: { labs: number; sports: number; library: number }; // out of 10
  reviews: { user: string; text: string; rating: number }[];
  demographics: { male: number; female: number; other: number };
  placementSectors: { it: number; core: number; finance: number };
  salaryHistory: SalaryYear[];
  topRoles: RoleSalary[];
};

const baseColleges: College[] = [
  {
    id: "1",
    name: "IIT Bombay",
    location: "Mumbai",
    fees: 200000,
    rating: 4.8,
    courses: ["B.Tech CSE", "B.Tech ECE", "MBA"],
    placements: "Avg package: 18 LPA | Top: 1.2 Cr",
    highestPackage: 120,
    averagePackage: 18,
    campusSize: 550,
    topRecruiters: ["Microsoft", "Google", "Optiver"],
    facilities: { labs: 10, sports: 9, library: 10 },
    demographics: { male: 65, female: 30, other: 5 },
    placementSectors: { it: 50, core: 30, finance: 20 },
    salaryHistory: [
      { year: 2021, average: 15, highest: 95 },
      { year: 2022, average: 16.5, highest: 105 },
      { year: 2023, average: 18, highest: 120 },
    ],
    topRoles: [
      { role: "Software Engineer", salary: 25 },
      { role: "Quantitative Trader", salary: 80 },
      { role: "Product Manager", salary: 22 },
    ],
    reviews: [
      { user: "Rahul", text: "Amazing campus and faculty.", rating: 5 },
      { user: "Priya", text: "Highly competitive, rewarding.", rating: 4 },
    ],
  },
  {
    id: "2",
    name: "BITS Pilani",
    location: "Rajasthan",
    fees: 450000,
    rating: 4.6,
    courses: ["B.Tech CSE", "B.Pharm", "MSc Physics"],
    placements: "Avg package: 14 LPA | Top: 80 LPA",
    highestPackage: 80,
    averagePackage: 14,
    campusSize: 328,
    topRecruiters: ["Amazon", "Cisco", "Oracle"],
    facilities: { labs: 9, sports: 10, library: 9 },
    demographics: { male: 70, female: 28, other: 2 },
    placementSectors: { it: 60, core: 25, finance: 15 },
    salaryHistory: [
      { year: 2021, average: 11, highest: 60 },
      { year: 2022, average: 12.5, highest: 72 },
      { year: 2023, average: 14, highest: 80 },
    ],
    topRoles: [
      { role: "Software Development Engineer", salary: 22 },
      { role: "Data Scientist", salary: 18 },
      { role: "Business Analyst", salary: 14 },
    ],
    reviews: [
      { user: "Ankit", text: "Great freedom and culture.", rating: 5 },
      { user: "Sneha", text: "Expensive but worth it.", rating: 4 },
    ],
  },
  {
    id: "3",
    name: "VIT Vellore",
    location: "Tamil Nadu",
    fees: 180000,
    rating: 4.2,
    courses: ["B.Tech CSE", "B.Tech Mech", "BCA"],
    placements: "Avg package: 7 LPA | Top: 42 LPA",
    highestPackage: 42,
    averagePackage: 7,
    campusSize: 372,
    topRecruiters: ["TCS", "Cognizant", "Wipro"],
    facilities: { labs: 8, sports: 8, library: 9 },
    demographics: { male: 55, female: 40, other: 5 },
    placementSectors: { it: 75, core: 15, finance: 10 },
    salaryHistory: [
      { year: 2021, average: 5.5, highest: 35 },
      { year: 2022, average: 6.2, highest: 39 },
      { year: 2023, average: 7, highest: 42 },
    ],
    topRoles: [
      { role: "Systems Engineer", salary: 6.5 },
      { role: "Software Developer", salary: 9 },
      { role: "Data Analyst", salary: 7.5 },
    ],
    reviews: [
      { user: "Deepa", text: "Good placements for CS students.", rating: 4 },
      { user: "Karan", text: "Infrastructure is solid.", rating: 4 },
    ],
  },
  {
    id: "4",
    name: "Manipal Institute of Technology",
    location: "Karnataka",
    fees: 250000,
    rating: 4.3,
    courses: ["B.Tech CSE", "B.Tech IT", "MBA"],
    placements: "Avg package: 8 LPA | Top: 50 LPA",
    highestPackage: 50,
    averagePackage: 8,
    campusSize: 188,
    topRecruiters: ["Microsoft", "Deloitte", "Goldman Sachs"],
    facilities: { labs: 8, sports: 9, library: 8 },
    demographics: { male: 60, female: 35, other: 5 },
    placementSectors: { it: 65, core: 20, finance: 15 },
    salaryHistory: [
      { year: 2021, average: 6.5, highest: 40 },
      { year: 2022, average: 7.2, highest: 45 },
      { year: 2023, average: 8, highest: 50 },
    ],
    topRoles: [
      { role: "Software Engineer", salary: 12 },
      { role: "Analyst", salary: 8.5 },
      { role: "Consultant", salary: 10 },
    ],
    reviews: [
      { user: "Rohan", text: "Great campus life.", rating: 4 },
      { user: "Aisha", text: "Decent placements overall.", rating: 4 },
    ],
  },
  {
    id: "5",
    name: "IIT Delhi",
    location: "Delhi",
    fees: 210000,
    rating: 4.9,
    courses: ["B.Tech CSE", "B.Tech Mathematics", "M.Tech AI"],
    placements: "Avg package: 20 LPA | Top: 1.5 Cr",
    highestPackage: 150,
    averagePackage: 20,
    campusSize: 320,
    topRecruiters: ["Jane Street", "Tower Research", "Google"],
    facilities: { labs: 10, sports: 8, library: 10 },
    demographics: { male: 68, female: 30, other: 2 },
    placementSectors: { it: 45, core: 35, finance: 20 },
    salaryHistory: [
      { year: 2021, average: 16.5, highest: 110 },
      { year: 2022, average: 18, highest: 130 },
      { year: 2023, average: 20, highest: 150 },
    ],
    topRoles: [
      { role: "Software Engineer", salary: 28 },
      { role: "Algorithmic Trader", salary: 90 },
      { role: "AI Researcher", salary: 35 },
    ],
    reviews: [
      { user: "Vikram", text: "Unmatched coding culture and peer group.", rating: 5 },
      { user: "Neha", text: "Hectic schedule but the best exposure.", rating: 5 },
    ],
  },
  {
    id: "6",
    name: "NIT Trichy",
    location: "Tamil Nadu",
    fees: 150000,
    rating: 4.5,
    courses: ["B.Tech CSE", "B.Tech EEE", "B.Arch"],
    placements: "Avg package: 12 LPA | Top: 60 LPA",
    highestPackage: 60,
    averagePackage: 12,
    campusSize: 800,
    topRecruiters: ["Amazon", "Uber", "L&T"],
    facilities: { labs: 9, sports: 8, library: 9 },
    demographics: { male: 62, female: 35, other: 3 },
    placementSectors: { it: 55, core: 40, finance: 5 },
    salaryHistory: [
      { year: 2021, average: 9.5, highest: 45 },
      { year: 2022, average: 10.8, highest: 52 },
      { year: 2023, average: 12, highest: 60 },
    ],
    topRoles: [
      { role: "Software Developer", salary: 18 },
      { role: "Core Engineer", salary: 10 },
      { role: "Analyst", salary: 12 },
    ],
    reviews: [
      { user: "Arjun", text: "Best NIT in India, amazing ROI.", rating: 5 },
      { user: "Meera", text: "Hostels are okay, but academics are top notch.", rating: 4 },
    ],
  },
  {
    id: "7",
    name: "IIIT Hyderabad",
    location: "Telangana",
    fees: 300000,
    rating: 4.7,
    courses: ["B.Tech CSE", "B.Tech ECE", "Dual Degree"],
    placements: "Avg package: 22 LPA | Top: 90 LPA",
    highestPackage: 90,
    averagePackage: 22,
    campusSize: 66,
    topRecruiters: ["Apple", "Google", "Facebook"],
    facilities: { labs: 10, sports: 6, library: 8 },
    demographics: { male: 75, female: 23, other: 2 },
    placementSectors: { it: 90, core: 5, finance: 5 },
    salaryHistory: [
      { year: 2021, average: 18, highest: 75 },
      { year: 2022, average: 20, highest: 82 },
      { year: 2023, average: 22, highest: 90 },
    ],
    topRoles: [
      { role: "Software Engineer", salary: 26 },
      { role: "Applied Scientist", salary: 35 },
      { role: "Systems Engineer", salary: 20 },
    ],
    reviews: [
      { user: "Siddharth", text: "If you love coding, there's no better place.", rating: 5 },
      { user: "Ananya", text: "Very rigorous, almost zero free time.", rating: 4 },
    ],
  },
  {
    id: "8",
    name: "SRM University",
    location: "Tamil Nadu",
    fees: 350000,
    rating: 4.0,
    courses: ["B.Tech CSE", "B.Tech BioTech", "MBA"],
    placements: "Avg package: 6 LPA | Top: 35 LPA",
    highestPackage: 35,
    averagePackage: 6,
    campusSize: 250,
    topRecruiters: ["TCS", "Infosys", "IBM"],
    facilities: { labs: 8, sports: 9, library: 8 },
    demographics: { male: 50, female: 45, other: 5 },
    placementSectors: { it: 70, core: 20, finance: 10 },
    salaryHistory: [
      { year: 2021, average: 4.5, highest: 28 },
      { year: 2022, average: 5.2, highest: 32 },
      { year: 2023, average: 6, highest: 35 },
    ],
    topRoles: [
      { role: "Programmer Analyst", salary: 5 },
      { role: "Software Engineer", salary: 8 },
      { role: "Consultant", salary: 6.5 },
    ],
    reviews: [
      { user: "Karthik", text: "Huge campus, lots of events.", rating: 4 },
      { user: "Pooja", text: "Mass recruitment is common.", rating: 3 },
    ],
  },
  {
    id: "9",
    name: "IIT Madras",
    location: "Tamil Nadu",
    fees: 220000,
    rating: 4.8,
    courses: ["B.Tech CSE", "B.Tech Aerospace", "B.Tech Mech"],
    placements: "Avg package: 19 LPA | Top: 1.3 Cr",
    highestPackage: 130,
    averagePackage: 19,
    campusSize: 617,
    topRecruiters: ["McKinsey", "Bain", "Texas Instruments"],
    facilities: { labs: 10, sports: 9, library: 10 },
    demographics: { male: 64, female: 34, other: 2 },
    placementSectors: { it: 40, core: 50, finance: 10 },
    salaryHistory: [
      { year: 2021, average: 15.5, highest: 95 },
      { year: 2022, average: 17, highest: 110 },
      { year: 2023, average: 19, highest: 130 },
    ],
    topRoles: [
      { role: "Management Consultant", salary: 28 },
      { role: "Software Engineer", salary: 24 },
      { role: "Core Design Engineer", salary: 16 },
    ],
    reviews: [
      { user: "Ram", text: "Incredible research facilities and lush green campus.", rating: 5 },
      { user: "Lakshmi", text: "Highly competitive, great startup culture.", rating: 5 },
    ],
  },
  {
    id: "10",
    name: "Delhi Technological University",
    location: "Delhi",
    fees: 160000,
    rating: 4.4,
    courses: ["B.Tech CSE", "B.Tech IT", "B.Tech SE"],
    placements: "Avg package: 15 LPA | Top: 85 LPA",
    highestPackage: 85,
    averagePackage: 15,
    campusSize: 164,
    topRecruiters: ["Qualcomm", "Samsung", "Atlassian"],
    facilities: { labs: 8, sports: 9, library: 8 },
    demographics: { male: 60, female: 38, other: 2 },
    placementSectors: { it: 60, core: 30, finance: 10 },
    salaryHistory: [
      { year: 2021, average: 11.5, highest: 60 },
      { year: 2022, average: 13, highest: 72 },
      { year: 2023, average: 15, highest: 85 },
    ],
    topRoles: [
      { role: "Software Engineer", salary: 20 },
      { role: "Hardware Engineer", salary: 16 },
      { role: "Product Engineer", salary: 18 },
    ],
    reviews: [
      { user: "Aman", text: "Great college life in Delhi, top tier placements.", rating: 5 },
      { user: "Sonia", text: "Faculty is hit or miss, but students are brilliant.", rating: 4 },
    ],
  }
];

// Generate 40 additional mock colleges to test table performance and filtering
const generateMocks = (count: number): College[] => {
  const locations = ["Delhi", "Mumbai", "Bangalore", "Pune", "Hyderabad", "Chennai"];
  const companies = ["Infosys", "TCS", "Wipro", "Cognizant", "Accenture", "Capgemini", "Amazon", "Microsoft", "Google"];
  const rolesList = ["Software Engineer", "Data Analyst", "Consultant", "System Engineer", "Product Manager"];
  
  return Array.from({ length: count }).map((_, i) => {
    // Deterministic pseudo-random generation to fix Next.js hydration errors
    const pseudoRandom1 = (i * 13) % 15;
    const pseudoRandom2 = (i * 7) % 3;
    const pseudoRandom3 = (i * 17) % locations.length;
    
    const avgPkg = pseudoRandom1 + 4; // 4 to 18
    const highPkg = avgPkg * (pseudoRandom2 + 2); // 8 to 54
    const rating = Number((((i * 11) % 16) / 10 + 3.5).toFixed(1)); // 3.5 to 5.0
    const loc = locations[pseudoRandom3];
    
    return {
      id: `mock-${i + 11}`,
      name: `Institute of Technology ${loc} ${i + 1}`,
      location: loc,
      fees: ((i % 3) + 1) * 100000,
      rating: rating,
      courses: ["B.Tech CSE", "B.Tech ECE", "MBA"],
      placements: `Avg package: ${avgPkg} LPA | Top: ${highPkg} LPA`,
      highestPackage: highPkg,
      averagePackage: avgPkg,
      campusSize: ((i * 23) % 200) + 50,
      topRecruiters: [
        companies[(i * 3) % companies.length], 
        companies[(i * 5) % companies.length], 
        companies[(i * 7) % companies.length]
      ],
      facilities: { 
        labs: (i % 4) + 6, 
        sports: ((i+1) % 4) + 6, 
        library: ((i+2) % 4) + 6 
      },
      demographics: { male: 60, female: 35, other: 5 },
      placementSectors: { it: 70, core: 20, finance: 10 },
      salaryHistory: [
        { year: 2021, average: avgPkg - 2, highest: highPkg - 5 },
        { year: 2022, average: avgPkg - 1, highest: highPkg - 2 },
        { year: 2023, average: avgPkg, highest: highPkg },
      ],
      topRoles: [
        { role: rolesList[(i * 2) % rolesList.length], salary: avgPkg + 2 },
        { role: rolesList[(i * 3 + 1) % rolesList.length], salary: avgPkg },
        { role: rolesList[(i * 4 + 2) % rolesList.length], salary: avgPkg - 1 },
      ],
      reviews: [
        { user: "Student", text: "Decent place to study.", rating: Math.floor(rating) }
      ],
    };
  });
};

export const colleges: College[] = [...baseColleges, ...generateMocks(40)];