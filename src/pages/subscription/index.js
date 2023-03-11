import MainLayout from "@/layout/MainLayout";
import React, { useState } from "react";

const Subscription = () => {
  return (
    <article>
      <section className="flex justify-center items-center h-full p-4 md:p-16">
        <div
          id="container"
          className="w-fit p-8 rounded-2xl bg-white grid gap-8 lg:gap-20"
        >
          <ul
            id="features"
            className="w-full flex flex-col md:flex-row justify-center gap-4 items-center"
          >
            <li className="w-60 h-auto">
              <div>
                <p>Konten tanpa batas</p>
              </div>
            </li>
            <li className="w-60 h-auto">
              <div>
                <p>Streaming dengan kualitas HD</p>
              </div>
            </li>
            <li className="w-60 h-auto">
              <div>
                <p>Putar di beberapa perangkat sekaligus.</p>
              </div>
            </li>
          </ul>
          <div
            id="subscribe"
            className="flex flex-col md:flex-row justify-between items-start gap-4"
          >
            <div className="border border-abu rounded-xl flex-1 w-full h-auto p-4">
              <p>
                Rp<span className="font-bold text-xl"> 35.000 </span>/bulan
              </p>
            </div>
            <div className="border border-abu rounded-xl flex-1 w-full h-auto">
              <p className="bg-blueberry text-white rounded-xl px-3 text-sm py-1 flex-1 w-fit">
                ⭐Direkomendasikan!
              </p>
              <div className="p-4">
                <p>
                  Rp<span className="font-bold text-xl"> 250.000 </span>/tahun
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
};

Subscription.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>;
};

export default Subscription;
