import React from "react";

export async function getStaticPaths() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");

  const users = await res.json();

  const paths = users.map((user) => {
    params: {
      id: user.id;
    }
  });

  return { paths, fallback: false };
}

export async function getStaticProps(context) {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await res.json();

  return {
    props: { users },
  };
}

const UserDetail = ({ users }) => {
  console.log("paths", paths);

  return <div>UserDetail</div>;
};

export default UserDetail;
