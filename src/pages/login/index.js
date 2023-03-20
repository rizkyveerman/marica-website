import Button from "@/components/Button";
import Footer from "@/components/Footer";
import Logo from "@/components/Logo";
import Image from "next/image";
import { Form, Formik, Field, ErrorMessage } from "formik";
import movie from "@/images/movie.png";

import { useState } from "react";

function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Send login request to backend
    const response = await fetch(
      "https://marica-backend.vercel.app/api/v1/user/login",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ identifier: username, password }),
      }
    );

    // Handle response
    const data = await response.json();
    console.log(data);
  };

  return (
    <>
      <article className="grid grid-cols-1 md:grid-cols-2 h-screen bg-abu-terang">
        <section className="grid place-content-center p-4">
          <div className="min-w-[350px] md:w-[450px] max-w-xl bg-white p-4 rounded-2xl grid gap-4">
            <Logo styles="m-auto" />
            <h3>Masuk ke Marica</h3>
            <form onSubmit={handleSubmit}>
              <label>
                Username:
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </label>
              <br />
              <label>
                Password:
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </label>
              <br />
              <button type="submit">Log in</button>
            </form>
            <p className="text-sm text-abu text-center mt-10">
              Belum punya akun Marica?
            </p>

            <Button isLink type="secondary" href="/create-account">
              Buat akun
            </Button>
          </div>
        </section>

        <section className="hidden md:grid w-full h-full bg-arang place-content-center">
          <Image src={movie} alt="movie" />
        </section>
      </article>
      <Footer />
    </>
  );
}

export default LoginPage;
