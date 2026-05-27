"use client";

import Button from "@/components/common/Button"
import { useState } from "react";
import EnquiryModal from "@/components/forms/EnquiryModal";

export default function CourseCard({
    title,
    description,
   
  }) {
    const [open,setOpen]=useState(false);
    /* return (
      <div
        className=" institute-card flex flex-col justify-between h-full relative overflow-hidden p-5 sm:p-8 "
      >
       
      <div className=" absolute top-0 left-0 w-full h-1 bg-[var(--accent)] " />

      
        <div> 
         
        <div className=" text-3xl sm:text-5xl mb-4 text-[var(--accent)] " > 
          {icon} 
        </div>
         
        <div className=" inline-block text-xs uppercase tracking-[0.18em] font-semibold text-[var(--accent)] mb-4 " > 
          Featured Program
        </div>
         
        <h3 className=" text-2xl sm:text-3xl font-bold text-[var(--primary)] leading-tight " > 
          {title} 
        </h3>
         
        <p className=" mt-4 text-sm sm:text-base text-[var(--text-secondary)] leading-7 line-clamp-4 " > 
          {description} 
        </p>
        
        <ul className=" mt-6 space-y-3 text-sm text-[var(--text-secondary)] " > 
          <li>• Expert Faculty Guidance</li> 
          <li>• Regular Test Series</li> 
          <li>• Doubt Support & Mentorship</li> 
        </ul> 
        </div>

        
        <div className="mt-auto pt-6"> 
          <Button className="w-full h-[54px] rounded-2xl"> Enquire Now </Button> 
        </div> 
      </div> 
        );  */
      
        return (
        <>
          <div
          className="institute-card flex flex-col h-full relative overflow-hidden p-8"
          >
          
          {/* Top Accent */}
          <div className="absolute top-0 left-0 w-full h-[4px] bg-[var(--accent)]"/>
          
          <div className="flex flex-col h-full">
          
          {/* Badge */}
          <div className="mb-6">
          <span className="
          inline-flex
          items-center
          px-4
          py-2
          rounded-full
          bg-[#FFF7E5]
          text-[11px]
          uppercase
          tracking-[0.18em]
          font-semibold
          text-[var(--accent)]
          ">
          Featured Program
          </span>
          </div>
          
          
          
          {/* Title */}
          <h3
          className="
          text-[34px]
          font-bold
          leading-[1.15]
          text-[var(--primary)]
          "
          >
          {title}
          </h3>
          
          {/* Description */}
          <p
          className="
          mt-5
          text-[15px]
          leading-8
          text-[var(--text-secondary)]
          line-clamp-3
          "
          >
          {description}
          </p>
          
          {/* Divider */}
          <div className="my-8 border-t border-gray-100"/>
          
          {/* Features */}
          <ul
          className="
          space-y-4
          text-[15px]
          text-[var(--text-secondary)]
          "
          >
          <li>✓ Expert Faculty Guidance</li>
          
          <li>✓ Weekly Test Series</li>
          
          <li>✓ Doubt Support</li>
          
          <li>✓ Parent Progress Reports</li>
          </ul>
          
          {/* Social Proof */}
          <div
          className="
          mt-8
          text-sm
          text-[var(--accent-dark)]
          font-medium
          "
          >
          Admissions Open • Limited Seats
          </div>
          
          {/* CTA */}
          <div className="mt-auto pt-8">
          
          <Button
          onClick={() => setOpen(true)}
          className="
          w-full
          h-[58px]
          rounded-2xl
          font-semibold
          "
          >
          
          Book Free Counselling →
          
          </Button>
          
          </div>
          
          </div>          
          </div>

           {/* Modal */}
           <EnquiryModal
          key={title}
          isOpen={open}
          onClose={() => setOpen(false)}
          defaultCourse={title}
          />
        </>
       
 
          )
      }









        