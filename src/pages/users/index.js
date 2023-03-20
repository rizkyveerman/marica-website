import Link from "next/link";
import React from "react";

export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await res.json();

  return {
    props: { users },
  };
}

const Profile = ({ users }) => {
  return (
    <article className="bg-abu-terang">
      <section className="w-full min-h-screen p-4 grid place-content-center">
        <h2 className="mb-8">Siapa yang menonton?</h2>
        <div className="flex justify-center gap-4">
          <ul className="grid grid-cols-4 gap-4">
            {users.map((user) => (
              <li key={user.id}>
                <Link href={`/users/${user.id}`} className="block">
                  <div className="h-20 w-20 bg-mangga rounded-lg"></div>
                  <p className="">{user.name}</p>
                </Link>
              </li>
            ))}
            <div>
              <Link
                href="/add-kids"
                className="h-20 w-20 border grid place-content-center border-mangga rounded-lg text-2xl"
              >
                +
              </Link>
            </div>
          </ul>
        </div>
      </section>
    </article>
  );
};

export default Profile;
