import Button from "@/components/buttons/Button";
import Link from "next/link";
import React from "react";
import { ErrorMessage, Field, Formik, Form } from "formik";
import { useSelector, useDispatch } from "react-redux";

const Children = () => {
  const { isLoading, error, userInfo } = useSelector((state) => state.user);
  const children = userInfo.data.anak;
  console.log("children", children);

  return (
    <article className="bg-abu-terang">
      <section className="w-full min-h-screen p-4 grid place-content-center">
        <h2 className="mb-8">Siapa yang menonton?</h2>
        <div className="flex justify-center gap-4">
          <ul className="grid grid-cols-4 gap-4">
            {children.map((child) => (
              <li key={child._id}>
                <Link href={`/users/${child._id}`} className="block">
                  <div className="h-20 w-20 bg-mangga rounded-lg"></div>
                  <p className="">Joko</p>
                </Link>
              </li>
            ))}

            <div>
              <Link
                href="/users/add-child"
                className="h-20 w-20 border grid place-content-center border-mangga rounded-lg text-2xl"
              >
                +
              </Link>
            </div>
          </ul>
        </div>
      </section>
      {/* form add children */}
      <div className="fixed bottom-4 right-4 bg-white min-w-[350px] md:w-96 max-w-lg p-4 rounded-2xl grid gap-4">
        <h3 className="text-slate-700">Buat akun anak!</h3>
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
                `https://marica-backend.vercel.app/api/v1/user/${userInfo.data._id}/anak`,
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
                  <p className="text-slate-700">Nama depan*</p>
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
                  <p className="text-slate-700">Nama belakang*</p>
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
                <p className="text-slate-700">Buat nama pengguna</p>
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
                <p className="text-slate-700">Tanggal lahir</p>
                <Field
                  type="date"
                  name="birthDate"
                  className="focus:text-pink-600 focus:outline-2 text-slate-700 focus:outline-pink-600 w-full py-3 px-6 rounded-lg bg-abu-terang"
                />
                <ErrorMessage
                  name="birthDate"
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
    </article>
  );
};

export default Children;
