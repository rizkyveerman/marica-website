import { ErrorMessage, Formik, Form, Field } from "formik";
import Button from "@/components/buttons/Button";
import Link from "next/link";
import Footer from "@/widgets/Footer";
import Image from "next/image";
import watching from "@/images/watching.jpg";

function LoginPage() {
  const passwordRegex = /^[A-Za-z\d@$!%*?&]{8,}$/;

  return (
    <>
      <article className="grid grid-cols-1 md:grid-cols-2 h-screen">
        <section className="grid place-content-center p-4">
          <div className="min-w-[350px] md:w-96 max-w-lg p-4 rounded-2xl grid gap-4">
            <h2>Masuk dulu, yuk!</h2>
            <p className="text-slate-500 text-justify">
              Masuk ke akun Marica kamu dan nikmati berbagai kategori film dan
              series yang kamu suka!
            </p>
            <Formik
              initialValues={{
                email: "",
                password: "",
              }}
              validate={(values) => {
                const errors = {};

                //email validation
                if (!values.email) {
                  errors.email = "required";
                } else if (
                  !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                ) {
                  errors.email =
                    "Email tidak valid! Pastikan kamu email kamu tepat!";
                }

                //password validation
                if (!values.password) {
                  errors.password = "required";
                } else if (!passwordRegex.test(values.password)) {
                  errors.password =
                    "Panjang minimal password adalah 8 karakter.";
                }

                return errors;
              }}
              onSubmit={async (values, { setSubmitting }) => {
                const response = await fetch(
                  "https://marica-backend.vercel.app/api/v1/user/login",
                  {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                      password: values.password,
                      email: values.email,
                    }),
                  }
                );

                // Handle response
                const data = await response.json();
              }}
            >
              {({ isSubmitting }) => (
                <Form className="grid grid-cols-1 gap-4 w-full">
                  <div className="flex gap-4"></div>
                  <div className="email w-full relative grid gap-2">
                    <p>Masukkan email</p>
                    <Field
                      type="email"
                      name="email"
                      className="focus:text-pink-600 focus:outline-2 text-slate-700 focus:outline-pink-600 w-full py-3 px-6 rounded-lg bg-abu-terang"
                    />
                    <ErrorMessage
                      name="email"
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
