"use client";

import { useState } from "react";

import SectionHeading from "@/components/common/SectionHeading";

import TopperCard from "@/components/results/TopperCard";
import ResultRow from "@/components/results/ResultRow";

import { toppers } from "@/data/toppers";

export default function ResultsSection() {

  const categories = [
    "All",
    "JEE Main",
    "JEE Advanced",
    "NEET",
    "BITSAT",
    "CBSE",
  ];

  const [activeCategory, setActiveCategory] =
    useState("All");

  const [currentPage, setCurrentPage] =
    useState(1);

  const resultsPerPage = 10;

  // FEATURED
  const featuredStudents = toppers.filter(
    (student) => student.featured
  );

  // FILTERED
  const filteredStudents =
    activeCategory === "All"
      ? toppers
      : toppers.filter(
          (student) =>
            student.category === activeCategory
        );

  // PAGINATION
  const startIndex =
    (currentPage - 1) * resultsPerPage;

  const paginatedStudents =
    filteredStudents.slice(
      startIndex,
      startIndex + resultsPerPage
    );

  const totalPages = Math.ceil(
    filteredStudents.length / resultsPerPage
  );

  return (
    <section
      id="results"
      className="section-padding bg-white relative overflow-hidden"
    >
      {/*Background Pattern */}
      <div className="absolute inset-0 opacity-[0.025] pointer-events-none">
        <div className="institute-bg h-full w-full" />
      </div>


      <div className="container-custom relative z-10">

        {/*Heading */}
        <SectionHeading
          subtitle="Our Results"
          title="Celebrating Excellence & Outstanding Results"
        />

        {/* FEATURED TOPPERS */}
        {/* <div 
        className=" grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8 mt-14 "
        >
          
          {featuredStudents.map((student) => (
            <TopperCard
              key={student.id}
              name={student.name}
              exam={student.category}
              rank={student.rank}
              image={student.image}
            />
          ))}
        </div> */}

        {/* CATEGORY TABS */}
        <div
          className="
            flex
            gap-4
            overflow-x-auto
            justify-center
            mt-20
            pb-2
          " 
        >
          {categories.map((category) => (

            <button
              key={category}
              onClick={() => {
                setActiveCategory(category);
                setCurrentPage(1);
              }}
              className={`
                whitespace-nowrap
                px-6
                py-3
                rounded-full
                font-medium
                border
                transition-all
                duration-300
                ${
                  activeCategory === category
                  ? "bg-[var(--primary)] text-white border-[var(--primary)]"
                  : "bg-white text-[var(--text-primary)] border-[var(--border)] hover:border-[var(--accent)] hover:text-[var(--accent)]"
                }
              `}
            >
              {category}
            </button>
          ))}
        </div>

        {/* RESULTS LIST */}
        <div className="space-y-5 mt-14">
          
          {paginatedStudents.map((student) => (
            <ResultRow
              key={student.id}
              name={student.name}
              school={student.school}
              rank={student.rank}
              image={student.image}
              category={student.category}
            />
          ))}
        </div>

        {/* PAGINATION */}
        <div
          className="
            flex
            justify-center
            items-center
            gap-4
            mt-12
          "
        >
          <button
            disabled={currentPage === 1}
            onClick={() =>
              setCurrentPage((prev) => prev - 1)
            }
            className="
              px-6
              py-3
              rounded-full
              border
              border-[var(--border)]
              bg-white
              text-[var(--primary)]
              font-medium
              transition-all
              duration-300
              hover:border-[var(--accent)]
              hover:text-[var(--accent)]
              disabled:opacity-40
              disabled:cursor-not-allowed
            "
          >
            Prev
          </button>

          <p className="font-medium text-[var(--text-secondary)]">
            Page {currentPage} of {totalPages}
          </p>

          <button
            disabled={currentPage === totalPages}
            onClick={() =>
              setCurrentPage((prev) => prev + 1)
            }
            className="
              px-6
              py-3
              rounded-full
              border
              border-[var(--border)]
              bg-white
              text-[var(--primary)]
              font-medium 
              transition-all 
              duration-300 
              hover:border-[var(--accent)] 
              hover:text-[var(--accent)] 
              disabled:opacity-40 
              disabled:cursor-not-allowed
              
            "
          >
            Next
          </button>
        </div>
      </div>
    </section>
  );
}