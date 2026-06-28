import { statsData } from '../data/stats';

const Status = () => {
  return (
    <section className="bg-[#169948] text-white py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-12">
          Building it, Bit by Bit.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {statsData.map((stat) => (
            <div key={stat.id} className="bg-[#1fa857] border border-white/15 rounded-3xl p-8 text-left h-45 flex flex-col justify-center">
              <span className="text-3xl md:text-4xl font-bold text-white block mb-2">
                {stat.value}
              </span>
              <span className="text-green-100 text-base font-medium">
                {stat.label}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Status;