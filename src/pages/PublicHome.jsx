import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { 
  GraduationCap, 
  BookOpen, 
  Users, 
  Award, 
  Calendar,
  FileText,
  LogIn
} from 'lucide-react';

import PublicNavbar from '../components/PublicNavbar';
import HeroCarousel from '../components/HeroCarousel';
import DepartmentsSection from '../components/DepartmentsSection';

// Leadership Carousel Component
const LeadershipCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const leadership = [
    {
      image: 'https://lbce.edu.in/media/jrcollege/college_member/engprincipal.jpg',
      name: 'Dr. D. Deepak Chowdary',
      designation: 'Principal',
      qualifications: 'B.E., M.Tech., F.I.E., MISTE., MIAENG., Ph.D.',
      message: 'On behalf of Dr. Lankapalli Bullayya College of Engineering, I invite you to explore the various facets of our educational institution. The best way to acquire knowledge and wisdom is to learn from the most proficient faculty. The academic fraternity of our college ensures high standard technical education and training to its Prospective Engineering Students. The college provides all amenities and services required for knowledge acquisition in class rooms and exploration in laboratories. We also impart employability skills to make the high-spirited students competent enough to fetch the prestigious and lucrative jobs. The fundamental aim of our institution is to transform the budding students into promising women technocrats, entrepreneurs, leaders, researchers, and scientists. I welcome the potential students to know more about our college.',
    },
    {
      image: 'https://lbce.edu.in/media/jrcollege/college_member/about-bg-1.jpg',
      name: 'Secretary & Correspondent',
      designation: 'Secretary & Correspondent',
      qualifications: '',
      message: 'Dr. L Bullayya College of Engineering which is a subsidiary wing of The Society for Collegiate Education has formulated a Magnificent Mission for itself to educate the new generation Engineers and Technologists who can contribute their technical expertise for transforming the country into a developed nation. Excellent Infrastructure has been provided and Proficient Resource Persons have been recruited to meet the requirements of curriculum and to facilitate trouble-free learning. Through its Manifold Activities, the college has nurtured thousands of young men and women as responsible and highly motivated citizens of India.',
    },
  ];

  // Auto-play functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % leadership.length);
    }, 6000); // Change slide every 6 seconds

    return () => clearInterval(interval);
  }, [leadership.length]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative">
      {/* Carousel Container */}
      <div className="relative h-[450px] md:h-[500px] lg:h-[550px] rounded-3xl overflow-hidden shadow-2xl">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.6, ease: 'easeInOut' }}
            className="absolute inset-0"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 h-full">
              {/* Image Section - Left Container (Column 1) */}
              <div className="relative w-full h-full overflow-hidden bg-gradient-to-br from-blue-100 to-purple-100">
                <img
                  src={leadership[currentIndex].image}
                  alt={leadership[currentIndex].name}
                  className="absolute inset-0 w-full h-full object-cover"
                  style={{ objectPosition: 'center' }}
                  onError={(e) => {
                    e.target.src = 'https://via.placeholder.com/600x800/0ea5e9/ffffff?text=Leadership';
                    e.target.onerror = null;
                  }}
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                {/* Decorative Elements */}
                <div className="absolute top-10 right-10 w-32 h-32 bg-white/10 rounded-full blur-2xl" />
                <div className="absolute bottom-10 left-10 w-40 h-40 bg-purple-500/20 rounded-full blur-3xl" />
              </div>

              {/* Content Section - Right Container (Column 2) */}
              <div className="bg-white/95 backdrop-blur-md p-6 md:p-8 lg:p-10 flex flex-col justify-center relative overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-5">
                  <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_1px_1px,_rgba(0,0,0,0.15)_1px,_transparent_0)] bg-[length:20px_20px]" />
                </div>
                
                <div className="relative z-10 space-y-3 w-full">
                  {/* Designation Badge */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="inline-block"
                  >
                    <span className="px-4 py-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white text-sm font-semibold">
                      {leadership[currentIndex].designation}
                    </span>
                  </motion.div>

                  {/* Name */}
                  <motion.h3
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="text-2xl md:text-3xl lg:text-4xl font-bold gradient-text"
                  >
                    {leadership[currentIndex].name}
                  </motion.h3>

                  {/* Qualifications */}
                  {leadership[currentIndex].qualifications && (
                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                      className="text-gray-600 font-medium text-base md:text-lg"
                    >
                      {leadership[currentIndex].qualifications}
                    </motion.p>
                  )}

                  {/* Divider */}
                  <motion.div
                    initial={{ opacity: 0, scaleX: 0 }}
                    animate={{ opacity: 1, scaleX: 1 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                    className="w-24 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full"
                  />

                  {/* Message */}
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="text-gray-700 leading-relaxed text-sm md:text-base"
                  >
                    {leadership[currentIndex].message}
                  </motion.p>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Dots Indicator */}
      <div className="flex justify-center items-center space-x-3 mt-8">
        {leadership.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`transition-all duration-300 rounded-full ${
              index === currentIndex
                ? 'w-12 h-3 bg-gradient-to-r from-blue-500 to-purple-500'
                : 'w-3 h-3 bg-gray-300 hover:bg-gray-400'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

const PublicHome = () => {

  const features = [
    {
      icon: GraduationCap,
      title: 'Academic Excellence',
      description: 'Comprehensive academic management system for autonomous colleges',
    },
    {
      icon: BookOpen,
      title: 'Course Management',
      description: 'Manage courses, curriculum, and syllabus efficiently',
    },
    {
      icon: Users,
      title: 'Student Portal',
      description: 'Access results, timetables, and academic information',
    },
    {
      icon: Award,
      title: 'Examination System',
      description: 'Complete exam management and result processing',
    },
    {
      icon: Calendar,
      title: 'Academic Calendar',
      description: 'Stay updated with academic schedules and events',
    },
    {
      icon: FileText,
      title: 'Results & Reports',
      description: 'View and download results and academic reports',
    },
  ];

  return (
    <div className="min-h-screen">
      <PublicNavbar />
      <HeroCarousel />

      {/* ================= NEW ABOUT SECTION ================= */}
      <section className="py-20 px-4 bg-gradient-to-br from-white via-blue-50/50 to-purple-50/50">
        <div className="max-w-7xl mx-auto space-y-20">

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-4xl font-bold gradient-text mb-4">
              About Our College
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              An Autonomous Institution affiliated to Andhra University and approved by AICTE.
              Empowering students with innovation-driven and industry-focused learning.
            </p>
          </motion.div>

          {/* Block 1 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative rounded-2xl overflow-hidden shadow-xl group"
            >
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnTA1xy33agZV-lv_vI69TIwio-iyjUBVzBw&s"
                alt="Dr. Lankapalli Bullayya College of Engineering Campus"
                className="w-full h-80 object-cover rounded-2xl group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
                onError={(e) => {
                  e.target.src = 'https://via.placeholder.com/800x600/0ea5e9/ffffff?text=Campus+View';
                  e.target.onerror = null;
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-4"
            >
              <h3 className="text-2xl font-bold gradient-text">Our Foundation</h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                Established in 2010 by the Society for Collegiate Education, our institution serves
                the educational needs of the North Coastal region, shaping future-ready engineers.
              </p>
            </motion.div>
          </div>

          {/* Block 2 (Reverse) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-4 order-2 md:order-1"
            >
              <h3 className="text-2xl font-bold gradient-text">Autonomous Advantage</h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                With Autonomous status, our curriculum evolves with industry standards, ensuring
                practical exposure, hands-on learning, and strong career readiness.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative rounded-2xl overflow-hidden shadow-xl group order-1 md:order-2"
            >
              <img
                src="/assets/campus2.jpg"
                alt="Autonomous Institution - Modern Infrastructure"
                className="w-full h-80 object-cover rounded-2xl group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
                onError={(e) => {
                  e.target.src = 'https://via.placeholder.com/800x600/9333ea/ffffff?text=Modern+Infrastructure';
                  e.target.onerror = null;
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </motion.div>
          </div>

          {/* Block 3 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative rounded-2xl overflow-hidden shadow-xl group"
            >
              <img
                src="/assets/campus3.jpg"
                alt="Student Development - Holistic Growth"
                className="w-full h-80 object-cover rounded-2xl group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
                onError={(e) => {
                  e.target.src = 'https://via.placeholder.com/800x600/ec4899/ffffff?text=Student+Life';
                  e.target.onerror = null;
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-4"
            >
              <h3 className="text-2xl font-bold gradient-text">Holistic Growth</h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                Beyond academics, students grow through cultural events, innovation labs, sports,
                leadership programs, and vibrant campus life.
              </p>
            </motion.div>
          </div>

        </div>
      </section>
      {/* ================= END ABOUT ================= */}

      {/* Leadership Carousel Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-blue-50 via-purple-50/30 to-pink-50/30 relative overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
              Leadership
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full mx-auto mb-4" />
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Meet our visionary leaders who guide our institution towards excellence
            </p>
          </motion.div>

          {/* Carousel Component */}
          <LeadershipCarousel />
        </div>
      </section>

      {/* Departments Section */}
      <DepartmentsSection />

      {/* Features Grid */}
      <section className="py-20 px-4 bg-gradient-to-b from-white to-blue-50">
        <div className="max-w-7xl mx-auto">

          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="text-4xl font-bold gradient-text mb-4">Our Academic System</h2>
            <p className="text-gray-600 text-lg">
              Efficient portal for students, faculty, and administrators.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-14">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="glass rounded-xl p-6 shadow-lg border border-gray-200/50 hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="p-3 rounded-lg bg-gradient-to-br from-blue-500 to-purple-500">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900">{feature.title}</h3>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
                </motion.div>
              );
            })}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <Link
              to="/login"
              className="inline-flex items-center px-8 py-4 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <LogIn className="w-5 h-5 mr-2" />
              Admin Login
            </Link>
          </motion.div>

        </div>
      </section>
    </div>
  );
};

export default PublicHome;
