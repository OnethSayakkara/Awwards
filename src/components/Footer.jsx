import React from 'react';

function Footer() {
  const socialLinks = [
    { label: "discord", href: "https://discordapp.com/users/1100747568981495828" },
    { label: "instagram", href: "https://www.instagram.com/oneth_.sayakkara/" },
    { label: "github", href: "https://github.com/OnethSayakkara" },
    { label: "email", href: "mailto:onethsayakkara@gmail.com" },
    { label: "x", href: "https://x.com/yourusername" } // Replace with your real X (Twitter) link
  ];

  return (
    <section>
      <div className="relative h-[500px] font-madefor text-lg">
        <div className="absolute left-[55px] top-0 h-full w-px bg-black scale-x-[0.2]" />
        <div className="absolute left-[75px] top-0 h-full w-px bg-black scale-x-[0.2]" />
        <div className="absolute right-[55px] top-0 h-full w-px bg-black scale-x-[0.2]" />
        <div className="absolute right-[75px] top-0 h-full w-px bg-black scale-x-[0.2]" />

        <div className="relative h-[330px]">
          <div className="absolute right-[680px] top-0 h-full w-px bg-black scale-x-[0.2]" />
          <div className="absolute right-[700px] top-0 h-full w-px bg-black scale-x-[0.2]" />

          <p className="absolute left-24 top-5">Don't be shy - Say hello!</p>

          <div className="flex flex-col uppercase text-brightred text-[1.1rem] space-y-2 absolute bottom-10 right-[34.7rem]">
            {socialLinks.map(({ label, href }, index) => (
              <a
                key={index}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="relative group w-fit"
              >
                <span>{label}</span>
                <span className="absolute left-0 -bottom-0.5 h-[2px] w-0 bg-brightred transition-all duration-500 group-hover:w-full" />
              </a>
            ))}
          </div>

          <div className="absolute bottom-6 left-0 w-full border-t border-black scale-y-[0.2]" />
          <div className="absolute bottom-0 left-0 w-full border-t border-black scale-y-[0.2]" />
        </div>
      </div>
    </section>
  );
}

export default Footer;
