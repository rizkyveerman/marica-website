import React from "react";
import MainLayout from "@/layout/MainLayout";

const About = () => {
  return <div>About Marica</div>;
};

About.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>;
};

export default About;
