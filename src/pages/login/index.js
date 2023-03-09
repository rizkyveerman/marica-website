import MainLayout from "@/layout/MainLayout";
import React from "react";
import Head from "next/head";

const Login = () => {
  return (
    <>
      <section>Login</section>
    </>
  );
};

Login.getLayout = function getLayout(page) {
  return <MainLayout title="Masuk ke Marica">{page}</MainLayout>;
};

export default Login;
