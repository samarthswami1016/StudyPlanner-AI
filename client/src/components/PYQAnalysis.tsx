import React, { useState } from 'react';
import { Upload, TrendingUp, Target, AlertTriangle } from 'lucide-react';

interface PYQTopic {
  topic: string;
  frequency: number;
  priority: 'High' | 'Medium' | 'Low';
  exampleQuestion: string;
  years: string[];
}

const PYQAnalysis: React.FC = () => {
  const [analysisComplete, setAnalysisComplete] = useState(false);
  
  const mockPYQData: PYQTopic[] = [
    {
      topic: "Binary Search Trees",
      frequency: 8,
      priority: "High",
      exampleQuestion: "Write an algorithm to insert and delete nodes in BST",
      years: ["2023", "2022", "2021", "2020"]
    },
    {
      topic: "Graph Traversal (DFS/BFS)",
      frequency: 7,
      priority: "High", 
      exampleQuestion: "Implement DFS and BFS for a given graph",
      years: ["2023", "2022", "2021"]
    },
    {
      topic: "Sorting Algorithms",
      frequency: 6,
      priority: "High",
      exampleQuestion: "Compare time complexity of merge sort vs quick sort",
      years: ["2023", "2022", "2020"]
    },
    {
      topic: "Linked List Operations",
      frequency: 5,
      priority: "Medium",
      exampleQuestion: "Reverse a singly linked list",
      years: ["2022", "2021"]
    },
    {
      topic: "Hashing Techniques",
      frequency: 3,
      priority: "Medium",
      exampleQuestion: "Explain collision resolution methods",
      years: ["2023", "2020"]
    },
    {
      topic: "AVL Tree Rotations",
      frequency: 2,
      priority: "Low",
      exampleQuestion: "Perform left rotation in AVL tree",
      years: ["2021"]
    }
  ];

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'High': return 'bg-red-100 text-red-800';
      case 'Medium': return 'bg-yellow-100 text-yellow-800';
      case 'Low': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const priorityStats = {
    High: mockPYQData.filter(item => item.priority === 'High').length,
    Medium: mockPYQData.filter(item => item.priority === 'Medium').length,
    Low: mockPYQData.filter(item => item.priority === 'Low').length,
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Previous Year Questions Analysis</h1>
        <p className="text-gray-600">Analyze PYQ patterns to identify high-frequency exam topics.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Upload & Controls */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Upload PYQs</h2>
          
          <div className="space-y-4">
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center">
              <Upload className="mx-auto h-8 w-8 text-gray-400 mb-2" />
              <p className="text-sm text-gray-600">Upload question papers (PDF)</p>
            </div>
            
            <button 
              onClick={() => setAnalysisComplete(true)}
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700"
            >
              Analyze Questions
            </button>
          </div>

          {analysisComplete && (
            <div className="mt-6 space-y-3">
              <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                <p className="text-green-800 font-medium text-sm">Analysis Complete!</p>
              </div>
              
              <div className="grid grid-cols-3 gap-2 text-center">
                <div className="bg-red-50 rounded p-2">
                  <p className="text-red-800 font-bold text-lg">{priorityStats.High}</p>
                  <p className="text-red-600 text-xs">High Priority</p>
                </div>
                <div className="bg-yellow-50 rounded p-2">
                  <p className="text-yellow-800 font-bold text-lg">{priorityStats.Medium}</p>
                  <p className="text-yellow-600 text-xs">Medium Priority</p>
                </div>
                <div className="bg-green-50 rounded p-2">
                  <p className="text-green-800 font-bold text-lg">{priorityStats.Low}</p>
                  <p className="text-green-600 text-xs">Low Priority</p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Analysis Results */}
        <div className="lg:col-span-2 bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Topic Frequency Analysis</h2>
          
          {analysisComplete ? (
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Topic
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Frequency
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Priority
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Example Question
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {mockPYQData.map((item, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          {item.priority === 'High' && <Target className="h-4 w-4 text-red-500 mr-2" />}
                          {item.priority === 'Medium' && <AlertTriangle className="h-4 w-4 text-yellow-500 mr-2" />}
                          {item.priority === 'Low' && <TrendingUp className="h-4 w-4 text-green-500 mr-2" />}
                          <span className="text-sm font-medium text-gray-900">{item.topic}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <span className="text-sm font-bold text-gray-900 mr-2">{item.frequency}</span>
                          <div className="w-16 bg-gray-200 rounded-full h-2">
                            <div 
                              className="bg-blue-600 h-2 rounded-full" 
                              style={{ width: `${(item.frequency / 8) * 100}%` }}
                            ></div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${getPriorityColor(item.priority)}`}>
                          {item.priority}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <p className="text-sm text-gray-600 max-w-xs truncate" title={item.exampleQuestion}>
                          {item.exampleQuestion}
                        </p>
                        <p className="text-xs text-gray-400 mt-1">
                          Years: {item.years.join(', ')}
                        </p>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="text-center py-12">
              <TrendingUp className="mx-auto h-12 w-12 text-gray-300 mb-4" />
              <p className="text-gray-500">Upload PYQs to see frequency analysis</p>
            </div>
          )}
        </div>
      </div>

      {/* Key Insights */}
      {analysisComplete && (
        <div className="mt-8 bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Key Insights</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
              <h3 className="font-semibold text-red-800 mb-2">MUST DO Topics</h3>
              <ul className="text-sm text-red-700 space-y-1">
                {mockPYQData.filter(item => item.priority === 'High').map((item, index) => (
                  <li key={index}>• {item.topic}</li>
                ))}
              </ul>
            </div>
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
              <h3 className="font-semibold text-yellow-800 mb-2">SHOULD DO Topics</h3>
              <ul className="text-sm text-yellow-700 space-y-1">
                {mockPYQData.filter(item => item.priority === 'Medium').map((item, index) => (
                  <li key={index}>• {item.topic}</li>
                ))}
              </ul>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <h3 className="font-semibold text-green-800 mb-2">OPTIONAL Topics</h3>
              <ul className="text-sm text-green-700 space-y-1">
                {mockPYQData.filter(item => item.priority === 'Low').map((item, index) => (
                  <li key={index}>• {item.topic}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PYQAnalysis;