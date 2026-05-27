/* export default function Button({
    children,
    className = "",
    onClick,
  }) {
    return (
      <button
        onClick={onClick}
        className={`
          bg-blue-600
          hover:bg-blue-700
          text-white
          px-6
          py-3
          rounded-xl
          font-medium
          transition-all
          duration-300
          shadow-md
          hover:shadow-xl
          hover:-translate-y-1
          ${className}
        `}
      >
        {children}
      </button>
    );
  } */


export default function Button({
  children,
  className = "",
  onClick,
  variant = "primary",
}) {
  const variants = {
    primary: "btn-primary",
    secondary: "btn-secondary",
  };

  return (
    <button
      onClick={onClick}
      className={`
        ${variants[variant]}
        ${className}
      `}
    >
      {children}
    </button>
  );
}

