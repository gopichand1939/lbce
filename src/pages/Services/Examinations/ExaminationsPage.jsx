import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FileText, 
  Calendar, 
  Clock, 
  BookOpen, 
  Building2, 
  Download, 
  Bell,
  CheckCircle,
  AlertCircle,
  Ticket,
  GraduationCap
} from 'lucide-react';
import PublicNavbar from '../../../components/PublicNavbar';

const ExaminationsPage = () => {
  const [selectedDepartment, setSelectedDepartment] = useState('CSE');
  const [selectedSemester, setSelectedSemester] = useState('1-1');
  const [selectedYear, setSelectedYear] = useState('2024-25');
  const [selectedExamType, setSelectedExamType] = useState('mid1');

  const departments = ['CSE', 'ECE', 'EEE', 'CIVIL'];
  const semesters = ['1-1', '1-2', '2-1', '2-2', '3-1', '3-2', '4-1', '4-2'];
  const years = ['2024-25', '2023-24', '2022-23'];
  
  const examTypes = [
    { id: 'mid1', label: 'MID 1', icon: FileText, color: 'from-blue-500 to-blue-600' },
    { id: 'mid2', label: 'MID 2', icon: FileText, color: 'from-purple-500 to-purple-600' },
    { id: 'semester', label: 'Semester Exam', icon: GraduationCap, color: 'from-green-500 to-green-600' },
    { id: 'lab1', label: 'Internal Lab Exam 1', icon: BookOpen, color: 'from-orange-500 to-orange-600' },
    { id: 'lab2', label: 'Internal Lab Exam 2', icon: BookOpen, color: 'from-pink-500 to-pink-600' },
    { id: 'external', label: 'External Exam', icon: CheckCircle, color: 'from-red-500 to-red-600' },
  ];

  // Notifications data
  const notifications = [
    {
      id: 1,
      type: 'mid1',
      title: 'MID 1 Examination Notification',
      message: 'MID 1 examinations for all departments will commence from December 15, 2024. Hall tickets will be available for download from December 10, 2024.',
      date: '2024-11-20',
      status: 'active',
      hallTicketAvailable: true,
      hallTicketDate: '2024-12-10',
    },
    {
      id: 2,
      type: 'mid2',
      title: 'MID 2 Examination Notification',
      message: 'MID 2 examinations for all departments will commence from February 15, 2025. Hall tickets will be available for download from February 10, 2025.',
      date: '2024-12-20',
      status: 'upcoming',
      hallTicketAvailable: false,
      hallTicketDate: '2025-02-10',
    },
    {
      id: 3,
      type: 'semester',
      title: 'Semester End Examination Notification',
      message: 'Semester End examinations for all departments will commence from April 15, 2025. Hall tickets will be available for download from April 5, 2025.',
      date: '2025-01-15',
      status: 'upcoming',
      hallTicketAvailable: false,
      hallTicketDate: '2025-04-05',
    },
    {
      id: 4,
      type: 'lab1',
      title: 'Internal Lab Examination 1 Notification',
      message: 'Internal Lab Examination 1 for all departments will commence from December 20, 2024.',
      date: '2024-11-25',
      status: 'active',
      hallTicketAvailable: false,
    },
    {
      id: 5,
      type: 'lab2',
      title: 'Internal Lab Examination 2 Notification',
      message: 'Internal Lab Examination 2 for all departments will commence from February 20, 2025.',
      date: '2024-12-25',
      status: 'upcoming',
      hallTicketAvailable: false,
    },
    {
      id: 6,
      type: 'external',
      title: 'External Examination Notification',
      message: 'External examinations for all departments will commence from May 15, 2025. Hall tickets will be available for download from May 1, 2025.',
      date: '2025-02-15',
      status: 'upcoming',
      hallTicketAvailable: false,
      hallTicketDate: '2025-05-01',
    },
  ];

  // Exam schedules data
  const examSchedules = {
    'mid1': {
      'CSE': {
        '1-1': {
          date: '2024-12-15',
          subjects: [
            { code: 'CS101', name: 'Programming Fundamentals', date: '2024-12-15', time: '09:00 AM - 12:00 PM' },
            { code: 'CS102', name: 'Data Structures', date: '2024-12-17', time: '09:00 AM - 12:00 PM' },
            { code: 'CS103', name: 'Computer Organization', date: '2024-12-19', time: '09:00 AM - 12:00 PM' },
          ],
        },
      },
    },
    'mid2': {
      'CSE': {
        '1-1': {
          date: '2025-02-15',
          subjects: [
            { code: 'CS101', name: 'Programming Fundamentals', date: '2025-02-15', time: '09:00 AM - 12:00 PM' },
            { code: 'CS102', name: 'Data Structures', date: '2025-02-17', time: '09:00 AM - 12:00 PM' },
          ],
        },
      },
    },
    'semester': {
      'CSE': {
        '1-1': {
          date: '2025-04-15',
          subjects: [
            { code: 'CS101', name: 'Programming Fundamentals', date: '2025-04-15', time: '09:00 AM - 12:00 PM' },
            { code: 'CS102', name: 'Data Structures', date: '2025-04-17', time: '09:00 AM - 12:00 PM' },
            { code: 'CS103', name: 'Computer Organization', date: '2025-04-19', time: '09:00 AM - 12:00 PM' },
            { code: 'CS104', name: 'Mathematics I', date: '2025-04-21', time: '09:00 AM - 12:00 PM' },
          ],
        },
      },
    },
  };

  const currentSchedule = examSchedules[selectedExamType]?.[selectedDepartment]?.[selectedSemester] || { subjects: [] };
  const currentNotification = notifications.find(n => n.type === selectedExamType);

  const handleDownloadHallTicket = () => {
    // Simulate hall ticket download
    alert(`Hall Ticket for ${selectedDepartment} - Semester ${selectedSemester} - ${examTypes.find(e => e.id === selectedExamType)?.label} will be downloaded.`);
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
            <FileText className="w-12 h-12 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            Examinations
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            View examination schedules, notifications, and download hall tickets for all departments and semesters.
          </p>
        </motion.div>

        {/* Exam Type Selection */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
            <FileText className="w-6 h-6 text-blue-600" />
            Select Exam Type
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {examTypes.map((exam) => {
              const Icon = exam.icon;
              const isSelected = selectedExamType === exam.id;
              return (
                <motion.button
                  key={exam.id}
                  onClick={() => setSelectedExamType(exam.id)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`relative p-4 rounded-xl shadow-lg transition-all duration-300 ${
                    isSelected
                      ? `bg-gradient-to-br ${exam.color} text-white shadow-xl`
                      : 'bg-white text-gray-700 hover:shadow-xl border border-gray-200'
                  }`}
                >
                  <Icon className={`w-8 h-8 mx-auto mb-2 ${isSelected ? 'text-white' : 'text-gray-600'}`} />
                  <div className={`text-sm font-semibold ${isSelected ? 'text-white' : 'text-gray-800'}`}>
                    {exam.label}
                  </div>
                  {isSelected && (
                    <motion.div
                      className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    >
                      <CheckCircle className="w-4 h-4 text-white" />
                    </motion.div>
                  )}
                </motion.button>
              );
            })}
          </div>
        </motion.div>

        {/* Notification Card */}
        {currentNotification && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8 glass rounded-2xl p-6 shadow-xl border-2 border-blue-200 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-50/50 to-purple-50/50 opacity-50" />
            <div className="relative z-10">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 shadow-lg">
                  <Bell className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold text-gray-800">{currentNotification.title}</h3>
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      currentNotification.status === 'active'
                        ? 'bg-green-100 text-green-700'
                        : 'bg-yellow-100 text-yellow-700'
                    }`}>
                      {currentNotification.status === 'active' ? 'Active' : 'Upcoming'}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-3">{currentNotification.message}</p>
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>Notification Date: {new Date(currentNotification.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                    </div>
                    {currentNotification.hallTicketDate && (
                      <div className="flex items-center gap-2">
                        <Ticket className="w-4 h-4" />
                        <span>Hall Ticket Available: {new Date(currentNotification.hallTicketDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Selection Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {/* Year Selection */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="glass rounded-2xl p-6 shadow-xl border border-gray-200/50"
          >
            <div className="flex items-center gap-3 mb-4">
              <Calendar className="w-6 h-6 text-green-600" />
              <h2 className="text-xl font-bold text-gray-800">Academic Year</h2>
            </div>
            <div className="space-y-2">
              {years.map((year) => (
                <button
                  key={year}
                  onClick={() => setSelectedYear(year)}
                  className={`w-full px-4 py-3 rounded-lg font-semibold transition-all duration-300 ${
                    selectedYear === year
                      ? 'bg-gradient-to-r from-green-500 to-green-600 text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {year}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Department Selection */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="glass rounded-2xl p-6 shadow-xl border border-gray-200/50"
          >
            <div className="flex items-center gap-3 mb-4">
              <Building2 className="w-6 h-6 text-blue-600" />
              <h2 className="text-xl font-bold text-gray-800">Department</h2>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {departments.map((dept) => (
                <button
                  key={dept}
                  onClick={() => setSelectedDepartment(dept)}
                  className={`px-4 py-3 rounded-lg font-semibold transition-all duration-300 ${
                    selectedDepartment === dept
                      ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {dept}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Semester Selection */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="glass rounded-2xl p-6 shadow-xl border border-gray-200/50"
          >
            <div className="flex items-center gap-3 mb-4">
              <BookOpen className="w-6 h-6 text-purple-600" />
              <h2 className="text-xl font-bold text-gray-800">Semester</h2>
            </div>
            <div className="grid grid-cols-4 gap-2">
              {semesters.map((sem) => (
                <button
                  key={sem}
                  onClick={() => setSelectedSemester(sem)}
                  className={`px-3 py-2 rounded-lg font-semibold text-sm transition-all duration-300 ${
                    selectedSemester === sem
                      ? 'bg-gradient-to-r from-purple-500 to-pink-600 text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {sem}
                </button>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Hall Ticket Download Section */}
        {currentNotification?.hallTicketAvailable && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8 glass rounded-2xl p-6 shadow-xl border-2 border-green-200 bg-gradient-to-r from-green-50 to-blue-50"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="p-4 rounded-full bg-gradient-to-br from-green-500 to-green-600 shadow-lg">
                  <Ticket className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-1">Hall Ticket Available</h3>
                  <p className="text-gray-600">
                    Download your hall ticket for {selectedDepartment} - Semester {selectedSemester} - {examTypes.find(e => e.id === selectedExamType)?.label}
                  </p>
                </div>
              </div>
              <button
                onClick={handleDownloadHallTicket}
                className="px-6 py-3 rounded-lg bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2 hover:scale-105"
              >
                <Download className="w-5 h-5" />
                Download Hall Ticket
              </button>
            </div>
          </motion.div>
        )}

        {/* Exam Schedule */}
        {currentSchedule.subjects && currentSchedule.subjects.length > 0 ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="glass rounded-2xl p-8 shadow-xl border border-gray-200/50"
          >
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-2">
                  {selectedDepartment} - Semester {selectedSemester} - {examTypes.find(e => e.id === selectedExamType)?.label} Schedule
                </h2>
                <p className="text-gray-600 flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  Examinations commence from {currentSchedule.date ? new Date(currentSchedule.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }) : 'TBA'}
                </p>
              </div>
            </div>

            <div className="space-y-4">
              {currentSchedule.subjects.map((subject, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="bg-white rounded-xl p-6 shadow-md border border-gray-200 hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="px-3 py-1 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold text-sm">
                          {subject.code}
                        </div>
                        <h3 className="text-lg font-bold text-gray-800">{subject.name}</h3>
                      </div>
                      <div className="flex items-center gap-6 text-gray-600 mt-3">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          <span>{new Date(subject.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4" />
                          <span>{subject.time}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="glass rounded-2xl p-12 shadow-xl border border-gray-200/50 text-center"
          >
            <FileText className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <p className="text-gray-600 text-lg">
              No examination schedule available for {selectedDepartment} - Semester {selectedSemester} - {examTypes.find(e => e.id === selectedExamType)?.label} at the moment.
            </p>
            <p className="text-gray-500 text-sm mt-2">
              Please check back later or contact the examination cell for more information.
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default ExaminationsPage;
