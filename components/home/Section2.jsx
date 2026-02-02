"use client";
import React from 'react';
import { motion } from 'framer-motion';

const Section2 = () => {
  // CARDS DATA (Text removed, mapped to specific images)
  const cards = [
    // Outer Left (Lower) -> Image 1
    { id: 1, img: "/images/home/section2/image1.webp", x: -500, y: 100 },
    // Inner Left (Higher) -> Image 2
    { id: 2, img: "/images/home/section2/image2.webp", x: -180, y: -180 },
    // Inner Right (Higher) -> Image 3
    { id: 3, img: "/images/home/section2/image3.webp", x: 180, y: -180 },
    // Outer Right (Lower) -> Image 4
    { id: 4, img: "/images/home/section2/image4.webp", x: 500, y: 100 },
  ];

  // --- STYLES ---

  const titleStyle = {
    color: '#FFF',
    textAlign: 'center',
    fontFamily: '"Blauer Nue", sans-serif',
    fontSize: '64px',
    fontStyle: 'normal',
    fontWeight: '600',
    lineHeight: '150%', 
    letterSpacing: '-0.704px',
    textTransform: 'capitalize',
  };

  // --- ANIMATION VARIANTS ---

  const entranceVariants = {
    hidden: { x: 0, y: 0, scale: 0.4, opacity: 0 },
    visible: (i) => ({
      x: cards[i].x,
      y: cards[i].y,
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 45,
        damping: 14,
        mass: 1.2,
        delay: i * 0.1,
      }
    })
  };

  const floatVariants = {
    float: (i) => ({
      y: [0, -12, 0],
      transition: {
        delay: 0.8 + (i * 0.2),
        duration: 3.5,
        repeat: Infinity,
        repeatType: "mirror",
        ease: "easeInOut",
      }
    })
  };

  const titleVariants = {
    hidden: { opacity: 0, y: 40, filter: 'blur(10px)' },
    visible: { 
      opacity: 1, 
      y: 0,
      filter: 'blur(0px)',
      transition: {
        duration: 0.8,
        ease: [0.25, 1, 0.5, 1],
        delay: 0.3,
      }
    }
  };

  return (
    <section className="relative w-full h-screen flex justify-center items-center overflow-visible bg-transparent">
      
      {/* BACKGROUND GLOW */}
      <div 
        className="absolute z-0 pointer-events-none"
        style={{
          width: '80%',
          height: '100%',
          left: '50%',
          top: '0', 
          transform: 'translate(-50%, -50%)',
          background: 'rgba(0, 186, 254, 0.80)',
          filter: 'blur(350px)',
          borderRadius: '100%',
        }}
      />

      <div className="relative z-10 w-full h-full flex flex-col items-center justify-center">
        
        {/* DATA CARDS (IMAGES ONLY) */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          {cards.map((card, i) => (
            <motion.div 
              key={card.id}
              custom={i}
              variants={entranceVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-10%" }}
              style={{ 
                width: '272px', 
                height: '224px',
                position: 'absolute',
                zIndex: 20,
              }}
              className="flex items-center justify-center pointer-events-auto"
            >
              {/* Floating Wrapper */}
              <motion.div
                custom={i}
                animate="float"
                variants={floatVariants}
                className="relative w-full h-full flex items-center justify-center"
              >
                {/* NEW IMAGE REPLACEMENT (WEBP) */}
                <img
                  src={card.img}
                  alt={`Clinical Outcome ${i + 1}`}
                  style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                  className="select-none pointer-events-none"
                  draggable={false}
                />
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* TITLE */}
        <motion.div
          style={titleStyle}
          variants={titleVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10%" }}
          className="mt-[350px] z-30 select-none"
        >
          Clinical Outcomes
        </motion.div>

      </div>
    </section>
  );
};

export default Section2;