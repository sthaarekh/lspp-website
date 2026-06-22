import React from "react";
import logo from "../assets/lf-logo.svg";

const Navbar = ({
  navItems = [
    { label: "Benefits", href: "#benefits" },
    { label: "Journey", href: "#journey" },
    { label: "Impact", href: "#impact" },
    { label: "Resources", href: "#resources" },
  ],
  activeItem = "Benefits",
  ctaText = "Apply Now",
}) => {
  return (
    <header className="w-full border-b border-gray-200 bg-[#fffcfc] ">
      <div className="mx-auto flex h-[80px] items-center justify-between max-w-7xl mx-auto px-8 lg:px-16">
        
        <div className="flex items-center">
            <img src={logo} alt="LF logo" className="h-7 w-auto" />
        </div>

        <nav className="flex items-center gap-16">
          {navItems.map((item) => {
            const isActive = item.label === activeItem;

            return (
              <a
                key={item.label}
                href={item.href}
                className={`relative pb-3 text-[18px] font-medium transition-all duration-200 ${
                  isActive
                    ? "text-[#2563EB]"
                    : "text-[#3D3D3D] hover:text-black"
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 h-[4px] w-full rounded-full bg-[#2563EB]" />
                )}
              </a>
            );
          })}
        </nav>

        <button className="rounded-[18px] bg-black px-10 py-4 text-[18px] font-medium text-white transition-all hover:scale-[1.02]">
          {ctaText}
        </button>
      </div>
    </header>
  );
};

export default Navbar;