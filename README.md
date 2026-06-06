Live Site : https://scoutdemo.vercel.app/

## 🎯 Project Overview

**SCOUT** is a data-centric web application engineered to solve the complex UX challenge of discovering, comparing, and analyzing higher education institutions and their placement outcomes. 

Designed specifically to demonstrate strong **Frontend Engineering** capabilities, this project rejects bloated third-party component libraries in favor of a bespoke, highly tactile **Neo-Brutalist** aesthetic. Every interactive element—from the custom CSS charts to the glitch animations—was built from scratch to guarantee maximum performance and a unique visual identity.

---

## ✨ Core Engineering Achievements

### 1. 📊 Custom Compensation Visualizations (Zero Dependencies)
A major architectural decision was to avoid heavy charting libraries (like Chart.js or Recharts) that bloat bundle sizes. 
* **Implementation:** Built a native `CSS Flexbox` rendering engine to draw historically accurate bar charts and dynamic demographic pie charts using advanced `conic-gradient` calculations.
* **Impact:** Blazing fast render times and a perfectly cohesive brutalist aesthetic that 3rd-party libraries simply cannot provide.

### 2. ⚡ Searchable High-Performance Data Tables
Handling large datasets without compromising UX is a critical frontend challenge.
* **Implementation:** Developed the `/salaries` dashboard featuring client-side pagination, bidirectional column sorting (by Average Package, Institution Name, etc.), and instant text-based filtering.
* **Impact:** Guarantees 60fps rendering and zero layout shift, even when filtering through hundreds of data nodes dynamically.

### 3. 🔍 Advanced Comparative Interfaces
* **Implementation:** Engineered a robust `/compare` dashboard capable of aligning complex multi-dimensional datasets side-by-side.
* **Impact:** Users can seamlessly compare campus facilities (visualized via inline progress metrics), demographic splits, and placement sector percentages across multiple entities at once.

### 4. 🛡️ Safe & Secure Architecture
* **Implementation:** Leveraged Next.js `next.config.ts` to strictly enforce industry-standard security headers including `Content-Security-Policy`, `X-XSS-Protection`, and `Strict-Transport-Security`.
* **Impact:** Hardens the application against cross-site scripting (XSS) and clickjacking vulnerabilities natively.

---

## 🛠️ Technology Stack

* **Framework:** Next.js 14 (App Router)
* **Language:** TypeScript (Strict Mode)
* **Styling:** TailwindCSS + Custom CSS (`globals.css`)
* **Design System:** Bespoke Neo-Brutalist (Black & Beige palette, stark typography, raw borders)
* **Deployment & Build:** Turbopack

---

## 🚀 Getting Started

To run this project locally, follow these steps:

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/en/) installed (v18.x or later).

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/UjjwalShreyas/demo.git
   cd demo
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Explore the app:**
   Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🧠 Technical Highlights for Interviewers

If you are reviewing this repository for a Frontend Engineering role, please take note of the following files:

- **`src/app/page.tsx`**: Demonstrates dynamic client-side filtering, multi-select state management, and strict separation of UI components.
- **`src/app/salaries/page.tsx`**: Showcases complex data-table engineering, including pagination logic and use of `useMemo` to prevent expensive re-calculations during sorts/searches.
- **`src/app/compare/page.tsx`**: Highlights the implementation of custom CSS visualizations and complex grid layouts to compare heterogeneous data objects.
- **`src/data/colleges.ts`**: Contains the deterministic data-generation logic created specifically to avoid Next.js Hydration Mismatch errors during SSR.

---
<div align="center">
  <i>Built with absolute focus on Usability, Performance, and Design by Ujjwal Shreyas.</i>
</div>
