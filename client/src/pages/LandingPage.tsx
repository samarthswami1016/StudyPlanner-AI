import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Calendar, Zap, Brain, CheckCircle, ArrowRight, Star } from 'lucide-react';

const LandingPage = () => {
    return (
        <div className="min-h-screen bg-slate-900 text-white overflow-hidden">
            {/* Navbar Overlay */}
            <nav className="absolute top-0 w-full z-20 px-6 py-6 flex justify-between items-center max-w-7xl mx-auto left-0 right-0">
                <div className="flex items-center space-x-2">
                    <div className="bg-gradient-to-tr from-indigo-500 to-purple-500 p-2 rounded-lg">
                        <Brain className="h-6 w-6 text-white" />
                    </div>
                    <span className="text-2xl font-bold tracking-tight">ExamAI</span>
                </div>
                <div className="hidden md:flex items-center space-x-8">
                    <a href="#features" className="text-slate-300 hover:text-white transition-colors">Features</a>
                    <a href="#how-it-works" className="text-slate-300 hover:text-white transition-colors">How it works</a>
                    <a href="#documentation" className="text-slate-300 hover:text-white transition-colors">Documentation</a>
                </div>
                <div className="flex items-center space-x-4">
                    <Link to="/login" className="text-slate-300 hover:text-white font-medium transition-colors">Log in</Link>
                    <Link to="/signup" className="bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2.5 rounded-full font-medium transition-all transform hover:scale-105 shadow-lg shadow-indigo-500/25">
                        Get Started
                    </Link>
                </div>
            </nav>

            {/* Hero Section */}
            <div className="relative pt-32 pb-20 sm:pt-40 sm:pb-24 overflow-hidden">
                {/* Background Blobs */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
                    <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/30 rounded-full blur-3xl mix-blend-screen animate-pulse"></div>
                    <div className="absolute top-40 right-10 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl mix-blend-screen"></div>
                    <div className="absolute -bottom-20 left-1/3 w-80 h-80 bg-pink-500/20 rounded-full blur-3xl mix-blend-screen"></div>
                </div>

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
                    <div className="inline-flex items-center px-4 py-2 rounded-full bg-indigo-900/30 border border-indigo-500/30 text-indigo-300 text-sm font-medium mb-8 backdrop-blur-sm">
                        <Star className="h-4 w-4 mr-2 text-yellow-400 fill-yellow-400" />
                        <span>AI-Powered Study Planning Revolution</span>
                    </div>

                    <h1 className="text-5xl sm:text-7xl font-extrabold tracking-tight mb-8 leading-tight">
                        Master Your Exams with <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">
                            Intelligent Planning
                        </span>
                    </h1>

                    <p className="mt-4 max-w-2xl mx-auto text-xl text-slate-300 mb-10">
                        Stop guessing what to study. Our AI analyzes your syllabus and previous year questions to create the perfect personalized study roadmap for you.
                    </p>

                    <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
                        <Link to="/signup" className="w-full sm:w-auto px-8 py-4 bg-white text-indigo-900 rounded-full font-bold text-lg hover:bg-indigo-50 transition-all transform hover:scale-105 shadow-xl flex items-center justify-center">
                            Start Studying Smarter
                            <ArrowRight className="ml-2 h-5 w-5" />
                        </Link>
                        <a href="#demo" className="w-full sm:w-auto px-8 py-4 bg-slate-800/50 hover:bg-slate-800 border border-slate-700 text-white rounded-full font-bold text-lg backdrop-blur-sm transition-all flex items-center justify-center">
                            Watch Demo
                            <div className="ml-3 w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
                                <div className="w-0 h-0 border-t-4 border-t-transparent border-l-6 border-l-white border-b-4 border-b-transparent ml-1"></div>
                            </div>
                        </a>
                    </div>

                    {/* Stats/Social Proof */}
                    <div className="mt-16 pt-8 border-t border-slate-800/50 grid grid-cols-2 md:grid-cols-4 gap-8">
                        <div>
                            <p className="text-3xl font-bold text-white">10k+</p>
                            <p className="text-slate-400 text-sm">Students Helped</p>
                        </div>
                        <div>
                            <p className="text-3xl font-bold text-white">95%</p>
                            <p className="text-slate-400 text-sm">Pass Rate</p>
                        </div>
                        <div>
                            <p className="text-3xl font-bold text-white">500+</p>
                            <p className="text-slate-400 text-sm">Universities</p>
                        </div>
                        <div>
                            <p className="text-3xl font-bold text-white">24/7</p>
                            <p className="text-slate-400 text-sm">AI Support</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* How It Works Section */}
            <div id="how-it-works" className="py-24 bg-slate-800 border-t border-slate-700 relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">How StudyPlanner AI Works</h2>
                        <p className="text-slate-400 max-w-3xl mx-auto">Transform your study materials into intelligent, personalized study plans using our AI-powered system in just 4 simple steps.</p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
                        <div className="space-y-8">
                            <div className="flex items-start space-x-4">
                                <div className="bg-indigo-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">1</div>
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-2">Upload Your Documents</h3>
                                    <p className="text-slate-400">Upload your syllabus PDF and previous year question papers. Our AI extracts and analyzes the content automatically.</p>
                                </div>
                            </div>
                            <div className="flex items-start space-x-4">
                                <div className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">2</div>
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-2">AI Analysis & Mapping</h3>
                                    <p className="text-slate-400">Our AI maps PYQ topics to syllabus content, calculates topic frequency, and determines priority scores for optimal planning.</p>
                                </div>
                            </div>
                            <div className="flex items-start space-x-4">
                                <div className="bg-pink-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">3</div>
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-2">Personalized Plan Generation</h3>
                                    <p className="text-slate-400">Set your exam date and study hours. Get a day-by-day schedule with time allocation based on topic importance and difficulty.</p>
                                </div>
                            </div>
                            <div className="flex items-start space-x-4">
                                <div className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">4</div>
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-2">Study & Track Progress</h3>
                                    <p className="text-slate-400">Follow your plan, use AI explanations for difficult topics, and track progress. The system adapts based on your completion rate.</p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-slate-900 rounded-2xl p-8 border border-slate-700">
                            <h4 className="text-lg font-bold text-white mb-4">Smart Study Modes</h4>
                            <div className="space-y-4">
                                <div className="bg-slate-800 rounded-lg p-4">
                                    <h5 className="font-semibold text-green-400 mb-2">Regular Mode (30+ days)</h5>
                                    <p className="text-slate-400 text-sm">Comprehensive coverage with deep understanding, balanced time allocation, and regular revision cycles.</p>
                                </div>
                                <div className="bg-slate-800 rounded-lg p-4">
                                    <h5 className="font-semibold text-orange-400 mb-2">Crash Mode (&lt;15 days)</h5>
                                    <p className="text-slate-400 text-sm">Strategic topic selection focusing only on high-frequency PYQ topics with formula-based quick learning.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-gradient-to-r from-indigo-900/50 to-purple-900/50 rounded-2xl p-8 border border-indigo-500/30">
                        <h3 className="text-2xl font-bold text-white mb-4 text-center">AI-Powered Intelligence</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="text-center">
                                <div className="bg-indigo-600/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                                    <Brain className="h-8 w-8 text-indigo-400" />
                                </div>
                                <h4 className="font-semibold text-white mb-2">Pattern Recognition</h4>
                                <p className="text-slate-400 text-sm">Identifies recurring themes and high-frequency topics from years of question papers.</p>
                            </div>
                            <div className="text-center">
                                <div className="bg-purple-600/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                                    <Zap className="h-8 w-8 text-purple-400" />
                                </div>
                                <h4 className="font-semibold text-white mb-2">Smart Prioritization</h4>
                                <p className="text-slate-400 text-sm">Ranks topics by importance using PYQ frequency, syllabus weight, and difficulty analysis.</p>
                            </div>
                            <div className="text-center">
                                <div className="bg-pink-600/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                                    <Calendar className="h-8 w-8 text-pink-400" />
                                </div>
                                <h4 className="font-semibold text-white mb-2">Adaptive Scheduling</h4>
                                <p className="text-slate-400 text-sm">Adjusts your study plan based on progress, remaining time, and learning pace.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Feature Grid */}
            <div id="features" className="py-24 bg-slate-900 border-t border-slate-800 relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Everything you need to ace exams</h2>
                        <p className="text-slate-400 max-w-2xl mx-auto">Our platform combines multiple tools into one seamless workflow designed for efficiency.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <FeatureCard
                            icon={<BookOpen className="h-8 w-8 text-pink-400" />}
                            title="Syllabus Analysis"
                            description="Upload your syllabus PDF and let our AI break it down into manageable, structured topics automatically."
                        />
                        <FeatureCard
                            icon={<Zap className="h-8 w-8 text-yellow-400" />}
                            title="PYQ Intelligence"
                            description="We analyze years of past questions to highlight what's most likely to appear on your next exam."
                        />
                        <FeatureCard
                            icon={<Calendar className="h-8 w-8 text-indigo-400" />}
                            title="Smart Scheduler"
                            description="Get a day-by-day study plan that adapts to your learning speed and exam deadline."
                        />
                        <FeatureCard
                            icon={<Brain className="h-8 w-8 text-purple-400" />}
                            title="Concept Explainer"
                            description="Stuck on a topic? Our AI explains complex concepts in simple terms with 3-layer learning approach."
                        />
                        <FeatureCard
                            icon={<CheckCircle className="h-8 w-8 text-green-400" />}
                            title="Progress Tracking"
                            description="Visualize your readiness with detailed analytics and confidence scores for every topic."
                        />
                        <FeatureCard
                            icon={<Star className="h-8 w-8 text-orange-400" />}
                            title="Crash Course Mode"
                            description="Running late? Switch to Crash Mode for a high-yield, strategic study plan focusing on must-know topics."
                        />
                    </div>
                </div>
            </div>

            {/* Documentation Section */}
            <div id="documentation" className="py-24 bg-slate-800 border-t border-slate-700">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Complete Documentation</h2>
                        <p className="text-slate-400 max-w-2xl mx-auto">Comprehensive guides and technical documentation to help you get the most out of StudyPlanner AI.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="bg-slate-900 rounded-xl p-6 border border-slate-700 hover:border-indigo-500/50 transition-colors">
                            <div className="bg-indigo-600/20 rounded-lg w-12 h-12 flex items-center justify-center mb-4">
                                <BookOpen className="h-6 w-6 text-indigo-400" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">User Guide</h3>
                            <p className="text-slate-400 mb-4">Step-by-step instructions on how to use all features effectively, from document upload to study plan execution.</p>
                            <a href="/docs/user-guide" className="text-indigo-400 hover:text-indigo-300 font-medium">Read Guide →</a>
                        </div>

                        <div className="bg-slate-900 rounded-xl p-6 border border-slate-700 hover:border-purple-500/50 transition-colors">
                            <div className="bg-purple-600/20 rounded-lg w-12 h-12 flex items-center justify-center mb-4">
                                <Brain className="h-6 w-6 text-purple-400" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">AI Features</h3>
                            <p className="text-slate-400 mb-4">Detailed explanation of how our AI analyzes documents, generates plans, and provides intelligent recommendations.</p>
                            <a href="/docs/ai-features" className="text-purple-400 hover:text-purple-300 font-medium">Learn More →</a>
                        </div>

                        <div className="bg-slate-900 rounded-xl p-6 border border-slate-700 hover:border-green-500/50 transition-colors">
                            <div className="bg-green-600/20 rounded-lg w-12 h-12 flex items-center justify-center mb-4">
                                <CheckCircle className="h-6 w-6 text-green-400" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">Best Practices</h3>
                            <p className="text-slate-400 mb-4">Tips and strategies for optimal study planning, document preparation, and maximizing your exam success.</p>
                            <a href="/docs/best-practices" className="text-green-400 hover:text-green-300 font-medium">View Tips →</a>
                        </div>
                    </div>

                    <div className="mt-12 bg-gradient-to-r from-slate-900 to-slate-800 rounded-2xl p-8 border border-slate-700">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                            <div>
                                <h3 className="text-2xl font-bold text-white mb-4">Technical Documentation</h3>
                                <p className="text-slate-400 mb-6">Access complete technical specifications, API documentation, and system architecture details.</p>
                                <div className="space-y-3">
                                    <div className="flex items-center space-x-3">
                                        <CheckCircle className="h-5 w-5 text-green-400" />
                                        <span className="text-slate-300">System Requirements & Setup</span>
                                    </div>
                                    <div className="flex items-center space-x-3">
                                        <CheckCircle className="h-5 w-5 text-green-400" />
                                        <span className="text-slate-300">API Endpoints & Integration</span>
                                    </div>
                                    <div className="flex items-center space-x-3">
                                        <CheckCircle className="h-5 w-5 text-green-400" />
                                        <span className="text-slate-300">Architecture & Design Patterns</span>
                                    </div>
                                </div>
                            </div>
                            <div className="space-y-4">
                                <a href="/docs/requirements" className="block bg-slate-800 hover:bg-slate-700 rounded-lg p-4 border border-slate-600 transition-colors">
                                    <h4 className="font-semibold text-white mb-1">Requirements Document</h4>
                                    <p className="text-slate-400 text-sm">Complete functional and technical requirements specification</p>
                                </a>
                                <a href="/docs/design" className="block bg-slate-800 hover:bg-slate-700 rounded-lg p-4 border border-slate-600 transition-colors">
                                    <h4 className="font-semibold text-white mb-1">Design Document</h4>
                                    <p className="text-slate-400 text-sm">System architecture, UI/UX design, and technical implementation</p>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <footer className="bg-slate-950 py-12 border-t border-slate-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
                    <div className="flex items-center space-x-2 mb-4 md:mb-0">
                        <div className="bg-indigo-600 p-1.5 rounded-lg">
                            <Brain className="h-5 w-5 text-white" />
                        </div>
                        <span className="text-xl font-bold text-white">ExamAI</span>
                    </div>
                    <div className="text-slate-500 text-sm">
                        © 2024 ExamAI Inc. All rights reserved.
                    </div>
                </div>
            </footer>
        </div>
    );
};

const FeatureCard = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => {
    return (
        <div className="p-8 rounded-2xl bg-slate-800/50 border border-slate-700/50 hover:bg-slate-800 transition-colors group">
            <div className="mb-4 bg-slate-900/50 w-16 h-16 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                {icon}
            </div>
            <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
            <p className="text-slate-400 leading-relaxed">
                {description}
            </p>
        </div>
    );
}

export default LandingPage;
