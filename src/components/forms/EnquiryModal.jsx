"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { submitEnquiry } from "../lib/SubmitEnquiry";

import { HiX } from "react-icons/hi";

export default function EnquiryModal({
  isOpen,
  onClose,
  defaultCourse = "",
}) {
  // Prevent background scrolling
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);


const [loading, setLoading] = useState(false);
const [message, setMessage] = useState("");
const initialState = () => ({
  name: "",
  phone: "",
  school: "",
  course: defaultCourse || "",
});
const [formData, setFormData] = useState(initialState);





const handleChange = (e) => {
  setFormData({
    ...formData,
    [e.target.name]: e.target.value,
  });
};

const handleSubmit = async (e) => {

  e.preventDefault();
  
  if (formData.phone.length !== 10) {
  setMessage("Phone number must be 10 digits.");
  return;
  }
  
  try {
  
  setLoading(true);
  
  await submitEnquiry(formData);
  
  setMessage("Enquiry submitted successfully!");
  
  setFormData(initialState());
  
  setTimeout(() => {
    onClose();
  }, 1500);
  
  } catch (error) {
  console.error(error);
  setMessage("Something went wrong!");
  
  } finally {
  setLoading(false);
  }
};
  

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* BACKDROP */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="
              fixed
              inset-0
              bg-black/50
              backdrop-blur-sm
              z-[100]
            "
          />

          {/* MODAL */}
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.9,
              y: 40,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              scale: 0.9,
              y: 40,
            }}
            transition={{ duration: 0.3 }}
            className="
              fixed
              left-1/2
              top-1/2
              -translate-x-1/2
              -translate-y-1/2
              w-[92%]
              max-w-2xl
              bg-[var(--surface)]
              rounded-2xl
              shadow-2xl
              z-[101]
              overflow-hidden
              border
              border-[var(--border)]
            "
          >
            {/* HEADER */}
            <div className="flex items-center justify-between px-8 py-6 border-b border-[var(--border)]">
              
              <div>
                <h2 className="text-4xl font-bold text-[var(--primary)] loading-tight">
                  Book Free Counselling
                </h2>

                <p className="text-[var(--text-secondary)] mt-3 leading-7">
                Our academic counsellors will contact you to guide you about the best program for your preparation journey.
                </p>
              </div>

              <button
                onClick={onClose}
                className="
                  text-gray-500
                  hover:text-[var(--accent)]
                  transition-colors
                "
              >
                <HiX size={30} />
              </button>
            </div>

            {/* FORM */}
            <form onSubmit={handleSubmit} className="p-8 space-y-6">
              
              {/* Name */}
              <div>
                <label className="block text-sm font-semibold mb-2 text-[var(--primary)]">
                  Full Name *
                </label>

                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  className="form-input"
                  required
                  minLength={3}
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm font-semibold mb-2 text-[var(--primary)]">
                  Phone Number *
                </label>

                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={(e) => {
                    const value = e.target.value.replace(/\D/g, "");
                
                    setFormData({
                      ...formData,
                      phone: value,
                    });
                  }}
                  placeholder="Enter your Mobile Number"
                  className="form-input"
                  required
                  maxLength={10}
                />
              </div>

              {/* School */}
              <div>
                <label className="block text-sm font-semibold mb-2 text-[var(--primary)]">
                  School Name
                </label>

                <input
                  type="text"
                  name="school"
                  value={formData.school}
                  onChange={handleChange}
                  placeholder="Enter school name"
                  className="form-input"
                />
              </div>

              {/* Course */}
              <div>
                <label className="block text-sm font-semibold mb-2 text-[var(--primary)]">
                  Interested Course
                </label>

                <select
                  name="course"
                  value={formData.course}
                  onChange={handleChange}
                  className="form-input"
                >
                  <option value="">Choose Course</option>
                  {/* <option>JEE Main</option>
                  <option>JEE Advanced</option>
                  <option>NEET</option>
                  <option>BITSAT</option>
                  <option>CBSE Foundation</option>
                  <option>Physics</option>
                  <option>Chemistry</option>
                  <option>Maths</option> */}
                  {[
                  "JEE Main",
                  "JEE Advanced",
                  "NEET",
                  "BITSAT",
                  "CBSE Foundation",
                  "Physics",
                  "Chemistry",
                  "Mathematics",
                  "Crash Courses",

                  /* ADD DYNAMIC VALUE */
                   ...(defaultCourse &&
                  ![
                  "JEE Main",
                  "JEE Advanced",
                  "NEET",
                  "BITSAT",
                  "CBSE Foundation",
                  "Physics",
                  "Chemistry",
                  "Mathematics",
                  
                  ].includes(defaultCourse)
                  ? [defaultCourse]
                  : []),
                  ].map((course) => (
                  <option
                  key={course}
                  value={course}
                  >
                  {course}
                  </option>
                  ))}
                </select>
              </div>

              {message && (
                <p
                className={`
                  text-center
                  font-medium
                  ${
                    message.includes("success")? "text-emerald-600": "text-red-500"
                    }
                    `}
                    >
                      {message}
                </p>
              )}


              {/* BUTTONS */}
              
              <div className="flex flex-col sm:flex-row gap-4 pt-4"> 
                
                <button
                  type="submit"
                  disabled={loading}
                  className="flex-1 btn-primary disabled:opacity-60 disabled:cursor-not-allowed
"
                  /* className="
                    flex-1
                    bg-blue-600
                    hover:bg-blue-700
                    disabled:bg-blue-400
                    disabled:cursor-not-allowed
                    text-white
                    gap-4 
                    pt-4
                    py-4
                    rounded-xl
                    font-semibold
                    transition-all
                  " */
                >
                  {loading ? "Submitting..." : "Submit Enquiry"}
                </button>

                <button
                  type="button"
                  onClick={onClose}
                  className="
                    flex-1 btn-secondary
                  "
                >
                  Cancel
                </button>

              </div>
            </form>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}