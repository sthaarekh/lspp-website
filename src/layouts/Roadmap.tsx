import React from "react";
import { roadmapData } from "../data/data";

const Roadmap = ({
  title = "Your 6-Month Roadmap",
  subtitle = "A structured path from student to industry professional.",
}) => {
  return (
    <section className="w-full bg-[#fffcfc] px-16 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-20 text-center">
          <h2 className="text-[50px] font-extrabold leading-[1.05] tracking-[-0.03em] text-[#111111]">
            {title}
          </h2>
          <p className="mt-4 text-[24px] font-medium text-[#4B4B4B]">
            {subtitle}
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-0 right-0 top-[94px] h-[4px] bg-[#E7E3E3]" />

          <div className="grid grid-cols-6 gap-6">
            {roadmapData.map((item) => {
              const Icon = item.icon;
              const isActive = item.active;
              const isCompleted = item.completed;

              return (
                <div
                  key={item.month}
                  className="relative flex flex-col items-center text-center"
                >
                  <div
                    className={`z-10 flex h-[76px] w-[76px] items-center justify-center rounded-full ${
                      isActive
                        ? "bg-black text-white"
                        : isCompleted
                        ? "bg-[#0D9B8A] text-white"
                        : "bg-[#E7E3E8] text-[#202020]"
                    }`}
                  >
                    <Icon strokeWidth={2.4} className="h-[34px] w-[34px]" />
                  </div>

                  <h3 className="mt-8 text-[18px] font-extrabold leading-none text-[#171717]">
                    {item.month}
                  </h3>

                  <p className="mt-3 text-[18px] font-medium leading-none text-[#1155CC]">
                    {item.title}
                  </p>

                  <p className="mt-5 max-w-[260px] text-[16px] font-medium italic leading-[1.4] tracking-[0.01em] text-[#7A7A7A]">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Roadmap;