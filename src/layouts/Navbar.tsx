import { useEffect, useRef, useState } from "react";
import logo from "../assets/lf-logo.svg";

const Navbar = ({ ctaText = "Apply Now" }) => {
  const progressRef = useRef(null);
  const [showButton, setShowButton] = useState(true);

  useEffect(() => {
    let ticking = false;
    let lastScroll = 0;

    const update = () => {
      const scrollY = window.scrollY;
      const maxScroll =
        document.documentElement.scrollHeight - window.innerHeight;

      const progress = Math.min(scrollY / maxScroll, 1);

      // GPU accelerated
      if (progressRef.current) {
        progressRef.current.style.transform = `scaleX(${progress})`;
      }

      // Hide button while scrolling down
      if (scrollY > lastScroll && scrollY > 80) {
        setShowButton(false);
      } else {
        setShowButton(true);
      }

      lastScroll = scrollY;
      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(update);
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    update();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 z-50 w-full bg-[#fff6f6]/95 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-8 lg:px-16">
        <img src={logo} alt="LF Logo" className="h-7" />

        <button
          className={`rounded-[18px] bg-[#169948] px-10 py-4 text-[18px] font-medium text-white hidden
          transition-all duration-500 ease-[cubic-bezier(.22,1,.36,1)]
          ${
            showButton
              ? "translate-y-0 opacity-100"
              : "-translate-y-6 opacity-0 pointer-events-none"
          }`}
        >
          {ctaText}
        </button>
      </div>

      <div className="h-[3px] bg-transparent">
        <div
          ref={progressRef}
          className="h-full origin-left bg-[#169948] will-change-transform transition-transform duration-150 ease-out"
          style={{ transform: "scaleX(0)" }}
        />
      </div>
    </header>
  );
};

export default Navbar;