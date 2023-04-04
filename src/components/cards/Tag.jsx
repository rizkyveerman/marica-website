import React from "react";

const Tag = ({ children }) => {
  return (
    <div className="border-2 border-sky-200 text-sky-300 hover:text-white hover:bg-gradient-to-t from-sky-600 to-sky-400 cursor-pointer py-1 px-2 text-sm rounded-full">
      {children}
    </div>
  );
};

export default Tag;
