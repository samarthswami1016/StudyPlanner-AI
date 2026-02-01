import React, { useEffect, useState } from 'react';
import { Upload, BookOpen, Calendar, Zap, TrendingUp, Clock, Target, CheckCircle, Activity } from 'lucide-react';
import axios from 'axios';

type ActiveTab = 'dashboard' | 'syllabus' | 'pyq' | 'planner' | 'crash' | 'concepts';

interface DashboardProps {
  onTabChange: (tab: ActiveTab) => void;
}

const Dashboard: React.FC<DashboardProps> = ({ onTabChange }) => {
  const [stats, setStats] = useState({
    subjectsAnalyzed: 0,
    plansCreated: 0,
    daysUntilExam: 0,
    completionRate: '0%'
  });
  const [recentActivity, setRecentActivity] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        const userInfo = JSON.parse(localStorage.getItem('userInfo') || '{}');
        const config = {
          headers: {
            Authorization: `Bearer ${userInfo.token}`,
          },
        };

        const { data } = await axios.get('http://localhost:5000/api/dashboard', config);

        setStats(data.stats);
        setRecentActivity(data.recentActivity);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching dashboard data:", error);
        setLoading(false);
      }
    };

    fetchDashboardData();
  }, []);

  const quickStats = [
    { label: 'Subjects Analyzed', value: stats.subjectsAnalyzed.toString(), icon: BookOpen, color: 'text-blue-600' },
    { label: 'Study Plans Created', value: stats.plansCreated.toString(), icon: Calendar, color: 'text-green-600' },
    { label: 'Days Until Next Exam', value: stats.daysUntilExam.toString(), icon: Clock, color: 'text-orange-600' }, // Hardcoded for now in backend
    { label: 'Completion Rate', value: stats.completionRate, icon: Target, color: 'text-purple-600' },
  ];

  const quickActions = [
    {
      title: 'Upload Syllabus',
      description: 'Extract topics from your syllabus PDF',
      icon: Upload,
      action: () => onTabChange('syllabus'),
      color: 'bg-blue-500 hover:bg-blue-600',
    },
    {
      title: 'Analyze PYQs',
      description: 'Identify high-frequency exam topics',
      icon: TrendingUp,
      action: () => onTabChange('pyq'),
      color: 'bg-green-500 hover:bg-green-600',
    },
    {
      title: 'Generate Plan',
      description: 'Create time-bound study schedule',
      icon: Calendar,
      action: () => onTabChange('planner'),
      color: 'bg-purple-500 hover:bg-purple-600',
    },
    {
      title: 'Crash Mode',
      description: 'Emergency prep for urgent exams',
      icon: Zap,
      action: () => onTabChange('crash'),
      color: 'bg-red-500 hover:bg-red-600',
    },
  ];

  if (loading) {
    return (
      <div className="flex justify-center items-center h-full min-h-[50vh]">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Welcome Section */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Engineering Exam Preparation</h1>
        <p className="text-gray-600">Decide WHAT to study, WHEN to study, and HOW DEEP to study for your exams.</p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {quickStats.map((stat) => {
          const Icon = stat.icon;
          return (
            <div key={stat.label} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 transition-transform hover:shadow-md hover:-translate-y-1 duration-300">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">{stat.label}</p>
                  <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                </div>
                <Icon className={`h-8 w-8 ${stat.color}`} />
              </div>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Quick Actions */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Quick Actions</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {quickActions.map((action) => {
              const Icon = action.icon;
              return (
                <button
                  key={action.title}
                  onClick={action.action}
                  className={`p-4 rounded-lg text-white text-left transition-all duration-300 transform hover:scale-[1.02] shadow-sm hover:shadow-md ${action.color}`}
                >
                  <Icon className="h-6 w-6 mb-2" />
                  <h3 className="font-semibold mb-1">{action.title}</h3>
                  <p className="text-sm opacity-90">{action.description}</p>
                </button>
              );
            })}
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Recent Activity</h2>
          <div className="space-y-4">
            {recentActivity.length === 0 ? (
              <p className="text-gray-500 text-center py-4">No recent activity found. Start studying!</p>
            ) : (
              recentActivity.map((activity, index) => (
                <div key={index} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg border border-gray-100">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900">{activity.action}</p>
                    <p className="text-xs text-gray-500">{new Date(activity.createdAt).toLocaleDateString()} at {new Date(activity.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</p>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>

      {/* System Overview */}
      <div className="mt-8 bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">How ExamAI Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center group p-4 rounded-xl hover:bg-gray-50 transition-colors">
            <div className="bg-blue-100 rounded-full h-12 w-12 flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
              <Upload className="h-6 w-6 text-blue-600" />
            </div>
            <h3 className="font-semibold mb-2">1. Upload Content</h3>
            <p className="text-sm text-gray-600">Upload syllabus PDFs and previous year question papers</p>
          </div>
          <div className="text-center group p-4 rounded-xl hover:bg-gray-50 transition-colors">
            <div className="bg-green-100 rounded-full h-12 w-12 flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
              <TrendingUp className="h-6 w-6 text-green-600" />
            </div>
            <h3 className="font-semibold mb-2">2. AI Analysis</h3>
            <p className="text-sm text-gray-600">AI extracts topics and analyzes question patterns</p>
          </div>
          <div className="text-center group p-4 rounded-xl hover:bg-gray-50 transition-colors">
            <div className="bg-purple-100 rounded-full h-12 w-12 flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
              <Calendar className="h-6 w-6 text-purple-600" />
            </div>
            <h3 className="font-semibold mb-2">3. Get Plans</h3>
            <p className="text-sm text-gray-600">Receive prioritized study plans and actionable schedules</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;