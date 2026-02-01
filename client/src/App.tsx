import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation, useNavigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import SyllabusUpload from './components/SyllabusUpload';
import PYQAnalysis from './components/PYQAnalysis';
import StudyPlanner from './components/StudyPlanner';
import CrashMode from './components/CrashMode';
import ConceptExplainer from './components/ConceptExplainer';
import Login from './pages/Login';
import Signup from './pages/Signup';
import LandingPage from './pages/LandingPage';
import setupAxiosInterceptors from './axiosConfig';

type ActiveTab = 'dashboard' | 'syllabus' | 'pyq' | 'planner' | 'crash' | 'concepts';

// Protected Route Wrapper
const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const userInfo = localStorage.getItem('userInfo');
  const location = useLocation();

  if (!userInfo) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return <>{children}</>;
};

// Component to handle global axio interceptor which needs router context
const AxiosInterceptorSetup = () => {
  const navigate = useNavigate();
  useEffect(() => {
    setupAxiosInterceptors(navigate);
  }, [navigate]);
  return null;
}

function MainLayout() {
  const [activeTab, setActiveTab] = useState<ActiveTab>('dashboard');

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <Dashboard onTabChange={setActiveTab} />;
      case 'syllabus':
        return <SyllabusUpload />;
      case 'pyq':
        return <PYQAnalysis />;
      case 'planner':
        return <StudyPlanner />;
      case 'crash':
        return <CrashMode />;
      case 'concepts':
        return <ConceptExplainer />;
      default:
        return <Dashboard onTabChange={setActiveTab} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar activeTab={activeTab} onTabChange={setActiveTab} />
      <main className="pt-16">
        {renderContent()}
      </main>
    </div>
  );
}

function App() {
  return (
    <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <AxiosInterceptorSetup />
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* Protected Routes - All main app functionality uses MainLayout */}
        <Route
          path="/app/*"
          element={
            <ProtectedRoute>
              <MainLayout />
            </ProtectedRoute>
          }
        />

        {/* Catch all - Redirect to Landing */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;