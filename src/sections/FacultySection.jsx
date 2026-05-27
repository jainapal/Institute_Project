"use client";

import { useState } from "react";

import Image from "next/image";

import SectionHeading from "@/components/common/SectionHeading";

import EnquiryModal from "@/components/forms/EnquiryModal";

import Button from "@/components/common/Button";

import { faculty } from "@/data/faculty";

export default function FacultySection() {

  const [modalOpen, setModalOpen] =
    useState(false);

  const [selectedCourse,
    setSelectedCourse] =
    useState("");

  return (
    <section
      id="faculty"
      className="
        section-padding
        bg-[var(--background)]
      "
    >
      <div className="container-custom">

        {/* Heading */}
        <SectionHeading
          subtitle="Our Faculty"
          title="Mentors Behind The Results"
        />

        <p
          className="
            section-subtitle
            text-center
            mx-auto
            mb-20
          "
        >
          Learn from experienced faculty
          who have mentored thousands of
          students and produced top ranks.
        </p>

        {/* Faculty List */}
        <div 
        /* className="space-y-28" */
        className="flex overflow-x-auto snap-x snap-mandatory gap-5 lg:block pb-2 scrollbar-hide"
        >

          {faculty.map(
            (
              teacher,
              index
            ) => (
                
                /* className={`
                  grid
                  lg:grid-cols-2
                  gap-16
                  items-center

                  ${
                    index % 2
                      ? "lg:[&>*:first-child]:order-2"
                      : ""
                  }
                `} */
                
              <div key={teacher.id}
              className="snap-center min-w-[90%] mx-auto bg-white rounded-[32px] border
              border-[var(--border)] p-6 flex flex-col lg:grid lg:grid-cols-2
              lg:min-w-full lg:bg-transparent lg:border-0 lg:p-0 gap-8"
              >

                {/* IMAGE */}
                <div className="flex justify-center lg:block">

                  <div
                    className="
                      relative w-[130px] h-[130px] rounded-full border-[6px] border-white
                      lg:w-full lg:h-auto lg:rounded-[32px] overflow-hidden
                      border
                      border-[var(--border)]
                    "
                  >

                    <Image
                      src={
                        teacher.image
                      }
                      alt={
                        teacher.name
                      }
                      fill
                      className="
                        object-cover
                      "
                    />

                  </div>

                </div>

                {/* CONTENT */}
                <div className="text-center lg:text-left">

                  {/* Experience */}
                  <div
                    className="
                      inline-flex mx-auto lg:mx-0
                      px-5
                      py-2
                      rounded-full
                      bg-[rgba(216,155,29,0.12)]
                      text-[var(--accent)]
                      font-semibold
                    "
                  >
                    {
                      teacher.experience
                    }
                  </div>

                  {/* Name */}
                  <h2
                    className="
                      mt-5
                      text-5xl
                      font-bold
                    "
                  >
                    {
                      teacher.name
                    }
                  </h2>

                  {/* Subject */}
                  <p
                    className="
                      text-xl
                      mt-3
                      text-[var(--text-secondary)]
                    "
                  >
                    {
                      teacher.subject
                    }
                  </p>

                  {/* Qualification */}
                  {teacher.qualification && (

                    <p
                      className="
                        mt-5
                        text-[var(--text-secondary)]
                      "
                    >
                      {
                        teacher.qualification
                      }
                    </p>

                  )}

                  {/* Highlights */}
                  <div
                    className="
                      mt-8
                      
                      space-y-5
                    "
                  >

                    {teacher.highlights.map(
                      (
                        point
                      ) => (

                        <div
                          key={point}
                          className="
                            flex
                            gap-4
                            items-start
                          "
                        >

                          <div
                            className="
                              w-3
                              h-3
                              rounded-full
                              mt-2
                              bg-[var(--accent)]
                            "
                          />

                          <p
                            className="
                              text-lg
                              text-[var(--text-secondary)]
                            "
                          >
                            {point}
                          </p>

                        </div>

                      )
                    )}

                  </div>

                  {/* CTA */}
                  <Button
                    className="mt-8 w-full lg:w-fit"
                    onClick={() => {

                      setSelectedCourse(
                        teacher.subject
                      );

                      setModalOpen(
                        true
                      );

                    }}
                  >
                    Book Free Demo Class
                  </Button>

                </div>

              </div>

            )
          )}

        </div>

      </div>

      {/* SINGLE MODAL */}
      <EnquiryModal
        isOpen={modalOpen}
        onClose={() =>
          setModalOpen(false)
        }
        defaultCourse={
          selectedCourse
        }
      />

    </section>
  );
}