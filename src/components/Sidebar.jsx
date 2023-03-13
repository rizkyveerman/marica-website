import React from "react";
import Button from "./Button";

const Sidebar = () => {
  return (
    <aside className="w-full h-screen sticky top-10">
      <div className="p-4 rounded-xl w-full">
        <div>
          <ul>
            <li className="py-4 hover:bg-white rounded-xl pl-4">Home</li>
            <li className="py-4 hover:bg-white rounded-xl pl-4">Browse</li>
            <li className="py-4 hover:bg-white rounded-xl pl-4">Watchlist</li>
            <li className="py-4 hover:bg-white rounded-xl pl-4">Coming soon</li>
          </ul>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
