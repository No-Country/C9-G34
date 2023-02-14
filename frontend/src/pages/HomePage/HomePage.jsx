import React from "react";
import { PostCard } from "../../components";

export default function HomePage() {
  return (
    <div className="w-100 p-3 py-5">
      <PostCard />
      <PostCard />
      <PostCard />
    </div>
  );
}
