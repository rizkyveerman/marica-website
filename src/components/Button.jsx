import React from "react";
import Link from "next/link";
import propTypes from "prop-types";
import styles from "./Button.module.css";

const Button = ({ type, isLink, href, isClicked, className, children }) => {
  return (
    <button
      className={`${className} ${
        type === "primary"
          ? "bg-blueberry text-sirsak"
          : "bg-transparent text-blueberry border border-blueberry"
      } px-5 py-3 rounded-lg`}
      onClick={isLink ? null : () => isClicked()}
    >
      {isLink ? <Link href={href}>{children}</Link> : <span>{children}</span>}
    </button>
  );
};

export default Button;

Button.propTypes = {
  type: propTypes.oneOf(["primary", "secondary"]),
  isLink: propTypes.bool,
};
