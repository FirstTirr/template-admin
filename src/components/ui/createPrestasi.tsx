import React from "react";
import Button from "./elements/Button";

export default function CreatePrestasi({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40 px-2 pointer-events-none">
      <div className="bg-white rounded-xl shadow-lg p-3 sm:p-6 md:p-8 w-full max-w-xs sm:max-w-lg md:max-w-2xl lg:max-w-3xl relative animate-fade-in h-full max-h-[95vh] flex flex-col pointer-events-auto overflow-y-auto">
        <button
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-xl"
          onClick={onClose}
          aria-label="Tutup"
        >
          ×
        </button>
        <h2 className="text-2xl font-semibold mb-6">Create Achievement</h2>
        <form className="space-y-6">
          <div>
            <label className="block font-semibold mb-1">
              Category Achievement
            </label>
            <select className="w-full border rounded px-3 py-2">
              <option>-- Pilih Category --</option>
            </select>
          </div>
          <div>
            <label className="block font-semibold mb-1">Nama Siswa</label>
            <input
              className="w-full border rounded px-3 py-2"
              placeholder="Masukkan nama achievement..."
            />
          </div>
          <div>
            <label className="block font-semibold mb-1">
              Prestasi Yang Diraih
            </label>
            <textarea className="w-full border rounded px-3 py-2 min-h-[120px]" />
          </div>
          <div>
            <label className="block font-semibold mb-1">Gambar (Maks 10)</label>
            <input type="file" className="block" multiple />
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
}
