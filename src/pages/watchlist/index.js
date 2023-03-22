import MainLayout from "@/layout/MainLayout";
import React from "react";

const Watchlist = () => {
  return <section className="p-4">Watchlist</section>;
};

Watchlist.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>;
};

export default Watchlist;
