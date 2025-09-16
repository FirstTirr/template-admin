import React, { useState } from "react";
import AgendaCard from "./elements/AgendaCard";
import agendaListData from "./elements/agendaList";
import CreateAgenda from "./elements/CreateAgenda";

export default function Agenda() {
  const [agendaList, setAgendaList] = useState(agendaListData);
  const [showCreate, setShowCreate] = useState(false);

  const handleCreate = (data: {
    title: string;
    description: string;
    date: string;
    time: string;
    location: string;
    color: string;
    icon: string;
  }) => {
    setAgendaList([
      ...agendaList,
      {
        ...data,
      },
    ]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white py-10 px-2 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-10 gap-4">
          <div>
            <h1 className="text-4xl font-extrabold text-blue-900 drop-shadow mb-1 text-center sm:text-left tracking-tight uppercase">
              Panel Admin Agenda
            </h1>
            <p className="text-gray-700 text-center sm:text-left text-lg font-medium">
              Kelola, tambah, dan review agenda dengan visual profesional dan
              fitur admin.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {agendaList.map((a, i) => (
            <div
              key={i}
              className="relative group rounded-2xl border-2 border-blue-200 bg-white/90 shadow-xl hover:shadow-blue-200/60 transition-all duration-200 overflow-hidden"
            >
              <AgendaCard {...a} />
              <span className="absolute bottom-4 left-4 bg-blue-100 text-blue-700 text-xs px-3 py-1 rounded-full shadow opacity-0 group-hover:opacity-100 transition">
                ID-{i + 1}
              </span>
            </div>
          ))}
        </div>
        <button
          className="fixed bottom-8 right-8 z-50 bg-gradient-to-tr from-blue-700 via-blue-500 to-cyan-400 text-white shadow-2xl rounded-full p-5 text-3xl font-bold border-4 border-white/30 hover:scale-110 hover:shadow-blue-400/40 transition-all duration-200"
          onClick={() => setShowCreate(true)}
          title="Tambah Agenda"
        >
          +
        </button>
      </div>
      <CreateAgenda
        open={showCreate}
        onClose={() => setShowCreate(false)}
        onCreate={handleCreate}
      />
    </div>
  );
}
