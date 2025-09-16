import React, { useState } from "react";

interface CreateAgendaProps {
  open: boolean;
  onClose: () => void;
  onCreate: (data: {
    title: string;
    description: string;
    date: string;
    time: string;
    location: string;
    color: string;
    icon: string;
  }) => void;
}

const iconOptions = [
  { label: "📅 Kalender", value: "📅" },
  { label: "🧑‍🏫 Workshop", value: "🧑‍🏫" },
  { label: "📝 Ujian", value: "📝" },
  { label: "🎤 Seminar", value: "🎤" },
  { label: "🏆 Lomba", value: "🏆" },
];
const colorOptions = [
  { label: "Biru", value: "border-blue-500" },
  { label: "Hijau", value: "border-green-500" },
  { label: "Kuning", value: "border-yellow-500" },
  { label: "Ungu", value: "border-purple-500" },
  { label: "Merah", value: "border-red-500" },
];

const CreateAgenda: React.FC<CreateAgendaProps> = ({
  open,
  onClose,
  onCreate,
}) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [location, setLocation] = useState("");
  const [icon, setIcon] = useState(iconOptions[0].value);
  const [color, setColor] = useState(colorOptions[0].value);

  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-2 animate-fade-in">
      <div className="bg-white rounded-2xl shadow-2xl p-6 w-full max-w-md relative border-t-4 border-blue-500">
        <button
          className="absolute top-3 right-3 text-2xl text-gray-400 hover:text-gray-700"
          onClick={onClose}
        >
          ×
        </button>
        <h2 className="text-2xl font-bold mb-4 text-blue-600 text-center tracking-tight">
          Tambah Agenda
        </h2>
        <form
          className="space-y-4"
          onSubmit={(e) => {
            e.preventDefault();
            onCreate({ title, description, date, time, location, color, icon });
            setTitle("");
            setDescription("");
            setDate("");
            setTime("");
            setLocation("");
            setIcon(iconOptions[0].value);
            setColor(colorOptions[0].value);
            onClose();
          }}
        >
          <div>
            <label className="block font-semibold mb-1">Nama Agenda</label>
            <input
              className="w-full border rounded px-3 py-2 focus:ring-2 focus:ring-blue-300"
              placeholder="Contoh: Rapat Koordinasi"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block font-semibold mb-1">Deskripsi</label>
            <textarea
              className="w-full border rounded px-3 py-2 focus:ring-2 focus:ring-blue-300 min-h-[80px]"
              placeholder="Deskripsi singkat agenda..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
          </div>
          <div className="flex gap-2">
            <div className="flex-1">
              <label className="block font-semibold mb-1">Tanggal</label>
              <input
                type="date"
                className="w-full border rounded px-3 py-2"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                required
              />
            </div>
            <div className="flex-1">
              <label className="block font-semibold mb-1">Jam</label>
              <input
                type="time"
                className="w-full border rounded px-3 py-2"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                required
              />
            </div>
          </div>
          <div>
            <label className="block font-semibold mb-1">Lokasi</label>
            <input
              className="w-full border rounded px-3 py-2"
              placeholder="Contoh: Aula SMK Cerydra"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              required
            />
          </div>
          <div className="flex gap-2">
            <div className="flex-1">
              <label className="block font-semibold mb-1">Icon</label>
              <select
                className="w-full border rounded px-3 py-2"
                value={icon}
                onChange={(e) => setIcon(e.target.value)}
              >
                {iconOptions.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex-1">
              <label className="block font-semibold mb-1">Warna</label>
              <select
                className="w-full border rounded px-3 py-2"
                value={color}
                onChange={(e) => setColor(e.target.value)}
              >
                {colorOptions.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-500 to-blue-700 text-white py-2 rounded-lg font-bold text-lg shadow hover:from-blue-600 hover:to-blue-800 transition"
          >
            Tambah Agenda
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateAgenda;
