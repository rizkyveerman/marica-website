import Button from "@/components/Button";
import { Form, Formik, Field, ErrorMessage } from "formik";
import MainLayout from "@/layout/MainLayout";
import Link from "next/link";
import { useState, useRef } from "react";

const Login = () => {
  return <article></article>;
};

Login.getLayout = function getLayout(page) {
  return <MainLayout title="Masuk ke Marica">{page}</MainLayout>;
};

export default Login;
