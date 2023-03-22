import React from "react";
import MainLayout from "@/layout/MainLayout";

const About = () => {
  return <section className="p-4">About Marica</section>;
};

About.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>;
};

export default About;
