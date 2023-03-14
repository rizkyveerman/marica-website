import React from "react";
import Link from "next/link";

const Login = () => {
  return (
    <div>
      <p>
        form login/register, validasi dan state management akan menggunakan{" "}
        <Link className="text-indigo-600" href="https://formik.org/">
          Formik
        </Link>
      </p>
    </div>
  );
};

export default Login;
