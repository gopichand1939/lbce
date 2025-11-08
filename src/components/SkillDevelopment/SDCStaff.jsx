import { motion } from 'framer-motion';
import { Award, Users, GraduationCap, User } from 'lucide-react';

const SDCStaff = () => {
  const staff = [
    {
      name: 'D. Bhujanga Rao',
      designation: 'Placement Co-ordinator',
      qualification: 'M.Tech., M.I.E(Ph.D.)',
      image: 'https://i.postimg.cc/TPw6hrP2/file.jpg',
      role: 'The Pillar of Placements',
      description: 'Leading placement success through strategic skill development and career guidance.',
      motto: 'Empowering Careers, Building Futures',
    },
    {
      name: 'K. Sasidhar',
      designation: 'Trainer, Soft Skills',
      qualification: 'M.A(Eng), M.Phil.',
      image: null,
    },
    {
      name: 'U. Hilda Sharan',
      designation: 'Trainer, Soft Skills',
      qualification: 'M.A(Eng)',
      image: null,
    },
    {
      name: 'U. Ramesh Kumar',
      designation: 'Trainer, Analytical Skills',
      qualification: 'M.C.A',
      image: null,
    },
  ];

  return (
    <div className="py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-12"
      >
        <h3 className="text-3xl md:text-4xl font-bold gradient-text mb-6 text-center">
          Our Expert Team
        </h3>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full mx-auto mb-8" />
      </motion.div>

      {/* Coordinator - Featured Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-12"
      >
        <div className="glass rounded-3xl p-8 md:p-12 shadow-2xl border-2 border-blue-500 overflow-hidden relative bg-gradient-to-br from-blue-50/50 via-purple-50/50 to-pink-50/50">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,_rgba(59,130,246,0.3)_1px,_transparent_0)] bg-[length:40px_40px]" />
          </div>

          <div className="relative z-10">
            {/* Pillar Badge */}
            <div className="flex justify-center mb-6">
              <div className="px-6 py-2 rounded-full bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 text-white text-sm font-bold shadow-xl animate-pulse">
                <Award className="w-4 h-4 inline mr-2" />
                THE PILLAR OF PLACEMENTS
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
              {/* Photo */}
              <div className="relative flex-shrink-0">
                <div className="relative w-56 h-56 md:w-64 md:h-64 rounded-3xl overflow-hidden shadow-2xl group">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 opacity-20 blur-2xl" />
                  <img
                    src={staff[0].image}
                    alt={staff[0].name}
                    className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500 relative z-10"
                    onError={(e) => {
                      e.target.src = 'https://via.placeholder.com/300x300/0ea5e9/ffffff?text=D.+Bhujanga+Rao';
                      e.target.onerror = null;
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20" />
                </div>
                <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 z-20">
                  <div className="px-5 py-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-bold shadow-xl">
                    <Users className="w-4 h-4 inline mr-2" />
                    Placement Co-ordinator
                  </div>
                </div>
              </div>

              {/* Details */}
              <div className="flex-1 text-center md:text-left space-y-4">
                <div>
                  <h4 className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                    {staff[0].name}
                  </h4>
                  <p className="text-xl md:text-2xl text-gray-700 font-semibold mb-3">
                    {staff[0].designation}
                  </p>
                  <div className="inline-block px-5 py-2 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 text-gray-800 text-base font-semibold border-2 border-blue-300 shadow-lg">
                    {staff[0].qualification}
                  </div>
                </div>

                {/* Motto */}
                {staff[0].motto && (
                  <div className="py-4 px-6 rounded-2xl bg-gradient-to-r from-blue-500/10 to-purple-500/10 border-l-4 border-blue-500">
                    <p className="text-lg md:text-xl font-bold gradient-text italic">
                      "{staff[0].motto}"
                    </p>
                  </div>
                )}

                {/* Description */}
                <p className="text-gray-700 text-lg leading-relaxed max-w-2xl mx-auto md:mx-0">
                  {staff[0].description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Other Staff Members */}
      {staff.slice(1).length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {staff.slice(1).map((member, index) => (
            <motion.div
              key={index + 1}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (index + 1) * 0.1 }}
              className="glass rounded-2xl p-6 shadow-xl border border-gray-200/50 overflow-hidden hover:shadow-2xl transition-all duration-300"
            >
              <div className="flex flex-col items-center text-center">
                {/* Icon instead of Photo */}
                <div className="relative mb-4">
                  <div className="relative w-32 h-32 rounded-2xl bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center shadow-xl group hover:scale-110 transition-transform duration-500 border-2 border-blue-200">
                    <User className="w-16 h-16 text-blue-600 group-hover:text-purple-600 transition-colors" />
                  </div>
                </div>

                {/* Details */}
                <div className="space-y-2">
                  <h4 className="text-xl font-bold gradient-text">
                    {member.name}
                  </h4>
                  <p className="text-gray-700 font-semibold text-base">
                    {member.designation}
                  </p>
                  <div className="inline-block px-3 py-1 rounded-full bg-gradient-to-r from-blue-50 to-purple-50 text-gray-700 text-sm font-medium border border-blue-200">
                    {member.qualification}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SDCStaff;

