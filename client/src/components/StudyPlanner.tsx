import React, { useState } from 'react';
import { Calendar, Clock, Target, CheckCircle, AlertCircle } from 'lucide-react';

interface StudyPlan {
  day: number;
  date: string;
  tasks: {
    topic: string;
    hours: number;
    priority: 'High' | 'Medium' | 'Low';
    type: 'Study' | 'Revision' | 'Practice' | 'Mock Test';
  }[];
}

const StudyPlanner: React.FC = () => {
  const [examDate, setExamDate] = useState('');
  const [studyHours, setStudyHours] = useState(4);
  const [planGenerated, setPlanGenerated] = useState(false);

  const mockStudyPlan: StudyPlan[] = [
    {
      day: 1,
      date: "2024-01-15",
      tasks: [
        { topic: "Binary Search Trees - Basic Operations", hours: 2.5, priority: "High", type: "Study" },
        { topic: "Graph Traversal - DFS Implementation", hours: 1.5, priority: "High", type: "Practice" }
      ]
    },
    {
      day: 2,
      date: "2024-01-16", 
      tasks: [
        { topic: "Sorting Algorithms - Merge Sort", hours: 2, priority: "High", type: "Study" },
        { topic: "BST Practice Problems", hours: 1, priority: "High", type: "Practice" },
        { topic: "Linked Lists - Revision", hours: 1, priority: "Medium", type: "Revision" }
      ]
    },
    {
      day: 3,
      date: "2024-01-17",
      tasks: [
        { topic: "Graph Traversal - BFS Implementation", hours: 2, priority: "High", type: "Study" },
        { topic: "Quick Sort Analysis", hours: 1.5, priority: "High", type: "Study" },
        { topic: "Previous Concepts Review", hours: 0.5, priority: "Medium", type: "Revision" }
      ]
    },
    {
      day: 4,
      date: "2024-01-18",
      tasks: [
        { topic: "Hashing Techniques", hours: 2, priority: "Medium", type: "Study" },
        { topic: "Mock Test - Trees & Graphs", hours: 2, priority: "High", type: "Mock Test" }
      ]
    },
    {
      day: 5,
      date: "2024-01-19",
      tasks: [
        { topic: "Final Revision - High Priority Topics", hours: 3, priority: "High", type: "Revision" },
        { topic: "Quick Practice - Previous Year Questions", hours: 1, priority: "High", type: "Practice" }
      ]
    }
  ];

  const generatePlan = () => {
    if (examDate) {
      setPlanGenerated(true);
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'High': return 'bg-red-100 text-red-800 border-red-200';
      case 'Medium': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'Low': return 'bg-green-100 text-green-800 border-green-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'Study': return <Target className="h-4 w-4" />;
      case 'Practice': return <CheckCircle className="h-4 w-4" />;
      case 'Revision': return <Clock className="h-4 w-4" />;
      case 'Mock Test': return <AlertCircle className="h-4 w-4" />;
      default: return <Target className="h-4 w-4" />;
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Study Plan Generator</h1>
        <p className="text-gray-600">Create a time-bound, prioritized study schedule based on your exam date.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Configuration Panel */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Plan Configuration</h2>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Exam Date
              </label>
              <input
                type="date"
                value={examDate}
                onChange={(e) => setExamDate(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Daily Study Hours: {studyHours}
              </label>
              <input
                type="range"
                min="2"
                max="8"
                step="0.5"
                value={studyHours}
                onChange={(e) => setStudyHours(Number(e.target.value))}
                className="w-full"
              />
              <div className="flex justify-between text-xs text-gray-500 mt-1">
                <span>2 hrs</span>
                <span>8 hrs</span>
              </div>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
              <p className="text-blue-800 text-sm">
                <strong>Study Mode:</strong> Comprehensive
              </p>
              <p className="text-blue-700 text-xs mt-1">
                Balanced approach covering all priority levels
              </p>
            </div>

            <button
              onClick={generatePlan}
              disabled={!examDate}
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
            >
              <Calendar className="h-4 w-4" />
              <span>Generate Study Plan</span>
            </button>
          </div>
        </div>

        {/* Study Plan */}
        <div className="lg:col-span-2 bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Your Study Schedule</h2>
          
          {planGenerated ? (
            <div className="space-y-6">
              {mockStudyPlan.map((day) => (
                <div key={day.day} className="border border-gray-200 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-semibold text-lg text-gray-900">
                      Day {day.day} - {new Date(day.date).toLocaleDateString('en-US', { 
                        weekday: 'long', 
                        month: 'short', 
                        day: 'numeric' 
                      })}
                    </h3>
                    <span className="text-sm text-gray-500">
                      {day.tasks.reduce((total, task) => total + task.hours, 0)} hours total
                    </span>
                  </div>
                  
                  <div className="space-y-3">
                    {day.tasks.map((task, index) => (
                      <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-1">
                            {getTypeIcon(task.type)}
                            <span className="font-medium text-gray-900">{task.topic}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <span className={`text-xs px-2 py-1 rounded-full border ${getPriorityColor(task.priority)}`}>
                              {task.priority}
                            </span>
                            <span className="text-xs text-gray-500">{task.type}</span>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="font-semibold text-gray-900">{task.hours}h</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
              
              {/* Summary */}
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <h3 className="font-semibold text-green-800 mb-2">Plan Summary</h3>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-green-700">Total Study Days: <strong>5</strong></p>
                    <p className="text-green-700">Average Daily Hours: <strong>4.0</strong></p>
                  </div>
                  <div>
                    <p className="text-green-700">High Priority Topics: <strong>60%</strong></p>
                    <p className="text-green-700">Revision Sessions: <strong>2</strong></p>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="text-center py-12">
              <Calendar className="mx-auto h-12 w-12 text-gray-300 mb-4" />
              <p className="text-gray-500">Configure your exam date to generate a study plan</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default StudyPlanner;