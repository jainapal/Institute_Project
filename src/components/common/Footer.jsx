import {
    FaPhoneAlt,
    FaEnvelope,
    FaMapMarkerAlt,
  } from "react-icons/fa";
  
  export default function Footer() {
    return (
      <footer className="bg-[var(--primary)] text-white pt-20 pb-10 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <div className="institute-bg h-full w-full" />
        </div>


        <div className="container-custom grid md:grid-cols-3 gap-10">
          
          {/* Brand */}
          <div>
            <h2 className="text-3xl font-bold mb-5 text-white">
              JEEvant Classes
            </h2>
  
            <p className="text-white/70 leading-8 max-w-sm">
              Empowering students for JEE, NEET, CBSE
              and competitive exams with expert mentorship.
            </p>
          </div>
  
          {/* Contact */}
          <div>
            <h3 className="text-xl font-semibold mb-5">
              Contact
            </h3>
  
            <div className="space-y-4 text-white/70">
              <p className="flex items-center gap-3">
                <FaPhoneAlt className="text-[var(--accent)]" />
                +91 84488 78932
              </p>
  
              <p className="flex items-center gap-3">
                <FaEnvelope className="text-[var(--accent)]" />
                jeevantclasses101@gmail.com
              </p>
  
              <p className="flex items-center gap-3">
                <FaMapMarkerAlt className="text-[var(--accent)]" />
                HA 116, Hazipur, Sector 104, Noida, Uttar Pradesh 201301
              </p>
            </div>
          </div>
  
          {/* Courses */}
          <div>
            <h3 className="text-xl font-semibold mb-5">
              Courses
            </h3>
  
            <ul className="space-y-4 text-white/70">
            <li>• JEE Main</li> 
            <li>• JEE Advanced</li> 
            <li>• NEET</li> 
            <li>• BITSAT</li> 
            <li>• CBSE Foundation</li>
            </ul>
          </div>
        </div>
  
        <div className="border-t border-white/10 mt-16 pt-6 text-center text-white/50 text-sm">
          © 2026 JEEvant Classes. All rights reserved.
        </div>
      </footer>
    );
  }