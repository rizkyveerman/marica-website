import React from "react";

const TextInput = ({ children }) => {
  return (
    <input
      className="max-w-xs rounded-lg px-4 py-3 bg-transparent border border-abu-terang placeholder:text-abu-terang"
      placeholder="Coba cari Cocomelon..."
    />
  );
};

export default TextInput;
