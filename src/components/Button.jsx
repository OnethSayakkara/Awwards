

const Button = ({ id, title, containerClass }) => {
  return (
    <button
      id={id}
      className={(
        "group relative z-10 w-fit cursor-pointer overflow-hidden rounded-full bg-violet-50 px-7 py-3 text-black",
        containerClass
      )}
    >
      <span className="relative inline-flex overflow-hidden font-general text-xs uppercase">
        {/* Default text */}
        <span className="translate-y-0 skew-y-0 transition duration-500 group-hover:-translate-y-[160%] group-hover:skew-y-12">
          {title}
        </span>
        
        {/* Animated-in text */}
        <span className="absolute top-0 left-0 translate-y-[164%] skew-y-12 transition duration-500 group-hover:translate-y-0 group-hover:skew-y-0">
          {title}
        </span>
      </span>
    </button>
  );
};

export default Button;
