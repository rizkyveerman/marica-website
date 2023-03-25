import Fallback from "@/components/user-responses/Fallback";
import MainLayout from "@/layout/MainLayout";
import React from "react";

const Playlists = () => {
  return <Fallback />;
};

Playlists.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>;
};

export default Playlists;
