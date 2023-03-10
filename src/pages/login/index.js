import Button from "@/components/Button";
import MainLayout from "@/layout/MainLayout";
import { useState, useRef } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLogin, setIsLogin] = useState(true);

  const emailRef = useRef();
  const passwordRef = useRef();

  const onEmailInput = (e) => setEmail((prev) => (prev = e.target.value));
  const onPasswordInput = (e) => setPassword((prev) => (prev = e.target.value));

  return (
    <article>
      <section className="px-4 pb-4 md:px-16 md:pb-4 flex">
        <div className="w-full md:w-1/2 h-[560px] bg-white rounded-tl-2xl rounded-bl-2xl flex flex-col gap-4 justify-center p-4 md:p-8 lg:p-16">
          <h3 className="relative before:absolute before:top-[100%] before:h-[1px] before:w-1/6 before:bg-arang before:rounded-full">
            {isLogin ? "Masuk ke Marica" : "Buat akun di Marica"}
          </h3>
          {isLogin ? (
            <form id="login-form" className="grid gap-2">
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
          ) : (
            <form id="form-register" className="grid gap-2">
              <div className="grid gap-2">
                <p>Siapa nama kamu?</p>
                <div className="flex gap-2">
                  <input
                    type="text"
                    id="firstname"
                    name="firstname"
                    ref={passwordRef}
                    value={password}
                    onChange={onPasswordInput}
                    placeholder="Nama Depan"
                    className="px-4 py-3 border border-abu rounded-lg max-w-xs"
                  />
                  <input
                    type="text"
                    id="lastname"
                    name="lastname"
                    ref={passwordRef}
                    value={password}
                    onChange={onPasswordInput}
                    placeholder="Nama Belakang"
                    className="px-4 py-3 border border-abu rounded-lg max-w-1/2"
                  />
                </div>
              </div>
              <div className="grid gap-2">
                <p>Kamu tinggal dimana?</p>
                <div className="flex gap-2">
                  <input
                    type="text"
                    id="alamat"
                    name="alamat"
                    ref={passwordRef}
                    value={password}
                    onChange={onPasswordInput}
                    placeholder="Nama Kecamatan"
                    className="px-4 py-3 border border-abu rounded-lg max-w-xs"
                  />
                  <input
                    type="text"
                    id="kota"
                    name="kota"
                    ref={passwordRef}
                    value={password}
                    onChange={onPasswordInput}
                    placeholder="Nama Kota/Kab"
                    className="px-4 py-3 border border-abu rounded-lg max-w-1/2"
                  />
                </div>
              </div>

              <div className="flex gap-2 items-center">
                <Button type="primary">Lanjut</Button>
                <p className="text-abu">
                  <span className="font-regular mr-1">1</span>/
                  <span className="font-bold ml-1">2</span>
                </p>
              </div>
            </form>
          )}
          {isLogin ? (
            <div>
              <p className="mb-2 mt-4 text-sm">Belum punya akun Marica?</p>
              <Button type="secondary" isClicked={() => setIsLogin(!isLogin)}>
                Buat akun baru
              </Button>
            </div>
          ) : (
            <div>
              <p className="mb-2 mt-4 text-sm">Sudah punya akun Marica?</p>
              <Button type="secondary" isClicked={() => setIsLogin(!isLogin)}>
                Langsung masuk
              </Button>
            </div>
          )}
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
