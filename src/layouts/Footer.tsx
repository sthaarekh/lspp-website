import logo from "../assets/lf-logo-white.svg";

export default function Footer() {
  return (
    <footer className=" bg-[#169948] max-h-[400px] flex flex-col justify-end pb-12 py-20 px-6 md:px-16 selection:bg-[#4ade80] selection:text-black">
      <div className="text-center pointer-events-none select-none ">
        <span className="text-[14vw] font-black tracking-tighter leading-none opacity-[0.06] text-white italic transform -rotate-3 block">
          LEAPFROG
        </span>
      </div>

      <div className="max-w-7xl w-full mx-auto relative z-10 px-6">
        <div className="w-full h-[1px] bg-white/5 mb-10" />
        <div className="flex flex-col space-y-6 md:space-y-0 md:flex-row md:items-end md:justify-between">
          <div className="flex flex-col space-y-3">
            <p className="text-xs tracking-widest uppercase text-[#eae7e7]">
              &copy; 2022 Leapfrog Technology Inc. All rights reserved.
            </p>
          </div>
          <div className="flex flex-col items-start md:items-end">
            <p className="text-sm italic text-slate-400 tracking-wide font-sans">
            <img src={logo} alt="LF logo" className="h-7 w-auto color-white" />
            </p>
          </div>

        </div>
      </div>

      <div className="absolute bottom-6 right-6 flex items-center justify-center">
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#4ade80] opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-[#4ade80]"></span>
        </span>
      </div>
    </footer>
  );
}