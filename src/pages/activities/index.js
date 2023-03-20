import MainLayout from "@/layout/MainLayout";
import React from "react";

const Feed = () => {
  return <div>Feed</div>;
};

Feed.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>;
};

export default Feed;
