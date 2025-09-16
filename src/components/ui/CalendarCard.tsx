import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import Dropdown from "./elements/Dropdown";

import CreatePrestasi from "./createPrestasi";

export default function CalendarCard() {
  const [value, setValue] = useState<any>(new Date());
  const [menuOpen, setMenuOpen] = useState(false);
  const [showAddEventModal, setShowAddEventModal] = useState(false);

  return (
    <div className="bg-white rounded-lg shadow p-6 relative">
      {/* Dropdown menu button */}
      <div className="absolute top-4 right-4 flex gap-2 z-10">
        <button
          className="bg-gray-400 hover:bg-gray-500 text-white rounded p-1 focus:outline-none"
          onClick={() => setMenuOpen((v) => !v)}
        >
          ≡
        </button>
        {menuOpen && (
          <Dropdown
            options={[
              { label: "Add new event", value: "add" },
              { label: "View calendar", value: "view" },
            ]}
            value={""}
            onChange={(val) => {
              setMenuOpen(false);
              if (val === "add") setShowAddEventModal(true);
            }}
            className="absolute top-10 right-0 w-48 z-20 animate-fade-in mt-2 rounded-lg shadow-lg bg-white border border-gray-200"
          />
        )}
      </div>

      {/* Calendar content restored */}
      <div className="font-semibold mb-4 text-lg">Calendar</div>
      <div className="w-full flex justify-center">
        <Calendar
          value={value}
          onChange={setValue}
          className="react-calendar scale-95 md:scale-110"
        />
      </div>
      {/* Modal Add Event */}
      <CreatePrestasi
        open={showAddEventModal}
        onClose={() => setShowAddEventModal(false)}
      />
    </div>
  );
}
