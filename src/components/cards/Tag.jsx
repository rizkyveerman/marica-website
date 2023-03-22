import React from "react";

const Tag = ({ children }) => {
  return (
    <div className="border-2 border-pink-200 text-pink-300 hover:text-white hover:bg-gradient-to-t from-pink-600 to-pink-400 cursor-pointer py-1 px-2 text-sm rounded-full">
      {children}
    </div>
  );
};

export default Tag;
