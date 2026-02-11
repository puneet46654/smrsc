"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link"; 

const Timer = () => {
  const targetDate = new Date("2026-04-08T00:00:00").getTime();
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setTimeout(() => setMounted(true), 500);

    const interval = setInterval(() => {
      
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        clearInterval(interval);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  const formatTime = (val) => (val < 10 ? `0${val}` : `${val}`);

  // --- IPHONE PHYSICS CONFIGURATION ---
  
  // 1. Dynamic Island Container
  const islandVariants = {
    hidden: {
      width: "120px",
      height: "40px",
      y: 200,
      opacity: 0,
      borderRadius: "50px",
    },
    visible: {
      width: "auto", 
      minWidth: "340px", // Maintains the shape
      height: "72px", 
      y: 0,
      opacity: 1,
      borderRadius: "40px",
      transition: {
        type: "spring",
        stiffness: 150,
        damping: 18,
        mass: 1.2,
      }
    },
    exit: {
      y: 200,
      opacity: 0,
      transition: { duration: 0.5, ease: "anticipate" }
    }
  };

  if (!mounted) return null;

  return (
    <AnimatePresence>
      <motion.div
        key="dynamic-island"
        variants={islandVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[150] md:hidden overflow-hidden flex items-center justify-between pl-6 pr-2 gap-3"
        style={{
          background: "rgba(5, 5, 8, 0.85)", 
          backdropFilter: "blur(30px) saturate(180%)",
          WebkitBackdropFilter: "blur(30px) saturate(180%)",
          border: "1px solid rgba(255, 255, 255, 0.1)",
          boxShadow: `
            0px 20px 50px -10px rgba(0, 0, 0, 0.8), 
            inset 0px 1px 0px rgba(255, 255, 255, 0.15),
            inset 0px -1px 0px rgba(255, 255, 255, 0.05)
          `
        }}
      >
        {/* --- TIMER NUMBERS --- */}
        <div className="flex items-center gap-2 flex-shrink-0">
          <TimeUnit value={formatTime(timeLeft.days)} label="Days" />
          <Separator />
          <TimeUnit value={formatTime(timeLeft.hours)} label="Hrs" />
          <Separator />
          <TimeUnit value={formatTime(timeLeft.minutes)} label="Min" />
          <Separator />
          <TimeUnit value={formatTime(timeLeft.seconds)} label="Sec" />
        </div>

        {/* --- STATIC REGISTRATION TEXT BUTTON --- */}
        <motion.div
          className="relative overflow-hidden cursor-not-allowed"
          style={{
            display: "flex",
            padding: "0 14px",
            height: "44px",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "24px",
            background: "linear-gradient(0deg, #CE921B 0%, #E6A82E 100%)",
            boxShadow: "0px 4px 12px rgba(206, 146, 27, 0.4), inset 0px 1px 0px rgba(255,255,255,0.3)",
            color: "#FFF",
            fontFamily: "Manrope, sans-serif",
            fontSize: "12px", // Slightly reduced font size to fit the longer text
            fontWeight: "700",
            whiteSpace: "nowrap",
          }}
        >
          Registration Opening Soon
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

// --- SUB-COMPONENTS ---

// 1. The Blinking Separator (:)
const Separator = () => (
  <div className="flex flex-col h-[36px] justify-start pt-1">
    <span className="text-white/30 text-[14px] font-bold animate-pulse">:</span>
  </div>
);

// 2. The Time Unit Wrapper
const TimeUnit = ({ value, label }) => {
  const digits = value.toString().split("");

  return (
    <div className="flex flex-col items-center gap-0">
      <div className="flex h-[24px] overflow-hidden relative">
        {digits.map((digit, index) => (
          <RollingDigit key={index} digit={digit} />
        ))}
      </div>
      <span
        style={{
          color: "rgba(255, 255, 255, 0.4)",
          fontFamily: "Manrope, sans-serif",
          fontSize: "9px",
          fontWeight: "600",
          letterSpacing: "0.5px",
          marginTop: "2px",
          textTransform: "uppercase"
        }}
      >
        {label}
      </span>
    </div>
  );
};

// 3. The Rolling Digit (The "Clock" Logic)
const RollingDigit = ({ digit }) => {
  return (
    <div className="relative w-[11px] h-[24px] flex justify-center">
      <AnimatePresence mode="popLayout">
        <motion.span
          key={digit} 
          initial={{ y: "100%", opacity: 0, filter: "blur(2px)" }}
          animate={{ y: "0%", opacity: 1, filter: "blur(0px)" }}
          exit={{ y: "-100%", opacity: 0, filter: "blur(2px)" }}
          transition={{
            type: "spring",
            stiffness: 170, 
            damping: 18,    
            mass: 0.8
          }}
          className="absolute inset-0 flex items-center justify-center"
          style={{
            fontFamily: "Manrope, sans-serif",
            fontSize: "18px",
            fontWeight: "700",
            color: "#FFFFFF",
            lineHeight: "24px",
            textShadow: "0px 1px 3px rgba(0,0,0,0.5)"
          }}
        >
          {digit}
        </motion.span>
      </AnimatePresence>
    </div>
  );
};
export default Timer;