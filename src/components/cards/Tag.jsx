import React from "react";

const Tag = ({ children }) => {
  return (
    <div className="bg-gradient-to-t from-pink-600 to-pink-400 text-white cursor-pointer py-1 px-2 text- rounded-full">
      {children}
    </div>
  );
};

export default Tag;
