import { FaWhatsapp } from "react-icons/fa";

export default function WhatsappButton() {
  return (
    <a
      href="https://wa.me/+918448878932"
      target="_blank"
      rel="noopener noreferrer"
      className="
        fixed
        bottom-6
        right-6
        z-50
        flex
        items-center
        gap-3
        bg-[#25D366]
        hover:bg-[#1ebe5d]
        text-white
        px-5
        py-3
        rounded-full
        shadow-lg
        transition-all
        duration-300
        hover:-translate-y-1
      "
    >
      <FaWhatsapp size={24} />
      <span className="hidden sm:block font-medium"> 
        Chat With Counsellor 
      </span>
    </a>
  );
}