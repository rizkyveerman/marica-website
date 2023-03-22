import React from "react";

const Tags = ({ children }) => {
  return (
    <div className="cursor-pointer py-1 px-2 text-sm rounded-full border-2 border-semangka/20">
      {children}
    </div>
  );
};

export default Tags;
