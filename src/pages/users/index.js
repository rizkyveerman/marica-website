import Button from "@/components/buttons/Button";
import Link from "next/link";
import React, { useState } from "react";
import { ErrorMessage, Field, Formik, Form } from "formik";
import { useSelector, useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { childRegister, setError } from "@/store/slices/user";
import { addChild } from "@/store/actions/user-actions";
import Navbar from "@/widgets/Navbar";

const Children = () => {
  const { isLoading, error, userInfo, status } = useSelector(
    (state) => state.user
  );
  const dispatch = useDispatch();
  const [isFormShown, setIsFormShown] = useState(false);
  const children = userInfo;
  console.log("children", children);

  return (
    <article className={`bg-abu-terang overflow-hidden`}>
      <section className="absolute left-0 right-0">
        <Navbar />
      </section>
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
            {/* {children.map((child) => (
              <li key={index}>
                <Link href={`/users/${6}`} className="block">
                  <div className="h-20 w-20 bg-sky-600 rounded-lg"></div>
                  <p className="">{child.nama}</p>
                </Link>
              </li>
            ))} */}
            <div
              className="cursor-pointer h-20 w-20 border grid place-content-center border-slate-300 hover:border-sky-600 hover:text-sky-600 rounded-lg text-2xl"
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
              className="text-slate-300 text-2xl hover:text-sky-500 cursor-pointer"
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
              birthdate: "",
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

              //birthdate validation
              if (!values.birthdate) {
                errors.birthdate = "required";
              }
            }}
            onSubmit={(values) => dispatch(addChild(values))}
          >
            {({ isSubmitting }) => (
              <Form className="grid grid-cols-1 gap-4 w-full">
                <div className="flex gap-4">
                  <div className="w-full relative grid gap-2">
                    <p className="text-slate-700">Nama depan*</p>
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
                  <div className="w-full relative grid gap-2">
                    <p className="text-slate-700">Nama belakang*</p>
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
                <div className="w-full relative grid gap-2">
                  <p className="text-slate-700">Tanggal lahir</p>
                  <Field
                    type="date"
                    name="birthdate"
                    className="focus:text-sky-600 focus:outline-2 text-slate-700 focus:outline-sky-600 w-full py-3 px-6 rounded-lg bg-abu-terang"
                  />
                  <ErrorMessage
                    name="birthdate"
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
