import React from "react";
import propTypes from "prop-types";

const Input = ({ ref, label, type, name, onChange, placeholder }) => {
  return (
    <div>
      <label htmlFor={name} className="text-arang">
        {label}
      </label>
      <input
        placeholder={placeholder}
        ref={ref}
        id={name}
        type={type}
        name={name}
        onChange={(e) => onChange(e.target.value)}
        className="px-5 py-3 bg-transparent rounded-xl border border-arang/30 placeholder:text-sm placeholder:text-abu focus:outline outline-pink-600 focus:border-pink-600 focus:text-pink-600"
      />
    </div>
  );
};

Input.propTypes = {
  type: propTypes.oneOf(["text", "email", "password"]),
};

export default Input;
