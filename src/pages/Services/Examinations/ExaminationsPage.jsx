import { useState } from 'react';
import { motion } from 'framer-motion';
import { FileText, Calendar, Clock, BookOpen, Users, Building2 } from 'lucide-react';
import PublicNavbar from '../../../components/PublicNavbar';

const ExaminationsPage = () => {
  const [selectedDepartment, setSelectedDepartment] = useState('CSE');
  const [selectedSemester, setSelectedSemester] = useState('1-1');

  const departments = ['CSE', 'ECE', 'EEE', 'CIVIL'];
  const semesters = ['1-1', '1-2', '2-1', '2-2', '3-1', '3-2', '4-1', '4-2'];

  const examSchedules = {
    'CSE': {
      '1-1': {
        date: '2024-12-15',
        subjects: [
          { code: 'CS101', name: 'Programming Fundamentals', date: '2024-12-15', time: '09:00 AM - 12:00 PM' },
          { code: 'CS102', name: 'Data Structures', date: '2024-12-17', time: '09:00 AM - 12:00 PM' },
          { code: 'CS103', name: 'Computer Organization', date: '2024-12-19', time: '09:00 AM - 12:00 PM' },
          { code: 'CS104', name: 'Mathematics I', date: '2024-12-21', time: '09:00 AM - 12:00 PM' },
        ],
      },
      '1-2': {
        date: '2024-12-15',
        subjects: [
          { code: 'CS201', name: 'Object Oriented Programming', date: '2024-12-15', time: '09:00 AM - 12:00 PM' },
          { code: 'CS202', name: 'Database Management Systems', date: '2024-12-17', time: '09:00 AM - 12:00 PM' },
          { code: 'CS203', name: 'Operating Systems', date: '2024-12-19', time: '09:00 AM - 12:00 PM' },
        ],
      },
    },
    'ECE': {
      '1-1': {
        date: '2024-12-15',
        subjects: [
          { code: 'EC101', name: 'Electronic Devices', date: '2024-12-15', time: '09:00 AM - 12:00 PM' },
          { code: 'EC102', name: 'Digital Electronics', date: '2024-12-17', time: '09:00 AM - 12:00 PM' },
          { code: 'EC103', name: 'Signals and Systems', date: '2024-12-19', time: '09:00 AM - 12:00 PM' },
        ],
      },
    },
    'EEE': {
      '1-1': {
        date: '2024-12-15',
        subjects: [
          { code: 'EE101', name: 'Electrical Circuits', date: '2024-12-15', time: '09:00 AM - 12:00 PM' },
          { code: 'EE102', name: 'Power Systems', date: '2024-12-17', time: '09:00 AM - 12:00 PM' },
          { code: 'EE103', name: 'Control Systems', date: '2024-12-19', time: '09:00 AM - 12:00 PM' },
        ],
      },
    },
    'CIVIL': {
      '1-1': {
        date: '2024-12-15',
        subjects: [
          { code: 'CE101', name: 'Engineering Mechanics', date: '2024-12-15', time: '09:00 AM - 12:00 PM' },
          { code: 'CE102', name: 'Structural Analysis', date: '2024-12-17', time: '09:00 AM - 12:00 PM' },
          { code: 'CE103', name: 'Surveying', date: '2024-12-19', time: '09:00 AM - 12:00 PM' },
        ],
      },
    },
  };

  const currentSchedule = examSchedules[selectedDepartment]?.[selectedSemester] || { subjects: [] };

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
            View examination schedules, timetables, and important information for all departments and semesters.
          </p>
        </motion.div>

        {/* Selection Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {/* Department Selection */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="glass rounded-2xl p-6 shadow-xl border border-gray-200/50"
          >
            <div className="flex items-center gap-3 mb-4">
              <Building2 className="w-6 h-6 text-blue-600" />
              <h2 className="text-xl font-bold text-gray-800">Select Department</h2>
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
              <h2 className="text-xl font-bold text-gray-800">Select Semester</h2>
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

        {/* Exam Schedule */}
        {currentSchedule.subjects.length > 0 ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="glass rounded-2xl p-8 shadow-xl border border-gray-200/50"
          >
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-2">
                  {selectedDepartment} - Semester {selectedSemester} Examination Schedule
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
              No examination schedule available for {selectedDepartment} - Semester {selectedSemester} at the moment.
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default ExaminationsPage;

