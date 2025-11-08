import { motion } from 'framer-motion';
import { BookOpen, Calendar, ExternalLink } from 'lucide-react';

const SDCPrograms = () => {
  const programs = [
    {
      title: 'Soft Skills Program',
      years: [
        { year: '2022-2023', view: 'View' },
        { year: '2021-2022', view: 'View' },
        { year: '2020-2021', view: 'View' },
        { year: '2019-2020', view: 'View' },
        { year: '2018-2019', view: 'View' },
      ],
      description: 'Comprehensive training in personality development, communication skills, group discussions, and kinesics to enhance professional capabilities.',
    },
    {
      title: 'Language and Communication Skills',
      years: [
        { year: '2022-2023', view: 'View' },
        { year: '2021-2022', view: 'View' },
        { year: '2020-2021', view: 'View' },
        { year: '2019-2020', view: 'View' },
        { year: '2018-2019', view: 'View' },
      ],
      description: 'Focused programs to improve English language proficiency, communication effectiveness, and presentation skills for global job markets.',
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
          Training Programs
        </h3>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full mx-auto mb-8" />
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {programs.map((program, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="glass rounded-2xl p-8 shadow-xl border border-gray-200/50 hover:shadow-2xl transition-all duration-300"
          >
            <div className="flex items-center space-x-3 mb-6">
              <div className="p-3 rounded-xl bg-gradient-to-br from-blue-500 to-purple-500">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <h4 className="text-2xl font-bold gradient-text">{program.title}</h4>
            </div>

            <p className="text-gray-700 mb-6 leading-relaxed">{program.description}</p>

            <div className="space-y-3">
              <div className="flex items-center space-x-2 text-gray-600 mb-4">
                <Calendar className="w-5 h-5" />
                <span className="font-semibold">Available Years:</span>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {program.years.map((item, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ scale: 1.05 }}
                    className="glass rounded-xl p-4 border border-gray-200/50 hover:border-blue-300 transition-all cursor-pointer group"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-gray-700 font-semibold group-hover:text-blue-600 transition-colors">
                        {item.year}
                      </span>
                      <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-blue-600 transition-colors" />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default SDCPrograms;

