import { ErrorMessage, Formik, Form, Field } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { useEffect } from "react";
import axios from "axios";
import Button from "@/components/buttons/Button";
import Link from "next/link";
import Footer from "@/widgets/Footer";
import Image from "next/image";
import watching from "@/images/watching.jpg";
import { login } from "@/store/actions/user-actions";
import { userLogin } from "@/store/slices/user";
import PasswordGuide from "@/components/inputs/PasswordGuide";

function LoginPage() {
  const dispatch = useDispatch();
  const router = useRouter();
  const { error, isLoading, userInfo } = useSelector((state) => state.user);

  useEffect(() => {
    if (userInfo) {
      if (router.route === "/login") router.push("/users");
    }
  }, [router, userInfo]);

  return (
    <>
      <article className="grid grid-cols-1 md:grid-cols-2 h-screen">
        <section className="relative grid place-content-center p-4">
          <div className="min-w-[350px] md:w-96 max-w-lg p-4 rounded-2xl grid gap-4">
            <h2>Masuk dulu, yuk!</h2>
            <p className="text-slate-500 text-justify">
              Masuk ke akun Marica kamu dan nikmati berbagai kategori film dan
              series yang kamu suka!
            </p>
            <Formik
              initialValues={{
                username: "",
                password: "",
              }}
              validate={(values) => {
                const errors = {};

                //username validation
                if (!values.username) {
                  errors.username = "required";
                }

                //password validation
                if (!values.password) {
                  errors.password = "required";
                } else if (values.password < 0) {
                  errors.password =
                    "Panjang password harus lebih dari 8 karakter";
                }

                return errors;
              }}
              onSubmit={(values) => {
                console.log("values", values);
                dispatch(login(values));
              }}
            >
              {({ isSubmitting }) => (
                <Form className="grid grid-cols-1 gap-4 w-full">
                  <div className="flex gap-4"></div>
                  <div className="email w-full relative grid gap-2">
                    <p>Masukkan username</p>
                    <Field
                      type="username"
                      name="username"
                      className="focus:text-pink-600 focus:outline-2 text-slate-700 focus:outline-pink-600 w-full py-3 px-6 rounded-lg bg-abu-terang"
                    />
                    <ErrorMessage
                      name="username"
                      component="div"
                      className="m-auto absolute top-full p-2 rounded-xl bg-red-100 text-red-600 before:block before:absolute before:left-1/2 before:bottom-full before:w-3 before:h-3 before:bg-red-100 before:translate-y-1/2 before:-translate-x-1/2 before:rotate-45 before:rounded-sm z-10"
                    />
                  </div>
                  <div className="password w-full relative grid gap-2">
                    <p>Masukkan password</p>
                    <Field
                      type="password"
                      name="password"
                      className="focus:text-pink-600 focus:outline-2 text-slate-700 focus:outline-pink-600 py-3 px-6 rounded-lg bg-abu-terang"
                    />
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
                    Masuk
                  </Button>
                </Form>
              )}
            </Formik>
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
