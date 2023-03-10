import React from "react";
import propTypes from "prop-types";
import styles from "./Button.module.css";

const Button = ({ type, isLink, onClick, className, children }) => {
  return (
    <button
      className={`${className} ${
        type === "primary"
          ? "bg-blueberry text-sirsak"
          : "bg-transparent text-blueberry border border-blueberry"
      } px-5 py-3 rounded-lg`}
      onClick={() => onClick()}
    >
      {children}
    </button>
  );
};

export default Button;

Button.propTypes = {
  type: propTypes.oneOf(["primary", "secondary"]),
  isLink: propTypes.bool,
};
