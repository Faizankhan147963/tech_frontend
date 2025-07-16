import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

const CustomCursor = () => {
  const cursorDot = useRef(null);
  const cursorOutline = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <>
      {/* Cursor Outline */}
      <motion.div
        ref={cursorOutline}
        className="fixed w-[30px] h-[30px] border border-black rounded-full pointer-events-none z-100"
        animate={{ left: position.x - 20, top: position.y - 20 }}
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
      />
      {/* Cursor Dot */}
      <motion.div
        ref={cursorDot}
        className="fixed w-[10px] h-[10px] bg-black rounded-full pointer-events-none"
        animate={{ left: position.x - 15, top: position.y - 15 }}
        transition={{ type: "spring", stiffness: 500, damping: 70 }}
      />
    </>
  );
};

export default CustomCursor;
