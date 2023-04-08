import React from "react";
import Link from "next/link";
import propTypes from "prop-types";
import styles from "./Button.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Button = ({
  type,
  variant,
  isLink,
  href,
  icon,
  isClicked,
  className,
  children,
}) => {
  if (isLink) {
    return (
      <Link
        className={`flex justify-center items-center gap-1 px-5 py-2 rounded-xl ${className} ${
          variant === "primary"
            ? "bg-gradient-to-t from-sky-600 to-sky-400 text-white drop-shadow-md hover:opacity-75"
            : variant === "secondary"
            ? "bg-transparent text-slate-600 border border-slate-600 hover:border-sky-600 hover:text-sky-600"
            : variant === "tertiary"
            ? "border-none text-slate-600 hover:text-blue-500 p-0"
            : ""
        }`}
        href={href}
        onClick={isLink ? null : () => isClicked()}
      >
        {icon && <FontAwesomeIcon icon={icon} height={14} className="mr-1" />}
        {isLink ? <Link href={href}>{children}</Link> : <span>{children}</span>}
      </Link>
    );
  }

  return (
    <button
      type={type !== "" ? type : "button"}
      className={`flex justify-center items-center gap-1 px-5 py-2 rounded-xl ${className} ${
        variant === "primary"
          ? "bg-gradient-to-t from-sky-600 to-sky-400 text-white drop-shadow-md hover:opacity-75"
          : variant === "secondary"
          ? "bg-transparent text-slate-600 border border-slate-600 hover:border-sky-600 hover:text-sky-600"
          : variant === "tertiary"
          ? "border-none text-slate-600 hover:text-blue-500 p-0"
          : ""
      }`}
      onClick={isLink ? null : () => isClicked()}
    >
      {icon && <FontAwesomeIcon icon={icon} height={14} className="mr-1" />}
    </button>
  );
};

export default Button;

Button.propTypes = {
  variant: propTypes.oneOf(["primary", "secondary", "tertiary"]),
  isLink: propTypes.bool,
};
