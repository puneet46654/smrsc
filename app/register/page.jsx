'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Header from '../../components/Header'; 
import Footer from '../../components/footer'; 

// --- Animation Variants ---
// Stagger effect for the parent container
const containerVar = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { 
      staggerChildren: 0.15, // Smooth delay between each item
      delayChildren: 0.1 
    }
  }
};

// Animation for individual items (Cards, Form, Button)
const itemVar = {
  hidden: { y: 30, opacity: 0 },
  show: { 
    y: 0, 
    opacity: 1, 
    transition: { type: 'spring', stiffness: 50, damping: 15 } 
  }
};

// --- Reusable Pricing Row Component ---
const PricingRow = ({ label, price }) => (
  <div className="flex justify-between items-center w-full py-3 border-b border-white/10 last:border-0 hover:bg-white/5 px-4 rounded-md transition-colors">
    <span 
        style={{
            color: '#E5E5E5',
            fontFamily: 'Manrope, sans-serif',
            fontSize: '16px',
            fontStyle: 'normal',
            fontWeight: 600,
            lineHeight: '18px',
            width: '302px'
        }}
    >
        {label}
    </span>
    <span 
        style={{
            color: '#E5E5E5',
            fontFamily: 'Manrope, sans-serif',
            fontSize: '16px',
            fontStyle: 'normal',
            fontWeight: 600,
            lineHeight: '18px'
        }}
    >
        {price}
    </span>
  </div>
);

