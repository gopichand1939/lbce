import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Bell, User, Menu, X, LogOut, Settings, ChevronDown } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const Navbar = ({ onMenuToggle, isSidebarOpen }) => {
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
  const { logout, user } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
    setIsUserMenuOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 glass border-b border-gray-200/50 shadow-lg bg-white/95 backdrop-blur-md">
      <div className="w-full">
        <div className="flex items-center justify-between h-20 md:h-24 lg:h-28 px-0">
          {/* Left Section: Logo & Menu Toggle */}
          <div className="flex items-center space-x-2 md:space-x-4">
            <button
              onClick={onMenuToggle}
              className="p-2 rounded-lg hover:bg-gray-100/50 transition-colors lg:hidden ml-2"
              aria-label="Toggle menu"
            >
              {isSidebarOpen ? (
                <X className="w-6 h-6 text-gray-700" />
              ) : (
                <Menu className="w-6 h-6 text-gray-700" />
              )}
            </button>
            
            <Link to="/dashboard" className="flex items-center flex-shrink-0 pl-0 m-0">
              <img
                src="https://lbce.edu.in/static/images/jrlogo.png"
                alt="College Logo"
                className="h-16 w-auto md:h-20 lg:h-24 object-contain cursor-pointer hover:opacity-80 transition-opacity"
                onError={(e) => {
                  e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"%3E%3Ctext y=".9em" font-size="90"%3E🎓%3C/text%3E%3C/svg%3E';
                }}
              />
            </Link>
          </div>

          {/* Center Section: Search Bar */}
          <div className="hidden md:flex flex-1 max-w-xl mx-8 justify-center">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search modules, students, faculty..."
                className="w-full pl-10 pr-4 py-2 rounded-lg glass border border-gray-200/50 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all bg-white/50 backdrop-blur-sm"
              />
            </div>
          </div>

          {/* Right Section: Notifications & User Menu */}
          <div className="flex items-center space-x-2 pr-4">
            {/* Mobile Search */}
            <button className="p-2 rounded-lg hover:bg-gray-100/50 transition-colors md:hidden">
              <Search className="w-5 h-5 text-gray-700" />
            </button>

            {/* Notifications */}
            <motion.div 
              className="relative"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <button
                onClick={() => setIsNotificationsOpen(!isNotificationsOpen)}
                className="relative p-2 rounded-lg hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 transition-all duration-300 group"
              >
                <Bell className="w-5 h-5 text-gray-700 group-hover:text-blue-600 transition-colors duration-300" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>

              <AnimatePresence>
                {isNotificationsOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.95 }}
                    className="absolute right-0 mt-2 w-80 glass rounded-lg shadow-xl border border-gray-200/50 overflow-hidden"
                  >
                    <div className="p-4 border-b border-gray-200/50">
                      <h3 className="font-semibold text-gray-900">Notifications</h3>
                    </div>
                    <div className="max-h-96 overflow-y-auto">
                      <div className="p-4 hover:bg-gray-50/50 cursor-pointer border-b border-gray-100/50">
                        <p className="text-sm font-medium text-gray-900">New exam schedule published</p>
                        <p className="text-xs text-gray-500 mt-1">2 hours ago</p>
                      </div>
                      <div className="p-4 hover:bg-gray-50/50 cursor-pointer border-b border-gray-100/50">
                        <p className="text-sm font-medium text-gray-900">Result published for Semester 3</p>
                        <p className="text-xs text-gray-500 mt-1">5 hours ago</p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>

            {/* User Menu */}
            <motion.div 
              className="relative"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <button
                onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                className="flex items-center space-x-2 p-2 rounded-lg hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 transition-all duration-300 group"
              >
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center shadow-lg">
                  <User className="w-5 h-5 text-white" />
                </div>
                <motion.div
                  animate={{ rotate: isUserMenuOpen ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="w-4 h-4 text-gray-700 hidden sm:block group-hover:text-blue-600 transition-colors duration-300" />
                </motion.div>
              </button>

              <AnimatePresence>
                {isUserMenuOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.95 }}
                    className="absolute right-0 mt-2 w-56 glass rounded-lg shadow-xl border border-gray-200/50 overflow-hidden"
                  >
                    <div className="p-4 border-b border-gray-200/50">
                      <p className="font-semibold text-gray-900">{user?.username || 'Admin User'}</p>
                      <p className="text-xs text-gray-500">{user?.role || 'Admin'} - College AMS</p>
                    </div>
                    <div className="py-2">
                      <motion.button 
                        whileHover={{ x: 4 }}
                        className="w-full flex items-center space-x-3 px-4 py-2 text-sm text-gray-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 transition-all duration-200 group/item"
                      >
                        <User className="w-4 h-4 group-hover/item:text-blue-600 transition-colors" />
                        <span>Profile</span>
                      </motion.button>
                      <motion.button 
                        whileHover={{ x: 4 }}
                        className="w-full flex items-center space-x-3 px-4 py-2 text-sm text-gray-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 transition-all duration-200 group/item"
                      >
                        <Settings className="w-4 h-4 group-hover/item:text-blue-600 transition-colors" />
                        <span>Settings</span>
                      </motion.button>
                      <motion.button 
                        onClick={handleLogout}
                        whileHover={{ x: 4 }}
                        className="w-full flex items-center space-x-3 px-4 py-2 text-sm text-red-600 hover:bg-red-50/50 transition-all duration-200 group/item"
                      >
                        <LogOut className="w-4 h-4 group-hover/item:text-red-700 transition-colors" />
                        <span>Logout</span>
                      </motion.button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

