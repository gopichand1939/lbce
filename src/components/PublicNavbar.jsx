import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Home, 
  Building2, 
  GraduationCap,
  Settings,
  Bell,
  FileText,
  ClipboardCheck,
  ChevronDown
} from 'lucide-react';

const PublicNavbar = () => {
  const [isServiceOpen, setIsServiceOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const menuItems = [
    { icon: Home, label: 'Home', path: '/', scrollTo: 'carousel' },
    { icon: Building2, label: 'Departments', path: '/', scrollTo: 'departments' },
    { icon: GraduationCap, label: 'Skill Development', path: '/', scrollTo: 'skill-development' },
  ];

  const handleMenuClick = (e, item) => {
    if (item.scrollTo) {
      e.preventDefault();
      if (location.pathname !== '/') {
        // If not on home page, navigate first then scroll
        navigate('/');
        setTimeout(() => {
          const element = document.getElementById(item.scrollTo);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }, 100);
      } else {
        // If already on home page, just scroll
        const element = document.getElementById(item.scrollTo);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    }
  };

  const serviceItems = [
    { icon: Bell, label: 'Notifications', path: '/services/notifications' },
    { icon: FileText, label: 'Examinations', path: '/services/examinations' },
    { icon: ClipboardCheck, label: 'Results', path: '/services/results' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="w-full">
        <div className="flex items-center justify-between h-20 md:h-24 lg:h-28 px-0">

          {/* ✅ LOGO TOUCHES LEFT WITH ZERO GAP */}
          <Link to="/" className="flex items-center flex-shrink-0 pl-0 m-0">
            <img
              src="https://lbce.edu.in/static/images/jrlogo.png"
              alt="College Logo"
              className="h-16 w-auto md:h-20 lg:h-24 object-contain"
            />
          </Link>

          {/* MENU CENTER */}
          <div className="hidden lg:flex items-center space-x-1">
            {menuItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <Link
                    to={item.path}
                    onClick={(e) => handleMenuClick(e, item)}
                    className="relative group flex items-center gap-2 px-4 py-2 rounded-lg text-gray-700 text-sm font-medium transition-all duration-300 overflow-hidden"
                  >
                    {/* Animated Background */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      whileHover={{ scale: 1.05 }}
                    />
                    
                    {/* Icon with Animation */}
                    <motion.div
                      className="relative z-10"
                      whileHover={{ scale: 1.2, rotate: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Icon className="w-4 h-4 text-gray-600 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300" />
                    </motion.div>
                    
                    {/* Text with Gradient Effect */}
                    <span className="relative z-10 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
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

            {/* SERVICE DROPDOWN */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.3 }}
              onMouseEnter={() => setIsServiceOpen(true)}
              onMouseLeave={() => setIsServiceOpen(false)}
            >
              <div className="relative group flex items-center gap-2 px-4 py-2 rounded-lg text-gray-700 text-sm font-medium cursor-pointer transition-all duration-300 overflow-hidden">
                {/* Animated Background */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  whileHover={{ scale: 1.05 }}
                />
                
                {/* Icon with Animation */}
                <motion.div
                  className="relative z-10"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <Settings className="w-4 h-4 text-gray-600 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300" />
                </motion.div>
                
                {/* Text with Gradient Effect */}
                <span className="relative z-10 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
                  Service
                </span>
                
                {/* Chevron Icon with Rotation */}
                <motion.div
                  className="relative z-10"
                  animate={{ rotate: isServiceOpen ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="w-4 h-4 text-gray-600" />
                </motion.div>
                
                {/* Animated Underline */}
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                />
              </div>

              {/* Dropdown Menu with Animation */}
              <AnimatePresence>
                {isServiceOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-2 w-56 glass rounded-xl shadow-2xl border border-gray-200/50 overflow-hidden z-50"
                  >
                    {serviceItems.map((item, index) => {
                      const Icon = item.icon;
                      return (
                        <motion.div
                          key={item.label}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.2, delay: index * 0.05 }}
                        >
                          <Link
                            to={item.path}
                            className="flex items-center gap-3 px-4 py-3 text-gray-700 text-sm font-medium hover:bg-gradient-to-r hover:from-blue-500/10 hover:to-purple-500/10 transition-all duration-200 group"
                          >
                            <motion.div
                              whileHover={{ scale: 1.2, rotate: 5 }}
                              transition={{ duration: 0.2 }}
                            >
                              <Icon className="w-5 h-5 text-gray-600 group-hover:text-blue-600 transition-colors" />
                            </motion.div>
                            <span className="group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
                              {item.label}
                            </span>
                          </Link>
                        </motion.div>
                      );
                    })}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>

          {/* LOGIN */}
          <motion.div
            className="pr-4"
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0.4 }}
          >
            <Link
              to="/login"
              className="relative group text-gray-700 font-medium text-sm px-4 py-2 rounded-lg transition-all duration-300 overflow-hidden"
            >
              {/* Hover Background */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                whileHover={{ scale: 1.05 }}
              />
              
              {/* Text with Gradient Effect */}
              <span className="relative z-10 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
                Login
              </span>
              
              {/* Animated Underline */}
              <motion.div
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
              />
            </Link>
          </motion.div>

        </div>
      </div>
    </nav>
  );
};

export default PublicNavbar;
