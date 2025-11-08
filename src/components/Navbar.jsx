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
    <nav className="sticky top-0 z-50 glass border-b border-gray-200/50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 md:h-24 lg:h-28">
          {/* Left Section: Logo & Menu Toggle */}
          <div className="flex items-center space-x-2 md:space-x-4">
            <button
              onClick={onMenuToggle}
              className="p-2 rounded-lg hover:bg-gray-100/50 transition-colors lg:hidden"
              aria-label="Toggle menu"
            >
              {isSidebarOpen ? (
                <X className="w-6 h-6 text-gray-700" />
              ) : (
                <Menu className="w-6 h-6 text-gray-700" />
              )}
            </button>
            
            <Link to="/dashboard" className="flex items-center">
              <img
                src="https://lbce.edu.in/static/images/jrlogo.png"
                alt="College Logo"
                className="h-16 w-auto md:h-20 lg:h-24 xl:h-28 object-contain max-w-[300px] md:max-w-[400px] lg:max-w-[500px] xl:max-w-[600px] cursor-pointer hover:opacity-80 transition-opacity"
                onError={(e) => {
                  e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"%3E%3Ctext y=".9em" font-size="90"%3E🎓%3C/text%3E%3C/svg%3E';
                }}
              />
            </Link>
          </div>

          {/* Center Section: Search Bar */}
          <div className="hidden md:flex flex-1 max-w-xl mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search modules, students, faculty..."
                className="w-full pl-10 pr-4 py-2 rounded-lg glass border border-gray-200/50 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all"
              />
            </div>
          </div>

          {/* Right Section: Notifications & User Menu */}
          <div className="flex items-center space-x-2">
            {/* Mobile Search */}
            <button className="p-2 rounded-lg hover:bg-gray-100/50 transition-colors md:hidden">
              <Search className="w-5 h-5 text-gray-700" />
            </button>

            {/* Notifications */}
            <div className="relative">
              <button
                onClick={() => setIsNotificationsOpen(!isNotificationsOpen)}
                className="relative p-2 rounded-lg hover:bg-gray-100/50 transition-colors hover-glow"
              >
                <Bell className="w-5 h-5 text-gray-700" />
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
            </div>

            {/* User Menu */}
            <div className="relative">
              <button
                onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                className="flex items-center space-x-2 p-2 rounded-lg hover:bg-gray-100/50 transition-colors hover-glow"
              >
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center">
                  <User className="w-5 h-5 text-white" />
                </div>
                <ChevronDown className="w-4 h-4 text-gray-700 hidden sm:block" />
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
                      <button className="w-full flex items-center space-x-3 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50/50 transition-colors">
                        <User className="w-4 h-4" />
                        <span>Profile</span>
                      </button>
                      <button className="w-full flex items-center space-x-3 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50/50 transition-colors">
                        <Settings className="w-4 h-4" />
                        <span>Settings</span>
                      </button>
                      <button 
                        onClick={handleLogout}
                        className="w-full flex items-center space-x-3 px-4 py-2 text-sm text-red-600 hover:bg-red-50/50 transition-colors"
                      >
                        <LogOut className="w-4 h-4" />
                        <span>Logout</span>
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

