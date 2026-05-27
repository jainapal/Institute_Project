"use client";

import SectionHeading from "../components/common/SectionHeading";

import TestimonialCard from "../components/testimonials/TestimonialCard";

import { testimonials } from "../data/testimonials";

// SWIPER
import { Swiper, SwiperSlide } from "swiper/react";

import {
  Autoplay,
  Navigation,
} from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

export default function TestimonialSection() {

  return (
    <section
      id="testimonials"
      className="section-padding bg-[var(--background)] relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-[0.025] pointer-events-none">
        <div className="institute-bg h-full w-full" />
      </div>


      <div className="container-custom relative z-10">

        <SectionHeading
          subtitle="Testimonials"
          title="Experiences Shared By Our Students"
        />

        {/* SLIDER */}
        <Swiper
          modules={[Autoplay, Navigation]}
          spaceBetween={30}
          navigation
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          className="mt-10 pb-16 px-1"
          breakpoints={{
            0: {
              slidesPerView: 1,
            },

            768: {
              slidesPerView: 2,
            },

            1024: {
              slidesPerView: 3,
            },
          }}
        >
          {testimonials.map((item) => (

            <SwiperSlide
              key={item.id}
              className="h-auto"
            >
              <TestimonialCard
                name={item.name}
                course={item.course}
                feedback={item.feedback}
              />
            </SwiperSlide>

          ))}
        </Swiper>
      </div>
    </section>
  );
}