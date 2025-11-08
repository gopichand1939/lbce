import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  GraduationCap,
  Users,
  FileText,
  BarChart3,
  Calendar,
  Bell,
  TrendingUp,
  Award,
} from 'lucide-react';

const Dashboard = () => {
  const stats = [
    { label: 'Total Students', value: '12,450', icon: Users, color: 'from-blue-500 to-cyan-500' },
    { label: 'Total Faculty', value: '450', icon: GraduationCap, color: 'from-purple-500 to-pink-500' },
    { label: 'Active Exams', value: '23', icon: FileText, color: 'from-green-500 to-emerald-500' },
    { label: 'Departments', value: '12', icon: Award, color: 'from-orange-500 to-red-500' },
  ];

  const quickActions = [
    { label: 'Create Exam Schedule', icon: Calendar, path: '/dashboard/exams/semester/notifications' },
    { label: 'Publish Results', icon: FileText, path: '/dashboard/exams/semester/results' },
    { label: 'View Analytics', icon: BarChart3, path: '/dashboard/analytics/department' },
    { label: 'Send Notifications', icon: Bell, path: '/dashboard/notifications/push' },
  ];

  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl font-bold gradient-text mb-2">Dashboard</h1>
        <p className="text-gray-600">Welcome to College Academic Management System</p>
      </motion.div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass rounded-xl p-6 shadow-lg hover-glow border border-gray-200/50"
            >
              <div className="flex items-center justify-between mb-4">
                <div className={`p-3 rounded-lg bg-gradient-to-br ${stat.color} shadow-lg`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</h3>
              <p className="text-sm text-gray-600">{stat.label}</p>
            </motion.div>
          );
        })}
      </div>

      {/* Quick Actions */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="glass rounded-xl p-6 shadow-lg border border-gray-200/50"
      >
        <h2 className="text-xl font-bold text-gray-900 mb-4">Quick Actions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {quickActions.map((action, index) => {
            const Icon = action.icon;
            return (
              <Link
                key={action.label}
                to={action.path}
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex flex-col items-center justify-center p-6 rounded-lg bg-gradient-to-br from-blue-50 to-purple-50 border border-blue-200/50 hover:shadow-glow transition-all duration-300 cursor-pointer"
                >
                  <Icon className="w-8 h-8 text-blue-600 mb-2" />
                  <span className="text-sm font-medium text-gray-700">{action.label}</span>
                </motion.div>
              </Link>
            );
          })}
        </div>
      </motion.div>

      {/* Recent Activity */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="glass rounded-xl p-6 shadow-lg border border-gray-200/50"
      >
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold text-gray-900">Recent Activity</h2>
          <TrendingUp className="w-5 h-5 text-gray-500" />
        </div>
        <div className="space-y-3">
          <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50/50 transition-colors">
            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
            <div className="flex-1">
              <p className="text-sm font-medium text-gray-900">New exam schedule published</p>
              <p className="text-xs text-gray-500">2 hours ago</p>
            </div>
          </div>
          <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50/50 transition-colors">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <div className="flex-1">
              <p className="text-sm font-medium text-gray-900">Results published for Semester 3</p>
              <p className="text-xs text-gray-500">5 hours ago</p>
            </div>
          </div>
          <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50/50 transition-colors">
            <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
            <div className="flex-1">
              <p className="text-sm font-medium text-gray-900">Faculty attendance marked</p>
              <p className="text-xs text-gray-500">1 day ago</p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Dashboard;

