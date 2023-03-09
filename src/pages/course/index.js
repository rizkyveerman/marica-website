import MainLayout from "@/layout/MainLayout";
import React from "react";

const Course = () => {
  return <div>Course</div>;
};

Course.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>;
};

export default Course;
