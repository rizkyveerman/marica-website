import React from "react";
import Button from "./Button";

const Sidebar = () => {
  return (
    <aside className="w-full h-full pl-4 pt-4">
      <div className="p-4 rounded-xl bg-white w-full">
        <div>
          <p>Feed</p>
          <ul>
            <li className="p-4">Browse</li>
            <li className="p-4">Watchlist</li>
            <li className="p-4">Coming soon</li>
          </ul>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
