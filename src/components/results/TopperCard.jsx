import Image from "next/image";

export default function TopperCard({
  name,
  exam,
  rank,
  image,
}) {
  return (
    <div
      className="
        bg-white
        border
        border-var[(--border)]
        rounded-2xl
        overflow-hidden
        hover:border-[var(--accent)]
        hover:shadow-2xl
        transition-all
        duration-300
        relative
      "
    >
      {/* Top Accent */} 
      <div className=" h-1 w-full bg-[var(--accent)] " />


      {/* Image */}
      <div className="relative h-56 overflow-hidden">
        <Image
          src={image || "/images/default.png"}
          alt={name}
          fill
          className="object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="px-3 pb-5 text-center">
        <h3 className="text-base sm:text-xl font-bold text-[var(--primary)] mt-3">
          {name}
        </h3>

        <p className="text-[11px] sm:text-sm uppercase tracking-[0.18em] font-semibold text-var[(--accent)]">
          {exam}
        </p>

        <div  className="mt-4 inline-flex items-center justify-center px-6 py-2.5
        text-white rounded-full bg-slate-900 font-semibold tracking-wide shadow-md" >
          {rank}
        </div>
      </div>
    </div>
  );
}