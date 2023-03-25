import Fallback from "@/components/user-responses/Fallback";
import MainLayout from "@/layout/MainLayout";
import React from "react";

const Help = () => {
  return <Fallback />;
};

Help.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>;
};

export default Help;
