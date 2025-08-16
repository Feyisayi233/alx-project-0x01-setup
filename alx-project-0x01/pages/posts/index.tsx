import Header from "@/components/layout/Header";
import React from "react";

const Posts: React.FC = () => (
  <div className="flex flex-col min-h-screen">
    <Header />
    <main className="flex-grow p-8">
      <h1 className="text-3xl font-bold mb-4">Posts Page</h1>
      {/* Add PostCard components here */}
    </main>
  </div>
);

export default Posts;
