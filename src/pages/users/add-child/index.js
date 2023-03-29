import { faAdd } from "@fortawesome/free-solid-svg-icons";
import { ErrorMessage, Formik, Form, Field } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { useEffect } from "react";
import axios from "axios";
import Button from "@/components/buttons/Button";
import Footer from "@/widgets/Footer";
import Image from "next/image";
import watching from "@/images/watching.jpg";
import Logo from "@/components/Logo";

function CreateChildAccount() {
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
      <article className="grid grid-cols-1 md:grid-cols-2 min-h-screen">
        <section className="grid place-content-center p-4">
          <div className="min-w-[350px] md:w-96 max-w-lg p-4 rounded-2xl grid gap-4">
            <Logo styles="m-auto" />
            <h3>Buat akun anak!</h3>
            <p className="text-slate-500">
              Tambahkan akun anak agar pengalaman menonton mereka dapat
              dipersonalisasikan.
            </p>
            <Formik
              initialValues={{
                firstname: "",
                lastname: "",
                birthDate: "",
                username: "",
              }}
              validate={(values) => {
                const errors = {};

                //username validation
                if (!values.username) {
                  errors.username = "required";
                }

                //firstname validation
                if (!values.firstname) {
                  errors.firstname = "required";
                }

                //lastname validation
                if (!values.lastname) {
                  errors.lastname = "required";
                }

                //birthdate validation
                if (!values.birthDate) {
                  errors.birthDate = "required";
                }
              }}
              onSubmit={async (values) => {
                const fullname = values.firstname + " " + values.lastname;

                await axios
                  .post(
                    "https://marica-backend.vercel.app/api/v1/user/:id/anak",
                    {
                      nama: fullname,
                      lahir: values.birthDate,
                      username: values.username,
                    }
                  )
                  .then((response) => {
                    //redirecting to select user account page
                    router.push("/users");
                    console.log("response", response);
                  })
                  .catch((err) => {
                    console.log("err", err);
                  });
              }}
            >
              {({ isSubmitting }) => (
                <Form className="grid grid-cols-1 gap-4 w-full">
                  <div className="flex gap-4">
                    <div className="w-full relative grid gap-2">
                      <p>Nama depan*</p>
                      <Field
                        type="text"
                        name="firstname"
                        className="focus:text-pink-600 focus:outline-2 text-slate-700 focus:outline-pink-600 w-full py-3 px-6 rounded-lg bg-abu-terang"
                      />
                      <ErrorMessage
                        name="firstname"
                        component="div"
                        className="m-auto absolute top-full p-2 rounded-xl bg-red-100 text-red-600 before:block before:absolute before:left-1/2 before:bottom-full before:w-3 before:h-3 before:bg-red-100 before:translate-y-1/2 before:-translate-x-1/2 before:rotate-45 before:rounded-sm z-10"
                      />
                    </div>
                    <div className="w-full relative grid gap-2">
                      <p>Nama belakang*</p>
                      <Field
                        type="text"
                        name="lastname"
                        className="focus:text-pink-600 focus:outline-2 text-slate-700 focus:outline-pink-600 w-full py-3 px-6 rounded-lg bg-abu-terang"
                      />
                      <ErrorMessage
                        name="lastname"
                        component="div"
                        className="m-auto absolute top-full p-2 rounded-xl bg-red-100 text-red-600 before:block before:absolute before:left-1/2 before:bottom-full before:w-3 before:h-3 before:bg-red-100 before:translate-y-1/2 before:-translate-x-1/2 before:rotate-45 before:rounded-sm z-10"
                      />
                    </div>
                  </div>
                  <div className="w-full relative grid gap-2">
                    <p>Buat nama pengguna</p>
                    <Field
                      type="text"
                      name="username"
                      className="focus:text-pink-600 focus:outline-2 text-slate-700 focus:outline-pink-600 w-full py-3 px-6 rounded-lg bg-abu-terang"
                    />
                    <ErrorMessage
                      name="username"
                      component="div"
                      className="m-auto absolute top-full p-2 rounded-xl bg-red-100 text-red-600 before:block before:absolute before:left-1/2 before:bottom-full before:w-3 before:h-3 before:bg-red-100 before:translate-y-1/2 before:-translate-x-1/2 before:rotate-45 before:rounded-sm z-10"
                    />
                  </div>
                  <div className="w-full relative grid gap-2">
                    <p>Tanggal lahir</p>
                    <Field
                      type="date"
                      name="date"
                      className="focus:text-pink-600 focus:outline-2 text-slate-700 focus:outline-pink-600 w-full py-3 px-6 rounded-lg bg-abu-terang"
                    />
                    <ErrorMessage
                      name="date"
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
                    Buat akun
                  </Button>
                </Form>
              )}
            </Formik>
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
              priority
            />
          </div>
        </section>
      </article>
      <Footer />
    </>
  );
}

export default CreateChildAccount;
