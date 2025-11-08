import { motion } from 'framer-motion';
import { Bell, Calendar, FileText, AlertCircle, CheckCircle, Clock } from 'lucide-react';
import PublicNavbar from '../../../components/PublicNavbar';

const NotificationsPage = () => {
  const notifications = [
    {
      id: 1,
      type: 'exam',
      title: 'Semester End Examinations - December 2024',
      description: 'All students are hereby informed that Semester End Examinations will commence from December 15, 2024.',
      date: '2024-11-20',
      status: 'active',
      department: 'All Departments',
    },
    {
      id: 2,
      type: 'result',
      title: 'Mid Semester Results Published',
      description: 'Mid semester examination results for all departments have been published. Students can check their results online.',
      date: '2024-11-18',
      status: 'active',
      department: 'All Departments',
    },
    {
      id: 3,
      type: 'timetable',
      title: 'Revised Time Table - CSE Department',
      description: 'Revised time table for Computer Science Engineering department has been updated. Please check the latest schedule.',
      date: '2024-11-15',
      status: 'active',
      department: 'CSE',
    },
    {
      id: 4,
      type: 'general',
      title: 'College Day Celebrations',
      description: 'All students and faculty are invited to participate in the annual college day celebrations on December 1, 2024.',
      date: '2024-11-10',
      status: 'active',
      department: 'All Departments',
    },
    {
      id: 5,
      type: 'exam',
      title: 'Hall Ticket Download Available',
      description: 'Students can now download their hall tickets for Semester End Examinations from the student portal.',
      date: '2024-11-05',
      status: 'completed',
      department: 'All Departments',
    },
  ];

  const getNotificationIcon = (type) => {
    switch (type) {
      case 'exam':
        return FileText;
      case 'result':
        return CheckCircle;
      case 'timetable':
        return Calendar;
      default:
        return Bell;
    }
  };

  const getNotificationColor = (type) => {
    switch (type) {
      case 'exam':
        return 'from-red-500 to-red-600';
      case 'result':
        return 'from-green-500 to-green-600';
      case 'timetable':
        return 'from-blue-500 to-blue-600';
      default:
        return 'from-purple-500 to-purple-600';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50/30 to-purple-50/30">
      <PublicNavbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center justify-center p-4 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 shadow-xl mb-6">
            <Bell className="w-12 h-12 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            Notifications
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Stay updated with the latest announcements, exam schedules, results, and important notices from Dr. Lankapalli Bullayya College of Engineering.
          </p>
        </motion.div>

        {/* Notifications List */}
        <div className="space-y-6">
          {notifications.map((notification, index) => {
            const Icon = getNotificationIcon(notification.type);
            const colorClass = getNotificationColor(notification.type);
            
            return (
              <motion.div
                key={notification.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass rounded-2xl p-6 shadow-xl border border-gray-200/50 hover:shadow-2xl transition-all duration-300"
              >
                <div className="flex items-start gap-6">
                  {/* Icon */}
                  <div className={`flex-shrink-0 p-4 rounded-xl bg-gradient-to-br ${colorClass} shadow-lg`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex items-start justify-between gap-4 mb-2">
                      <h3 className="text-xl font-bold text-gray-800">{notification.title}</h3>
                      {notification.status === 'active' && (
                        <span className="flex items-center gap-1 px-3 py-1 rounded-full bg-green-100 text-green-700 text-xs font-semibold">
                          <AlertCircle className="w-3 h-3" />
                          Active
                        </span>
                      )}
                      {notification.status === 'completed' && (
                        <span className="flex items-center gap-1 px-3 py-1 rounded-full bg-gray-100 text-gray-700 text-xs font-semibold">
                          <CheckCircle className="w-3 h-3" />
                          Completed
                        </span>
                      )}
                    </div>
                    
                    <p className="text-gray-600 mb-4 leading-relaxed">{notification.description}</p>
                    
                    <div className="flex items-center gap-6 text-sm text-gray-500">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span>{new Date(notification.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <FileText className="w-4 h-4" />
                        <span>{notification.department}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Empty State (if no notifications) */}
        {notifications.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <Bell className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <p className="text-gray-600 text-lg">No notifications available at the moment.</p>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default NotificationsPage;

