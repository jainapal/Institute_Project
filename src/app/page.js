import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import HeroSection from "@/sections/HeroSection";
import WhatsappButton from "@/components/common/WhatsappButton";
import AboutSection from "@/sections/AboutSection";
import CoursesSection from "@/sections/CoursesSection";
import ResultsSection from "@/sections/ResultsSection";
import TestimonialSection from "@/sections/TestimonialSection";
import MapSection from "@/sections/MapSection";
import FacultySection from "@/sections/FacultySection";



export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <HeroSection></HeroSection>
        <CoursesSection></CoursesSection>
        <ResultsSection></ResultsSection>
        {/* <FacultySection></FacultySection> */}
        <TestimonialSection></TestimonialSection>
        <AboutSection></AboutSection>
        <MapSection></MapSection>
      </main>

      <WhatsappButton ></WhatsappButton>

      <Footer />
    </>
  );
}