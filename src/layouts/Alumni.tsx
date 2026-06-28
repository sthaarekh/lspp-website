import { alumniData } from '../data/alumni';

const AlumniSection = () => {
  return (
    <section className="bg-[#efefef] py-20 px-6 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-center mb-12">
          <div className="text-center">
            <h2 className="text-2xl lg:text-5xl font-black text-[#169948]">
              Meet Our Alumni
            </h2>
            <p className="text-gray-500 text-lg mt-2 font-normal">
              Transforming campuses, one initiative at a time.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {alumniData.map((alumni) => (
            <div key={alumni.id}  className="bg-white rounded-[32px] overflow-hidden border border-gray-100 shadow-sm flex flex-col">
              <div className="relative h-[280px] w-full bg-gray-100">
                <img 
                  src={alumni.image} 
                  alt={alumni.name} 
                  className="w-full h-full object-cover"
                />
              </div>


              <div className="p-8 flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-[#111111]">
                  {alumni.name}
                </h3>
                <p className="text-gray-400 text-sm mt-1 mb-6 font-medium">
                  {alumni.college}
                </p>
                <p className="text-gray-600 leading-relaxed italic font-normal">
                  "{alumni.quote}"
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default AlumniSection;