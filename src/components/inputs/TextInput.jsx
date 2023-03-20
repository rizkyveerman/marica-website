import React from "react";
import propTypes from "prop-types";

const Input = ({ children, ref, label, variant, name, onChange }) => {
  return (
    <>
      <label for={name}>{label}</label>
      <input
        ref={ref}
        id={name}
        type={variant}
        name={name}
        onChange={() => onChange()}
        className="px-5 py-3 rounded-2xl border border-abu-terang dark:border-arang"
      >
        {children}
      </input>
    </>
  );
};

Input.propTypes = {
  variant: propTypes.bool,
};

export default Input;
