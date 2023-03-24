import watching from "@/images/watching.jpg";
import Button from "@/components/buttons/Button";
import Footer from "@/widgets/Footer";
import Logo from "@/components/Logo";
import Image from "next/image";
import { Form, Formik, Field, ErrorMessage } from "formik";

const CreateAccount = () => {
  return (
    <>
      <article className="grid grid-cols-1 md:grid-cols-2 min-h-screen">
        <section className="grid place-content-center p-4">
          <div className="w-full max-w-xl p-4 rounded-2xl grid gap-4">
            <Logo styles="m-auto" />
            <h3>Buat akun Marica Gratis!</h3>
            <Formik
              initialValues={{ email: "", password: "" }}
              validate={(values) => {
                const errors = {};
                if (!values.email) {
                  errors.email = "required";
                } else if (
                  !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                ) {
                  errors.email = "Invalid email address";
                }
                return errors;
              }}
              onSubmit={(values, { setSubmitting }) => {
                // setTimeout(() => {
                //   alert(JSON.stringify(values, null, 2));
                //   setSubmitting(false);
                // }, 400);
                console.log("values: ", values.firstname);
                console.log("values: ", values.lastname);
                console.log(
                  "values: ",
                  values.firstname + " " + values.lastname
                );
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
                        className="w-full py-3 px-6 rounded-lg bg-abu-terang"
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
                        className="w-full py-3 px-6 rounded-lg bg-abu-terang"
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
                      className="w-full py-3 px-6 rounded-lg bg-abu-terang"
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
                      className="py-3 px-6 rounded-lg bg-abu-terang"
                    />
                    <ErrorMessage name="password" component="div" />
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
            <p className="text-sm text-abu text-center mt-10">
              Sudah punya akun Marica?
            </p>
            <Button isLink type="secondary" href="/login">
              Masuk
            </Button>
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
};

export default CreateAccount;
