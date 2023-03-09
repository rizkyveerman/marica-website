import React from "react";
import propTypes from "prop-types";
import styles from "./Button.module.css";

const Button = (props) => {
  return (
    <button
      className={`${styles.button} ${
        props.type === "primary" ? styles.primary : styles.secondary
      }`}
    >
      {props.children}
    </button>
  );
};

export default Button;

Button.propTypes = {
  type: propTypes.oneOf(["primary", "secondary"]),
  isLink: propTypes.bool,
};
