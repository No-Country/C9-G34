import React, { useEffect, useState } from "react";
import { PostCard, Navbar } from "../../components";
import { motion, useScroll, useSpring } from "framer-motion";
import { instance } from "../../axios/axiosConfig";
import useDataContext from "../../hooks/useDataContext";

export default function HomePage() {
  const [publicationsData, setPublicationsData] = useState([]);
  const { setLoader } = useDataContext();

  useEffect(() => {
    setLoader(true);
    instance
      .get("users/publications/all")
      .then((res) => setPublicationsData(res.data));
    setTimeout(() => setLoader(false), 500);
  }, []);

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <Navbar />
      <div className="w-100 p-3 py-5 container py-sm-3 pb-sm-5 d-sm-flex flex-sm-column align-items-center">
        {publicationsData.map((publication, i) => {
          return <PostCard data={publication} key={i + 1} />;
        })}
      </div>
    </motion.section>
  );
}
