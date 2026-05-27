"use client";

import { useEffect, useState } from "react";

import Image from "next/image";

import Button from "@/components/common/Button";
import EnquiryModal from "@/components/forms/EnquiryModal";

const slides = [
  /* {
    image: "/images/math-teacher.jpeg",
  }, */

  {
    image: "/images/mathsPoster.jpeg",
  },

  /* {
    image: "/images/physics-teacher.jpeg",
  }, */

  {
    image: "/images/phyPoster.jpeg",
  },

  /* {
    image: "/images/chemistry-teacher.jpeg",
  }, */

  {
    image: "/images/chemPoster.jpeg",
  },
];

export default function HeroCarousel() {
  const [active, setActive] =
    useState(0);

  const [modalOpen, setModalOpen] =
    useState(false);
  
  const [previewOpen, setPreviewOpen] =
    useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) =>
        prev === slides.length - 1
          ? 0
          : prev + 1
      );
    }, 3000);

    return () =>
      clearInterval(timer);
  }, []);

  return (
    <>
      <div
        className="
          w-full
          /* max-w-[520px] */ 
          max-w-[340px]
          sm:max-w-[420px]
          lg:max-w-[520px]
          lg:max-w-[520px]
          mx-auto
        "
      >

        {/* CARD */}
        <div
          className="
            bg-white
            rounded-[30px]
            overflow-hidden
            border
            border-[var(--border)]
            shadow-2xl
          "
        >

          {/* IMAGE */}
          <div
            className="
              relative
              /* h-[420px] */ 
              h-[280px]
              sm:h-[360px]
              lg:h-[500px]
              sm:h-[380px]
              lg:h-[500px]
              w-full
              bg-[var(--background)]
            "
          >
            <button
              onClick={() => setPreviewOpen(true)} 
              className="absolute inset-0 cursor-zoom-in"
            >
            <Image src={slides[active].image}
            alt="Faculty"
            fill
            priority
            className="object-contain p-4 transition duration-300 hover:scale-[1.02]"
            />
            </button>
          </div>

          {/* CTA */}
          <div
            className="
              px-5
              py-5
              flex
              justify-center
            "
          >
            <Button
              onClick={() =>
                setModalOpen(
                  true
                )
              }
              className="
                w-full
                h-[56px]
                /* text-lg */ text-base
              "
            >
              Enroll Now
            </Button>
          </div>

        </div>

        {/* DOTS */}
        <div
          className="
            hidden
            sm:flex
            justify-center
            gap-3
            mt-6
          "
        >
          {slides.map(
            (
              _,
              index
            ) => (
              <button
                key={index}
                onClick={() =>
                  setActive(
                    index
                  )
                }
                className={`
                  transition-all
                  duration-700
                  rounded-full
                  ${
                    active ===
                    index
                      ? "w-8 h-3 bg-[var(--accent)]"
                      : "w-3 h-3 bg-gray-300"
                  }
                `}
              />
            )
          )}
        </div>

        {
previewOpen && (
<div
  onClick={() =>
    setPreviewOpen(false)
  }
  className="
    fixed
    inset-0
    z-[999]
    bg-black/80
    backdrop-blur-sm
    flex
    items-center
    justify-center
    p-8
  "
>

  <div
    onClick={(e)=>
      e.stopPropagation()
    }
    className="
      relative
      w-full
      max-w-6xl
      h-[90vh]
    "
  >

    <button
      onClick={() =>
        setPreviewOpen(
          false
        )
      }
      className="
        absolute
        top-4
        right-4
        z-20
        text-white
        text-4xl
      "
    >
      ×
    </button>

    <Image
      src={
        slides[active].image
      }
      alt="Preview"
      fill
      className="
        object-contain
      "
    />

  </div>

</div>
)
}

      </div>

      {/* MODAL */}
      <EnquiryModal
        isOpen={modalOpen}
        onClose={() =>
          setModalOpen(
            false
          )
        }
      />
    </>
  );
}