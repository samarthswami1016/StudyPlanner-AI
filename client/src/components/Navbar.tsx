import React from 'react';
import { BookOpen, Upload, Calendar, Zap, Brain, BarChart3, GraduationCap, LogOut, User } from 'lucide-react';
import { useNavigate, Link } from 'react-router-dom';

type ActiveTab = 'dashboard' | 'syllabus' | 'pyq' | 'planner' | 'crash' | 'concepts';

interface NavbarProps {
  activeTab: ActiveTab;
  onTabChange: (tab: ActiveTab) => void;
}

const Navbar: React.FC<NavbarProps> = ({ activeTab, onTabChange }) => {
  const navigate = useNavigate();
  const userInfoString = localStorage.getItem('userInfo');
  const userInfo = userInfoString ? JSON.parse(userInfoString) : null;

  const handleLogout = () => {
    localStorage.removeItem('userInfo');
    navigate('/login');
  };

  const navItems = [
    { id: 'dashboard' as ActiveTab, label: 'Dashboard', icon: BarChart3 },
    { id: 'syllabus' as ActiveTab, label: 'Syllabus', icon: Upload },
    { id: 'pyq' as ActiveTab, label: 'PYQ Analysis', icon: BookOpen },
    { id: 'planner' as ActiveTab, label: 'Study Plan', icon: Calendar },
    { id: 'crash' as ActiveTab, label: 'Crash Mode', icon: Zap },
    { id: 'concepts' as ActiveTab, label: 'Concepts', icon: Brain },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <GraduationCap className="h-8 w-8 text-blue-600" />
            <span className="text-xl font-bold text-gray-900">ExamAI</span>
          </div>

          <div className="flex space-x-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;

              return (
                <button
                  key={item.id}
                  onClick={() => onTabChange(item.id)}
                  className={`flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium transition-colors ${isActive
                      ? 'bg-blue-100 text-blue-700'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                    }`}
                >
                  <Icon className="h-4 w-4" />
                  <span className="hidden sm:inline">{item.label}</span>
                </button>
              );
            })}
          </div>

          <div className="flex items-center space-x-4">
            {userInfo ? (
              <div className="flex items-center space-x-3">
                <div className="flex items-center text-sm font-medium text-gray-700">
                  <User className="h-4 w-4 mr-1 text-gray-500" />
                  <span>{userInfo.username}</span>
                </div>
                <button
                  onClick={handleLogout}
                  className="flex items-center space-x-1 text-sm text-red-600 hover:text-red-700 font-medium"
                >
                  <LogOut className="h-4 w-4" />
                  <span>Logout</span>
                </button>
              </div>
            ) : (
              <div className="flex items-center space-x-2">
                <Link to="/login" className="text-sm font-medium text-indigo-600 hover:text-indigo-500">Log in</Link>
                <Link to="/signup" className="text-sm font-medium bg-indigo-600 text-white px-3 py-2 rounded-md hover:bg-indigo-700">Sign up</Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;