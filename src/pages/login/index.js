import background from "@/images/background.jpg";
import Button from "@/components/buttons/Button";
import Link from "next/link";
import Footer from "@/widgets/Footer";
import Image from "next/image";
import watching from "@/images/watching.jpg";
import { useState, useRef } from "react";
import Input from "@/components/inputs/Input";

function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const usernameRef = useRef();
  const passwordRef = useRef();

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
      <article className="grid grid-cols-1 md:grid-cols-2 h-screen">
        <section className="grid place-content-center p-4">
          <div className="z-10 min-w-[350px] md:w-96 max-w-lg p-4 rounded-2xl grid gap-4">
            <h2>Masuk dulu, yuk!</h2>
            <p className="text-slate-500 text-justify">
              Masuk ke akun Marica kamu dan nikmati berbagai kategori film dan
              series yang kamu suka!
            </p>
            <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4">
              <Input
                placeholder="Masukkan email"
                ref={usernameRef}
                label="Username"
                type="text"
                name="username"
                onChange={(e) => setUsername(e.target.value)}
              />
              <Input
                placeholder="Masukkan password"
                ref={usernameRef}
                label="Password"
                type="password"
                name="password"
                onChange={(e) => setPassword(e.target.value)}
              />
              <div className="flex justify-between items-center">
                <div className="flex gap-1 items-center justify-start cursor-pointer">
                  <input
                    type="checkbox"
                    name="remember-me"
                    id="remember-me"
                    className="w-4 h-4"
                  />
                  <label htmlFor="remember-me" className="text-slate-400">
                    Remember me
                  </label>
                </div>
                <Link
                  href="/reset-password"
                  className="text-pink-600 underline"
                >
                  Lupa password?
                </Link>
              </div>
            
            </form>
            <p className="text-sm text-abu text-center">
              Belum punya akun Marica?{" "}
              <Link href="/create-account" className="text-pink-600 underline">
                Buat disini
              </Link>
            </p>
          </div>
        </section>
        <section className="w-full h-full p-4 hidden md:grid">
          <div className="relative p-4 md:grid w-full h-full place-content-center rounded-2xl overflow-hidden">
            <Image
              src={watching}
              alt="movie"
              fill
              objectFit="cover"
              objectPosition="center"
            />
          </div>
        </section>
      </article>
      <Footer />
    </>
  );
}

export default LoginPage;
