import React, { useState } from 'react';
import { Brain, Code, FileText, Search, BookOpen } from 'lucide-react';

interface ConceptExplanation {
  concept: string;
  simple: string;
  codeExample: string;
  examAnswer: string;
}

const ConceptExplainer: React.FC = () => {
  const [searchTopic, setSearchTopic] = useState('');
  const [selectedConcept, setSelectedConcept] = useState<ConceptExplanation | null>(null);

  const mockConcepts: ConceptExplanation[] = [
    {
      concept: "Binary Search Tree",
      simple: "A tree where left child is smaller than parent, right child is larger. Allows fast search, insert, delete operations in O(log n) average time.",
      codeExample: `class BSTNode {
    int data;
    BSTNode left, right;
    
    BSTNode(int data) { this.data = data; }
}

// Insert operation
BSTNode insert(BSTNode root, int data) {
    if (root == null) return new BSTNode(data);
    if (data < root.data) root.left = insert(root.left, data);
    else root.right = insert(root.right, data);
    return root;
}`,
      examAnswer: "Binary Search Tree (BST) is a hierarchical data structure where each node has at most two children. Property: Left subtree contains values less than root, right subtree contains values greater than root. Operations: Insert O(log n), Search O(log n), Delete O(log n) average case. Applications: Database indexing, expression parsing, priority queues."
    },
    {
      concept: "Merge Sort",
      simple: "Divide array into halves, sort each half recursively, then merge sorted halves. Uses divide-and-conquer approach with guaranteed O(n log n) time complexity.",
      codeExample: `void mergeSort(int arr[], int left, int right) {
    if (left < right) {
        int mid = left + (right - left) / 2;
        mergeSort(arr, left, mid);
        mergeSort(arr, mid + 1, right);
        merge(arr, left, mid, right);
    }
}

void merge(int arr[], int l, int m, int r) {
    // Create temp arrays and merge them back
}`,
      examAnswer: "Merge Sort is a stable, comparison-based sorting algorithm using divide-and-conquer. Time Complexity: O(n log n) in all cases. Space Complexity: O(n) for temporary arrays. Steps: 1) Divide array into two halves 2) Recursively sort both halves 3) Merge sorted halves. Advantages: Stable, predictable performance. Disadvantages: Requires extra space."
    }
  ];

  const popularTopics = [
    "Binary Search Tree",
    "Merge Sort",
    "Graph Traversal",
    "Linked Lists",
    "Hashing",
    "Dynamic Programming"
  ];

  const handleSearch = () => {
    const found = mockConcepts.find(concept => 
      concept.concept.toLowerCase().includes(searchTopic.toLowerCase())
    );
    if (found) {
      setSelectedConcept(found);
    }
  };

  const selectTopic = (topic: string) => {
    const found = mockConcepts.find(concept => concept.concept === topic);
    if (found) {
      setSelectedConcept(found);
      setSearchTopic(topic);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Concept Explainer</h1>
        <p className="text-gray-600">3-layer learning: Simple explanation → Code example → Exam-ready answer.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Search & Topics */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Search Concepts</h2>
          
          <div className="space-y-4">
            <div className="flex space-x-2">
              <input
                type="text"
                placeholder="Enter concept name..."
                value={searchTopic}
                onChange={(e) => setSearchTopic(e.target.value)}
                className="flex-1 p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
              />
              <button
                onClick={handleSearch}
                className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
              >
                <Search className="h-4 w-4" />
              </button>
            </div>

            <div>
              <h3 className="font-medium text-gray-900 mb-2">Popular Topics</h3>
              <div className="space-y-2">
                {popularTopics.map((topic, index) => (
                  <button
                    key={index}
                    onClick={() => selectTopic(topic)}
                    className={`w-full text-left p-2 rounded-md text-sm transition-colors ${
                      selectedConcept?.concept === topic
                        ? 'bg-blue-100 text-blue-800 border border-blue-200'
                        : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    {topic}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Explanation */}
        <div className="lg:col-span-2 space-y-6">
          {selectedConcept ? (
            <>
              {/* Header */}
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">{selectedConcept.concept}</h2>
                <div className="flex items-center space-x-4 text-sm text-gray-500">
                  <span className="flex items-center space-x-1">
                    <Brain className="h-4 w-4" />
                    <span>Simple</span>
                  </span>
                  <span className="flex items-center space-x-1">
                    <Code className="h-4 w-4" />
                    <span>Code</span>
                  </span>
                  <span className="flex items-center space-x-1">
                    <FileText className="h-4 w-4" />
                    <span>Exam Answer</span>
                  </span>
                </div>
              </div>

              {/* Layer 1: Simple Explanation */}
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <div className="flex items-center space-x-2 mb-3">
                  <Brain className="h-5 w-5 text-blue-600" />
                  <h3 className="text-lg font-semibold text-gray-900">1. Simple Concept</h3>
                </div>
                <p className="text-gray-700 leading-relaxed">{selectedConcept.simple}</p>
              </div>

              {/* Layer 2: Code Example */}
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <div className="flex items-center space-x-2 mb-3">
                  <Code className="h-5 w-5 text-green-600" />
                  <h3 className="text-lg font-semibold text-gray-900">2. Code Example</h3>
                </div>
                <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
                  <pre className="text-green-400 text-sm">
                    <code>{selectedConcept.codeExample}</code>
                  </pre>
                </div>
              </div>

              {/* Layer 3: Exam Answer */}
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <div className="flex items-center space-x-2 mb-3">
                  <FileText className="h-5 w-5 text-purple-600" />
                  <h3 className="text-lg font-semibold text-gray-900">3. Exam-Ready Answer</h3>
                </div>
                <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                  <p className="text-purple-900 leading-relaxed">{selectedConcept.examAnswer}</p>
                </div>
                <div className="mt-3 text-xs text-gray-500">
                  ✓ Structured for maximum marks • ✓ Includes key terms • ✓ Technical accuracy
                </div>
              </div>
            </>
          ) : (
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-12 text-center">
              <BookOpen className="mx-auto h-12 w-12 text-gray-300 mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">Select a Concept</h3>
              <p className="text-gray-500">Search or choose from popular topics to see the 3-layer explanation</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ConceptExplainer;