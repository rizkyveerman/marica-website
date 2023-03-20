import React from "react";
import MainLayout from "@/layout/MainLayout";

const Help = () => {
  return <div>Help</div>;
};

Help.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>;
};

export default Help;
