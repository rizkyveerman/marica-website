import MainLayout from "@/layout/MainLayout";
import React from "react";

const Browser = () => {
  return <div>Browser</div>;
};

Browser.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>;
};

export default Browser;
