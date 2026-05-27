import Image from "next/image";

export default function ResultRow({
  name,
  school,
  rank,
  image,
  category,
}) {
  return (
    <div
      className=" bg-white border border-[var(--border)] rounded-2xl px-6 py-5 
      transition-all duration-300 hover:border-[var(--accent)] hover:shadow-lg "
    >
      <div className="flex items-center justify-between gap-4">
        
        {/* LEFT */}
        <div 
        className=" flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5 "
        >
          
          <div className="flex items-center gap-5">
            <Image
              src={image || "/images/default.png"}
              alt={name}
              width={56}
              height={56}
              className="rounded-full object-cover h-20"
            />
          </div>

          {/* Info */}
          <div>
            <h3 className=" text-xl font-bold  text-[var(--primary)]">
              {name}
            </h3>

            <p className="text-[var(--text-secondary)] mt-1">
              {school}
            </p>
          </div>
        </div>

        {/* RIGHT */}
        <div className="text-left sm:text-right">
          
          <div
            
            className=" 
            inline-flex items-center justify-center px-4 py-1.5 
            rounded-full bg-[rgba(216,155,29,0.12)] text-[var(--accent)] 
            text-sm font-semibold tracking-wide "
          >
            {category}
          </div>

          <p 
         
          className=" mt-3 text-lg font-bold text-[var(--primary)] "
          >
            {rank}
          </p>
        </div>
      </div>
    </div>
  );
}