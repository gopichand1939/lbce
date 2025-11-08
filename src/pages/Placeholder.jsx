import { motion } from 'framer-motion';
import { useLocation, Link } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';

const Placeholder = () => {
  const location = useLocation();
  const path = location.pathname;

  return (
    <div className="space-y-6">
      {/* Back to Home Button */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3 }}
      >
        <Link
          to="/dashboard"
          className="inline-flex items-center space-x-2 px-4 py-2 rounded-lg glass border border-gray-200/50 hover:bg-gray-100/50 transition-all duration-200 hover-glow text-gray-700 font-medium"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Dashboard</span>
        </Link>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="glass rounded-xl p-8 shadow-lg border border-gray-200/50 max-w-4xl mx-auto"
      >
        <h1 className="text-3xl font-bold gradient-text mb-4">
          {path.split('/').pop().replace(/-/g, ' ').replace(/\b\w/g, (l) => l.toUpperCase())}
        </h1>
        <p className="text-gray-600 mb-6">
          This page is under development. The route <code className="bg-gray-100 px-2 py-1 rounded">{path}</code> is configured and ready for implementation.
        </p>
        <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg p-6 border border-blue-200/50">
          <p className="text-sm text-gray-700">
            <strong>Module:</strong> {path}
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default Placeholder;

