import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Home, 
  Building2, 
  GraduationCap,
  Settings,
  Bell,
  FileText,
  ClipboardCheck,
  ChevronDown,
  Menu,
  X
} from 'lucide-react';

const PublicNavbar = () => {
  const [isServiceOpen, setIsServiceOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const location = useLocation();

  const menuItems = [
    { icon: Home, label: 'Home', path: '/', section: 'home' },
    { icon: Building2, label: 'Departments', path: '/', section: 'departments' },
    { icon: GraduationCap, label: 'Skill Development', path: '/', section: 'skill-development' },
  ];

  // Smooth scroll to section
  const scrollToSection = (sectionId) => {
    // Set active section immediately for instant visual feedback
    setActiveSection(sectionId);
    
    if (location.pathname !== '/') {
      // If not on home page, navigate first then scroll
      window.location.href = `/#${sectionId}`;
      return;
    }
    
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80; // Account for navbar height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });

    }
  };

  // Track scroll position to update active section
  useEffect(() => {
    if (location.pathname !== '/') {
      // Reset to home when not on home page
      setActiveSection('home');
      return;
    }

    const handleScroll = () => {
      const sections = ['home', 'about', 'leadership', 'departments', 'skill-development', 'alumni'];
      const scrollPosition = window.scrollY + 150; // Offset for navbar

      // Check which section is in view
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;
          
          if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            // Only update if it's a menu item section
            if (menuItems.some(item => item.section === sections[i])) {
              setActiveSection(sections[i]);
            }
            break;
          }
        }
      }

      // If at top, set to home
      if (window.scrollY < 100) {
        setActiveSection('home');
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on mount

    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  // Update active section based on hash on mount
  useEffect(() => {
    if (location.pathname === '/' && location.hash) {
      const sectionId = location.hash.replace('#', '');
      if (menuItems.some(item => item.section === sectionId)) {
        setActiveSection(sectionId);
      }
    } else if (location.pathname === '/' && !location.hash) {
      // Default to home if no hash
      setActiveSection('home');
    }
  }, [location.pathname, location.hash]);

  const serviceItems = [
    { icon: Bell, label: 'Notifications', path: '/services/notifications' },
    { icon: FileText, label: 'Examinations', path: '/services/examinations' },
    { icon: ClipboardCheck, label: 'Results', path: '/services/results' },
  ];

  // Check if we're on home page for section scrolling
  const isHomePage = location.pathname === '/';
  
  return (
    <nav className="sticky top-0 z-50 glass border-b border-gray-200/50 shadow-lg bg-white/95 backdrop-blur-md w-full overflow-x-hidden">
      <div className="w-full max-w-full">
        <div className="flex items-center justify-between h-16 md:h-20 lg:h-24 px-2 sm:px-4 md:px-6 lg:px-8 w-full">

          {/* ✅ LOGO TOUCHES LEFT WITH ZERO GAP */}
          <Link to="/" className="flex items-center flex-shrink-0">
            <img
              src="https://lbce.edu.in/static/images/jrlogo.png"
              alt="College Logo"
              className="h-12 w-auto sm:h-14 md:h-16 lg:h-20 object-contain"
            />
          </Link>

          {/* MENU CENTER - DESKTOP */}
          <div className="hidden lg:flex items-center justify-center flex-1 space-x-1 xl:space-x-2">
            {menuItems.map((item, index) => {
              const Icon = item.icon;
              // Show active based on activeSection state
              const isActive = isHomePage && activeSection === item.section;
              return (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <Link
                    to={item.path}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(item.section);
                    }}
                    className="relative group flex items-center gap-2 px-4 py-2 rounded-lg text-gray-700 hover:text-blue-600 font-medium text-sm transition-all duration-300 cursor-pointer"
                  >
                    {/* Hover Background Effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      whileHover={{ scale: 1.05 }}
                    />
                    
                    {/* Active Indicator - Animated Underline */}
                    {isActive && (
                      <motion.div
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                        layoutId="activeIndicator"
                        initial={false}
                        transition={{ 
                          type: "spring", 
                          stiffness: 500, 
                          damping: 30,
                          duration: 0.3
                        }}
                      />
                    )}
                    
                    {/* Icon with Animation */}
                    <motion.div
                      className="relative z-10"
                      whileHover={{ scale: 1.2, rotate: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Icon className={`w-4 h-4 transition-colors duration-300 ${isActive ? 'text-blue-600' : 'text-gray-600 group-hover:text-blue-600'}`} />
                    </motion.div>
                    
                    {/* Text with Gradient Effect */}
                    <span className={`relative z-10 transition-all duration-300 ${isActive ? 'text-blue-600 font-semibold' : 'group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600'}`}>
                      {item.label}
                    </span>
                    
                    {/* Shine Effect on Hover */}
                    <motion.div
                      className="absolute inset-0 -translate-x-full group-hover:translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent rounded-lg transition-transform duration-700"
                    />
                  </Link>
                </motion.div>
              );
            })}

            {/* SERVICE DROPDOWN */}
            <motion.div
              className="relative group"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.3 }}
              onMouseEnter={() => setIsServiceOpen(true)}
              onMouseLeave={() => setIsServiceOpen(false)}
            >
              <div className="relative flex items-center gap-2 px-4 py-2 rounded-lg text-gray-700 hover:text-blue-600 font-medium text-sm cursor-pointer transition-all duration-300 group">
                {/* Hover Background Effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  whileHover={{ scale: 1.05 }}
                />
                
                {/* Icon with Animation */}
                <motion.div
                  className="relative z-10"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <Settings className="w-4 h-4 text-gray-600 group-hover:text-blue-600 transition-colors duration-300" />
                </motion.div>
                
                {/* Text with Gradient Effect */}
                <span className="relative z-10 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
                  Service
                </span>
                
                {/* Chevron with Animation */}
                <motion.div
                  className="relative z-10"
                  animate={{ rotate: isServiceOpen ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="w-4 h-4 text-gray-600 group-hover:text-blue-600 transition-colors duration-300" />
                </motion.div>
                
                {/* Shine Effect on Hover */}
                <motion.div
                  className="absolute inset-0 -translate-x-full group-hover:translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent rounded-lg transition-transform duration-700"
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
                    className="absolute top-full left-0 mt-2 w-56 bg-white border border-gray-200/50 shadow-xl rounded-xl overflow-hidden backdrop-blur-md bg-white/95"
                  >
                    {serviceItems.map((item, index) => {
                      const Icon = item.icon;
                      const isActive = location.pathname === item.path;
                      return (
                        <motion.div
                          key={item.label}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.2, delay: index * 0.05 }}
                        >
                          <Link
                            to={item.path}
                            className={`relative flex items-center gap-3 px-4 py-3 text-sm transition-all duration-200 group/item ${
                              isActive 
                                ? 'bg-gradient-to-r from-blue-50 to-purple-50 text-blue-600 font-semibold' 
                                : 'text-gray-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 hover:text-blue-600'
                            }`}
                          >
                            {/* Icon with Hover Animation */}
                            <motion.div
                              whileHover={{ scale: 1.2, rotate: 5 }}
                              transition={{ duration: 0.2 }}
                            >
                              <Icon className={`w-4 h-4 transition-colors duration-200 ${isActive ? 'text-blue-600' : 'text-gray-600 group-hover/item:text-blue-600'}`} />
                            </motion.div>
                            
                            {/* Text */}
                            <span className="flex-1">{item.label}</span>
                            
                            {/* Hover Indicator */}
                            <motion.div
                              className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 to-purple-500 opacity-0 group-hover/item:opacity-100 transition-opacity duration-200"
                            />
                          </Link>
                        </motion.div>
                      );
                    })}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>

          {/* LOGIN - DESKTOP */}
          <motion.div
            className="hidden lg:flex items-center flex-shrink-0"
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0.4 }}
          >
            <Link
              to="/login"
              className="relative group flex items-center text-gray-700 hover:text-blue-600 font-medium text-sm transition-all duration-300 px-2"
            >
              {/* Hover Underline Effect */}
              <motion.div
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
              />
              
              {/* Text with Gradient Effect */}
              <span className="relative z-10 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
                Login
              </span>
            </Link>
          </motion.div>

          {/* MOBILE MENU BUTTON - VISIBLE ON ALL MOBILE DEVICES */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden flex items-center justify-center p-2 rounded-lg hover:bg-gray-100/50 transition-colors flex-shrink-0 z-50"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-gray-700" />
            ) : (
              <Menu className="w-6 h-6 text-gray-700" />
            )}
          </button>

        </div>

        {/* MOBILE MENU - VISIBLE ON ALL MOBILE DEVICES */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden border-t border-gray-200/50 bg-white/98 backdrop-blur-md overflow-hidden z-40 w-full"
            >
              <div className="px-4 py-4 space-y-2 w-full">
                {/* Mobile Menu Items - ALL VISIBLE */}
                {menuItems.map((item, index) => {
                  const Icon = item.icon;
                  const isActive = isHomePage && activeSection === item.section;
                  return (
                    <motion.div
                      key={item.label}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.2, delay: index * 0.1 }}
                      className="w-full"
                    >
                      <Link
                        to={item.path}
                        onClick={(e) => {
                          e.preventDefault();
                          scrollToSection(item.section);
                          setIsMobileMenuOpen(false);
                        }}
                        className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 w-full ${
                          isActive
                            ? 'bg-gradient-to-r from-blue-50 to-purple-50 text-blue-600 font-semibold'
                            : 'text-gray-700 hover:bg-gray-50'
                        }`}
                      >
                        <Icon className={`w-5 h-5 flex-shrink-0 ${isActive ? 'text-blue-600' : 'text-gray-600'}`} />
                        <span className="text-base font-medium">{item.label}</span>
                      </Link>
                    </motion.div>
                  );
                })}

                {/* Mobile Service Dropdown */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.2, delay: 0.3 }}
                >
                  <button
                    onClick={() => setIsServiceOpen(!isServiceOpen)}
                    className="w-full flex items-center justify-between px-4 py-3 rounded-lg text-gray-700 hover:bg-gray-50 transition-all duration-200"
                  >
                    <div className="flex items-center gap-3">
                      <Settings className="w-5 h-5 text-gray-600 flex-shrink-0" />
                      <span className="text-base font-medium">Service</span>
                    </div>
                    <ChevronDown
                      className={`w-4 h-4 text-gray-600 transition-transform duration-200 flex-shrink-0 ${
                        isServiceOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  {/* Mobile Service Submenu */}
                  <AnimatePresence>
                    {isServiceOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                        className="pl-8 mt-2 space-y-1 overflow-hidden"
                      >
                        {serviceItems.map((item, index) => {
                          const Icon = item.icon;
                          const isActive = location.pathname === item.path;
                          return (
                            <motion.div
                              key={item.label}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.15, delay: index * 0.05 }}
                            >
                              <Link
                                to={item.path}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className={`flex items-center gap-3 px-4 py-2 rounded-lg transition-all duration-200 w-full ${
                                  isActive
                                    ? 'bg-gradient-to-r from-blue-50 to-purple-50 text-blue-600 font-semibold'
                                    : 'text-gray-600 hover:bg-gray-50'
                                }`}
                              >
                                <Icon className="w-4 h-4 flex-shrink-0" />
                                <span className="text-sm font-medium">{item.label}</span>
                              </Link>
                            </motion.div>
                          );
                        })}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>

                {/* Mobile Login */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.2, delay: 0.4 }}
                  className="pt-2 border-t border-gray-200/50"
                >
                  <Link
                    to="/login"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center justify-center px-4 py-3 rounded-lg text-gray-700 hover:bg-gray-50 transition-all duration-200 font-medium"
                  >
                    Login
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default PublicNavbar;
