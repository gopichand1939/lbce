import { motion } from 'framer-motion';
import { Target, TrendingUp, Users, Award, Briefcase, Globe, GraduationCap, Rocket, CheckCircle, Star, Zap, Building2, Sparkles, TrendingDown } from 'lucide-react';
import SDCStaff from './SDCStaff';

const SkillDevelopmentCenter = () => {
  const features = [
    {
      icon: Target,
      title: 'Purposeful Education',
      description: 'Growth-oriented and productive education designed for today\'s competitive job market.',
    },
    {
      icon: TrendingUp,
      title: 'Industry Integration',
      description: 'Seamlessly integrates industry-specific skill requirements with college curriculum.',
    },
    {
      icon: Users,
      title: 'Holistic Approach',
      description: 'Comprehensive training covering personality development, communication, and analytical skills.',
    },
    {
      icon: Briefcase,
      title: 'Placement Success',
      description: 'Result-oriented training that helps students cross the interview table and secure placements.',
    },
    {
      icon: Globe,
      title: 'Global Standards',
      description: 'Partnership with NASSCOM for Global Business Foundation Programme.',
    },
    {
      icon: Award,
      title: 'Dynamic Curriculum',
      description: 'Well-structured syllabus revised periodically to cater to changing industry needs.',
    },
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-white via-green-50/50 to-green-50/30 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-green-400/10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-green-400/10 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <div className="px-6 py-2 rounded-full bg-gradient-to-r from-green-500 to-green-400 text-white text-sm font-bold shadow-lg">
              Core Pillar of Placements
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            Skill Development Center
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-green-500 via-green-400 to-green-600 rounded-full mx-auto mb-6" />
          <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
            Empowering students with industry-ready skills to bridge the gap between academic learning and professional excellence
          </p>
        </div>

        {/* Main Content */}
        <div className="space-y-16">
          {/* Why Choose Section - Top */}
          <div className="glass rounded-3xl p-8 md:p-12 shadow-2xl border border-gray-200/50">
            <h3 className="text-2xl md:text-3xl font-bold gradient-text mb-8 text-center">
              Why Choose Our Skill Development Center?
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {[
                { icon: GraduationCap, label: 'Quality Education', color: 'from-blue-500 to-blue-600' },
                { icon: Rocket, label: 'Career Growth', color: 'from-purple-500 to-purple-600' },
                { icon: Briefcase, label: 'Placement Support', color: 'from-green-500 to-green-600' },
                { icon: Zap, label: 'Skill Enhancement', color: 'from-green-500 to-green-600' },
                { icon: Star, label: 'Industry Ready', color: 'from-pink-500 to-pink-600' },
                { icon: Building2, label: 'Corporate Connect', color: 'from-indigo-500 to-indigo-600' },
              ].map((item, index) => {
                const Icon = item.icon;
                return (
                  <div
                    key={index}
                    className="flex flex-col items-center text-center"
                  >
                    <div className={`p-4 rounded-2xl bg-gradient-to-br ${item.color} shadow-lg mb-3`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <p className="text-sm font-semibold text-gray-700">
                      {item.label}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="glass rounded-2xl p-6 shadow-lg border border-gray-200/50"
                >
                  <div className="mb-4">
                    <div className="p-3 rounded-xl bg-gradient-to-br from-blue-500 to-purple-500 inline-block">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold gradient-text mb-3">{feature.title}</h3>
                  <p className="text-gray-700 leading-relaxed">{feature.description}</p>
                </div>
              );
            })}
          </div>

          {/* Staff Section */}
          <SDCStaff />
        </div>
      </div>
    </section>
  );
};

export default SkillDevelopmentCenter;

