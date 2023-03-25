import Fallback from "@/components/user-responses/Fallback";
import MainLayout from "@/layout/MainLayout";
import React from "react";

const Likes = () => {
  return <Fallback />;
};

Likes.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>;
};

export default Likes;
