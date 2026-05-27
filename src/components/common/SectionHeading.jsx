export default function SectionHeading({
    title,
    subtitle,
  }) {
    return (
      <div className="text-center mb-16">
        <p className="text-[var(--accent)] font-semibold mb-4 uppercase tracking-[0.2em] text-sm">
          {subtitle}
        </p>
  
        <h2 className=" section-title text-[var(--primary)] max-w-4xl mx-auto">
          {title}
        </h2>

        {/* Decorative Line */} 
        <div className=" w-24 h-1 bg-[var(--accent)] 
        mx-auto mt-6 rounded-full " />
      </div>
    );
  }