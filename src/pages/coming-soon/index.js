import MainLayout from "@/layout/MainLayout";
import React from "react";

const ComingSoon = () => {
  return <div>ComingSoon</div>;
};

ComingSoon.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>;
};
export default ComingSoon;
