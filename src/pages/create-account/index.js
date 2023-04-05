import watching from "@/images/watching.jpg";
import { routeRedirect } from "@/libs/route-redirect";
import { setLoading } from "@/store/slices/user";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleCheck,
  faEye,
  faEyeSlash,
  faSpinner,
} from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import Link from "next/link";
import Button from "@/components/buttons/Button";
import Footer from "@/widgets/Footer";
import Logo from "@/components/Logo";
import Image from "next/image";
import { Form, Formik, Field, ErrorMessage } from "formik";
import PasswordGuide from "@/components/inputs/PasswordGuide";
import { register } from "@/store/actions/user-actions";

const CreateAccount = () => {
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();
  const dispatch = useDispatch();
  const { isLoading, error, userInfo, status } = useSelector(
    (state) => state.user
  );

  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  useEffect(() => {
    if (error) {
      return;
    }
    routeRedirect(router, userInfo);
  }, [error, router, userInfo]);

  return (
    <>
      {status === 201 && (
        <section className="z-50 fixed left-0 top-0 bottom-0 right-0 bg-white/50 backdrop-blur-sm grid place-content-center">
          <div
            className={`p-4 rounded-xl ${
              status === 201 ? "bg-green-500" : "bg-red-500"
            } grid place-content-center`}
          >
            <p className="text-white max-w-xs text-center mb-4">
              {status === 201
                ? "Berhasil buat akun! Silahkan cek email kamu untuk verifikasi akun dan kemudian login ke Marica😊. Terimakasih!"
                : "Yah gagal buat akun, mungkin email sudah digunakan, coba email lain yuk!"}
            </p>
            <Button
              icon={faCircleCheck}
              isLink
              href="/login"
              className="border-white text-white hover:bg-white hover:text-green-500 hover:border-none"
            >
              Saya sudah verifikasi
            </Button>
          </div>
        </section>
      )}
      <article className="grid grid-cols-1 md:grid-cols-2 min-h-screen">
        <section className="grid place-content-center p-4">
          <div className="min-w-[350px] md:w-96 max-w-lg p-4 rounded-2xl grid gap-4">
            <Logo />
            <h3>Buat akun Marica Gratis!</h3>
            <Formik
              initialValues={{
                email: "",
                password: "",
                firstname: "",
                lastname: "",
              }}
              validate={(values) => {
                const errors = {};

                //firstname validation
                if (!values.firstname) {
                  errors.firstname = "required";
                }

                //lastname validation
                if (!values.lastname) {
                  errors.lastname = "required";
                }

                //email validation
                if (!values.email) {
                  errors.email = "required";
                } else if (
                  !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                ) {
                  errors.email =
                    "Email tidak valid! sepertinya kamu melupakan simbol @";
                }

                //password validation
                if (!values.password) {
                  errors.password = "required";
                } else if (!passwordRegex.test(values.password)) {
                  errors.password =
                    "Password harus terdiri dari huruf kecil, huruf kapital, angka, dan simbol @$!%*?&";
                }
                return errors;
              }}
              onSubmit={async (values) => {
                dispatch(register(values));
              }}
            >
              {({ isSubmitting }) => (
                <Form className="grid grid-cols-1 gap-4 w-full">
                  <div className="flex gap-4">
                    <div className="email w-full relative grid gap-2">
                      <p>Nama depan*</p>
                      <Field
                        type="text"
                        name="firstname"
                        className="focus:text-sky-600 focus:outline-2 text-slate-700 focus:outline-sky-600 w-full py-3 px-6 rounded-lg bg-abu-terang"
                      />
                      <ErrorMessage
                        name="firstname"
                        component="div"
                        className="m-auto absolute top-full p-2 rounded-xl bg-red-100 text-red-600 before:block before:absolute before:left-1/2 before:bottom-full before:w-3 before:h-3 before:bg-red-100 before:translate-y-1/2 before:-translate-x-1/2 before:rotate-45 before:rounded-sm z-10"
                      />
                    </div>
                    <div className="email w-full relative grid gap-2">
                      <p>Nama belakang*</p>
                      <Field
                        type="text"
                        name="lastname"
                        className="focus:text-sky-600 focus:outline-2 text-slate-700 focus:outline-sky-600 w-full py-3 px-6 rounded-lg bg-abu-terang"
                      />
                      <ErrorMessage
                        name="lastname"
                        component="div"
                        className="m-auto absolute top-full p-2 rounded-xl bg-red-100 text-red-600 before:block before:absolute before:left-1/2 before:bottom-full before:w-3 before:h-3 before:bg-red-100 before:translate-y-1/2 before:-translate-x-1/2 before:rotate-45 before:rounded-sm z-10"
                      />
                    </div>
                  </div>
                  <div className="email w-full relative grid gap-2">
                    <p>Masukkan email</p>
                    <Field
                      type="email"
                      name="email"
                      className="focus:text-sky-600 focus:outline-2 text-slate-700 focus:outline-sky-600 w-full py-3 px-6 rounded-lg bg-abu-terang"
                    />
                    <ErrorMessage
                      name="email"
                      component="div"
                      className="m-auto absolute top-full p-2 rounded-xl bg-red-100 text-red-600 before:block before:absolute before:left-1/2 before:bottom-full before:w-3 before:h-3 before:bg-red-100 before:translate-y-1/2 before:-translate-x-1/2 before:rotate-45 before:rounded-sm z-10"
                    />
                  </div>
                  <div className="password w-full relative grid gap-2">
                    <p>Masukkan password</p>
                    <div className="relative w-full">
                      <FontAwesomeIcon
                        icon={showPassword ? faEye : faEyeSlash}
                        height={14}
                        className={`${
                          showPassword ? "text-sky-600" : "text-slate-400"
                        } absolute right-4 top-1/2 -translate-y-1/2`}
                        onClick={() => setShowPassword(!showPassword)}
                      />
                      <Field
                        type={showPassword ? "text" : "password"}
                        name="password"
                        className="w-full focus:text-sky-600 focus:outline-2 text-slate-700 focus:outline-sky-600 py-3 px-6 rounded-lg bg-abu-terang"
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
                    isClicked={() => "clicked"}
                  >
                    {isLoading ? (
                      <p className="flex items-center gap-2">
                        <span>
                          <FontAwesomeIcon
                            icon={faSpinner}
                            height={16}
                            className="text-white animate-spin"
                          />
                        </span>
                        <span>Tunggu sebentar</span>
                      </p>
                    ) : (
                      "Buat akun"
                    )}
                  </Button>
                </Form>
              )}
            </Formik>
            <p className="text-sm text-abu text-center">
              Sudah punya akun Marica?{" "}
              <Link href="/login" className="text-sky-600 underline">
                Masuk disini
              </Link>
            </p>
          </div>
        </section>
        <section className="w-full h-full p-4 hidden md:grid">
          <div className="relative p-4 md:grid w-full h-full place-content-center rounded-2xl overflow-hidden">
            <Image
              src={watching}
              alt="movie"
              priority
              fill
              className="object-cover object-center"
              placeholder="blur"
            />
          </div>
        </section>
      </article>
      <Footer />
    </>
  );
};

export default CreateAccount;
