import Button from "@/components/Button";
import MainLayout from "@/layout/MainLayout";
import Link from "next/link";
import { useState, useRef } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLogin, setIsLogin] = useState(true);
  const [registerStep, setRegisterStep] = useState(false);

  const emailRef = useRef();
  const passwordRef = useRef();

  const onEmailInput = (e) => setEmail((prev) => (prev = e.target.value));
  const onPasswordInput = (e) => setPassword((prev) => (prev = e.target.value));

  const onRegisterHandler = (e) => {
    e.preventDefault();
    console.log("register: berhasil");
  };

  return (
    <article>
      <section>
        <p>
          {" "}
          form login/register, validasi dan state management akan menggunakan{" "}
          <Link className="text-indigo-600" href="https://formik.org/">
            Formik
          </Link>
        </p>
      </section>
    </article>
  );
};

Login.getLayout = function getLayout(page) {
  return <MainLayout title="Masuk ke Marica">{page}</MainLayout>;
};

export default Login;
