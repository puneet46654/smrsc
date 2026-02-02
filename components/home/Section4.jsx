"use client";
import React from 'react';
import Image from 'next/image'; // Imported Next.js Image component
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Section4 = () => {
  const facultyMembers = [
    {
      id: 1,
      name: "Dr. Sudhir Srivastava",
      role: "Founder, Chairman and CEO SS Innovations, INDIA",
      // UPDATED: Extension changed to .webp
      image: "/images/home/section4/image1.webp"
    },
    {
      id: 2,
      name: "Dr. Husam Balkhy",
      role: "The University of Chicago Medicine and Biological Sciences Chicago, USA",
      image: "/images/home/section4/image2.webp"
    },
    {
      id: 3,
      name: "Dr. Valluvan Jeevanandam",
      role: "The University of Chicago Medicine and Biological Sciences Chicago, USA",
      image: "/images/home/section4/image3.webp"
    },
    {
      id: 4,
      name: "Dr. T Sloane Guy",
      role: "Georgia Heart Institute, Gainesville, GA, USA",
      image: "/images/home/section4/image4.webp"
    }
  ];

  // --- Animation Variants ---
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  // --- Styles ---
  const facultyHeadingStyle = {
    color: '#F8FFFF',
    fontFamily: '"Blauer Nue", sans-serif',
    fontStyle: 'normal',
    fontWeight: 500,
  };

  const cardImageStyle = {
    aspectRatio: '20/23',
  };

  const docNameStyle = {
    color: '#FFF',
    fontFamily: '"Blauer Nue", sans-serif',
    fontSize: '1rem',
    fontStyle: 'normal',
    fontWeight: 500,
    lineHeight: '1.5rem', 
  };

  const docDescStyle = {
    color: '#FFF',
    fontFamily: 'Manrope, sans-serif',
    fontSize: '0.75rem',
    fontStyle: 'normal',
    fontWeight: 400,
    lineHeight: '1rem', 
    opacity: 0.8,
  };

  return (
    <motion.section
      id="section4"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={containerVariants}
      className="min-h-screen h-auto md:h-[130vh] w-full bg-[#020617] flex flex-col items-center justify-start md:justify-between py-16 md:pt-20 md:pb-20 px-6 gap-12 md:gap-0"
    >
      
      {/* --- TOP: Headings --- */}
      <motion.div 
        variants={itemVariants}
        className="max-w-[1380px] w-full flex flex-col gap-4 md:gap-2 text-center md:text-left"
      >
        <h3
          style={{
            color: '#E6E6E6',
            fontFamily: 'Manrope, sans-serif',
            fontStyle: 'normal',
            fontWeight: 500,
          }}
          className="text-[20px] leading-[28px] md:text-[32px] md:leading-[32px] flex flex-col justify-center"
        >
          A movement that started with a vision is now reshaping
        </h3>

        <h2
          style={{
            color: '#E3F5F6',
            fontFamily: '"Blauer Nue", sans-serif',
            fontStyle: 'normal',
            fontWeight: 600,
          }}
          className="uppercase tracking-tight text-[32px] leading-[40px] md:text-[64px] md:leading-[86px]"
        >
          THE FUTURE OF ROBOTIC SURGERY
        </h2>
      </motion.div>

      {/* --- BOTTOM: Faculty Section --- */}
      <div className="max-w-[1380px] w-full flex flex-col gap-8 md:gap-10 items-center md:items-stretch">
        
        {/* Heading */}
        <motion.h4 
          variants={itemVariants} 
          style={facultyHeadingStyle}
          className="text-[2rem] leading-[2.5rem] md:text-[2.25rem] md:leading-[2.5rem] self-start"
        >
          Our Faculty
        </motion.h4>

        {/* Cards Grid */}
        <div className="flex flex-wrap justify-center xl:justify-between gap-8 w-full">
          {facultyMembers.map((member) => (
            <motion.div 
              key={member.id} 
              variants={itemVariants}
              className="flex flex-col gap-4 group cursor-pointer items-center md:items-start"
            >
              
              {/* Image Container */}
              <div 
                style={cardImageStyle} 
                className="relative rounded-[32px] overflow-hidden bg-gray-800 w-full max-w-[20rem] md:w-[20rem] h-[23rem]"
              >
                {/* UPDATED: Replaced img with Next.js Image */}
                <Image 
                  src={member.image} 
                  alt={member.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 320px"
                  className={`object-cover object-top transition-transform duration-500 group-hover:scale-105 ${
                    (member.id === 1 || member.id === 2) ? 'scale-110' : ''
                  }`}
                />
              </div>

              {/* Text Content */}
              <div className="flex flex-col gap-1 w-full max-w-[20rem] text-center md:text-left">
                <h5 style={docNameStyle}>
                  {member.name}
                </h5>
                <p style={docDescStyle}>
                  {member.role}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <motion.div variants={itemVariants} className="flex justify-center mt-4 md:mt-8">
          <button 
            className="flex items-center gap-2 px-6 py-3 bg-white rounded-full hover:bg-gray-200 transition-colors cursor-pointer active:scale-95"
          >
            <span className="text-[#020617] font-medium font-['Manrope'] text-sm">View all Faculty</span>
            <ArrowRight className="text-[#020617] w-4 h-4" />
          </button>
        </motion.div>

      </div>
    </motion.section>
  );
};

export default Section4;