import Button from "@/components/buttons/Button";
import Link from "next/link";
import React, { useState } from "react";
import { ErrorMessage, Field, Formik, Form } from "formik";
import { useSelector, useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { setError } from "@/store/slices/user";

const Children = () => {
  const { isLoading, error, userInfo } = useSelector((state) => state.user);
  const [isFormShown, setIsFormShown] = useState(false);
  const children = userInfo;
  console.log("children", children);

  return (
    <article className={`bg-abu-terang`}>
      <section
        className={`${
          isFormShown ? "lg:translate-x-72 lg:skew-x-4 lg:-skew-y-2" : ""
        } w-full min-h-screen p-4 grid place-content-center transition-transform`}
      >
        <h2 className="mb-8">Siapa yang menonton?</h2>
        <div className="flex justify-center gap-4">
          <ul
            className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4`}
          >
            {/* {children.map((child) => ( */}
            <li>
              <Link href={`/users/${6}`} className="block">
                <div className="h-20 w-20 bg-pink-600 rounded-lg"></div>
                <p className="">Joko</p>
              </Link>
            </li>
            {/* ))} */}

            <div
              className="cursor-pointer h-20 w-20 border grid place-content-center border-slate-300 hover:border-pink-600 hover:text-pink-600 rounded-lg text-2xl"
              title="Tambahkan anak"
              onClick={() => setIsFormShown(true)}
            >
              +
            </div>
          </ul>
        </div>
      </section>
      {/* form add children */}
      {isFormShown && (
        <div className="fixed bottom-4 right-4 left-4 bg-white md:min-w-[350px] max-w-lg p-4 rounded-2xl grid gap-4">
          <div className="w-full flex justify-between items-center">
            <h3 className="text-slate-700">Buat akun anak!</h3>
            <FontAwesomeIcon
              icon={faClose}
              height={32}
              className="text-slate-300 text-2xl hover:text-pink-500 cursor-pointer"
              title="tutup"
              onClick={() => setIsFormShown(false)}
            />
          </div>
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
                .then((response) => response)
                .catch((err) => {
                  setError(err);
                  console.log("add child error: ", error);
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
                  <div className="text-slate-700 text-sm ml-6">
                    <p>bulan - tanggal - lahir</p>
                  </div>
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
      )}
    </article>
  );
};

export default Children;
