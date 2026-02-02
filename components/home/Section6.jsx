"use client";
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const Section6 = () => {
  // --- BUTTON STYLES ---
  const registerBtnStyle = {
    display: 'flex',
    width: '301px',
    padding: '16px 24px',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '5px',
    borderRadius: '24px',
    background: '#F8FFFF',
    border: 'none',
    cursor: 'pointer',
    zIndex: 20,
    boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.15)',
  };

  const registerBtnTextStyle = {
    color: '#191B1B',
    fontFamily: "'Manrope', sans-serif",
    fontSize: '16px',
    fontStyle: 'normal',
    fontWeight: '600',
    lineHeight: '20px',
  };

  // --- Animation Variants ---
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      }
    }
  };

  const textVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.98 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  // --- Styles ---
  const subHeadingBaseStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    color: '#E6E6E6',
    fontFamily: "'Manrope', sans-serif",
    fontWeight: 500,
  };

  const mainHeadingBaseStyle = {
    color: '#E3F5F6',
    fontFamily: '"Blauer Nue", sans-serif',
    fontWeight: 600,
    textTransform: 'uppercase',
  };

  return (
    <section 
      id="section6"
      className="min-h-screen md:min-h-[150vh] w-full bg-[#020617] flex flex-col items-center py-10 md:py-20 px-6 relative overflow-hidden"
    >
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@500;600&display=swap');
        
        @font-face {
          font-family: 'Blauer Nue';
          src: url('/fonts/BlauerNue.otf') format('opentype');
          font-weight: normal;
          font-style: normal;
        }
      `}</style>

      {/* Main Animation Container */}
      <motion.div 
        className="w-full flex flex-col items-center h-full flex-grow"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-10%" }}
      >
        
        {/* 1. HEADINGS (Aligned Top) */}
        <div className="max-w-[1380px] w-full flex flex-col items-start gap-2 mt-4 md:mt-10">
          <motion.div 
            variants={textVariants} 
            style={subHeadingBaseStyle}
            className="w-full h-auto md:h-[47px] text-xl md:text-[32px] leading-relaxed md:leading-[32px]"
          >
            Last year we inspired
          </motion.div>

          <motion.h1 
            variants={textVariants} 
            style={mainHeadingBaseStyle}
            className="text-4xl leading-tight md:text-[64px] md:leading-[86px]"
          >
            THIS YEAR, WE TRANSFORM
          </motion.h1>
        </div>

        {/* 2. LARGE IMAGE (Pushed to Bottom) */}
        <motion.div
          variants={imageVariants}
          className="mt-auto pt-10 md:pt-0" 
          style={{ overflow: 'hidden' }}
        >
          {/* Wrapper div for responsive sizing */}
          <div 
             className="relative w-full h-[300px] md:w-[1380px] md:h-[693px] rounded-[20px] md:rounded-[40px] overflow-hidden flex justify-center items-center"
          >
            <Image 
              src="/images/home/section6/image1.webp" 
              alt="SMRSC 2026 Transformation"
              fill
              sizes="(max-width: 768px) 100vw, 1380px"
              className="object-cover"
              priority
            />

            {/* REGISTER BUTTON */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={registerBtnStyle}
              // UPDATED CLASSNAME:
              // - absolute: Positions it over the image
              // - left-1/2 -translate-x-1/2: Keeps it horizontally centered
              // - top-1/2 -translate-y-1/2: Vertically centered on Mobile
              // - md:top-[450px] md:translate-y-0: Specifically 450px from top on Desktop
              className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 md:top-[450px] md:translate-y-0"
            >
              <span style={registerBtnTextStyle}>
                Register for SMRSC 2026
              </span>
            </motion.button>

          </div>
        </motion.div>

      </motion.div>
      
    </section>
  );
};

export default Section6;