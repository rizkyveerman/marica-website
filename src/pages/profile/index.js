import Link from "next/link";
import React from "react";

const Profile = () => {
  return (
    <article className="bg-abu-terang">
      <section className="w-full min-h-screen p-4 grid place-content-center">
        <h2 className="mb-8">Siapa yang menonton?</h2>
        <div className="flex justify-center gap-4">
          <div>
            <div className="h-20 w-20 bg-mangga rounded-lg"></div>
            <p className="">Imam</p>
          </div>
          <div>
            <div className="h-20 w-20 bg-mangga rounded-lg"></div>
            <p className="">Joni</p>
          </div>
          <div>
            <Link
              href="/add-kids"
              className="h-20 w-20 border grid place-content-center border-mangga rounded-lg text-2xl"
            >
              +
            </Link>
          </div>
        </div>
      </section>
    </article>
  );
};

export default Profile;
