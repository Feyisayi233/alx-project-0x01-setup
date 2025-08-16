import Header from "@/components/layout/Header";
import React from "react";

const Users: React.FC = () => (
  <div className="flex flex-col min-h-screen">
    <Header />
    <main className="flex-grow p-8">
      <h1 className="text-3xl font-bold mb-4">Users Page</h1>
      {/* Add user components here */}
    </main>
  </div>
);

export default Users;
