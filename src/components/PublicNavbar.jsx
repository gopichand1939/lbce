import { Link } from 'react-router-dom';
import { useState } from 'react';
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

  const menuItems = [
    { icon: Home, label: 'Home', path: '/' },
    { icon: Building2, label: 'Departments', path: '/' },
    { icon: GraduationCap, label: 'Skill Development', path: '/' },
  ];

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
          <div className="hidden lg:flex items-center space-x-6">
            {menuItems.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.label}
                  to={item.path}
                  className="text-gray-700 text-sm font-medium flex items-center gap-2"
                >
                  <Icon className="w-4 h-4" />
                  {item.label}
                </Link>
              );
            })}

            {/* SERVICE DROPDOWN */}
            <div
              className="relative text-gray-700 cursor-pointer text-sm font-medium flex items-center gap-2"
              onMouseEnter={() => setIsServiceOpen(true)}
              onMouseLeave={() => setIsServiceOpen(false)}
            >
              <Settings className="w-4 h-4" />
              Service
              <ChevronDown className={`w-4 h-4 ${isServiceOpen ? 'rotate-180' : ''}`} />

              {isServiceOpen && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-white border border-gray-200 shadow-md rounded-lg overflow-hidden">
                  {serviceItems.map((item) => {
                    const Icon = item.icon;
                    return (
                      <Link
                        key={item.label}
                        to={item.path}
                        className="flex items-center gap-2 px-4 py-3 text-gray-700 text-sm"
                      >
                        <Icon className="w-4 h-4" />
                        {item.label}
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>
          </div>

          {/* LOGIN */}
          <div className="pr-4">
            <Link
              to="/login"
              className="text-gray-700 font-medium text-sm"
            >
              Login
            </Link>
          </div>

        </div>
      </div>
    </nav>
  );
};

export default PublicNavbar;
