🏢 Companies Directory

A responsive React-based Companies Directory web app that lists companies with search and filtering functionality.
This project was built as part of the Frontend Developer assessment for Frontlines Edutech.

🚀 Live Demo
🔗 Live Link: https://company-directories.netlify.app/

🧠 Overview

This web application displays a list of companies fetched from a mock API (companies.json) and allows users to:
🔍 Search by name, location, industry, or employees
⚡ Load data only after clicking Get Started (simulating on-demand API calls)
🖥️ View all results in a clean, responsive table

🌟 Features
✅ Fetches data dynamically from a mock JSON file
✅ Live search across multiple attributes
✅ Modern UI using Tailwind CSS
✅ Responsive table layout for desktop & mobile
✅ Loading and empty state handling

⚙️ Tech Stack
Category	Technology
Frontend	React.js (Vite)
Styling	Tailwind CSS
State Management	React Hooks (useState, useEffect)
Mock API	Static JSON (companies.json)
Deployment	Netlify

src/ 
 ├── components/
 │   ├── Header.jsx        # Header with title, search, and "Get Started"
 │   └── CompanyTable.jsx  # Fetches & filters company data
 ├── App.jsx               # Main component (handles app logic)
 ├── main.jsx              # Entry point for React
 ├── index.css             # Tailwind & global styles
public/
 └── companies.json        # Mock data file

 🧪 How to Run Locally

1️⃣ Clone this repository:
git clone https://github.com/yourusername/companies-directory.git

2️⃣ Install dependencies:
npm install

3️⃣ Run development server:
npm run dev

4️⃣ Build for production:
npm run build

5️⃣ Preview production build:
npm run preview

🧩 Approach & Key Decisions
Used mock JSON data to simulate API integration.
Data fetch only starts after Get Started is clicked (on-demand fetching).
Implemented client-side filtering for smooth performance.
Tailwind CSS used for quick and responsive styling.
Code organized in modular React components for clarity.

🏁 Conclusion
This project demonstrates a clean and responsive React frontend with API integration, dynamic filtering, and modular architecture — focused on simplicity, speed, and user experience.
