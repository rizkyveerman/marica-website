import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";

const Login = () => {
  return (
    <section>
      <h3 className="mb-6">Masuk ke Marica</h3>
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
              <Field
                type="email"
                name="email"
                className="w-full py-3 px-6 rounded-2xl bg-abu-terang dark:bg-bad-blueberry"
              />
              <ErrorMessage
                name="email"
                component="div"
                className="m-auto absolute top-full p-2 rounded-xl bg-red-100 text-red-600 before:block before:absolute before:left-1/2 before:bottom-full before:w-3 before:h-3 before:bg-red-100 before:translate-y-1/2 before:-translate-x-1/2 before:rotate-45 before:rounded-sm z-10"
              />
            </div>
            <Field
              type="password"
              name="password"
              className="py-3 px-6 rounded-2xl bg-abu-terang dark:bg-bad-blueberry"
            />
            <ErrorMessage name="password" component="div" />
            <button
              type="submit"
              disabled={isSubmitting}
              className="py-3 px-6 bg-blueberry rounded-2xl text-white"
            >
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </section>
  );
};

export default Login;
