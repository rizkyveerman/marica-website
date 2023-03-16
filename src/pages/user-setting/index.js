import MainLayout from "@/layout/MainLayout";
import React from "react";

const UserSetting = () => {
  return <div>UserSetting</div>;
};

UserSetting.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>;
};

export default UserSetting;
