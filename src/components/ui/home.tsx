import React, { useState } from "react";
import ReportModal from "./ReportModal";
import {
  ShoppingBag,
  BarChart2,
  UserPlus,
  PieChart,
  Info,
  Calendar,
  Plus,
} from "lucide-react";
import CalendarCard from "./CalendarCard";
import Button from "./elements/Button";
import NewsTable from "./NewsTable";

const stats = [
  {
    value: 150,
    label: "Total Pengumuman",
    color: "bg-cyan-600",
    icon: (
      <ShoppingBag size={48} className="opacity-30 absolute right-4 bottom-4" />
    ),
    info: "More info",
  },
  {
    value: "53%",
    label: "Total Berita",
    color: "bg-green-600",
    icon: (
      <BarChart2 size={48} className="opacity-30 absolute right-4 bottom-4" />
    ),
    info: "More info",
  },
  {
    value: 44,
    label: "Total Prestasi",
    color: "bg-yellow-500",
    icon: (
      <UserPlus size={48} className="opacity-30 absolute right-4 bottom-4" />
    ),
    info: "More info",
  },
  {
    value: 65,
    label: "Total Murid",
    color: "bg-rose-600",
    icon: (
      <PieChart size={48} className="opacity-30 absolute right-4 bottom-4" />
    ),
    info: "More info",
  },
];

export default function Dashboard() {
  const [showReport, setShowReport] = useState(false);
  return (
    <div className="p-2 sm:p-4 md:p-6 bg-gray-100 min-h-screen">
      {/* Topbar */}
      <div className="flex items-center justify-between mb-4">
        {/* Left: Avatar, Name, Role */}
        {/* Right: Icon group */}
        <div className="flex items-center gap-6">
          <button className="relative text-gray-500 hover:text-gray-700 focus:outline-none">
            <svg
              width="24"
              height="24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path d="M13 16h-1v-4h-1m1-4h.01" />
              <circle cx="12" cy="12" r="10" />
            </svg>
            <span className="absolute -top-1 -right-1 w-2 h-2 bg-orange-500 rounded-full"></span>
          </button>
          <button className="relative text-gray-500 hover:text-gray-700 focus:outline-none">
            <svg
              width="24"
              height="24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2z" />
            </svg>
            <span className="absolute -top-1 -right-1 w-2 h-2 bg-green-500 rounded-full"></span>
          </button>
          <button className="text-gray-500 hover:text-gray-700 focus:outline-none">
            <svg
              width="24"
              height="24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M12 16v-4" />
              <path d="M12 8h.01" />
            </svg>
          </button>
        </div>
      </div>

      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 gap-4 mb-4 sm:mb-6 md:grid-cols-4">
        {stats.map((stat, i) => (
          <div
            key={i}
            className={`relative rounded-lg shadow-md ${stat.color} text-white p-6 overflow-hidden`}
          >
            <div className="text-3xl font-bold">{stat.value}</div>
            <div className="text-sm opacity-90">{stat.label}</div>
            {stat.icon}
            <div className="absolute bottom-0 left-0 w-full bg-black/10 py-2 px-4 flex items-center justify-between text-xs">
              <span>{stat.info}</span>
              <Info size={16} />
            </div>
          </div>
        ))}
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {/* To Do List */}
        <div className="bg-white rounded-lg shadow p-2 sm:p-4 md:col-span-2">
          <div className="flex items-center gap-2 mb-4">
            <span className="font-semibold text-lg">To Do List</span>
          </div>
          <ul>
            <li className="flex items-center gap-2 border-b py-2">
              <span className="cursor-move text-gray-400">☰</span>
              <input type="checkbox" className="mr-2" />
              <span>Design a nice theme</span>
              <span className="ml-auto bg-red-500 text-white text-xs px-2 py-0.5 rounded">
                2 mins
              </span>
            </li>
            <li className="flex items-center gap-2 border-b py-2">
              <span className="cursor-move text-gray-400">☰</span>
              <input type="checkbox" className="mr-2" />
              <span>Make the theme responsive</span>
              <span className="ml-auto bg-gray-400 text-white text-xs px-2 py-0.5 rounded">
                4 hours
              </span>
            </li>
            <li className="flex items-center gap-2 border-b py-2">
              <span className="cursor-move text-gray-400">☰</span>
              <input type="checkbox" className="mr-2" />
              <span>Let theme shine like a star</span>
              <span className="ml-auto bg-yellow-400 text-white text-xs px-2 py-0.5 rounded">
                1 day
              </span>
            </li>
            <li className="flex items-center gap-2 border-b py-2">
              <span className="cursor-move text-gray-400">☰</span>
              <input type="checkbox" className="mr-2" />
              <span>Let theme shine like a star</span>
              <span className="ml-auto bg-green-500 text-white text-xs px-2 py-0.5 rounded">
                3 days
              </span>
            </li>
            <li className="flex items-center gap-2 border-b py-2">
              <span className="cursor-move text-gray-400">☰</span>
              <input type="checkbox" className="mr-2" />
              <span>Check your messages and notifications</span>
              <span className="ml-auto bg-blue-500 text-white text-xs px-2 py-0.5 rounded">
                1 week
              </span>
            </li>
            <li className="flex items-center gap-2 py-2">
              <span className="cursor-move text-gray-400">☰</span>
              <input type="checkbox" className="mr-2" />
              <span>Let theme shine like a star</span>
              <span className="ml-auto bg-gray-500 text-white text-xs px-2 py-0.5 rounded">
                1 month
              </span>
            </li>
          </ul>
          <div className="flex justify-end mt-4">
            <Button
              className="bg-blue-600 text-white px-4 py-2 rounded flex items-center gap-2"
              onClick={() => setShowReport(true)}
            >
              <Plus size={16} /> Add item
            </Button>
          </div>
        </div>
        {/* Calendar */}
        <div className="mt-4 md:mt-0">
          <CalendarCard />
        </div>
      </div>
      <div className="mt-4">{/* <NewsTable /> */}</div>
      <ReportModal open={showReport} onClose={() => setShowReport(false)} />
    </div>
  );
}
