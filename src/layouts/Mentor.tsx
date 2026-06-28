import {mentorsData} from "../data/Mentor";

export default function MeetOurMentors() {
  return (
    <section className="bg-[#F8F9FA] py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-center text-4xl sm:text-5xl font-extrabold text-[#169948] tracking-tight">
          Meet our Mentors
        </h2>
        <p className="text-gray-700 text-center text-lg mt-2 font-normal  mb-16">
            The industry experts shaping the student partners to learn, lead and grow.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-12 items-start justify-center max-w-5xl mx-auto">
          {mentorsData.map((mentor) => (
            <div key={mentor.id} className="flex flex-col items-center text-center group">
              <div className="relative w-40 h-40 sm:w-40 sm:h-36 lg:w-44 lg:h-44 rounded-2xl bg-white p-1 shadow-[0_10px_25px_-5px_rgba(0,0,0,0.1),0_8px_10px_-6px_rgba(0,0,0,0.1)] mb-5 transition-transform duration-300 ease-in-out group-hover:scale-105">
                <div className="w-full h-full rounded-2xl overflow-hidden bg-gray-100 border border-gray-100">
                  <img
                    src={mentor.imageUrl}
                    alt={mentor.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              </div>

              <h3 className="text-lg sm:text-xl font-medium text-[#111827]  mb-1">
                {mentor.name}
              </h3>
              <p className="text-sm font-normal text-gray-600 tracking-wide">
                {mentor.role}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
