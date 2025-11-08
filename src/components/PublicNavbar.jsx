import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  LogIn, 
  Home, 
  User, 
  Building2, 
  Award, 
  GraduationCap
} from 'lucide-react';

const PublicNavbar = () => {
  const menuItems = [
    { icon: Home, label: 'Home', path: '/' },
    { icon: Building2, label: 'Departments', path: '/' },
    { icon: GraduationCap, label: 'Skill Development', path: '/' },
  ];

  return (
    <nav className="sticky top-0 z-50 glass border-b border-gray-200/50 shadow-lg bg-white/95 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 md:h-24 lg:h-28">
          {/* Logo - Left End */}
          <Link to="/" className="flex items-center flex-shrink-0">
            <motion.img
              src="https://lbce.edu.in/static/images/jrlogo.png"
              alt="College Logo"
              className="h-16 w-auto md:h-20 lg:h-24 xl:h-28 object-contain max-w-[300px] md:max-w-[400px] lg:max-w-[500px] xl:max-w-[600px] cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
              onError={(e) => {
                e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"%3E%3Ctext y=".9em" font-size="90"%3E🎓%3C/text%3E%3C/svg%3E';
              }}
            />
          </Link>

          {/* Navigation Links - Center */}
          <div className="hidden lg:flex items-center space-x-2 flex-1 justify-center mx-8">
            {menuItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                >
                  <Link
                    to={item.path}
                    className="relative flex items-center space-x-2 px-4 py-2 rounded-lg text-gray-700 font-medium transition-all duration-300 group overflow-hidden"
                  >
                    {/* Gradient Background on Hover */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      whileHover={{ scale: 1.05 }}
                    />
                    
                    {/* Icon with Gradient Effect */}
                    <motion.div
                      className="relative z-10"
                      whileHover={{ scale: 1.2, rotate: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Icon className="w-4 h-4 text-gray-600 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300" />
                    </motion.div>
                    
                    {/* Text with Gradient Effect */}
                    <span className="relative z-10 text-sm group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
                      {item.label}
                    </span>
                    
                    {/* Animated Underline */}
                    <motion.div
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
                      initial={{ scaleX: 0 }}
                      whileHover={{ scaleX: 1 }}
                    />
                  </Link>
                </motion.div>
              );
            })}
          </div>

          {/* Mobile Menu - Center (for smaller screens) */}
          <div className="lg:hidden flex items-center space-x-1 md:space-x-2 flex-1 justify-center mx-2 md:mx-4 overflow-x-auto scrollbar-hide">
            {menuItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.label}
                  to={item.path}
                  className="flex items-center space-x-1 px-2 py-2 rounded-lg text-gray-700 font-medium transition-all duration-300 hover:bg-gradient-to-r hover:from-blue-500/10 hover:to-purple-500/10 min-w-fit"
                >
                  <Icon className="w-4 h-4" />
                  <span className="text-xs hidden sm:inline">{item.label}</span>
                </Link>
              );
            })}
          </div>

          {/* Login Button - Right End */}
          <motion.div
            className="flex-shrink-0"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              to="/login"
              className="relative flex items-center space-x-2 px-4 md:px-6 py-2 md:py-3 rounded-lg bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white font-semibold shadow-lg overflow-hidden group"
            >
              {/* Animated Gradient Background */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                animate={{
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'linear',
                }}
              />
              
              {/* Content */}
              <motion.div
                className="relative z-10 flex items-center space-x-2"
                whileHover={{ x: 2 }}
              >
                <LogIn className="w-4 h-4 md:w-5 md:h-5" />
                <span className="text-sm md:text-base hidden sm:inline">Admin Login</span>
                <span className="text-sm md:text-base sm:hidden">Login</span>
              </motion.div>
              
              {/* Shine Effect */}
              <motion.div
                className="absolute inset-0 -translate-x-full group-hover:translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700"
              />
            </Link>
          </motion.div>
        </div>
      </div>
    </nav>
  );
};

export default PublicNavbar;

