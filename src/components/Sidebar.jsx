import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  LayoutDashboard,
  GraduationCap,
  BookOpen,
  FileText,
  Calendar,
  Users,
  UserCheck,
  ClipboardList,
  BarChart3,
  Bell,
  Settings,
  ChevronRight,
  ChevronDown,
  Home,
  Award,
  Clock,
  FileCheck,
  TrendingUp,
  MessageSquare,
  AlertCircle,
} from 'lucide-react';
import { NavLink } from 'react-router-dom';

const Sidebar = ({ isOpen, onClose }) => {
  const [openMenus, setOpenMenus] = useState({});
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const checkDesktop = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };
    checkDesktop();
    window.addEventListener('resize', checkDesktop);
    return () => window.removeEventListener('resize', checkDesktop);
  }, []);

  const toggleMenu = (menuKey) => {
    setOpenMenus((prev) => ({
      ...prev,
      [menuKey]: !prev[menuKey],
    }));
  };

  const menuItems = [
    {
      key: 'academic',
      label: 'Core Academic Management',
      icon: GraduationCap,
      children: [
        {
          key: 'department',
          label: 'Department Management',
          icon: Users,
          children: [
            { key: 'dept-master', label: 'Department Master', path: '/dashboard/department/master' },
            { key: 'faculty-profiles', label: 'Faculty Profiles', path: '/dashboard/department/faculty' },
            { key: 'course-coordinators', label: 'Course Coordinators / HODs', path: '/dashboard/department/coordinators' },
            { key: 'subject-allocation', label: 'Subject Allocation', path: '/dashboard/department/subject-allocation' },
          ],
        },
        {
          key: 'course',
          label: 'Course & Curriculum Management',
          icon: BookOpen,
          children: [
            { key: 'program-setup', label: 'Program Setup', path: '/dashboard/course/program-setup' },
            { key: 'course-catalog', label: 'Course Catalog', path: '/dashboard/course/catalog' },
            { key: 'syllabus', label: 'Syllabus Management', path: '/dashboard/course/syllabus' },
            { key: 'curriculum-mapping', label: 'Curriculum Mapping', path: '/dashboard/course/curriculum' },
          ],
        },
      ],
    },
    {
      key: 'examination',
      label: 'Examination & Assessment',
      icon: FileText,
      children: [
        {
          key: 'mid-exam',
          label: 'Mid/Sessional Exams',
          icon: ClipboardList,
          children: [
            { key: 'mid-schedule', label: 'Exam Schedules', path: '/dashboard/exams/mid/schedule' },
            { key: 'mid-marks', label: 'Internal Marks Entry', path: '/dashboard/exams/mid/marks' },
            { key: 'mid-result', label: 'Result Publishing', path: '/dashboard/exams/mid/results' },
            { key: 'mid-revaluation', label: 'Revaluation/Grievance', path: '/dashboard/exams/mid/revaluation' },
          ],
        },
        {
          key: 'semester-exam',
          label: 'Semester End Exams',
          icon: FileCheck,
          children: [
            { key: 'sem-notifications', label: 'Exam Notifications', path: '/dashboard/exams/semester/notifications' },
            { key: 'sem-hall-ticket', label: 'Hall Ticket Generation', path: '/dashboard/exams/semester/hall-ticket' },
            { key: 'sem-seating', label: 'Seating Arrangement', path: '/dashboard/exams/semester/seating' },
            { key: 'sem-attendance', label: 'Attendance & Malpractice', path: '/dashboard/exams/semester/attendance' },
            { key: 'sem-result', label: 'Result Processing', path: '/dashboard/exams/semester/results' },
            { key: 'sem-supplementary', label: 'Supplementary Exams', path: '/dashboard/exams/semester/supplementary' },
          ],
        },
        {
          key: 'result-analytics',
          label: 'Result Analytics',
          icon: BarChart3,
          children: [
            { key: 'analytics-dept', label: 'Department-wise', path: '/dashboard/analytics/department' },
            { key: 'analytics-course', label: 'Course-wise', path: '/dashboard/analytics/course' },
            { key: 'analytics-student', label: 'Student-wise', path: '/dashboard/analytics/student' },
            { key: 'analytics-comparison', label: 'Comparison Reports', path: '/dashboard/analytics/comparison' },
          ],
        },
      ],
    },
    {
      key: 'notifications',
      label: 'Notifications & Circulars',
      icon: Bell,
      children: [
        { key: 'notif-exam', label: 'Exam Notifications', path: '/dashboard/notifications/exam' },
        { key: 'notif-revaluation', label: 'Revaluation Schedules', path: '/dashboard/notifications/revaluation' },
        { key: 'notif-timetable', label: 'Timetable Updates', path: '/dashboard/notifications/timetable' },
        { key: 'notif-calendar', label: 'Academic Calendar', path: '/dashboard/notifications/calendar' },
        { key: 'notif-push', label: 'Push Alerts', path: '/dashboard/notifications/push' },
      ],
    },
    {
      key: 'student-profiles',
      label: 'Student Academic Profiles',
      icon: UserCheck,
      children: [
        { key: 'student-profile', label: 'Profile & Registration', path: '/dashboard/students/profile' },
        { key: 'student-attendance', label: 'Attendance Tracking', path: '/dashboard/students/attendance' },
        { key: 'student-marks', label: 'Marks History', path: '/dashboard/students/marks' },
        { key: 'student-grades', label: 'Grade Sheets', path: '/dashboard/students/grades' },
        { key: 'student-backlog', label: 'Backlog Tracker', path: '/dashboard/students/backlog' },
      ],
    },
    {
      key: 'faculty',
      label: 'Faculty Portal',
      icon: Users,
      children: [
        { key: 'faculty-class', label: 'Class & Subject View', path: '/dashboard/faculty/classes' },
        { key: 'faculty-attendance', label: 'Attendance Marking', path: '/dashboard/faculty/attendance' },
        { key: 'faculty-marks', label: 'Internal Marks Entry', path: '/dashboard/faculty/marks' },
        { key: 'faculty-materials', label: 'Study Material Upload', path: '/dashboard/faculty/materials' },
        { key: 'faculty-performance', label: 'Student Performance View', path: '/dashboard/faculty/performance' },
      ],
    },
    {
      key: 'exam-cell',
      label: 'Autonomous Exam Cell',
      icon: Award,
      children: [
        { key: 'cell-timetable', label: 'Timetable Creation', path: '/dashboard/exam-cell/timetable' },
        { key: 'cell-question', label: 'Question Paper Approval', path: '/dashboard/exam-cell/question-paper' },
        { key: 'cell-result', label: 'Result Publishing Workflow', path: '/dashboard/exam-cell/results' },
        { key: 'cell-supervision', label: 'Supervision Scheduling', path: '/dashboard/exam-cell/supervision' },
        { key: 'cell-transcript', label: 'Grade Sheet & Transcript', path: '/dashboard/exam-cell/transcript' },
        { key: 'cell-revaluation', label: 'Revaluation Handling', path: '/dashboard/exam-cell/revaluation' },
      ],
    },
    {
      key: 'admin',
      label: 'Admin / CoE Dashboard',
      icon: LayoutDashboard,
      children: [
        { key: 'admin-overview', label: 'Department Exam Overview', path: '/dashboard/admin/overview' },
        { key: 'admin-approvals', label: 'Pending Approvals', path: '/dashboard/admin/approvals' },
        { key: 'admin-notifications', label: 'Notifications Manager', path: '/dashboard/admin/notifications' },
        { key: 'admin-reports', label: 'Reports (PDF, Grade Analysis)', path: '/dashboard/admin/reports' },
        { key: 'admin-website', label: 'Website Integration', path: '/dashboard/admin/website' },
      ],
    },
    {
      key: 'student-portal',
      label: 'Student Portal',
      icon: Home,
      children: [
        { key: 'portal-notifications', label: 'Notifications', path: '/dashboard/portal/notifications' },
        { key: 'portal-results', label: 'Results', path: '/dashboard/portal/results' },
        { key: 'portal-timetable', label: 'Timetable', path: '/dashboard/portal/timetable' },
        { key: 'portal-revaluation', label: 'Revaluation/Supplementary', path: '/dashboard/portal/revaluation' },
        { key: 'portal-hall-ticket', label: 'Hall Ticket Download', path: '/dashboard/portal/hall-ticket' },
        { key: 'portal-feedback', label: 'Feedback', path: '/dashboard/portal/feedback' },
        { key: 'portal-grievances', label: 'Grievances', path: '/dashboard/portal/grievances' },
      ],
    },
    {
      key: 'reports',
      label: 'Reports & Analytics',
      icon: TrendingUp,
      children: [
        { key: 'reports-dept', label: 'Department Performance', path: '/dashboard/reports/department' },
        { key: 'reports-subject', label: 'Subject Difficulty Index', path: '/dashboard/reports/subject-difficulty' },
        { key: 'reports-cgpa', label: 'CGPA Distribution', path: '/dashboard/reports/cgpa' },
        { key: 'reports-attendance', label: 'Attendance vs Performance', path: '/dashboard/reports/attendance-performance' },
      ],
    },
  ];

  const renderMenuItem = (item, level = 0) => {
    const hasChildren = item.children && item.children.length > 0;
    const isOpen = openMenus[item.key];
    const Icon = item.icon || ChevronRight;

    if (!hasChildren && item.path) {
      return (
        <NavLink
          key={item.key}
          to={item.path}
          onClick={onClose}
          className={({ isActive }) =>
            `flex items-center space-x-3 px-4 py-2.5 text-sm rounded-lg transition-all duration-200 ${
              isActive
                ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg shadow-blue-500/50'
                : 'text-gray-700 hover:bg-gray-100/50 hover-glow'
            }`
          }
          style={{ paddingLeft: `${1 + level * 1}rem` }}
        >
          <Icon className="w-5 h-5 flex-shrink-0 text-current" />
          <span className="flex-1">{item.label}</span>
        </NavLink>
      );
    }

    return (
      <div key={item.key}>
        <button
          onClick={() => toggleMenu(item.key)}
          className={`w-full flex items-center justify-between px-4 py-2.5 text-sm rounded-lg transition-all duration-200 ${
            isOpen
              ? 'bg-gradient-to-r from-blue-500/10 to-purple-500/10 text-blue-700'
              : 'text-gray-700 hover:bg-gray-100/50 hover-glow'
          }`}
          style={{ paddingLeft: `${1 + level * 1}rem` }}
        >
          <div className="flex items-center space-x-3">
            <Icon className="w-5 h-5 flex-shrink-0 text-current" />
            <span className="font-medium flex-1">{item.label}</span>
          </div>
          <motion.div
            animate={{ rotate: isOpen ? 90 : 0 }}
            transition={{ duration: 0.2 }}
          >
            <ChevronRight className="w-4 h-4" />
          </motion.div>
        </button>

        <AnimatePresence>
          {isOpen && hasChildren && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="overflow-hidden"
            >
              <div className="py-2 space-y-1">
                {item.children.map((child) => renderMenuItem(child, level + 1))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  };

  return (
    <>
      {/* Overlay for mobile */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={onClose}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
            />
          </>
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <motion.aside
        initial={false}
        animate={{
          x: isDesktop ? 0 : (isOpen ? 0 : '-100%'),
        }}
        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
        className={`fixed lg:sticky top-20 md:top-24 lg:top-28 left-0 h-[calc(100vh-5rem)] md:h-[calc(100vh-6rem)] lg:h-[calc(100vh-7rem)] w-80 glass border-r border-gray-200/50 shadow-xl z-50 overflow-y-auto bg-white/95 backdrop-blur-md`}
      >
        <div className="p-4 space-y-2 overflow-y-auto h-full">
          {/* Dashboard Link */}
          <NavLink
            to="/dashboard"
            onClick={onClose}
            className={({ isActive }) =>
              `flex items-center space-x-3 px-4 py-3 text-sm font-semibold rounded-lg transition-all duration-200 mb-4 ${
                isActive
                  ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg shadow-blue-500/50'
                  : 'text-gray-700 hover:bg-gray-100/50 hover-glow'
              }`
            }
          >
            <Home className="w-5 h-5 flex-shrink-0 text-current" />
            <span className="flex-1">Dashboard</span>
          </NavLink>

          {/* Menu Items */}
          {menuItems.map((item) => renderMenuItem(item))}
        </div>
      </motion.aside>
    </>
  );
};

export default Sidebar;

