import MainLayout from "@/layout/MainLayout";
import React from "react";

const Playlists = () => {
  return (
    <article>
      <section className="p-4">Playlists</section>
    </article>
  );
};

Playlists.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>;
};

export default Playlists;
