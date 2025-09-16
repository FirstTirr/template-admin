import React, { useState } from "react";
import JurusanCard from "./JurusanCard";

interface JurusanCardWithBadgeProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  id: number;
}

const JurusanCardWithBadge: React.FC<JurusanCardWithBadgeProps> = (props) => {
  const [showEdit, setShowEdit] = useState(false);
  return (
    <div className="relative group rounded-2xl border-2 border-blue-200 bg-white/90 shadow-xl hover:shadow-blue-200/60 transition-all duration-200 overflow-hidden">
      <JurusanCard {...props} showEdit={showEdit} setShowEdit={setShowEdit} />
      {!showEdit && (
        <span className="absolute bottom-4 left-4 bg-blue-100 text-blue-700 text-xs px-3 py-1 rounded-full shadow opacity-0 group-hover:opacity-100 transition">
          ID-{props.id}
        </span>
      )}
    </div>
  );
};

export default JurusanCardWithBadge;
