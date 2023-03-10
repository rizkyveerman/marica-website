import Button from "@/components/Button";
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
        <div className="w-full md:w-1/2 h-[560px] bg-white rounded-tl-2xl rounded-bl-2xl flex flex-col gap-4 justify-center p-4 md:p-8 lg:p-16">
          <h3 className="relative before:absolute before:top-[100%] before:h-[1px] before:w-1/6 before:bg-arang before:rounded-full">
            Masuk ke Marica
          </h3>
          <form className="grid gap-2">
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
            <div>
              <Button type="primary">Masuk</Button>
            </div>
          </form>
          <div>
            <p className="mb-2 mt-4 text-sm">Belum punya akun Marica?</p>
            <Button type="secondary">Buat akun baru</Button>
          </div>
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
