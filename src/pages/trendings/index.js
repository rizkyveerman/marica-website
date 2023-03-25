import MainLayout from "@/layout/MainLayout";
import React from "react";

const Trendings = () => {
  return <section className="p-4">Trendings</section>;
};

Trendings.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>;
};

export default Trendings;
