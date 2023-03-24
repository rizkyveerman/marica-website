import React from "react";
import Link from "next/link";
import { Formik, Form, Field, ErrorMessage } from "formik";
import Button from "@/components/buttons/Button";

const Login = () => {
  return (
    <section>
      <div className="grid gap-4">
        <h3>Masuk ke Marica</h3>
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
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 400);
          }}
        >
          {({ isSubmitting }) => (
            <Form className="grid grid-cols-1 gap-4 w-full">
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
              <button
                type="submit"
                disabled={isSubmitting}
                className="py-3 px-6 bg-gradient-to-r from-pink-600 to-pink-100 rounded-lg text-white"
              >
                Submit
              </button>
            </Form>
          )}
        </Formik>
        <p className="text-sm text-abu text-center">Belum punya akun Marica?</p>
        <Button isLink type="secondary" href="/create-account">
          Buat akun baru
        </Button>
      </div>
    </section>
  );
};

export default Login;
