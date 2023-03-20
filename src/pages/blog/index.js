import MainLayout from "@/layout/MainLayout";
import React from "react";

const Blog = () => {
  return <div>Blog</div>;
};

Blog.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>;
};

export default Blog;
