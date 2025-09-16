import React, { useState } from "react";
import Button from "./elements/Button";
import CreatePrestasi from "./createPrestasi";

const newsData = [
  {
    image: "/cerydra.jpg",
    name: "pengangktan cerydra menjadi kaisar amphoreus",
    desc: "memimpin perjalanan pencarian benih api pertama",
    date: "2025-08-18 04:08:45",
  },
  {
    image: "/cerydra3.jpg",
    name: "cerydra",
    desc: "Menjadi kaisar pertama dan terakhir di amphoreus",
    date: "2025-08-18 04:06:58",
  },
  {
    image: "/sparkle.jpg",
    name: "Masked fools Sparkle",
    desc: "jadi quantum",
    date: "2025-08-18 04:06:24",
  },
  {
    image: "/the-hertaLS.jpg",
    name: "Bini pathir",
    desc: "jenius",
    date: "2025-08-18 04:05:02",
  },
];

export default function NewsTable() {
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [showCreate, setShowCreate] = useState(false);
  const filteredData = newsData.filter(
    (item) =>
      item.name.toLowerCase().includes(search.toLowerCase()) ||
      item.desc.toLowerCase().includes(search.toLowerCase()) ||
      item.date.toLowerCase().includes(search.toLowerCase())
  );
  const totalPages = Math.ceil(filteredData.length / pageSize);
  const pagedData = filteredData.slice((page - 1) * pageSize, page * pageSize);
  const handlePageChange = (p: number) => {
    if (p < 1 || p > totalPages) return;
    setPage(p);
  };
  const handlePageSizeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setPageSize(Number(e.target.value));
    setPage(1);
  };
  return (
    <div className="bg-white rounded-xl shadow p-6 mt-4">
      <div className="mb-4">
        <h2 className="text-2xl font-semibold mb-2">Manage News</h2>
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
          <div className="flex items-center text-sm text-gray-500">
            Show
            <select
              className="mx-2 border rounded px-2 py-1"
              value={pageSize}
              onChange={handlePageSizeChange}
            >
              {[10, 20, 30, 50, 100].map((n) => (
                <option key={n} value={n}>
                  {n}
                </option>
              ))}
            </select>
            entries
          </div>
          <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
            <div className="relative w-full sm:w-auto">
              <input
                type="text"
                placeholder="Cari berita..."
                className="border rounded px-3 py-1.5 pr-8 text-sm focus:outline-none w-[13rem]"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <span className="absolute right-2 top-2 text-gray-400">
                <svg
                  width="18"
                  height="18"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <circle cx="11" cy="11" r="8" />
                  <path d="M21 21l-2-2" />
                </svg>
              </span>
            </div>
            <button
              className="bg-white border border-gray-300 rounded px-4 py-1.5 flex items-center gap-2 font-semibold text-gray-700 hover:bg-gray-100 w-[13rem] justify-center"
              onClick={() => setShowCreate(true)}
            >
              <span className="text-lg">+</span> Create
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2 gap-2">
        <div className="text-sm text-gray-500 px-2 py-1 break-words text-center sm:text-left">
          Showing {filteredData.length === 0 ? 0 : (page - 1) * pageSize + 1} to{" "}
          {Math.min(page * pageSize, filteredData.length)} of{" "}
          {filteredData.length} entries
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full text-sm">
          <thead>
            <tr className="bg-gray-50">
              <th className="px-4 py-2 text-left font-bold text-gray-500">
                IMAGE
              </th>
              <th className="px-4 py-2 text-left font-bold text-gray-500">
                NAMA SISWA
              </th>
              <th className="px-4 py-2 text-left font-bold text-gray-500">
                PRESTASI
              </th>
              <th className="px-4 py-2 text-left font-bold text-gray-500">
                DATE
              </th>
              <th className="px-4 py-2 text-left font-bold text-gray-500">
                ACTIONS
              </th>
            </tr>
          </thead>
          <tbody>
            {pagedData.map((item, i) => (
              <tr key={i} className="border-b last:border-0">
                <td className="px-4 py-2">
                  <img
                    src={item.image}
                    alt="news"
                    className="w-16 h-12 object-cover rounded"
                  />
                </td>
                <td className="px-4 py-2 max-w-xs">
                  <span
                    className="font-medium text-[15px] block truncate w-48 md:w-64"
                    title={item.name}
                  >
                    {item.name}
                  </span>
                </td>
                <td className="px-4 py-2 max-w-xs">
                  <span
                    className="text-gray-600 text-[15px] block truncate w-56 md:w-80"
                    title={item.desc}
                  >
                    {item.desc}
                  </span>
                </td>
                <td className="px-4 py-2">
                  <span className="text-gray-500 text-[15px]">{item.date}</span>
                </td>
                <td className="px-4 py-2">
                  <div className="flex gap-2">
                    <Button className="flex items-center gap-1 bg-white border border-gray-300 rounded px-2 py-1 text-xs text-gray-700 hover:bg-gray-100">
                      <svg
                        width="16"
                        height="16"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 20h9" />
                        <path d="M16.5 3.5a2.121 2.121 0 1 1 3 3L7 19.5 3 21l1.5-4L16.5 3.5z" />
                      </svg>
                      Edit
                    </Button>
                    <Button className="flex items-center gap-1 bg-red-100 border border-red-200 rounded px-2 py-1 text-xs text-red-600 hover:bg-red-200">
                      <svg
                        width="16"
                        height="16"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                      >
                        <path d="M3 6h18" />
                        <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                        <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m5 4v6m4-6v6" />
                      </svg>
                      Hapus
                    </Button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* Pagination */}
      <div className="flex justify-end mt-2 gap-1">
        <button
          className="w-8 h-8 flex items-center justify-center rounded bg-white border border-gray-300 text-gray-700 disabled:opacity-50"
          onClick={() => handlePageChange(page - 1)}
          disabled={page === 1}
        >
          {"<"}
        </button>
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) =>
          p === 1 || p === totalPages || (p >= page - 1 && p <= page + 1) ? (
            <button
              key={p}
              className={`w-8 h-8 flex items-center justify-center rounded border text-gray-700 ${
                p === page
                  ? "bg-blue-600 text-white border-blue-600"
                  : "bg-white border-gray-300"
              }`}
              onClick={() => handlePageChange(p)}
            >
              {p}
            </button>
          ) : (p === page - 2 || p === page + 2) && totalPages > 5 ? (
            <span key={p} className="px-1">
              ...
            </span>
          ) : null
        )}
        <button
          className="w-8 h-8 flex items-center justify-center rounded bg-white border border-gray-300 text-gray-700 disabled:opacity-50"
          onClick={() => handlePageChange(page + 1)}
          disabled={page === totalPages || totalPages === 0}
        >
          {">"}
        </button>
      </div>
      <CreatePrestasi open={showCreate} onClose={() => setShowCreate(false)} />
    </div>
  );
}
