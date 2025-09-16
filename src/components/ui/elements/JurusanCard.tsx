import React, { useState } from "react";
import EditJurusan from "./EditJurusan";

interface JurusanCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  showEdit?: boolean;
  setShowEdit?: (v: boolean) => void;
}

const JurusanCard: React.FC<JurusanCardProps> = ({
  title,
  description,
  icon,
  color,
}) => {
  const [showEdit, setShowEdit] = useState(false);
  // Helper to extract icon string if needed
  const getIconString = (icon: React.ReactNode) => {
    if (typeof icon === "string") return icon;
    if (
      React.isValidElement(icon) &&
      typeof (icon as React.ReactElement<any, any>).props.children === "string"
    )
      return (icon as React.ReactElement<any, any>).props.children;
    return "";
  };

  return (
    <div
      className={`relative rounded-2xl shadow-xl p-6 bg-white/90 border-2 ${color} flex flex-col items-start transition-all hover:shadow-blue-200/60 hover:-translate-y-1 duration-200 min-h-[220px] w-full`}
    >
      <div className="flex items-center gap-3 mb-3 w-full">
        <div className="text-4xl bg-blue-100 text-blue-600 rounded-xl p-2 border border-blue-200 shadow-sm">
          {icon}
        </div>
        <div className="flex-1 min-w-0">
          <h3
            className="font-extrabold text-lg text-blue-900 mb-1 leading-tight break-words"
            title={title}
          >
            {title}
          </h3>
          <span className="inline-block bg-blue-50 text-blue-600 text-xs font-bold px-2 py-0.5 rounded uppercase tracking-wider shadow-sm">
            Admin Panel
          </span>
        </div>
      </div>
      <p className="text-gray-700 text-sm mt-2 break-words whitespace-pre-line">
        {description}
      </p>
      <div className="absolute bottom-4 right-4 flex gap-2 transition opacity-100 sm:opacity-0 sm:group-hover:opacity-100">
        <button
          className="bg-blue-600 text-white px-3 py-1 rounded shadow hover:bg-blue-700 text-xs font-bold"
          type="button"
          onClick={() => setShowEdit(true)}
        >
          Edit
        </button>
        {showEdit && (
          <EditJurusan
            open={showEdit}
            onClose={() => setShowEdit(false)}
            initialData={{
              title,
              description,
              icon: getIconString(icon),
              color,
            }}
            onEdit={() => setShowEdit(false)}
          />
        )}
        <button className="bg-red-100 text-red-600 px-3 py-1 rounded shadow hover:bg-red-200 text-xs font-bold">
          Hapus
        </button>
      </div>
    </div>
  );
};

export default JurusanCard;