const RegisterPage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-[#020617] overflow-x-hidden relative">
      <Header />

      {/* Ambient Background Glows */}
      <div className="fixed top-[20%] left-[10%] w-[500px] h-[500px] bg-[#004398] opacity-[0.15] blur-[120px] rounded-full pointer-events-none" />
      <div className="fixed bottom-[10%] right-[10%] w-[500px] h-[500px] bg-[#0BD3D3] opacity-[0.1] blur-[120px] rounded-full pointer-events-none" />

      <main className="flex-grow pt-32 pb-20 flex flex-col items-center px-4 relative z-10">
        
        {/* Page Title: Register Now (Animated) */}
        <motion.h1 
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          style={{
            color: '#F8FFFF',
            textAlign: 'center',
            fontFamily: '"Blauer Nue", sans-serif',
            fontSize: '72px',
            fontStyle: 'normal',
            fontWeight: 600,
            lineHeight: '52px',
            marginBottom: '64px'
          }}
        >
          Register Now
        </motion.h1>

        {/* Animation Container for All Content */}
        <motion.div 
          variants={containerVar}
          initial="hidden"
          animate="show"
          className="flex flex-col items-center gap-10 w-full"
        >
          
          {/* === PRICING CARDS SECTION === */}
          <div className="flex flex-wrap justify-center gap-8 w-full max-w-[1300px]">
            
            {/* 1. Indian Delegates Card */}
            <motion.div 
              variants={itemVar} // Applies animation
              className="flex flex-col items-start flex-shrink-0 bg-[#020617]/40 backdrop-blur-md"
              style={{
                display: 'flex',
                width: '626px',
                paddingBottom: '20px',
                flexDirection: 'column',
                alignItems: 'flex-start',
                gap: '20px',
                flexShrink: 0,
                borderRadius: '20px',
                border: '0.5px solid #659FD3',
              }}
            >
              {/* Blue Gradient Header */}
              <div 
                style={{
                  display: 'flex',
                  padding: '20px',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  gap: '10px',
                  alignSelf: 'stretch',
                  borderRadius: '20px 20px 0 0',
                  background: 'linear-gradient(90deg, #004398 0.32%, #0BD3D3 100.06%)'
                }}
              >
                <h3 
                    style={{
                        alignSelf: 'stretch',
                        color: '#FFF',
                        fontFamily: '"Blauer Nue", sans-serif',
                        fontSize: '20px',
                        fontStyle: 'normal',
                        fontWeight: 400,
                        lineHeight: '28px',
                        textAlign: 'center'
                    }}
                >
                    Indian Delegates Registration (INR)
                </h3>
              </div>

              {/* Content */}
              <div className="w-full px-5 flex flex-col gap-2">
                <PricingRow label="Surgeons" price="Rs. 5000.00" />
                <PricingRow label="Students" price="Rs. 2000.00" />
                <PricingRow label="Medical staff" price="Rs. 1000.00" />
              </div>
            </motion.div>

            {/* 2. International Delegates Card */}
            <motion.div 
              variants={itemVar} // Applies animation
              className="flex flex-col items-start flex-shrink-0 bg-[#020617]/40 backdrop-blur-md"
              style={{
                display: 'flex',
                width: '626px',
                paddingBottom: '20px',
                flexDirection: 'column',
                alignItems: 'flex-start',
                gap: '20px',
                flexShrink: 0,
                borderRadius: '20px',
                border: '0.5px solid #659FD3',
              }}
            >
              {/* Blue Gradient Header */}
              <div 
                style={{
                  display: 'flex',
                  padding: '20px',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  gap: '10px',
                  alignSelf: 'stretch',
                  borderRadius: '20px 20px 0 0',
                  background: 'linear-gradient(90deg, #004398 0.32%, #0BD3D3 100.06%)'
                }}
              >
                <h3 
                    style={{
                        color: '#FFF',
                        fontFamily: '"Blauer Nue", sans-serif',
                        fontSize: '20px',
                        fontStyle: 'normal',
                        fontWeight: 400,
                        lineHeight: '28px',
                        alignSelf: 'stretch',
                        textAlign: 'center'
                    }}
                >
                    International Delegates Registration (USD)
                </h3>
              </div>

              {/* Content */}
              <div className="w-full px-5 flex flex-col gap-2">
                <PricingRow label="Surgeons" price="$ 5000.00" />
                <PricingRow label="Students" price="$ 2000.00" />
                <PricingRow label="Medical staff" price="$ 1000.00" />
              </div>
            </motion.div>

          </div>


          {/* === START REGISTRATION FORM === */}
          <motion.div 
            variants={itemVar} // Applies animation
            className="flex flex-col items-start bg-[#020617]/60 backdrop-blur-md mt-6"
            style={{
              display: 'flex',
              width: '1280px',
              maxWidth: '100%',
              paddingBottom: '24px',
              flexDirection: 'column',
              alignItems: 'flex-start',
              gap: '20px',
              borderRadius: '20px',
              border: '0.5px solid #659FD3',
            }}
          >
             {/* Header Section of Form */}
             <div 
                style={{
                  display: 'flex',
                  padding: '20px',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'flex-start',
                  gap: '10px',
                  alignSelf: 'stretch',
                  borderRadius: '20px 20px 0 0',
                  background: 'linear-gradient(90deg, #004398 0.32%, #0BD3D3 100.06%)',
                }}
              >
                <h3 
                    style={{
                        flex: '1 0 0',
                        color: '#FFF',
                        fontFamily: '"Blauer Nue", sans-serif',
                        fontSize: '24px',
                        fontStyle: 'normal',
                        fontWeight: 400,
                        lineHeight: '28px',
                        paddingLeft: '10px'
                    }}
                >
                    Start Registration
                </h3>
              </div>

              {/* Form Inputs Container */}
              <div className="w-full px-8 py-6 flex flex-col gap-6">
                
                {/* Field 1: Email */}
                <div className="flex flex-col gap-2">
                  <label 
                    style={{
                        alignSelf: 'stretch',
                        color: '#FFF',
                        fontFamily: 'Manrope, sans-serif',
                        fontSize: '16px',
                        fontStyle: 'normal',
                        fontWeight: 500,
                        lineHeight: '150%'
                    }}
                  >
                    Email Address
                  </label>
                  <input 
                    type="email" 
                    placeholder="name@email.com"
                    style={{
                      display: 'flex',
                      height: '43px',
                      padding: '14px 20px',
                      alignItems: 'center',
                      alignSelf: 'stretch',
                      borderRadius: '5px',
                      background: 'linear-gradient(90deg, rgba(204, 204, 204, 0.20) 0%, rgba(255, 255, 255, 0.20) 100%)',
                      border: 'none',
                      color: 'white',
                      outline: 'none',
                      fontFamily: 'Manrope, sans-serif'
                    }}
                  />
                </div>

                {/* Field 2: Create Password */}
                <div className="flex flex-col gap-2">
                  <label 
                    style={{
                        alignSelf: 'stretch',
                        color: '#FFF',
                        fontFamily: 'Manrope, sans-serif',
                        fontSize: '16px',
                        fontStyle: 'normal',
                        fontWeight: 500,
                        lineHeight: '150%' 
                    }}
                  >
                    Create new password
                  </label>
                  <input 
                    type="password" 
                    placeholder="xxxxxxxx"
                    style={{
                      display: 'flex',
                      height: '43px',
                      padding: '14px 20px',
                      alignItems: 'center',
                      alignSelf: 'stretch',
                      borderRadius: '5px',
                      background: 'linear-gradient(90deg, rgba(204, 204, 204, 0.20) 0%, rgba(255, 255, 255, 0.20) 100%)',
                      border: 'none',
                      color: 'white',
                      outline: 'none',
                      fontFamily: 'Manrope, sans-serif'
                    }}
                  />
                </div>

                 {/* Field 3: Confirm Password */}
                 <div className="flex flex-col gap-2">
                  <label 
                    style={{
                        alignSelf: 'stretch',
                        color: '#FFF',
                        fontFamily: 'Manrope, sans-serif',
                        fontSize: '16px',
                        fontStyle: 'normal',
                        fontWeight: 500,
                        lineHeight: '150%' 
                    }}
                  >
                    Confirm password
                  </label>
                  <input 
                    type="password" 
                    placeholder="xxxxxxxx"
                    style={{
                      display: 'flex',
                      height: '43px',
                      padding: '14px 20px',
                      alignItems: 'center',
                      alignSelf: 'stretch',
                      borderRadius: '5px',
                      background: 'linear-gradient(90deg, rgba(204, 204, 204, 0.20) 0%, rgba(255, 255, 255, 0.20) 100%)',
                      border: 'none',
                      color: 'white',
                      outline: 'none',
                      fontFamily: 'Manrope, sans-serif'
                    }}
                  />
                </div>

              </div>
          </motion.div>

          {/* Submit Button (Animated & Cursor Pointer) */}
          <motion.button
            variants={itemVar} // Applies animation
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{
                display: 'inline-flex',
                padding: '12px 20px 12px 24px',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '8px',
                borderRadius: '24px',
                background: '#CE921B',
                marginTop: '32px',
                boxShadow: 'none',
                color: '#FFF',
                fontFamily: 'Manrope, sans-serif',
                fontWeight: 600,
                cursor: 'pointer' // Explicitly added
            }}
          >
            Save & Continue <ArrowRight size={18} />
          </motion.button>

        </motion.div>
      </main>

      <Footer />
    </div>
  );
};

export default RegisterPage;