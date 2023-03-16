import MainLayout from "@/layout/MainLayout";
import React from "react";

const MyProfile = () => {
  return <div>MyProfile</div>;
};

MyProfile.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>;
};

export default MyProfile;
