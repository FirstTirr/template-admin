import React from "react";
import { Info } from "lucide-react";
import Modal from "./elements/Modal";
import Dropdown from "./elements/Dropdown";
import Button from "./elements/Button";

export default function ReportModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const [judul, setJudul] = React.useState("");
  const [label, setLabel] = React.useState("");
  return (
    <Modal open={open} onClose={onClose} title="Tambahkan To Do List">
      <div className="flex items-center gap-4 mb-4">
        <div className="bg-rose-600 rounded-lg w-12 h-12 flex items-center justify-center">
          <Info size={28} className="text-white" />
        </div>
        <div>
          <div className="font-bold text-lg">Tambahkan To Do List</div>
          <div className="text-gray-500 text-sm">
            Buat To Do List Yang Akan Di Kerjakan/Deadline
          </div>
        </div>
      </div>
      <hr className="my-4" />
      <form className="space-y-4">
        <div>
          <label className="block font-semibold mb-1">Judul To Do :</label>
          <input
            className="w-full border rounded px-3 py-2"
            placeholder="Masukkan judul to do"
            value={judul}
            onChange={(e) => setJudul(e.target.value)}
          />
        </div>
        <div>
          <label className="block font-semibold mb-1">Label Waktu :</label>
          <Dropdown
            options={[
              { label: "2 mins (merah)", value: "2 mins" },
              { label: "4 hours (abu)", value: "4 hours" },
              { label: "1 day (kuning)", value: "1 day" },
              { label: "3 days (hijau)", value: "3 days" },
              { label: "1 week (biru)", value: "1 week" },
              { label: "1 month (abu)", value: "1 month" },
            ]}
            value={label}
            onChange={setLabel}
            className="w-full"
          />
        </div>
        <Button
          type="submit"
          className="w-full bg-black text-white py-2 rounded font-semibold mt-2"
        >
          Tambah ke To Do List
        </Button>
      </form>
    </Modal>
  );
}
