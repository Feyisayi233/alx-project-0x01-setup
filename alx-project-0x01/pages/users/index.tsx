import Header from "@/components/layout/Header";
import UserCard from "@/components/common/UserCard";
import { UserProps } from "@/interfaces";
import React from "react";

interface UsersPageProps {
  posts: UserProps[];
}

const Users: React.FC<UsersPageProps> = ({ posts }) => (
  <div className="flex flex-col min-h-screen">
    <Header />
    <main className="flex-grow p-8">
      <h1 className="text-3xl font-bold mb-4">Users Page</h1>
      <div className="grid grid-cols-3 gap-2">
        {posts?.map((user: UserProps, key: number) => (
          <UserCard key={key} {...user} />
        ))}
      </div>
    </main>
  </div>
);

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const posts = await response.json();

  return {
    props: {
      posts,
    },
  };
}

export default Users;
