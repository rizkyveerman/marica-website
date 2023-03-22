import MainLayout from "@/layout/MainLayout";
import React from "react";

const UserSetting = () => {
  return <section className="p-4">UserSetting</section>;
};

UserSetting.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>;
};

export default UserSetting;
