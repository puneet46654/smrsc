"use client";
import React, { useState } from 'react';
import Image from 'next/image'; // Imported Next.js Image component
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Section5 = () => {
  // ==================== PART 1 DATA (GRID) ====================
  const specialties = [
    { id: 1, title: "Cardiac", count: "400+" },
    { id: 2, title: "Urology", count: "2100+" },
    { id: 8, title: "General", count: "3500+" },
    { id: 3, title: "Thoracic", count: "70+" },
    { id: 4, title: "Gastroenterology", count: "200+" },
    { id: 5, title: "Head & Neck", count: "100+" },
    { id: 6, title: "Gynecology", count: "1300+" },
    { id: 7, title: "Colorectal", count: "450+" },
  ];

  // ==================== PART 2 DATA & LOGIC (CAROUSEL) ====================
  const [page, setPage] = useState(0);

  // UPDATED: Image extensions changed to .webp
  const images = [
    { id: 1, src: "/images/home/section5/image1.webp", title: "SSI Mantra 3" },
    { id: 2, src: "/images/home/section5/image2.webp", title: "Advanced Robotics" },
    { id: 3, src: "/images/home/section5/image3.webp", title: "Precision Control" },
    { id: 4, src: "/images/home/section5/image4.webp", title: "Future of Surgery" },
  ];

  const imageIndex = ((page % images.length) + images.length) % images.length;

  const paginate = (newDirection) => {
    setPage(page + newDirection);
  };

  const getPosition = (index) => {
    const total = images.length;
    let diff = (index - imageIndex + total) % total;
    
    if (diff > total / 2) diff -= total;
    if (diff < -total / 2) diff += total;
    
    if (diff === 0) return "center";
    if (diff === -1) return "left";
    if (diff === 1) return "right";
    if (diff < -1) return "far-left";
    return "far-right";
  };

  // --- Carousel Animation Variants ---
  const springTransition = {
    type: "spring",
    stiffness: 260,
    damping: 30,
  };

  const cardVariants = {
    center: {
      x: "0%",
      scale: 1,
      zIndex: 30,
      opacity: 1,
      filter: "brightness(1)",
      transition: {
        x: springTransition,
        scale: springTransition,
        opacity: { duration: 0.2 },
        filter: { duration: 0.2 }
      }
    },
    left: {
      x: "-105%", 
      scale: 1,
      zIndex: 20,
      opacity: 1,
      filter: "brightness(0.4)",
      transition: {
        x: springTransition,
        scale: springTransition,
        opacity: { duration: 0.4 },
        filter: { duration: 0.4 }
      }
    },
    right: {
      x: "105%", 
      scale: 1,
      zIndex: 20,
      opacity: 1,
      filter: "brightness(0.4)",
      transition: {
        x: springTransition,
        scale: springTransition,
        opacity: { duration: 0.4 },
        filter: { duration: 0.4 }
      }
    },
    "far-left": {
      x: "-180%",
      scale: 0.8,
      zIndex: 1,
      opacity: 0,
      filter: "brightness(0)",
      transition: {
        x: springTransition,
        scale: springTransition,
        opacity: { duration: 0.1 }
      } 
    },
    "far-right": {
      x: "180%",
      scale: 0.8,
      zIndex: 1,
      opacity: 0,
      filter: "brightness(0)",
      transition: {
        x: springTransition,
        scale: springTransition,
        opacity: { duration: 0.1 }
      }
    }
  };

  const textVariants = {
    center: {
      y: 0,
      opacity: 1,
      transition: { delay: 0.2, duration: 0.6, ease: "easeOut" }
    },
    left: { y: 30, opacity: 0 },
    right: { y: 30, opacity: 0 },
    "far-left": { y: 30, opacity: 0 },
    "far-right": { y: 30, opacity: 0 },
  };

  // --- STYLES ---
  
  // 1. Grid & Heading Styles
  const headingStyle = {
    color: '#F8FFFF',
    fontFamily: '"Blauer Nue", sans-serif',
    fontSize: '36px',
    fontStyle: 'normal',
    fontWeight: 500,
    lineHeight: '40px', 
  };

  const gridCardStyle = {
    width: '420px',
    height: '140px',
    borderRadius: '20px',
    border: '1px solid #5B6D6E',
    background: 'rgba(9, 9, 9, 0.40)',
    position: 'relative', 
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    overflow: 'hidden',
    transition: 'all 0.3s ease',
  };

  const gridCardTextStyle = {
    color: '#E3F5F6',
    textAlign: 'center',
    fontFamily: '"Blauer Nue", sans-serif',
    fontSize: '32px',
    fontStyle: 'normal',
    fontWeight: 600,
    lineHeight: '24px', 
  };

  // 2. Carousel Styles
  const carouselFixedHeadingStyle = {
    color: '#F8FFFF',
    fontFamily: '"Blauer Nue", sans-serif',
    fontSize: '36px',
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: '40px',
    position: 'absolute',
    top: '-60px',
    left: '0px',
    zIndex: 40,
    whiteSpace: 'nowrap',
  };

  const indicatorContainerStyle = {
    display: 'inline-flex',
    padding: '0.75rem 1.125rem',
    alignItems: 'center',
    gap: '0.5rem',
    borderRadius: '1.25rem',
    background: 'rgba(227, 245, 246, 0.70)',
    boxShadow: '0 1px 2px 0 rgba(255, 255, 255, 0.25) inset',
    backdropFilter: 'blur(4px)', 
  };

  // Arrow Button Styles
  const arrowBtnStyle = {
    display: 'flex',
    width: '48px',
    height: '48px',
    padding: '10px',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '10px',
    borderRadius: '100px',
    background: '#FFF',
    border: 'none',
    cursor: 'pointer',
    zIndex: 60,
    transition: 'transform 0.2s ease',
  };

  return (
    <section 
      id="section5"
      className="w-full bg-[#020617]"
    >
      <style jsx global>{`
        @font-face {
          font-family: 'Blauer Nue';
          src: url('/fonts/BlauerNue.otf') format('opentype');
          font-weight: normal;
          font-style: normal;
        }
      `}</style>

      {/* ==================== PART 1: ORIGINAL GRID CONTENT ==================== */}
      <div className="min-h-screen w-full flex flex-col items-center justify-center py-20 px-6">
        <div className="max-w-[1380px] w-full flex flex-col gap-12">
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={headingStyle}
          >
            Robotic surgery Across Specialties
          </motion.h2>

          <div className="flex flex-wrap justify-center xl:justify-start gap-6">
            {specialties.map((item) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: item.id * 0.1 }}
                style={gridCardStyle}
                className="group" 
              >
                <span 
                  style={gridCardTextStyle}
                  className="transition-opacity duration-300 group-hover:opacity-0"
                >
                  {item.title}
                </span>

                <span 
                  style={gridCardTextStyle}
                  className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                >
                  {item.count}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* ==================== PART 2: CAROUSEL CONTENT ==================== */}
      <div className="min-h-screen w-full flex flex-col items-center justify-center py-20 px-6 overflow-hidden">
        
        <div className="relative w-full flex flex-col items-center justify-center">
          
          {/* UPDATED CONTAINER: Added gap-8 (32px) for balanced spacing */}
          <div className="relative flex items-center justify-center w-full gap-8">
            
            {/* Left Arrow */}
            <div className="z-[60]"> 
              <button 
                onClick={() => paginate(-1)} 
                style={arrowBtnStyle}
                className="hover:scale-110 active:scale-95 shadow-lg"
              >
                <ChevronLeft className="text-black w-6 h-6" />
              </button>
            </div>

            {/* Slider Frame */}
            <div 
              className="relative overflow-visible shrink-0"
              style={{ width: '1380px', height: '720px' }}
            >
              {images.map((img, index) => {
                const position = getPosition(index);

                return (
                  <motion.div
                    key={index}
                    initial={false}
                    animate={position}
                    variants={cardVariants}
                    style={{ willChange: "transform, opacity, filter" }}
                    className="absolute top-0 left-0 w-full h-full bg-transparent"
                  >
                    {/* Fixed Heading */}
                    <motion.div 
                      variants={textVariants} 
                      style={carouselFixedHeadingStyle}
                    >
                      Highlights from 2025
                    </motion.div>

                    {/* Inner Container */}
                    <div className="w-full h-full rounded-[40px] overflow-hidden bg-[#0a0a0a] border border-white/10 shadow-[0_0_60px_rgba(0,0,0,0.6)] relative">
                      {/* UPDATED: Replaced img with Next.js Image */}
                      <Image 
                        src={img.src} 
                        alt={img.title}
                        fill
                        sizes="100vw"
                        priority={position === "center"}
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Right Arrow */}
            <div className="z-[60]">
              <button 
                onClick={() => paginate(1)} 
                style={arrowBtnStyle}
                className="hover:scale-110 active:scale-95 shadow-lg"
              >
                <ChevronRight className="text-black w-6 h-6" />
              </button>
            </div>
          </div>

          {/* Pagination Indicators */}
          <div className="mt-12 z-50" style={indicatorContainerStyle}>
            {images.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setPage(idx)}
                className={`h-2 transition-all duration-300 rounded-full cursor-pointer bg-white ${
                  imageIndex === idx ? "w-8" : "w-2 opacity-100"
                }`}
              />
            ))}
          </div>
        </div>

      </div>

    </section>
  );
};

export default Section5;