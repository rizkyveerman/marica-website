import Button from "@/components/buttons/Button";
import Footer from "@/components/Footer";
import Logo from "@/components/Logo";
import Image from "next/image";
import movie from "@/images/movie.png";
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
      <article className="grid grid-cols-1 md:grid-cols-2 h-screen bg-abu-terang">
        <section className="grid place-content-center p-4">
          <div className="min-w-[350px] md:w-[450px] max-w-xl bg-white p-4 rounded-2xl grid gap-4">
            <Logo styles="m-auto" />
            <h3>Masuk ke Marica</h3>
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
              <Button
                type="submit"
                variant="primary"
                isClicked={() => "clicked"}
              >
                Masuk
              </Button>
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
