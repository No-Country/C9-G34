import React from "react";
import { PostCard, Navbar } from "../../components";
import { motion, useScroll, useSpring } from "framer-motion";

export default function HomePage() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <Navbar />
      <div className="w-100 p-3 py-5 container">
        <PostCard />
        <PostCard />
        <PostCard />
      </div>
    </motion.section>
  );
}
