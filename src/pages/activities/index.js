import Fallback from "@/components/user-responses/Fallback";
import MainLayout from "@/layout/MainLayout";
import React from "react";

const Feed = () => {
  return <Fallback /> ;
};

Feed.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>;
};

export default Feed;
