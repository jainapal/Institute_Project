import SectionHeading from "@/components/common/SectionHeading";
import CourseCard from "@/components/courses/CourseCard";

import { courses } from "@/data/courses";

export default function CoursesSection() {
  return (
    <section id="courses" className="section-padding bg-white relative overflow-hidden">
      {/* Background Pattern */} 
      <div className=" absolute inset-0 opacity-[0.03] pointer-events-none " > 
        <div className="institute-bg h-full w-full" /> 
      </div>
      
      
      <div className="container-custom relative z-10">
        
        <SectionHeading
          subtitle="Academic Programs"
          title="Courses Designed for Future IITians & Doctors"
        />

        {/* Top Description */} 
        <p className=" section-subtitle text-center mx-auto mb-20 max-w-3xl " > 
          Comprehensive classroom programs designed to build strong conceptual understanding, 
          exam temperament, and consistent performance in competitive examinations. 
        </p>


        {/* Grid */}
        <div 
        /* className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch" */
        className="flex overflow-x-auto snap-x snap-mandatory gap-8 pb-8 sm:grid sm:grid-cols-2 lg:grid-cols-3"
        >
          {courses.map((course, index) => (
            <div key={course.id} className="min-w-[90%] snap-center sm:min-w-0">
            <CourseCard
            title={course.title}
            description={course.description}
            icon={course.icon}
            />
            </div>
            
          ))}
        </div>

        <div className="sm:hidden text-center text-xs mt-3 text-gray-400">
          ← Swipe to explore courses →
        </div>
      </div>
      
    </section>
  );
}