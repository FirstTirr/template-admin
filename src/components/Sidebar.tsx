import React, { useState } from "react";
import {
  Home,
  Newspaper,
  Globe,
  Calendar,
  LogOut,
  Megaphone,
  Clipboard,
  Trophy,
  ScrollText,
} from "lucide-react";

const SidebarSection = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => (
  <div className="mt-6">
    <div className="text-xs font-bold text-gray-400 px-2 mb-2 tracking-wide">
      {title}
    </div>
    <div className="flex flex-col gap-1">{children}</div>
  </div>
);

const SidebarItem = ({ icon, children, active, right, ...props }: any) => (
  <a
    className={`flex items-center gap-3 px-3 py-2 rounded-xl font-semibold text-gray-800 transition group select-none
      ${
        active
          ? "bg-gray-100 shadow-xl shadow-gray-400/40" // Aktif: abu-abu, border gray-400, shadow tebal
          : "hover:bg-gradient-to-b hover:from-gray-100 hover:to-white hover:shadow-[0_2px_8px_0_rgba(0,0,0,0.04)] hover:border hover:border-gray-200 font-medium text-gray-700"
      }
    `}
    {...props}
  >
    {icon && (
      <span
        className={`inline-block w-5 text-center text-lg ${
          active ? "text-black" : "text-gray-700"
        }`}
      >
        {icon}
      </span>
    )}
    <span className="flex-1 text-left">{children}</span>
    {right}
  </a>
);

const SidebarBadge = ({ children }: { children: React.ReactNode }) => (
  <span className="ml-2 px-2 py-0.5 text-xs bg-red-500 text-white rounded font-bold">
    {children}
  </span>
);

interface SidebarProps {
  onNavigate?: (page: string) => void;
}

const Sidebar = ({ onNavigate, page }: SidebarProps & { page?: string }) => {
  const [open, setOpen] = useState(false);
  const [mobileSidebar, setMobileSidebar] = useState(false);

  // Sidebar content (for reuse)
  const sidebarContent = (
    <>
      <div className="flex items-center gap-3 px-6 py-6 border-b">
        <img
          src="./cerydralogo.jpg"
          alt="avatar"
          className="w-12 h-12 rounded-lg shadow"
        />
        <div>
          <div className="font-semibold text-base text-gray-800 leading-tight">
            Adomin-sama
          </div>
          <div className="text-xs text-blue-500">Admin</div>
        </div>
      </div>
      <nav className="flex-1 px-4 py-6 flex flex-col gap-2">
        <SidebarSection title="MENU UTAMA">
          <SidebarItem
            as="button"
            icon={<Home size={20} />}
            active={page === "home"}
            onClick={() => {
              onNavigate && onNavigate("home");
              setMobileSidebar(false);
            }}
          >
            Beranda
          </SidebarItem>
        </SidebarSection>
        <SidebarSection title="MANAGE">
          <div className={`relative${open ? " mb-4" : ""}`}>
            <button
              className={`flex items-center w-full gap-3 px-3 py-2 rounded-xl font-medium text-gray-700 bg-white border border-gray-200 shadow-sm hover:bg-gradient-to-b hover:from-gray-100 hover:to-white hover:shadow-md transition group ${
                open ? "ring-2 ring-blue-200" : ""
              }`}
              onClick={() => setOpen((v) => !v)}
            >
              <Newspaper size={20} /> News Menu
              <span
                className="ml-auto transition-transform"
                style={{ transform: open ? "rotate(180deg)" : undefined }}
              >
                ▼
              </span>
            </button>
            {open && (
              <div className="mt-2 w-full bg-white rounded-xl shadow-lg border border-gray-200 animate-fade-in overflow-hidden">
                <button
                  className={`flex items-center gap-3 px-4 py-2 w-full text-left border-b border-gray-100 rounded-t-xl ${
                    page === "news"
                      ? "bg-gray-100 shadow-xl shadow-gray-400/40 font-semibold text-gray-800"
                      : "text-gray-700 hover:bg-gray-50"
                  }`}
                  onClick={() => {
                    onNavigate && onNavigate("news");
                    setMobileSidebar(false);
                  }}
                >
                  <Megaphone size={20} /> Pengumuman
                </button>
                <button
                  className={`flex items-center gap-3 px-4 py-2 w-full text-left border-b border-gray-100 ${
                    page === "prestasi"
                      ? "bg-gray-100 shadow-xl shadow-gray-400/40 font-semibold text-gray-800"
                      : "text-gray-700 hover:bg-gray-50"
                  }`}
                  onClick={() => {
                    onNavigate && onNavigate("prestasi");
                    setMobileSidebar(false);
                  }}
                >
                  <Trophy size={20} /> Prestasi
                </button>
              </div>
            )}
          </div>
          <SidebarItem
            icon={<Globe size={20} />}
            active={page === "jurusan"}
            onClick={() => {
              onNavigate && onNavigate("jurusan");
              setMobileSidebar(false);
            }}
          >
            Program Keahlian
          </SidebarItem>
          <SidebarItem icon={<Calendar size={20} />} active={page === "agenda"}>
            Agenda
          </SidebarItem>
        </SidebarSection>
        <SidebarSection title="ANOTHER MENU">
          <SidebarItem icon={<LogOut size={20} />} className="text-gray-500">
            Log Out
          </SidebarItem>
        </SidebarSection>
      </nav>
    </>
  );

  return (
    <>
      {/* Hamburger for mobile */}
      <button
        className="fixed top-4 left-4 z-50 p-2 rounded-md bg-white shadow md:hidden"
        onClick={() => setMobileSidebar(true)}
        aria-label="Open sidebar"
      >
        <svg
          width="28"
          height="28"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>

      {/* Desktop sidebar */}
      <aside className="w-80 min-h-screen bg-white border-r flex-col hidden md:flex">
        {sidebarContent}
      </aside>

      {/* Mobile sidebar overlay */}
      {mobileSidebar && (
        <>
          <div
            className="fixed inset-0 bg-black bg-opacity-40 z-40"
            onClick={() => setMobileSidebar(false)}
          />
          <aside className="fixed top-0 left-0 bottom-0 w-80 bg-white border-r shadow-lg z-50 animate-slide-in flex flex-col md:hidden">
            <button
              className="absolute top-4 right-4 p-2 rounded-md bg-gray-100 hover:bg-gray-200"
              onClick={() => setMobileSidebar(false)}
              aria-label="Close sidebar"
            >
              <svg
                width="24"
                height="24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            {sidebarContent}
          </aside>
        </>
      )}
    </>
  );
};

export default Sidebar;
