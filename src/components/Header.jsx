import React, { useRef } from 'react';
import { FaRegCopyright } from "react-icons/fa6";

function Header() {
  const animatedLink = (label, href) => {
    const isExternal = href.startsWith('http');

    

    return (
      <a
        href={href}
        target={isExternal ? '_blank' : undefined}
        rel={isExternal ? 'noopener noreferrer' : undefined}
        className="relative group text-darkgray"
      >
        <span>{label}</span>
        <span className="pointer-events-none absolute left-0 -bottom-[2px] h-[1px] w-0 bg-brightred transition-all duration-500 group-hover:w-full" />
      </a>
    );
  };

  const iconRef = useRef(null);

  const handleMouseMove = (e) => {
    const icon = iconRef.current;
    const rect = icon.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    icon.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
  };

  const handleMouseLeave = () => {
    iconRef.current.style.transform = 'translate(0px, 0px)';
  };

  return (
    <section>
      <div className="relative h-auto p-5">
        {/* Vertical borders */}
        <div className="absolute left-[55px] top-0 h-full w-px bg-black scale-x-[0.2]" />
        <div className="absolute right-[55px] top-0 h-full w-px bg-black scale-x-[0.2]" />

        {/* Content */}
        <div className="ml-[70px] mr-[70px] flex items-center justify-between">
          {/* Logo */}

<div
      className="inline-flex items-center gap-2 overflow-hidden group"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Magnetic Icon */}
      <FaRegCopyright
        ref={iconRef}
        className="text-xs text-darkneutral mt-[1px] transition-transform duration-300 ease-out"
      />

      {/* Animated Text */}
      <a
        href="/"
        className="relative inline-block h-[1.3em] min-w-[150px] w-[140px] text-darkneutral font-bold font-madefor"
      >
        {/* Default Text */}
        <span className="absolute left-0 top-0 w-full transition-transform duration-500 ease-in-out group-hover:-translate-x-full">
          Thing by Oneth
        </span>

        {/* Hover Text */}
        <span className="absolute left-full top-0 w-full transition-transform duration-500 ease-in-out group-hover:-translate-x-full">
          Oneth Vindima
        </span>
      </a>
    </div>



          <div className="flex flex-row gap-28">
            {/* Status */}
            <nav className="font-size font-madefor">
              <p className="text-mediumgray py-1">Status</p>
              <p>
                Currently available for<br />
                any type of collaboration
              </p>
            </nav>

            {/* Say hi */}
            <nav className="font-size font-madefor space-y-1">
              <p className="text-mediumgray py-1">Say hi</p>
              <div className="space-x-2">
                {animatedLink('Instagram,', 'https://www.instagram.com/oneth_.sayakkara/')}
                {animatedLink('Discord,', 'https://discordapp.com/users/1100747568981495828')}
              </div>
              <div className="space-x-2">
                {animatedLink('Github,', 'https://github.com/OnethSayakkara')}
                {animatedLink('X', '#example')}
              </div>
            </nav>

            {/* Navigate */}
            <nav className="font-size font-madefor space-y-1">
              <p className="text-mediumgray py-1">Navigate</p>
              <div className="space-x-2">
                {animatedLink('Projects,', '/projects')}
                {animatedLink('About,', '/about')}
              </div>
              <div className="space-x-2">
                {animatedLink('Resources,', '/resource')}
                {animatedLink('Contact', 'mailto:onethsayakkara@gmail.com')}
              </div>
            </nav>
          </div>
        </div>

        {/* Bottom line */}
        <div className="absolute bottom-0 left-0 w-full border-t border-black scale-y-[0.2]" />
      </div>
    </section>
  );
}

export default Header;
