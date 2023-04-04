import React from "react";

const PasswordGuide = () => {
  return (
    <div className="flex items-center justify-between mb-2 md:mb-4 px-4">
      <div className="flex flex-col items-center">
        <p className="font-semibold text-lg text-sky-600">a</p>
        <p className="text-slate-500 text-xs">Lowercase</p>
      </div>
      <div className="flex flex-col items-center">
        <p className="font-semibold text-lg text-sky-600">A</p>
        <p className="text-slate-500 text-xs">Uppercase</p>
      </div>
      <div className="flex flex-col items-center">
        <p className="font-semibold text-lg text-sky-600">123</p>
        <p className="text-slate-500 text-xs">Number</p>
      </div>
      <div className="flex flex-col items-center">
        <p className="font-semibold text-lg text-sky-600">9%</p>
        <p className="text-slate-500 text-xs">Symbols</p>
      </div>
    </div>
  );
};

export default PasswordGuide;
