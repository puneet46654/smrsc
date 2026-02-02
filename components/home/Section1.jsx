"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const Section1 = () => {
  // --- BUTTON STYLES ---
  const buttonContainerStyle = {
    display: "flex",
    width: "236px",
    height: "51px",
    padding: "12px 24px",
    justifyContent: "center",
    alignItems: "center",
    gap: "10px",
    borderRadius: "40px",
    border: "1px solid #FFF",
    background:
      "linear-gradient(180deg, #E5B648 0%, #C8890C 100%), radial-gradient(231% 135.8% at 0.9% 2.98%, rgba(255, 255, 255, 0.80) 0%, rgba(255, 255, 255, 0.20) 100%)",
    backdropFilter: "blur(21px)",
    cursor: "pointer",
    boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.15)", // Added subtle shadow for depth
  };

  const buttonTextStyle = {
    color: "#FFF",
    fontFamily: "Manrope, sans-serif",
    fontSize: "20px",
    fontStyle: "normal",
    fontWeight: "600",
    lineHeight: "20px",
    whiteSpace: "nowrap",
  };

  return (
    <section className="relative w-full flex justify-center items-center overflow-x-clip">
      
      {/* Font Injection for Manrope (if not already loaded globally) */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@600&display=swap');
      `}</style>

      {/* Optional cinematic glow */}
      <motion.div
        animate={{
          opacity: [0.4, 0.7, 0.4],
          scale: [1, 1.15, 1],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute z-0 pointer-events-none"
        style={{
          width: "70%",
          height: "100%",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
          background: "rgba(0, 186, 254, 0.8)",
          filter: "blur(250px)",
          borderRadius: "100%",
        }}
      />

      {/* --- DESKTOP VIEW --- */}
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: [0.19, 1, 0.22, 1] }}
        className="relative z-10 w-full hidden md:flex justify-center"
      >
        <div
          style={{
            marginTop: "98px",
            marginBottom: "65px",
            marginLeft: "114px",
            marginRight: "114px",
            width: "100%",
            maxWidth: "1693px",
            aspectRatio: "1693 / 861",
          }}
          className="relative flex justify-center"
        >
          <Image
            src="/images/home/section1/image2.webp"
            alt="SMRSC 2026 Hero"
            fill
            priority
            style={{ objectFit: "contain" }}
          />

          {/* REGISTER BUTTON (Desktop Position) */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={buttonContainerStyle}
            // Positioned absolutely at the bottom center of the image container
            className="absolute bottom-[10%] z-20"
          >
            <span style={buttonTextStyle}>Register Now</span>
          </motion.button>
        </div>
      </motion.div>

      {/* --- MOBILE VIEW --- */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="relative z-10 w-full flex md:hidden justify-center px-6"
      >
        <div
          style={{
            marginTop: "60px",
            marginBottom: "40px",
            width: "350px",
            height: "592px",
            aspectRatio: "175 / 296",
          }}
          className="relative flex justify-center"
        >
          <Image
            src="/images/home/section1/mobile.png"
            alt="SMRSC 2026 Hero Mobile"
            fill
            priority
            style={{ objectFit: "contain" }}
          />

          {/* REGISTER BUTTON (Mobile Position) */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{ ...buttonContainerStyle, width: "200px", height: "45px" }} // Slightly smaller for mobile if needed
            // Positioned absolutely near the bottom
            className="absolute bottom-[10%] z-20"
          >
            <span style={{ ...buttonTextStyle, fontSize: "18px" }}>Register Now</span>
          </motion.button>
        </div>
      </motion.div>
    </section>
  );
};

export default Section1;