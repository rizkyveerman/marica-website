import MainLayout from "@/layout/MainLayout";
import React from "react";

const Watchlist = () => {
  return <div>Watchlist</div>;
};

Watchlist.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>;
};

export default Watchlist;
