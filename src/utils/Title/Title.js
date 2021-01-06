import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./style.css";

function Title({ title, subtitle, theme, category }) {
  const body = (
    <>
      <motion.h2
        initial={{ scale: 0.2, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.3 }}
        transition={{ duration: 1, delay: 1.5 }}>
        {category}
      </motion.h2>
      <div>
        <motion.span
          initial={{ x: "50%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
        />
        <motion.h6
          initial={{ x: "-100%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}>
          {subtitle}
        </motion.h6>
      </div>
      <motion.h1
        initial={{ y: "-100%", opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.5 }}>
        {title}
      </motion.h1>
    </>
  );

  return (
    <AnimatePresence exitBeforeEnter>
      <div id="title" className={theme}>
        {body}
      </div>
    </AnimatePresence>
  );
}

export default Title;
