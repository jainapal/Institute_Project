export default function TestimonialCard({
    name,
    course,
    feedback,
  }) {
    return (
      <div
        className="
          relative
          bg-white
          border
          border-[var(--border)]
          rounded-2xl
          p-8
          min-h-[340px]
          transition-all
          duration-300
          hover:border-[var(--accent)]
          hover:shadow-xl
          flex
          flex-col
          justify-between
          overflow-hidden
        "
      >
        {/* Accent Line */} <div className=" absolute top-0 left-0 w-full h-1 bg-[var(--accent)] " />
        {/* Quote */}
        <div className="text-6xl leading-none text-[var(--accent)] opacity-20">
          “
        </div>
  
        {/* Feedback */}
        <p
          className="
            text-[var(--text-secondary)]
            leading-8
            mt-4
            line-clamp-5
            text-[20px]
          "
        >
          {feedback}
        </p>
  
        {/* Footer */}
        <div className="mt-10 pt-5 border-t border-[var(--border)]">
          <h4 className="text-xl font-semibold text-[var(--primary)]">
            {name}
          </h4>
  
          <p className="text-[var(--accent)] mt-2 font-medium text-sm tracking-wide">
            {course}
          </p>
        </div>
      </div>
    );
  }