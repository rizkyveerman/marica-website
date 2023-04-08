import React from "react";
import { useRouter } from "next/router";

const UserDetail = () => {
  const router = useRouter();
  const { userid } = router.query;
  return <div>UserDetail: {userid}</div>;
};

export default UserDetail;
