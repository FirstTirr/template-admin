import React, { useState } from "react";
import JurusanCard from "./elements/JurusanCard";
import jurusanListData from "./elements/jurusanList";
import CreateJurusan from "./elements/CreateJurusan";
import JurusanCardWithBadge from "./elements/JurusanCardWithBadge";

export default function Jurusan() {
  const [jurusanList, setJurusanList] = useState(jurusanListData);
  const [showCreate, setShowCreate] = useState(false);

  const handleCreate = (data: {
    title: string;
    description: string;
    icon: string;
    color: string;
  }) => {
    setJurusanList([
      ...jurusanList,
      {
        title: data.title,
        description: data.description,
        icon: <span>{data.icon}</span>,
        color: data.color,
      },
    ]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white py-10 px-2 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-10 gap-4">
          <div>
            <h1 className="text-4xl font-extrabold text-blue-900 drop-shadow mb-1 text-center sm:text-left tracking-tight uppercase">
              Panel Admin Jurusan
            </h1>
            <p className="text-gray-700 text-center sm:text-left text-lg font-medium">
              Kelola, tambah, dan review jurusan dengan visual profesional dan
              fitur admin.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {jurusanList.map((j, i) => (
            <JurusanCardWithBadge key={i} {...j} id={i + 1} />
          ))}
        </div>
        <button
          className="h-23 w-23 fixed bottom-8 right-8 z-50 bg-gradient-to-tr from-blue-700 via-blue-500 to-cyan-400 text-white shadow-2xl rounded-full p-5 text-3xl font-bold border-4 border-white/30 hover:scale-110 hover:shadow-blue-400/40 transition-all duration-200"
          onClick={() => setShowCreate(true)}
          title="Tambah Jurusan"
        >
          +
        </button>
      </div>
      <CreateJurusan
        open={showCreate}
        onClose={() => setShowCreate(false)}
        onCreate={handleCreate}
      />
    </div>
  );
}
