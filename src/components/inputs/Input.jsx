import React from "react";
import propTypes from "prop-types";

const Input = ({ ref, label, type, name, placeholder }) => {
  return (
    <>
      <label for={name} className="text-arang">
        {label}
      </label>
      <input
        placeholder={placeholder}
        ref={ref}
        id={name}
        type={type}
        name={name}
        className="px-5 py-3 rounded-2xl border border-arang dark:border-abu-terang placeholder:text-abu dark:placeholder:text-white focus:outline outline-semangka focus:border-semangka focus:text-semangka"
      />
    </>
  );
};

Input.propTypes = {
  type: propTypes.oneOf(["text", "email", "password"]),
};

export default Input;
