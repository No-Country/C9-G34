import React from "react";
import { PostCard, BottomNavigationBar, Navbar } from "../../components";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <div className="w-100 p-3 py-5 container">
        <PostCard />
        <PostCard />
        <PostCard />
      </div>
        <BottomNavigationBar />
    </>
  );
}
