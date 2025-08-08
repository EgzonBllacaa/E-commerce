import React from "react";

const SectionLine = ({ children, className = "" }) => {
  return (
    <div className="text-zinc-400  border-zinc-300 relative">
      <div className={`absolute -top-3 bg-white px-2 -left-2 ${className}`}>
        {children}
      </div>
    </div>
  );
};

export default SectionLine;
