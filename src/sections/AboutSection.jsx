import Image from "next/image";
import SectionHeading from "@/components/common/SectionHeading";

export default function AboutSection() {
  return (
    <section id="about" className="section-padding bg-[var(--background)] relative overflow-hidden">
      <div className=" absolute inset-0 opacity-[0.025] pointer-events-none " > 
        <div className="institute-bg h-full w-full" /> 
      </div>

      <div className="container-custom">
        
        <SectionHeading
          subtitle="About JEEvant"
          title="We Don’t Just Teach — We Build Future"
        />

        <div className="relative z-10 grid lg:grid-cols-2 gap-20 items-center">
          
          {/* LEFT IMAGES */}
          <div className="relative w-full">
            <Image
              src="/images/about.png"
              alt="Institute"
              width={1200}
              height={800}
              className="rounded-3xl w-full h-auto object-cover"
            />
          </div>

          {/* RIGHT CONTENT */}
          {/* CONTENT */}
          <div>

            {/* Intro */}
            <p
              className="
                text-lg
                leading-9
                text-[var(--text-secondary)]
              "
            >
              JEEvant Classes is a leading
              coaching institute in Noida
              for IIT-JEE, NEET and CBSE
              preparation, powered by expert
              faculty with more than
              20 years of teaching experience.
            </p>

            <p
              className="
                mt-6
                text-lg
                leading-9
                text-[var(--text-secondary)]
              "
            >
              Our faculty team has mentored
              over <span className="font-bold text-[var(--primary)]">
              10,000+ students
              </span>,
              including top performers such as
              <span className="font-bold text-[var(--accent)]">
                {" "}AIR 2 in IIT-JEE
              </span>.
            </p>

            <p
              className="
                mt-6
                text-lg
                leading-9
                text-[var(--text-secondary)]
              "
            >
              We combine strong conceptual
              learning with modern teaching
              methods through our hybrid
              learning system —
              offline classroom +
              live online classes —
              giving students flexibility,
              continuity and better outcomes.
            </p>

            {/* FEATURES */}
            <div
              className="
                grid
                sm:grid-cols-2
                gap-5
                mt-12
              "
            >

              <div className="institute-card">
                <h4 className="text-xl font-bold">
                  20+ Years Experience
                </h4>

                <p className="mt-3 text-[var(--text-secondary)]">
                  Experienced mentors with
                  proven results.
                </p>
              </div>

              <div className="institute-card">
                <h4 className="text-xl font-bold">
                  Hybrid Learning
                </h4>

                <p className="mt-3 text-[var(--text-secondary)]">
                  Offline + live online
                  simultaneously.
                </p>
              </div>

              <div className="institute-card">
                <h4 className="text-xl font-bold">
                  Regular Tests
                </h4>

                <p className="mt-3 text-[var(--text-secondary)]">
                  Continuous assessments
                  and tracking.
                </p>
              </div>

              <div className="institute-card">
                <h4 className="text-xl font-bold">
                  Personalized Attention
                </h4>

                <p className="mt-3 text-[var(--text-secondary)]">
                  Individual support for
                  every student.
                </p>
              </div>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
}