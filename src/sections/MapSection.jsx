import SectionHeading from "@/components/common/SectionHeading";

export default function MapSection() {
  return (
    <section id="map" className="section-padding bg-slate-50">
      <div className="container-custom">
        
        <SectionHeading
          subtitle="Visit Us"
          title="Find Our Institute"
        />

        <div className="rounded-3xl overflow-hidden shadow-2xl">
          
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.9839877898617!2d77.36801679999999!3d28.540200999999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce7d4ed8d22a5%3A0xdcb9c5dc024e3bdf!2sJEEvant%20classes!5e0!3m2!1sen!2sin!4v1779118430269!5m2!1sen!2sin"
            width="100%"
            height="500"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>

        </div>
      </div>
    </section>
  );
}