import React, { useEffect, useState } from "react";
import { PostCard, Navbar } from "../../components";
import { motion, useScroll, useSpring } from "framer-motion";
import { instance } from "../../axios/axiosConfig";

export default function HomePage() {
  const [publicationsData, setPublicationsData] = useState([]);

  useEffect(() => {
    instance
      .get("users/publications/all")
      .then((res) => setPublicationsData(res.data));
  }, []);

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <Navbar />
      <div className="w-100 p-3 py-5 container">
        {publicationsData.map((publication, i) => {
          return <PostCard data={publication} key={i + 1} />;
        })}
      </div>
    </motion.section>
  );
}
