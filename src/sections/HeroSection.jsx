"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Button from "@/components/common/Button";
import HeroCarousel from "@/components/Hero/HeroCarousel";

export default function HeroSection() {
  return (
    <section id="hero" className="institute-bg overflow-hidden bg-[var(--background)]">
      <div 
      /* className="container-custom min-h-[90vh] flex flex-col-reverse lg:flex-row items-center justify-between gap-5 py-5" */
      className="container-custom min-h-screen flex flex-col lg:flex-row
      items-center justify-between gap-16 lg:gap-20 py-10 lg:py-5"
      >
        
        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="lg:w-[58%] xl:w-[60%] text-center lg:text-left"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white border border-[var(--border)] 
          text-[var(--primary)] px-5 py-2.5 rounded-full text-sm font-medium mb-7 mx-auto lg:mx-0 shadow-sm">
            <span className="text-[var(--accent)]">★</span>
            Admission Open For 2026 Batch
          </div>

          {/* Heading */}
          <h1 
          /* className="text-5xl md:text-6xl xl:text-7xl leading-[1.05] font-bold 
          text-[var(--primary)] max-w-4xl" */
          className="text-[3.2rem] sm:text-6xl xl:text-7xl leading-[0.95] font-bold 
          text-[var(--primary)] max-w-4xl"
          >
            JEEvant Classes for  
            <span className="text-[var(--accent)]"> 
              {" "}IIT-JEE & NEET </span>
          </h1>

          {/* Description */}
          <p 
          /* className="mt-8 text-lg md:text-xl text-[var(--text-secondary)] leading-9 max-w-2xl" */
          className="mt-6 text-base sm:text-lg md:text-xl leading-8 max-w-xl mx-auto lg:mx-0 text-[var(--text-secondary)]"
          >
            Expert guidance for JEE Main, JEE Advanced,
            NEET, BITSAT and CBSE preparation with
            personalized mentorship and proven results.
          </p>

          {/* Buttons */}
          <div 
          /* className="flex flex-col sm:flex-row items-center lg:items-start gap-5 mt-12" */
          className="flex flex-col sm:flex-row w-full sm:w-auto gap-4 mt-10"
          >
            <Link href="#courses">
            <button className="btn-secondary w-full sm:w-auto">
              Explore Courses
            </button>
            </Link>

            <Link href="#results">
            <button className="btn-secondary w-full sm:w-auto">
              View Results
            </button>
            </Link>
          </div>

          {/* Stats */}
          <div 
          className="grid grid-cols-3 gap-5 mt-14 max-w-[700px]" 

          /* className="flex gap-2 mt-8 overflow-x-auto pb-2" */
          >
            <div className="institute-card text-center">
              <h3 className=" text-2xl sm:text-4xl text-[var(--accent)]">
                1000+
              </h3>
              <p className="text-[var(--text-secondary)]  sm:text-base mt-3">
                Students Mentored
              </p>
            </div>

            <div className="institute-card text-center">
              <h3 className="text-2xl sm:text-4xl text-[var(--accent)]">
                90%
              </h3>

              <p className="text-[var(--text-secondary)] sm:text-bas mt-3">
                Selection Ratio
              </p>
            </div>

            <div className="institute-card text-center">
              <h3 className="text-2xl sm:text-4xl text-[var(--accent)]">
                20+
              </h3>

              <p className="text-[var(--text-secondary)] sm:text-bas mt-3">
                Years Experience
              </p>
            </div>
          </div>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="w-full lg:w-[48%] mt-8 lg:mt-0 flex justify-center items-center lg:-translate-x-8"
        >
        
          {/* Image */}
          <div className="relative flex w-full justify-center">
            {/* <Image
              src="/images/hero.png"
              alt="Students"
              width={1400}
              height={1400}
              priority
              className="w-full max-w-[1100px] object-contain drop-shadow-2xl lg:scale-[1.35]"
    
            /> */}
            <HeroCarousel />
          </div>
        </motion.div>
      </div>
    </section>
  );
}