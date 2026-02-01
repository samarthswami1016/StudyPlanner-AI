import React, { useState } from 'react';
import { Zap, Clock, Target, AlertTriangle, CheckCircle } from 'lucide-react';

interface CrashPlan {
  category: 'MUST DO' | 'OPTIONAL' | 'SKIP IF SHORT ON TIME';
  topics: string[];
  timeAllocation: string;
  description: string;
}

const CrashMode: React.FC = () => {
  const [daysLeft, setDaysLeft] = useState(3);
  const [subject, setSubject] = useState('Data Structures');
  const [planGenerated, setPlanGenerated] = useState(false);

  const mockCrashPlan: CrashPlan[] = [
    {
      category: 'MUST DO',
      topics: [
        'Binary Search Trees - Insert, Delete, Search',
        'Graph Traversal - DFS and BFS only',
        'Sorting - Merge Sort and Quick Sort',
        'Previous Year Questions (2022-2023)'
      ],
      timeAllocation: '70% of time',
      description: 'These topics have highest exam probability. Focus here first.'
    },
    {
      category: 'OPTIONAL',
      topics: [
        'Linked List operations',
        'Hashing concepts',
        'Time complexity analysis'
      ],
      timeAllocation: '20% of time',
      description: 'Study only if you have extra time after completing MUST DO topics.'
    },
    {
      category: 'SKIP IF SHORT ON TIME',
      topics: [
        'AVL Tree rotations',
        'Advanced graph algorithms',
        'Complex data structures'
      ],
      timeAllocation: '10% of time',
      description: 'Low exam probability. Skip completely if time is limited.'
    }
  ];

  const dailyPlan = [
    {
      day: 1,
      focus: 'TREES & GRAPHS',
      tasks: [
        '2 hrs: BST operations (insert, delete, search)',
        '2 hrs: DFS and BFS implementation',
        '1 hr: Practice previous year questions'
      ]
    },
    {
      day: 2,
      focus: 'SORTING & REVISION',
      tasks: [
        '2 hrs: Merge sort and quick sort',
        '1.5 hrs: Tree concepts revision',
        '1.5 hrs: Mock test attempt'
      ]
    },
    {
      day: 3,
      focus: 'FINAL PREP',
      tasks: [
        '2 hrs: Previous year questions (all topics)',
        '1 hr: Quick revision of all MUST DO topics',
        '2 hrs: Final mock test'
      ]
    }
  ];

  const generateCrashPlan = () => {
    setPlanGenerated(true);
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'MUST DO': return 'bg-red-500';
      case 'OPTIONAL': return 'bg-yellow-500';
      case 'SKIP IF SHORT ON TIME': return 'bg-gray-500';
      default: return 'bg-gray-500';
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'MUST DO': return <AlertTriangle className="h-5 w-5 text-white" />;
      case 'OPTIONAL': return <Target className="h-5 w-5 text-white" />;
      case 'SKIP IF SHORT ON TIME': return <Clock className="h-5 w-5 text-white" />;
      default: return <Clock className="h-5 w-5 text-white" />;
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <div className="flex items-center space-x-3 mb-2">
          <Zap className="h-8 w-8 text-red-600" />
          <h1 className="text-3xl font-bold text-gray-900">Crash Mode</h1>
        </div>
        <p className="text-gray-600">Emergency study plan focused on passing the exam with minimal time.</p>
        <div className="bg-red-50 border border-red-200 rounded-lg p-3 mt-4">
          <p className="text-red-800 text-sm font-medium">⚠️ Brutally honest approach - No motivational fluff, only what you NEED to pass.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Configuration */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Emergency Settings</h2>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Subject
              </label>
              <select
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500"
              >
                <option>Data Structures</option>
                <option>Database Management</option>
                <option>Computer Networks</option>
                <option>Operating Systems</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Days Left: {daysLeft}
              </label>
              <input
                type="range"
                min="1"
                max="7"
                value={daysLeft}
                onChange={(e) => setDaysLeft(Number(e.target.value))}
                className="w-full"
              />
              <div className="flex justify-between text-xs text-gray-500 mt-1">
                <span>1 day</span>
                <span>1 week</span>
              </div>
            </div>

            <div className="bg-red-50 border border-red-200 rounded-lg p-3">
              <p className="text-red-800 text-sm font-bold">Goal: PASS THE EXAM</p>
              <p className="text-red-700 text-xs mt-1">
                Not aiming for excellence, just survival
              </p>
            </div>

            <button
              onClick={generateCrashPlan}
              className="w-full bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700 flex items-center justify-center space-x-2"
            >
              <Zap className="h-4 w-4" />
              <span>Generate Crash Plan</span>
            </button>
          </div>
        </div>

        {/* Crash Plan */}
        <div className="lg:col-span-2 space-y-6">
          {planGenerated && (
            <>
              {/* Priority Breakdown */}
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Topic Priority Breakdown</h2>
                
                <div className="space-y-4">
                  {mockCrashPlan.map((section, index) => (
                    <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                      <div className={`${getCategoryColor(section.category)} p-3 flex items-center space-x-2`}>
                        {getCategoryIcon(section.category)}
                        <span className="text-white font-bold">{section.category}</span>
                        <span className="text-white text-sm ml-auto">{section.timeAllocation}</span>
                      </div>
                      
                      <div className="p-4">
                        <p className="text-sm text-gray-600 mb-3">{section.description}</p>
                        <ul className="space-y-2">
                          {section.topics.map((topic, topicIndex) => (
                            <li key={topicIndex} className="flex items-start space-x-2">
                              <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                              <span className="text-sm text-gray-900">{topic}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Daily Breakdown */}
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Daily Crash Schedule</h2>
                
                <div className="space-y-4">
                  {dailyPlan.slice(0, daysLeft).map((day) => (
                    <div key={day.day} className="border border-gray-200 rounded-lg p-4">
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="font-bold text-lg text-gray-900">Day {day.day}</h3>
                        <span className="bg-red-100 text-red-800 text-sm font-medium px-2 py-1 rounded">
                          {day.focus}
                        </span>
                      </div>
                      
                      <ul className="space-y-2">
                        {day.tasks.map((task, index) => (
                          <li key={index} className="flex items-start space-x-2">
                            <Clock className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-gray-700">{task}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {/* Warning */}
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <div className="flex items-center space-x-2 mb-2">
                  <AlertTriangle className="h-5 w-5 text-yellow-600" />
                  <h3 className="font-semibold text-yellow-800">Reality Check</h3>
                </div>
                <ul className="text-yellow-700 text-sm space-y-1">
                  <li>• This is survival mode - you'll only learn basics</li>
                  <li>• Success = 40-50% marks (passing grade)</li>
                  <li>• NO distractions - stick to the plan strictly</li>
                  <li>• Sleep 6+ hours - tired brain retains nothing</li>
                </ul>
              </div>
            </>
          )}

          {!planGenerated && (
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-12 text-center">
              <Zap className="mx-auto h-12 w-12 text-gray-300 mb-4" />
              <p className="text-gray-500">Configure your emergency settings to generate a crash plan</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CrashMode;