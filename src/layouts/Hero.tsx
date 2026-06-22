import React from "react";
import {
  Users,
  GraduationCap,
  Sparkles,
} from "lucide-react";
import img1 from '../assets/FBN_NEW.webp';
import img2 from '../assets/2025_2.webp';
import img3 from '../assets/hero_image.webp';
import person1 from '../assets/person1.jpg';
import person2 from '../assets/person2.jpg';
import person3 from '../assets/person3.png';

const Hero = () => {
  return (
    <section className="bg-[#F5F4F7] min-h-screen">
      <div className="max-w-7xl mx-auto px-8 lg:px-16 py-10">

        <div className="grid lg:grid-cols-2 items-center min-h-[850px] gap-16">

          <div>
            <div className="inline-flex items-center gap-2 bg-[#DDE3FF] px-5 py-3 rounded-full">
              <Sparkles size={14} />
              <span className="text-[#1D2E6F] font-medium">
                Cohort 2024 Now Open
              </span>
            </div>

            <div className="mt-10">
              <h1 className="text-5xl font-black leading-none text-[#111]">
                LEARN.
              </h1>
              <h1 className="text-5xl font-black leading-none text-[#111] mt-2">
                LEAD.
              </h1>
              <h1 className="text-5xl font-black leading-none text-[#111] mt-2">
                BUILD.
              </h1>
            </div>

            <p className="mt-10 text-2xl text-gray-600 leading-relaxed max-w-xl">
              A high intensity peer-to-peer ecosystem for student
              developers to move beyond the classroom and into the
              deep-end of tech innovation.
            </p>

            <button className="mt-10 bg-black text-white px-10 py-5 rounded-2xl text-xl font-medium hover:opacity-90 transition">
              Start Your Application
            </button>

            <div className="flex items-center gap-5 mt-14">
              <div className="flex -space-x-3">
                <img
                  src={person1}
                  alt=""
                  className="w-14 h-14 rounded-full border-2 border-white"
                />
                <img
                  src={person2}
                  alt=""
                  className="w-14 h-14 rounded-full border-2 border-white"
                />
                <img
                  src={person3}
                  alt=""
                  className="w-14 h-14 rounded-full border-2 border-white"
                />
              </div>

              <p className="text-lg">
                <span className="font-bold">500+</span>{" "}
                <span className="text-gray-600">
                  Students Empowered
                </span>
              </p>
            </div>
          </div>

          <div className="relative h-[700px]">

            <div className="absolute right-0 top-0 w-[380px] h-[360px] rounded-[40px] overflow-hidden shadow-xl rotate-2">
              <img
                src={img3}
                alt=""
                className="w-full h-full object-cover"
              />
            </div>

            <div className="absolute left-0 top-40 w-[350px] h-[420px] rounded-[30px] overflow-hidden shadow-xl">
              <img
                src={img1}
                alt=""
                className="w-full h-full object-cover"
              />
            </div>

            <div className="absolute left-12 bottom-0 w-[330px] h-[220px] rounded-[24px] overflow-hidden shadow-xl -rotate-6">
              <img
                src={img2}
                alt=""
                className="w-full h-full object-cover"
              />
            </div>


            <div className="absolute top-40 right-[-20px] bg-white rounded-3xl px-6 py-5 shadow-lg flex items-center gap-4">
              <div className="bg-blue-600 p-3 rounded-full">
                <GraduationCap
                  size={20}
                  className="text-white"
                />
              </div>

              <div>
                <p className="text-gray-500">
                  Mentorship
                </p>

                <p className="font-bold text-xl">
                  Expert-Led
                </p>
              </div>

            </div>

            {/* Network Card */}
            <div className="absolute left-[-40px] bottom-36 bg-white rounded-3xl px-6 py-5 shadow-lg flex items-center gap-4">

              <div className="bg-green-500 p-3 rounded-full">
                <Users
                  size={20}
                  className="text-white"
                />
              </div>

              <div>
                <p className="text-gray-500">
                  Network
                </p>

                <p className="font-bold text-xl">
                  25+ Colleges
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Hero;