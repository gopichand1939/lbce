import { motion } from 'framer-motion';
import { Award, Briefcase, TrendingUp, Star, Users, Smile, CheckCircle, Quote, Building2 } from 'lucide-react';

const AlumniSuccessStories = () => {
  const statistics = [
    { icon: Users, number: '500+', label: 'Alumni Placed', color: 'from-blue-500 to-blue-600' },
    { icon: Briefcase, number: '200+', label: 'Top Companies', color: 'from-green-500 to-green-600' },
    { icon: Star, number: '95%', label: 'Placement Rate', color: 'from-purple-500 to-purple-600' },
    { icon: Smile, number: '1000+', label: 'Happy Students', color: 'from-pink-500 to-pink-600' },
  ];

  const successStories = [
    {
      name: 'Rajesh Kumar',
      company: 'TCS',
      role: 'Software Engineer',
      batch: '2022',
      image: 'https://media.licdn.com/dms/image/v2/D4D03AQH0C91eULaFog/profile-displayphoto-crop_800_800/B4DZgY5iBZGgAI-/0/1752764393209?e=1764201600&v=beta&t=bjtI1zZHpHLY4OeX-SAWiJu5z5WaREM0_BEgk3P5dg8',
      quote: 'The Skill Development Center at Bullayya College transformed my career. The training programs helped me secure my dream job at TCS.',
      rating: 5,
    },
    {
      name: 'Priya Sharma',
      company: 'Infosys',
      role: 'System Engineer',
      batch: '2021',
      image: 'https://media.licdn.com/dms/image/v2/D4D03AQHb_m2FtBvbkg/profile-displayphoto-shrink_400_400/B4DZZX3ihTG0Ag-/0/1745230901749?e=1764201600&v=beta&t=WXwH8EpuL8azyi-VBuwKjCiWpOGLhXck7vxqW2mR8ZI',
      quote: 'Excellent placement support and skill development programs. I am grateful to the college for shaping my professional journey.',
      rating: 5,
    },
    {
      name: 'Amit Patel',
      company: 'Wipro',
      role: 'Project Engineer',
      batch: '2023',
      image: 'https://media.licdn.com/dms/image/v2/D4D03AQH0C91eULaFog/profile-displayphoto-crop_800_800/B4DZgY5iBZGgAI-/0/1752764393209?e=1764201600&v=beta&t=bjtI1zZHpHLY4OeX-SAWiJu5z5WaREM0_BEgk3P5dg8',
      quote: 'The comprehensive training and industry exposure at Bullayya College prepared me perfectly for the corporate world.',
      rating: 5,
    },
    {
      name: 'Sneha Reddy',
      company: 'Accenture',
      role: 'Associate Software Engineer',
      batch: '2022',
      image: 'https://media.licdn.com/dms/image/v2/D4D03AQHb_m2FtBvbkg/profile-displayphoto-shrink_400_400/B4DZZX3ihTG0Ag-/0/1745230901749?e=1764201600&v=beta&t=WXwH8EpuL8azyi-VBuwKjCiWpOGLhXck7vxqW2mR8ZI',
      quote: 'From campus to corporate, Bullayya College provided all the support I needed. The placement cell is outstanding!',
      rating: 5,
    },
  ];

  const reasonsForSuccess = [
    {
      icon: Award,
      title: 'Industry-Ready Training',
      description: 'Comprehensive skill development programs aligned with industry requirements.',
    },
    {
      icon: TrendingUp,
      title: 'Expert Faculty',
      description: 'Experienced mentors guiding students towards successful careers.',
    },
    {
      icon: Briefcase,
      title: 'Strong Industry Connect',
      description: 'Partnerships with top companies ensuring excellent placement opportunities.',
    },
    {
      icon: CheckCircle,
      title: 'Holistic Development',
      description: 'Focus on both technical skills and soft skills for complete professional growth.',
    },
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-white via-green-50/30 to-blue-50/30 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-green-400/10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <div className="px-6 py-2 rounded-full bg-gradient-to-r from-green-500 to-green-400 text-white text-sm font-bold shadow-lg">
              Success Stories
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            Alumni from Bullayya Got Placed
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-green-500 via-green-400 to-green-600 rounded-full mx-auto mb-6" />
          <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
            Celebrating the success stories of our alumni who are making their mark in top companies worldwide
          </p>
        </div>

        {/* Statistics Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {statistics.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="glass rounded-2xl p-6 shadow-xl border border-gray-200/50 text-center"
              >
                <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${stat.color} shadow-lg mb-4`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">{stat.number}</div>
                <div className="text-gray-700 font-semibold">{stat.label}</div>
              </div>
            );
          })}
        </div>

        {/* Success Stories Grid */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold gradient-text mb-8 text-center">
            Student Success Stories
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {successStories.map((story, index) => (
              <div
                key={index}
                className="glass rounded-3xl p-8 shadow-2xl border border-gray-200/50 relative overflow-hidden"
              >
                {/* Quote Icon */}
                <Quote className="absolute top-4 right-4 w-12 h-12 text-green-200 opacity-50" />
                
                <div className="flex items-start gap-6 mb-6">
                  {/* Student Image */}
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 rounded-full overflow-hidden shadow-xl border-4 border-green-200">
                      <img
                        src={story.image}
                        alt={story.name}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.target.src = 'https://via.placeholder.com/150/0ea5e9/ffffff?text=' + story.name.split(' ').map(n => n[0]).join('');
                          e.target.onerror = null;
                        }}
                      />
                    </div>
                  </div>

                  {/* Student Info */}
                  <div className="flex-1">
                    <h4 className="text-xl font-bold gradient-text mb-1">{story.name}</h4>
                    <p className="text-gray-700 font-semibold mb-1">{story.role}</p>
                    <p className="text-gray-600 text-sm mb-2">{story.company} • Batch {story.batch}</p>
                    {/* Rating */}
                    <div className="flex items-center gap-1">
                      {[...Array(story.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                </div>

                {/* Quote */}
                <div className="relative z-10">
                  <p className="text-gray-700 text-lg leading-relaxed italic">
                    "{story.quote}"
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Marketing Section - Many More Stories */}
          <div className="mt-12 glass rounded-3xl p-8 md:p-12 shadow-2xl border-2 border-green-500 relative overflow-hidden bg-gradient-to-br from-green-50/50 via-blue-50/30 to-purple-50/30">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,_rgba(34,197,94,0.3)_1px,_transparent_0)] bg-[length:40px_40px]" />
            </div>

            <div className="relative z-10 text-center">
              <div className="flex justify-center mb-6">
                <div className="p-4 rounded-full bg-gradient-to-br from-green-500 to-green-600 shadow-xl">
                  <Users className="w-12 h-12 text-white" />
                </div>
              </div>
              <h3 className="text-3xl md:text-4xl font-bold gradient-text mb-4">
                Many More Success Stories Await
              </h3>
              <p className="text-gray-700 text-xl leading-relaxed max-w-3xl mx-auto mb-8">
                These are just a few examples of our successful alumni. <span className="font-bold text-green-600">Hundreds of students</span> from Dr. Lankapalli Bullayya College have been placed in top companies, creating countless success stories that inspire the next generation.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                {[
                  { number: '500+', label: 'Alumni Placed', icon: Briefcase },
                  { number: '200+', label: 'Top Companies', icon: Building2 },
                  { number: '1000+', label: 'Happy Students', icon: Smile },
                  { number: '95%', label: 'Placement Rate', icon: Star },
                ].map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div key={index} className="text-center">
                      <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">{item.number}</div>
                      <div className="flex items-center justify-center gap-2 text-gray-700 font-semibold">
                        <Icon className="w-5 h-5 text-green-600" />
                        <span>{item.label}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
              <p className="text-gray-600 text-lg mt-8 italic">
                Join the league of successful professionals who started their journey at Bullayya College
              </p>
            </div>
          </div>
        </div>

        {/* Reasons for Success Section */}
        <div className="glass rounded-3xl p-8 md:p-12 shadow-2xl border border-gray-200/50">
          <h3 className="text-3xl font-bold gradient-text mb-8 text-center">
            Why So Many Smiles & Success Stories?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {reasonsForSuccess.map((reason, index) => {
              const Icon = reason.icon;
              return (
                <div
                  key={index}
                  className="text-center p-6 rounded-2xl bg-gradient-to-br from-green-50 to-blue-50 border border-green-200/50"
                >
                  <div className="inline-flex p-4 rounded-2xl bg-gradient-to-br from-green-500 to-green-600 shadow-lg mb-4">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl font-bold gradient-text mb-3">{reason.title}</h4>
                  <p className="text-gray-700 leading-relaxed">{reason.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AlumniSuccessStories;

