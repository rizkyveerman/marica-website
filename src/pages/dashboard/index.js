import MainLayout from "@/layout/MainLayout";
import React from "react";

const Dashboard = () => {
  return <div>Dashboard</div>;
};

Dashboard.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>;
};

export default Dashboard;
