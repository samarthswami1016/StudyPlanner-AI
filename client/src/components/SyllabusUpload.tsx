import React, { useState } from 'react';
import { Upload, FileText, CheckCircle, AlertCircle, Loader } from 'lucide-react';

interface ExtractedTopic {
  unit: string;
  topics: string[];
}

const SyllabusUpload: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [extractedTopics, setExtractedTopics] = useState<ExtractedTopic[] | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
      setError(null);
    }
  };

  const handleProcess = async () => {
    if (!file) return;

    setIsProcessing(true);
    setError(null);

    try {
      // Simulate API call to backend
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Mock extracted topics
      setExtractedTopics([
        {
          unit: "Unit 1: Introduction to Data Structures",
          topics: [
            "Arrays and their operations",
            "Linked Lists (Singly, Doubly, Circular)",
            "Stack operations and applications",
            "Queue operations and types"
          ]
        },
        {
          unit: "Unit 2: Trees and Graphs",
          topics: [
            "Binary trees and traversals",
            "Binary Search Trees (BST)",
            "AVL trees and rotations",
            "Graph representation and traversal"
          ]
        },
        {
          unit: "Unit 3: Sorting and Searching",
          topics: [
            "Bubble Sort, Selection Sort",
            "Merge Sort, Quick Sort",
            "Linear Search, Binary Search",
            "Hashing techniques"
          ]
        }
      ]);
    } catch (err) {
      setError('Failed to process the syllabus. Please try again.');
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Syllabus Analysis</h1>
        <p className="text-gray-600">Upload your syllabus PDF to extract structured topics and units.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Upload Section */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Upload Syllabus PDF</h2>
          
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-gray-400 transition-colors">
            <input
              type="file"
              accept=".pdf"
              onChange={handleFileUpload}
              className="hidden"
              id="syllabus-upload"
            />
            <label htmlFor="syllabus-upload" className="cursor-pointer">
              <Upload className="mx-auto h-12 w-12 text-gray-400 mb-4" />
              <p className="text-lg font-medium text-gray-900 mb-2">
                {file ? file.name : 'Choose syllabus PDF'}
              </p>
              <p className="text-gray-500">or drag and drop your file here</p>
            </label>
          </div>

          {file && (
            <div className="mt-4 p-4 bg-blue-50 rounded-lg border border-blue-200">
              <div className="flex items-center space-x-3">
                <FileText className="h-5 w-5 text-blue-600" />
                <div>
                  <p className="font-medium text-blue-900">{file.name}</p>
                  <p className="text-sm text-blue-600">
                    {(file.size / 1024 / 1024).toFixed(2)} MB
                  </p>
                </div>
              </div>
            </div>
          )}

          {error && (
            <div className="mt-4 p-4 bg-red-50 rounded-lg border border-red-200">
              <div className="flex items-center space-x-2">
                <AlertCircle className="h-5 w-5 text-red-600" />
                <p className="text-red-700">{error}</p>
              </div>
            </div>
          )}

          <button
            onClick={handleProcess}
            disabled={!file || isProcessing}
            className="w-full mt-4 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
          >
            {isProcessing ? (
              <>
                <Loader className="h-4 w-4 animate-spin" />
                <span>Processing...</span>
              </>
            ) : (
              <>
                <Upload className="h-4 w-4" />
                <span>Extract Topics</span>
              </>
            )}
          </button>
        </div>

        {/* Results Section */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Extracted Topics</h2>
          
          {extractedTopics ? (
            <div className="space-y-6">
              {extractedTopics.map((unit, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-4">
                  <h3 className="font-semibold text-lg text-gray-900 mb-3 flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span>{unit.unit}</span>
                  </h3>
                  <ul className="space-y-2">
                    {unit.topics.map((topic, topicIndex) => (
                      <li key={topicIndex} className="flex items-start space-x-2">
                        <span className="text-gray-400 mt-1">•</span>
                        <span className="text-gray-700">{topic}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
              
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <p className="text-green-800 font-medium">✓ Syllabus analysis complete!</p>
                <p className="text-green-700 text-sm mt-1">
                  {extractedTopics.reduce((total, unit) => total + unit.topics.length, 0)} topics extracted from {extractedTopics.length} units.
                </p>
              </div>
            </div>
          ) : (
            <div className="text-center py-8">
              <FileText className="mx-auto h-12 w-12 text-gray-300 mb-4" />
              <p className="text-gray-500">Upload a syllabus PDF to see extracted topics</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SyllabusUpload;