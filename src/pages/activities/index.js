import MainLayout from "@/layout/MainLayout";
import React from "react";

const Feed = () => {
  return <section className="p-4">Feed</section>;
};

Feed.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>;
};

export default Feed;
