import React, { useState } from "react";
import Button from "./Button";

interface EditJurusanProps {
  open: boolean;
  onClose: () => void;
  initialData: {
    title: string;
    description: string;
    icon: string;
    color: string;
  };
  onEdit: (data: {
    title: string;
    description: string;
    icon: string;
    color: string;
  }) => void;
}

const iconOptions = [
  { label: "💻 Software", value: "💻" },
  { label: "🌐 Jaringan", value: "🌐" },
  { label: "🎨 Multimedia", value: "🎨" },
  { label: "🔌 Elektronika", value: "🔌" },
  { label: "📊 Akuntansi", value: "📊" },
  { label: "🏢 Perkantoran", value: "🏢" },
];
const colorOptions = [
  { label: "Biru", value: "border-blue-500" },
  { label: "Hijau", value: "border-green-500" },
  { label: "Pink", value: "border-pink-500" },
  { label: "Kuning", value: "border-yellow-500" },
  { label: "Ungu", value: "border-purple-500" },
  { label: "Merah", value: "border-red-500" },
];

const EditJurusan: React.FC<EditJurusanProps> = ({
  open,
  onClose,
  initialData,
  onEdit,
}) => {
  const [title, setTitle] = useState(initialData.title);
  const [description, setDescription] = useState(initialData.description);
  const [icon, setIcon] = useState(initialData.icon);
  const [color, setColor] = useState(initialData.color);

  React.useEffect(() => {
    setTitle(initialData.title);
    setDescription(initialData.description);
    setIcon(initialData.icon);
    setColor(initialData.color);
  }, [initialData]);

  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40 px-2 pointer-events-none">
      <div className="bg-white rounded-xl shadow-lg p-3 sm:p-6 md:p-8 w-full max-w-xs sm:max-w-lg md:max-w-2xl lg:max-w-3xl relative animate-fade-in h-full max-h-[95vh] flex flex-col pointer-events-auto overflow-y-auto">
        <Button
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-xl"
          onClick={onClose}
          aria-label="Tutup"
        >
          ×
        </Button>
        <h2 className="text-2xl font-semibold mb-6 text-blue-600 text-center">
          Edit Program Keahlian
        </h2>
        <form
          className="space-y-6"
          onSubmit={(e) => {
            e.preventDefault();
            onEdit({ title, description, icon, color });
            onClose();
          }}
        >
          <div>
            <label className="block font-semibold mb-1">Nama Jurusan</label>
            <input
              className="w-full border rounded px-3 py-2 focus:ring-2 focus:ring-blue-300"
              placeholder="Contoh: Rekayasa Perangkat Lunak"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block font-semibold mb-1">Deskripsi</label>
            <textarea
              className="w-full border rounded px-3 py-2 focus:ring-2 focus:ring-blue-300 min-h-[80px]"
              placeholder="Deskripsi singkat jurusan..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
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
          <div className="flex justify-end gap-2 mt-6">
            <Button
              type="button"
              className="px-4 py-2 rounded border border-gray-300 text-gray-700"
              onClick={onClose}
            >
              Kembali
            </Button>
            <Button
              type="submit"
              className="px-4 py-2 rounded bg-blue-600 text-white font-semibold"
            >
              Simpan
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditJurusan;
