import MainLayout from "@/layout/MainLayout";
import React from "react";

const Likes = () => {
  return <section className="p-4">Likes</section>;
};

Likes.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>;
};

export default Likes;
