import { ErrorMessage, Formik, Form, Field } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import axios from "axios";
import Button from "@/components/buttons/Button";
import Link from "next/link";
import Footer from "@/widgets/Footer";
import Image from "next/image";
import watching from "@/images/watching.jpg";
import { login } from "@/store/actions/user-actions";
import PasswordGuide from "@/components/inputs/PasswordGuide";
import Logo from "@/components/Logo";
import {
  faEye,
  faEyeSlash,
  faSpinner,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();
  const router = useRouter();
  const { error, isLoading, userInfo } = useSelector((state) => state.user);

  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  useEffect(() => {
    if (userInfo) router.push("/");
  }, [router, userInfo]);

  return (
    <>
      <div className="fixed top-4">{error}</div>
      <article className="grid grid-cols-1 md:grid-cols-2 h-screen">
        <section className="relative grid place-content-center p-4">
          <div className="min-w-[350px] md:w-96 max-w-lg p-4 rounded-2xl grid gap-4">
            <Logo />
            <h2>Masuk dulu, yuk!</h2>
            <p className="text-slate-500 text-justify">
              Masuk ke akun Marica kamu dan nikmati berbagai kategori film dan
              series yang kamu suka!
            </p>
            <Formik
              initialValues={{
                identifier: "",
                password: "",
              }}
              validate={(values) => {
                const errors = {};

                //identifier validation
                if (!values.identifier) {
                  errors.identifier = "required";
                }

                //password validation
                if (!values.password) {
                  errors.password = "required";
                } else if (!passwordRegex.test(values.password)) {
                  errors.password =
                    "Password harus terdiri dari huruf kecil, huruf kapital, angka, dan simbol";
                }

                return errors;
              }}
              onSubmit={(values) => {
                dispatch(login(values));
              }}
            >
              {({ isSubmitting }) => (
                <Form className="grid grid-cols-1 gap-4 w-full">
                  <div className="email w-full relative grid gap-2">
                    <p>Masukkan username atau email</p>
                    <Field
                      type="identifier"
                      name="identifier"
                      className="focus:text-pink-600 focus:outline-2 text-slate-700 focus:outline-pink-600 w-full py-3 px-6 rounded-lg bg-abu-terang"
                    />
                    <ErrorMessage
                      name="identifier"
                      component="div"
                      className="m-auto absolute top-full p-2 rounded-xl bg-red-100 text-red-600 before:block before:absolute before:left-1/2 before:bottom-full before:w-3 before:h-3 before:bg-red-100 before:translate-y-1/2 before:-translate-x-1/2 before:rotate-45 before:rounded-sm z-10"
                    />
                  </div>
                  <div className="password w-full relative grid gap-2">
                    <div className="flex justify-between items-center">
                      <p>Masukkan password</p>
                      <Link
                        href="/reset-password"
                        className="text-pink-600 underline text-sm"
                      >
                        Lupa password?
                      </Link>
                    </div>
                    <div className="relative w-full">
                      <FontAwesomeIcon
                        icon={showPassword ? faEye : faEyeSlash}
                        height={14}
                        className={`${
                          showPassword ? "text-pink-600" : "text-slate-400"
                        } absolute right-4 top-1/2 -translate-y-1/2`}
                        onClick={() => setShowPassword(!showPassword)}
                      />
                      <Field
                        type={showPassword ? "text" : "password"}
                        name="password"
                        className="w-full focus:text-pink-600 focus:outline-2 text-slate-700 focus:outline-pink-600 py-3 px-6 rounded-lg bg-abu-terang"
                      />
                    </div>
                    <PasswordGuide />
                    <ErrorMessage
                      name="password"
                      component="div"
                      className="m-auto absolute top-full p-2 rounded-xl bg-red-100 text-red-600 before:block before:absolute before:left-1/2 before:bottom-full before:w-3 before:h-3 before:bg-red-100 before:translate-y-1/2 before:-translate-x-1/2 before:rotate-45 before:rounded-sm z-10"
                    />
                  </div>
                  <Button
                    type="submit"
                    variant="primary"
                    disabled={isSubmitting}
                    isClicked={() => "login"}
                  >
                    {isLoading ? (
                      <span className="flex items-center gap-2">
                        {
                          <FontAwesomeIcon
                            icon={faSpinner}
                            height={16}
                            className="text-white animate-spin"
                          />
                        }
                        Tunggu sebentar
                      </span>
                    ) : (
                      "Masuk"
                    )}
                  </Button>
                </Form>
              )}
            </Formik>
            <p className="text-sm text-abu text-center">
              Belum punya akun Marica?{" "}
              <Link href="/create-account" className="text-pink-600 underline">
                Buat dulu
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
