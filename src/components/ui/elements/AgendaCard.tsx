import React from "react";

interface AgendaCardProps {
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  color: string;
  icon: string;
}

const AgendaCard: React.FC<AgendaCardProps> = ({
  title,
  description,
  date,
  time,
  location,
  color,
  icon,
}) => (
  <div
    className={`relative rounded-2xl shadow-xl p-6 bg-white/90 border-2 ${color} flex flex-col min-h-[200px] w-full transition-all hover:shadow-blue-200/60 hover:-translate-y-1 duration-200`}
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
          Agenda
        </span>
      </div>
    </div>
    <p className="text-gray-700 text-sm mb-2 break-words whitespace-pre-line">
      {description}
    </p>
    <div className="flex flex-wrap gap-2 mt-auto text-xs text-gray-600">
      <span className="bg-gray-100 px-2 py-1 rounded font-semibold">
        {date}
      </span>
      <span className="bg-gray-100 px-2 py-1 rounded font-semibold">
        {time}
      </span>
      <span className="bg-gray-100 px-2 py-1 rounded font-semibold">
        {location}
      </span>
    </div>
  </div>
);

export default AgendaCard;
