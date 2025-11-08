import { useState } from 'react';
import { motion } from 'framer-motion';
import { ClipboardCheck, Search, User, BookOpen, Award, Calendar, TrendingUp } from 'lucide-react';
import PublicNavbar from '../../../components/PublicNavbar';

const ResultsPage = () => {
  const [formData, setFormData] = useState({
    hallTicketNumber: '',
    dateOfBirth: '',
    semester: '',
    department: '',
  });
  const [results, setResults] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const departments = ['CSE', 'ECE', 'EEE', 'CIVIL'];
  const semesters = ['1-1', '1-2', '2-1', '2-2', '3-1', '3-2', '4-1', '4-2'];

  // Generate random student data based on input
  const generateRandomResults = (hallTicket, dept, sem) => {
    const firstNames = ['Rajesh', 'Priya', 'Amit', 'Sneha', 'Kiran', 'Anjali', 'Vikram', 'Divya', 'Rohit', 'Meera'];
    const lastNames = ['Kumar', 'Sharma', 'Patel', 'Reddy', 'Nair', 'Singh', 'Rao', 'Menon', 'Iyer', 'Nair'];
    const randomFirstName = firstNames[Math.floor(Math.random() * firstNames.length)];
    const randomLastName = lastNames[Math.floor(Math.random() * lastNames.length)];
    const studentName = `${randomFirstName} ${randomLastName}`;
    
    // Generate random registration number
    const regdNo = `32${Math.floor(Math.random() * 1000000)}${Math.floor(Math.random() * 100)}`;
    const abcId = `${Math.floor(Math.random() * 1000000000000)}`;
    
    // Subject codes based on department
    const subjectCodes = {
      'CSE': ['CS', 'CS', 'CS', 'CS', 'CS', 'CS', 'MA', 'EN'],
      'ECE': ['EC', 'EC', 'EC', 'EC', 'EC', 'EC', 'MA', 'EN'],
      'EEE': ['EE', 'EE', 'EE', 'EE', 'EE', 'EE', 'MA', 'EN'],
      'CIVIL': ['CE', 'CE', 'CE', 'CE', 'CE', 'CE', 'MA', 'EN'],
    };
    
    const subjectNames = {
      'CSE': [
        'Programming Fundamentals',
        'Data Structures',
        'Computer Organization',
        'Database Management Systems',
        'Operating Systems',
        'Computer Networks',
        'Mathematics I',
        'English Communication',
      ],
      'ECE': [
        'Electronic Devices',
        'Digital Electronics',
        'Signals and Systems',
        'Analog Communications',
        'Microprocessors and Microcontrollers',
        'Electromagnetic Field Theory',
        'Mathematics I',
        'English Communication',
      ],
      'EEE': [
        'Electrical Circuits',
        'Power Systems',
        'Control Systems',
        'Electrical Machines',
        'Power Electronics',
        'Electrical Measurements',
        'Mathematics I',
        'English Communication',
      ],
      'CIVIL': [
        'Engineering Mechanics',
        'Structural Analysis',
        'Surveying',
        'Building Materials',
        'Fluid Mechanics',
        'Geotechnical Engineering',
        'Mathematics I',
        'English Communication',
      ],
    };
    
    const grades = ['O', 'A+', 'A', 'B+', 'B', 'C+', 'C', 'P'];
    const gradePoints = { 'O': 10, 'A+': 9, 'A': 8, 'B+': 7, 'B': 6, 'C+': 5, 'C': 4, 'P': 3 };
    const credits = [3, 4, 3, 4, 3, 3, 4, 2];
    
    const subjects = [];
    let totalPoints = 0;
    let totalCredits = 0;
    
    const codes = subjectCodes[dept] || subjectCodes['CSE'];
    const names = subjectNames[dept] || subjectNames['CSE'];
    
    for (let i = 0; i < names.length; i++) {
      const grade = grades[Math.floor(Math.random() * grades.length)];
      const points = gradePoints[grade];
      const credit = credits[i];
      
      subjects.push({
        code: `${codes[i]}${101 + i}`,
        name: names[i],
        grade: grade,
        points: points,
        credits: credit,
        remarks: '',
      });
      
      totalPoints += points * credit;
      totalCredits += credit;
    }
    
    const sgpa = (totalPoints / totalCredits).toFixed(2);
    const cgpa = (parseFloat(sgpa) + (Math.random() * 0.5 - 0.25)).toFixed(2);
    const status = parseFloat(sgpa) >= 4.0 ? 'PASS' : 'FAIL';
    
    return {
      studentName,
      regdNo,
      abcId,
      hallTicketNumber: hallTicket,
      department: dept,
      semester: sem,
      subjects,
      totalCredits,
      earnedCredits: totalCredits,
      sgpa: parseFloat(sgpa),
      cgpa: parseFloat(cgpa),
      status,
    };
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      const mockResults = generateRandomResults(
        formData.hallTicketNumber,
        formData.department,
        formData.semester
      );
      
      setResults(mockResults);
      setIsLoading(false);
    }, 1500);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
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
          <div className="inline-flex items-center justify-center p-4 rounded-full bg-gradient-to-br from-green-500 to-blue-600 shadow-xl mb-6">
            <ClipboardCheck className="w-12 h-12 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            Results
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            View your semester and year-wise examination results. Enter your details to access your results.
          </p>
        </motion.div>

        {/* Search Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="glass rounded-2xl p-8 shadow-xl border border-gray-200/50 mb-8"
        >
          <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
            <Search className="w-6 h-6 text-blue-600" />
            Search Your Results
          </h2>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Hall Ticket Number */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Hall Ticket Number
                </label>
                <input
                  type="text"
                  name="hallTicketNumber"
                  value={formData.hallTicketNumber}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  placeholder="Enter Hall Ticket Number"
                />
              </div>

              {/* Date of Birth */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Date of Birth
                </label>
                <input
                  type="date"
                  name="dateOfBirth"
                  value={formData.dateOfBirth}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                />
              </div>

              {/* Department */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Department
                </label>
                <select
                  name="department"
                  value={formData.department}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                >
                  <option value="">Select Department</option>
                  {departments.map((dept) => (
                    <option key={dept} value={dept}>{dept}</option>
                  ))}
                </select>
              </div>

              {/* Semester */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Semester
                </label>
                <select
                  name="semester"
                  value={formData.semester}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                >
                  <option value="">Select Semester</option>
                  {semesters.map((sem) => (
                    <option key={sem} value={sem}>Semester {sem}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full md:w-auto px-8 py-3 rounded-lg bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {isLoading ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  Searching...
                </>
              ) : (
                <>
                  <Search className="w-5 h-5" />
                  Get Results
                </>
              )}
            </button>
          </form>
        </motion.div>

        {/* Marks Memo Display */}
        {results && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-2xl shadow-2xl border-2 border-gray-300 overflow-hidden max-w-full"
          >
            {/* Marks Memo Header */}
            <div className="bg-gradient-to-b from-blue-50 to-white p-4 md:p-6 border-b-2 border-blue-600 relative">
              {/* Watermark Logo */}
              <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none">
                <img
                  src="https://upload.wikimedia.org/wikipedia/en/5/54/Bullayya_College_logo.png"
                  alt="College Logo"
                  className="w-64 h-64 object-contain"
                  onError={(e) => {
                    e.target.style.display = 'none';
                  }}
                />
              </div>
              
              {/* College Logo and Name */}
              <div className="text-center relative z-10">
                <img
                  src="https://upload.wikimedia.org/wikipedia/en/5/54/Bullayya_College_logo.png"
                  alt="Dr. Lankapalli Bullayya College of Engineering"
                  className="w-16 h-16 md:w-20 md:h-20 mx-auto mb-2 object-contain"
                  onError={(e) => {
                    e.target.src = 'https://lbce.edu.in/static/images/jrlogo.png';
                  }}
                />
                <h1 className="text-xl md:text-2xl font-bold text-red-600 mb-1">
                  DR. LANKAPALLI BULLAYYA COLLEGE OF ENGINEERING
                </h1>
                <p className="text-sm md:text-base text-gray-700 mb-1">(AUTONOMOUS)</p>
                <p className="text-xs text-gray-600 mb-2">
                  Accredited by NAAC, An ISO 9001:2015, ISO 14001:2015 & ISO 50001:2018 Certified Institute
                </p>
                <div className="bg-blue-600 text-white px-4 py-2 rounded-lg inline-block mt-2">
                  <p className="font-bold text-sm md:text-base">
                    B.TECH {results.department} - SEMESTER {results.semester} EXAMINATIONS
                  </p>
                  <p className="text-xs mt-1">REGULAR AND SUPPLEMENTARY EXAMINATIONS HELD IN {new Date().getFullYear()}</p>
                </div>
              </div>
            </div>

            {/* Student Details */}
            <div className="p-4 md:p-6 bg-white border-b-2 border-gray-200">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-3 text-xs md:text-sm">
                <div>
                  <span className="font-bold text-gray-700">Regd. No:</span>
                  <span className="ml-2 text-gray-800">{results.regdNo}</span>
                </div>
                <div>
                  <span className="font-bold text-gray-700">ABC ID:</span>
                  <span className="ml-2 text-gray-800">{results.abcId}</span>
                </div>
                <div>
                  <span className="font-bold text-gray-700">Hall Ticket No:</span>
                  <span className="ml-2 text-gray-800">{results.hallTicketNumber}</span>
                </div>
                <div>
                  <span className="font-bold text-gray-700">Name:</span>
                  <span className="ml-2 text-gray-800 font-semibold text-sm md:text-base">{results.studentName}</span>
                </div>
                <div>
                  <span className="font-bold text-gray-700">Course:</span>
                  <span className="ml-2 text-gray-800">B.TECH</span>
                </div>
                <div>
                  <span className="font-bold text-gray-700">Semester:</span>
                  <span className="ml-2 text-gray-800">SEMESTER {results.semester}</span>
                </div>
              </div>
            </div>

            {/* Marks/Grades Section Header */}
            <div className="bg-blue-600 text-white px-4 md:px-6 py-2">
              <p className="font-bold text-sm md:text-base">The Following Marks/Grades Were Secured by the Student.</p>
            </div>

            {/* Marks Table */}
            <div className="p-4 md:p-6 bg-white relative">
              <div className="w-full">
                <table className="w-full border-collapse border border-gray-400 text-xs md:text-sm">
                  <thead>
                    <tr className="bg-blue-600 text-white">
                      <th className="border border-gray-400 px-2 py-2 text-center font-bold">S.No</th>
                      <th className="border border-gray-400 px-2 py-2 text-left font-bold">Paper Name</th>
                      <th className="border border-gray-400 px-2 py-2 text-center font-bold">Remarks</th>
                      <th className="border border-gray-400 px-2 py-2 text-center font-bold">Grade</th>
                      <th className="border border-gray-400 px-2 py-2 text-center font-bold">Points</th>
                    </tr>
                  </thead>
                  <tbody>
                    {results.subjects.map((subject, index) => (
                      <tr key={index} className="hover:bg-gray-50">
                        <td className="border border-gray-400 px-2 py-2 text-center font-semibold">{index + 1}</td>
                        <td className="border border-gray-400 px-2 py-2">
                          <div className="font-semibold text-gray-800 text-xs">{subject.code}</div>
                          <div className="text-xs text-gray-600 mt-0.5 leading-tight">{subject.name}</div>
                        </td>
                        <td className="border border-gray-400 px-2 py-2 text-center text-gray-500 text-xs">
                          {subject.remarks || '-'}
                        </td>
                        <td className="border border-gray-400 px-2 py-2 text-center">
                          <span className="font-bold text-sm text-gray-800">{subject.grade}</span>
                        </td>
                        <td className="border border-gray-400 px-2 py-2 text-center font-semibold text-gray-800 text-xs">
                          {subject.points}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              
              {/* Remarks */}
              <div className="mt-3 p-3 bg-gray-50 border border-gray-300 rounded-lg">
                <p className="font-bold text-sm md:text-base text-gray-800">
                  REMARKS : {results.status === 'PASS' ? 'PASSED' : 'FAILED'} IN SEMESTER {results.semester}
                </p>
              </div>
            </div>

            {/* Revaluation and GPA Details */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 p-4 md:p-6 bg-gray-50 border-t-2 border-gray-300">
              {/* Revaluation Details */}
              <div className="bg-white border border-gray-300 rounded-lg p-3 md:p-4">
                <h3 className="font-bold text-sm md:text-base text-gray-800 mb-2">Revaluation Details</h3>
                <table className="w-full border-collapse text-xs">
                  <thead>
                    <tr className="bg-gray-200">
                      <th className="border border-gray-400 px-2 py-1.5 text-left font-bold">Description</th>
                      <th className="border border-gray-400 px-2 py-1.5 text-center font-bold">Fee</th>
                      <th className="border border-gray-400 px-2 py-1.5 text-center font-bold">Last Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-400 px-2 py-1.5 text-xs">Apply Revaluation Through Online Only</td>
                      <td className="border border-gray-400 px-2 py-1.5 text-center text-xs font-semibold">Rs. 750/-</td>
                      <td className="border border-gray-400 px-2 py-1.5 text-center text-xs">
                        {new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0]}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* GPA Details */}
              <div className="bg-white border border-gray-300 rounded-lg p-3 md:p-4">
                <h3 className="font-bold text-sm md:text-base text-gray-800 mb-2">Grade Point Average (GPA) Details</h3>
                <table className="w-full border-collapse text-xs">
                  <thead>
                    <tr className="bg-gray-200">
                      <th className="border border-gray-400 px-2 py-1.5 text-left font-bold">Description</th>
                      <th className="border border-gray-400 px-2 py-1.5 text-center font-bold">GPA</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-400 px-2 py-1.5 text-xs font-semibold">Semester Grade Point Average</td>
                      <td className="border border-gray-400 px-2 py-1.5 text-center">
                        <span className="bg-green-100 text-green-800 font-bold text-sm md:text-base px-2 py-1 rounded inline-block">
                          {results.sgpa.toFixed(2)}
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-400 px-2 py-1.5 text-xs font-semibold">Cumulative Grade Point Average</td>
                      <td className="border border-gray-400 px-2 py-1.5 text-center">
                        <span className="bg-green-100 text-green-800 font-bold text-sm md:text-base px-2 py-1 rounded inline-block">
                          {results.cgpa.toFixed(2)}
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Notes Section */}
            <div className="p-3 md:p-4 bg-white border-t-2 border-gray-300">
              <div className="text-xs md:text-sm text-gray-600 space-y-1">
                <p className="font-semibold">• This is Electronically Generated Marks Memo.</p>
                <p className="font-semibold">• Minimum of 'P' Grade in Theory for Qualifying of Exam and Minimum of 'C' Grade in Practicals for Qualifying.</p>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default ResultsPage;

