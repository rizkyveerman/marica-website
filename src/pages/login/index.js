import MainLayout from "@/layout/MainLayout";
import { useState, useRef } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const emailRef = useRef();
  const passwordRef = useRef();

  const onEmailInput = (e) => setEmail((prev) => (prev = e.target.value));
  const onPasswordInput = (e) => setPassword((prev) => (prev = e.target.value));

  return (
    <article>
      <section className="px-4 pb-4 md:px-16 md:pb-4 flex">
        <div className="w-full md:w-1/2 h-[560px] bg-white rounded-tl-2xl rounded-bl-2xl grid place-content-center">
          <form className="p-4 grid gap-4">
            <div className="flex flex-col gap-2">
              <label for="email">Alamat email</label>
              <input
                type="email"
                id="email"
                name="email"
                ref={emailRef}
                value={email}
                onChange={onEmailInput}
                placeholder="Masukkan email"
                className="px-4 py-3 border border-abu rounded-lg max-w-xs"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label for="password">Alamat password</label>
              <input
                type="password"
                id="password"
                name="password"
                ref={passwordRef}
                value={password}
                onChange={onPasswordInput}
                placeholder="Masukkan password"
                className="px-4 py-3 border border-abu rounded-lg max-w-xs"
              />
            </div>
          </form>
        </div>
        <div className="hidden md:block w-1/2 h-[560px] bg-blueberry rounded-tr-2xl rounded-br-2xl"></div>
      </section>
    </article>
  );
};

Login.getLayout = function getLayout(page) {
  return <MainLayout title="Masuk ke Marica">{page}</MainLayout>;
};

export default Login;
