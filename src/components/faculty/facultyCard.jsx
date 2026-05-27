import Image from "next/image";

export default function FacultyCard({
  name,
  subject,
  qualification,
  experience,
  highlights,
  image,
}) {
  return (
    <div
      className="
        institute-card
        overflow-hidden
        hover:border-[var(--accent)]
      "
    >
      <div className="relative rounded-full overflow-hidden border-4 border-white shadow-xl
      w-[110px] h-[110px] lg:w-full lg:h-full lg:rounded-none"
      
      >

        <Image
          src={image}
          alt={name}
          fill
          className="object-cover"
        />

      </div>

      <div className="px-5 pb-6 pt-4 text-center lg:text-left lg:p-7">

        <p
          className="
            text-sm
            uppercase
            tracking-[0.18em]
            text-[var(--accent)]
            font-semibold
          "
        >
          {subject}
        </p>

        <h3
          className="
            text-[2.1rem] leading-none whitespace-nowrap
            sm:text-5xl lg:text-3xl
            
          "
        >
          {name}
        </h3>

        {qualification && (
          <p
            className="
              mt-3
              text-[var(--text-secondary)]
            "
          >
            {qualification}
          </p>
        )}

        <div
          className="
            mt-4
            inline-block
            px-4
            py-2
            rounded-full
            bg-[rgba(216,155,29,0.12)]
            text-[var(--accent)]
            font-medium
          "
        >
          {experience}
        </div>

        <ul
          className="
            mt-6
            space-y-3
          "
        >
          {highlights.map(
            (item) => (
              <li
                key={item}
                className="
                  text-[var(--text-secondary)]
                "
              >
                • {item}
              </li>
            )
          )}
        </ul>

      </div>
    </div>
  );
}