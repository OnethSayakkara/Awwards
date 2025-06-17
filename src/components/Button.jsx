import React, { useRef } from "react";
import clsx from "clsx";

const Button = ({ id, title, containerClass }) => {
  const buttonRef = useRef(null);

  const handleMouseMove = (e) => {
    const button = buttonRef.current;
    const rect = button.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    button.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
  };

  const handleMouseLeave = () => {
    const button = buttonRef.current;
    button.style.transition = "transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)";
    button.style.transform = "translate(0px, 0px)";
    setTimeout(() => {
      button.style.transition = "";
    }, 500);
  };

  return (
    <a href="mailto:onethsayakkara@gmail.com">
      <button
        id={id}
        ref={buttonRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className={clsx(
          "group relative z-10 w-fit cursor-pointer overflow-hidden rounded-full bg-darkgray px-7 py-3 text-white hover:bg-brightred transition-transform duration-300 ease-out",
          containerClass
        )}
      >
        <span className="relative inline-flex overflow-hidden font-general text-xs uppercase">
          <div className="translate-y-0 skew-y-0 transition duration-500 group-hover:translate-y-[-160%] group-hover:skew-y-12">
            {title}
          </div>
          <div className="absolute translate-y-[164%] skew-y-12 transition duration-500 group-hover:translate-y-0 group-hover:skew-y-0">
            {title}
          </div>
        </span>
      </button>
    </a>
  );
};

export default Button;
