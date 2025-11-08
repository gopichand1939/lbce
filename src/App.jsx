import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import Placeholder from './pages/Placeholder';
import Login from './pages/Login';
import PublicHome from './pages/PublicHome';
import ProtectedRoute from './components/ProtectedRoute';
import NotificationsPage from './pages/Services/Notifications/NotificationsPage';
import ExaminationsPage from './pages/Services/Examinations/ExaminationsPage';
import ResultsPage from './pages/Services/Results/ResultsPage';

function AppRoutes() {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<PublicHome />} />
      <Route path="/login" element={<Login />} />
      
      {/* Services Routes */}
      <Route path="/services/notifications" element={<NotificationsPage />} />
      <Route path="/services/examinations" element={<ExaminationsPage />} />
      <Route path="/services/results" element={<ResultsPage />} />
      
      {/* Protected Routes - Only accessible after login */}
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Layout />
          </ProtectedRoute>
        }
      >
        <Route index element={<Dashboard />} />
          
          {/* Department Management */}
          <Route path="department/master" element={<Placeholder />} />
          <Route path="department/faculty" element={<Placeholder />} />
          <Route path="department/coordinators" element={<Placeholder />} />
          <Route path="department/subject-allocation" element={<Placeholder />} />
          
          {/* Course Management */}
          <Route path="course/program-setup" element={<Placeholder />} />
          <Route path="course/catalog" element={<Placeholder />} />
          <Route path="course/syllabus" element={<Placeholder />} />
          <Route path="course/curriculum" element={<Placeholder />} />
          
          {/* Mid/Sessional Exams */}
          <Route path="exams/mid/schedule" element={<Placeholder />} />
          <Route path="exams/mid/marks" element={<Placeholder />} />
          <Route path="exams/mid/results" element={<Placeholder />} />
          <Route path="exams/mid/revaluation" element={<Placeholder />} />
          
          {/* Semester End Exams */}
          <Route path="exams/semester/notifications" element={<Placeholder />} />
          <Route path="exams/semester/hall-ticket" element={<Placeholder />} />
          <Route path="exams/semester/seating" element={<Placeholder />} />
          <Route path="exams/semester/attendance" element={<Placeholder />} />
          <Route path="exams/semester/results" element={<Placeholder />} />
          <Route path="exams/semester/supplementary" element={<Placeholder />} />
          
          {/* Result Analytics */}
          <Route path="analytics/department" element={<Placeholder />} />
          <Route path="analytics/course" element={<Placeholder />} />
          <Route path="analytics/student" element={<Placeholder />} />
          <Route path="analytics/comparison" element={<Placeholder />} />
          
          {/* Notifications */}
          <Route path="notifications/exam" element={<Placeholder />} />
          <Route path="notifications/revaluation" element={<Placeholder />} />
          <Route path="notifications/timetable" element={<Placeholder />} />
          <Route path="notifications/calendar" element={<Placeholder />} />
          <Route path="notifications/push" element={<Placeholder />} />
          
          {/* Student Profiles */}
          <Route path="students/profile" element={<Placeholder />} />
          <Route path="students/attendance" element={<Placeholder />} />
          <Route path="students/marks" element={<Placeholder />} />
          <Route path="students/grades" element={<Placeholder />} />
          <Route path="students/backlog" element={<Placeholder />} />
          
          {/* Faculty Portal */}
          <Route path="faculty/classes" element={<Placeholder />} />
          <Route path="faculty/attendance" element={<Placeholder />} />
          <Route path="faculty/marks" element={<Placeholder />} />
          <Route path="faculty/materials" element={<Placeholder />} />
          <Route path="faculty/performance" element={<Placeholder />} />
          
          {/* Exam Cell */}
          <Route path="exam-cell/timetable" element={<Placeholder />} />
          <Route path="exam-cell/question-paper" element={<Placeholder />} />
          <Route path="exam-cell/results" element={<Placeholder />} />
          <Route path="exam-cell/supervision" element={<Placeholder />} />
          <Route path="exam-cell/transcript" element={<Placeholder />} />
          <Route path="exam-cell/revaluation" element={<Placeholder />} />
          
          {/* Admin Dashboard */}
          <Route path="admin/overview" element={<Placeholder />} />
          <Route path="admin/approvals" element={<Placeholder />} />
          <Route path="admin/notifications" element={<Placeholder />} />
          <Route path="admin/reports" element={<Placeholder />} />
          <Route path="admin/website" element={<Placeholder />} />
          
          {/* Student Portal */}
          <Route path="portal/notifications" element={<Placeholder />} />
          <Route path="portal/results" element={<Placeholder />} />
          <Route path="portal/timetable" element={<Placeholder />} />
          <Route path="portal/revaluation" element={<Placeholder />} />
          <Route path="portal/hall-ticket" element={<Placeholder />} />
          <Route path="portal/feedback" element={<Placeholder />} />
          <Route path="portal/grievances" element={<Placeholder />} />
          
          {/* Reports */}
          <Route path="reports/department" element={<Placeholder />} />
          <Route path="reports/subject-difficulty" element={<Placeholder />} />
          <Route path="reports/cgpa" element={<Placeholder />} />
          <Route path="reports/attendance-performance" element={<Placeholder />} />
      </Route>
      
      {/* Redirect root to public home if not authenticated */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

function App() {
  return (
    <AuthProvider>
      <Router>
        <AppRoutes />
      </Router>
    </AuthProvider>
  );
}

export default App;

