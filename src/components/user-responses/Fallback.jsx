import React from "react";
import Image from "next/image";
import underConstruction from "@/images/under-construction.png";

const Fallback = () => {
  return (
    <section className="w-full h-full grid place-content-center p-4">
      <Image src={underConstruction} alt="underConstruction" width={500} />
      <div>
        <h2>Sesuatu yang keren akan segera hadir!</h2>
        <div>
          <p>Halaman yang kamu tuju sedang dalam pengembangan.</p>
          <p>Stay tune untuk update terbaru!</p>
        </div>
      </div>
    </section>
  );
};

export default Fallback;
