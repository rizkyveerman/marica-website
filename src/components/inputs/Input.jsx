import React from "react";
import { Field, ErrorMessage } from "formik";

const Input = ({ ref, label, type, name, onChange, placeholder }) => {
  return (
    <div className="w-full relative grid gap-2">
      <label htmlFor={name}>{label}</label>
      <Field
        type={type}
        name={name}
        className="focus:text-sky-600 focus:outline-2 text-slate-700 focus:outline-sky-600 w-full py-3 px-6 rounded-lg bg-abu-terang"
      />
      <ErrorMessage
        name={name}
        component="div"
        className="m-auto absolute top-full p-2 rounded-xl bg-red-100 text-red-600 before:block before:absolute before:left-1/2 before:bottom-full before:w-3 before:h-3 before:bg-red-100 before:translate-y-1/2 before:-translate-x-1/2 before:rotate-45 before:rounded-sm z-10"
      />
    </div>
  );
};

export default Input;
