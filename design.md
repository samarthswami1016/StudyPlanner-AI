# StudyPlanner AI - Design Document

## 1. System Architecture Overview

### 1.1 High-Level Architecture
```
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   Frontend      │    │   Backend       │    │  External APIs  │
│   (React)       │◄──►│   (Node.js)     │◄──►│   (OpenAI)      │
│                 │    │                 │    │                 │
│ - Dashboard     │    │ - API Routes    │    │ - GPT Models    │
│ - File Upload   │    │ - AI Services   │    │ - Text Analysis │
│ - Study Plans   │    │ - PDF Parser    │    │                 │
│ - Progress      │    │ - Database      │    │                 │
└─────────────────┘    └─────────────────┘    └─────────────────┘
```

### 1.2 Technology Stack
- **Frontend**: React 18 + TypeScript + Vite + Tailwind CSS
- **Backend**: Node.js + Express.js + Sequelize ORM + SQLite
- **Authentication**: JWT tokens + bcryptjs for password hashing
- **File Processing**: Multer (planned for PDF uploads)
- **State Management**: React Hooks + Context API (planned)
- **Routing**: React Router v6
- **Icons**: Lucide React
- **Build Tools**: Vite for frontend, npm for package management
- **Development**: Nodemon for backend hot reload

## 2. Frontend Design

### 2.1 Component Architecture
```
client/src/
├── components/
│   ├── Dashboard.tsx           # Main control panel
│   ├── SyllabusUpload.tsx      # PDF upload interface
│   ├── PYQAnalysis.tsx         # Question paper analysis (renamed from PYQUpload)
│   ├── StudyPlanner.tsx        # Plan creation interface (renamed from StudyPlanGenerator)
│   ├── ConceptExplainer.tsx    # AI explanation tool
│   ├── CrashMode.tsx           # Crash mode interface
│   └── Navbar.tsx              # Navigation component
├── pages/
│   ├── LandingPage.tsx         # Marketing homepage
│   ├── Login.tsx               # Login page
│   └── Signup.tsx              # Signup page
├── App.tsx                     # Main application component
├── main.tsx                    # Application entry point (Vite)
├── axiosConfig.ts              # API client configuration
├── index.css                   # Global styles
└── vite-env.d.ts               # Vite environment types

Note: The following directories from the original design are not yet implemented:
├── hooks/ (planned)
│   ├── useFileUpload.ts        # File upload logic
│   ├── useStudyPlan.ts         # Study plan management
│   └── useProgress.ts          # Progress tracking
├── services/ (planned)
│   ├── api.ts                  # API client
│   ├── fileService.ts          # File operations
│   └── studyPlanService.ts     # Plan operations
├── types/ (planned)
│   ├── syllabus.ts             # Syllabus data types
│   ├── pyq.ts                  # PYQ data types
│   └── studyPlan.ts            # Study plan types
└── utils/ (planned)
    ├── dateUtils.ts            # Date calculations
    ├── formatters.ts           # Data formatting
    └── validators.ts           # Input validation
```

### 2.2 User Interface Design

#### 2.2.1 Landing Page Layout
```
┌─────────────────────────────────────────────────────────────┐
│ Navigation Bar                                              │
│ [Logo] [Features] [How it Works]           [Login] [Signup] │
├─────────────────────────────────────────────────────────────┤
│                    Hero Section                             │
│         "Master Your Exams with Intelligent Planning"      │
│                [Get Started] [Watch Demo]                   │
├─────────────────────────────────────────────────────────────┤
│                  How It Works Section                       │
│  [Step 1: Upload] [Step 2: Analyze] [Step 3: Study]       │
├─────────────────────────────────────────────────────────────┤
│                   Features Grid                             │
│  [Syllabus Analysis] [PYQ Intelligence] [Smart Scheduler]  │
│  [Concept Explainer] [Progress Tracking] [Crash Mode]     │
├─────────────────────────────────────────────────────────────┤
│                     Footer                                  │
└─────────────────────────────────────────────────────────────┘
```

#### 2.2.2 Dashboard Layout
```
┌─────────────────────────────────────────────────────────────┐
│ Header: [Logo] [Navigation] [Profile] [Settings]           │
├─────────────────────────────────────────────────────────────┤
│ Sidebar          │              Main Content               │
│ - Dashboard      │  ┌─────────────────────────────────────┐ │
│ - Upload Files   │  │         Current Study Plan          │ │
│ - Study Plans    │  │  [Progress Bar] [Next Topic]        │ │
│ - Progress       │  └─────────────────────────────────────┘ │
│ - Concepts       │  ┌─────────────────────────────────────┐ │
│ - Settings       │  │         Quick Actions               │ │
│                  │  │  [Upload] [Generate] [Explain]      │ │
│                  │  └─────────────────────────────────────┘ │
│                  │  ┌─────────────────────────────────────┐ │
│                  │  │         Analytics Overview          │ │
│                  │  │  [Charts] [Stats] [Recommendations] │ │
│                  │  └─────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────┘
```

### 2.3 State Management Design

#### 2.3.1 Global State Structure
```typescript
interface AppState {
  user: {
    profile: UserProfile;
    preferences: UserPreferences;
    isAuthenticated: boolean;
  };
  documents: {
    syllabus: SyllabusData | null;
    pyq: PYQData | null;
    uploadStatus: UploadStatus;
  };
  studyPlan: {
    current: StudyPlan | null;
    history: StudyPlan[];
    progress: ProgressData;
  };
  ui: {
    loading: boolean;
    error: string | null;
    activeTab: string;
  };
}
```

#### 2.3.2 Context Providers
```typescript
// App.tsx structure
<AuthProvider>
  <DocumentProvider>
    <StudyPlanProvider>
      <UIProvider>
        <Router>
          <Routes>
            {/* Application routes */}
          </Routes>
        </Router>
      </UIProvider>
    </StudyPlanProvider>
  </DocumentProvider>
</AuthProvider>
```

## 3. Backend Design

### 3.1 API Architecture
```
server/
├── index.js                    # Main server file
├── routes/
│   ├── authRoutes.js          # Authentication endpoints
│   └── dashboardRoutes.js     # Dashboard endpoints
├── controllers/
│   ├── authController.js      # Authentication logic
│   └── dashboardController.js # Dashboard logic
├── middleware/
│   ├── authMiddleware.js      # Authentication middleware
│   └── errorMiddleware.js     # Error handling middleware
├── models/
│   ├── User.js                # User data model
│   └── Activity.js            # Activity tracking model
├── config/
│   └── db.js                  # Database configuration
├── .env                       # Environment variables
├── database.sqlite            # SQLite database file
├── view_db.js                 # Database viewer utility
└── package.json               # Dependencies and scripts

Note: The following directories from the original design are not yet implemented:
├── services/ (planned)
│   ├── syllabusAnalyzer.js    # PDF text extraction & structuring
│   ├── pyqAnalyzer.js         # Question pattern recognition
│   ├── studyPlanGenerator.js  # AI-powered plan creation
│   ├── conceptExplainer.js    # Multi-layer explanations
│   └── progressTracker.js     # Progress calculations
├── utils/ (planned)
│   ├── pdfParser.js           # PDF processing utilities
│   ├── aiClient.js            # OpenAI API client
│   ├── dateUtils.js           # Date calculations
│   └── validators.js          # Data validation
└── database/ (planned)
    ├── init.sql               # Database schema
    └── migrations/            # Database migrations
```

### 3.2 API Endpoints Design

#### 3.2.1 Authentication Endpoints (Currently Implemented)
```
POST /api/auth/register
- Accepts: JSON (email, password, name)
- Returns: User data and JWT token
- Processing: Validation → Password hashing → Database storage

POST /api/auth/login
- Accepts: JSON (email, password)
- Returns: User data and JWT token
- Processing: Credential validation → JWT generation

GET /api/auth/profile
- Accepts: JWT token in headers
- Returns: User profile data
- Processing: Token validation → User data retrieval
```

#### 3.2.2 Dashboard Endpoints (Currently Implemented)
```
GET /api/dashboard/activities
- Accepts: JWT token in headers
- Returns: User activity data
- Processing: Authentication → Activity retrieval

POST /api/dashboard/activity
- Accepts: JSON (activity data)
- Returns: Created activity
- Processing: Validation → Database storage
```

#### 3.2.3 Planned StudyPlanner Endpoints (Not Yet Implemented)
```
POST /api/syllabus/upload
- Accepts: multipart/form-data (PDF file)
- Returns: Structured syllabus data
- Processing: PDF → Text → AI Analysis → JSON

POST /api/pyq/upload
- Accepts: multipart/form-data (PDF file)
- Returns: Analyzed PYQ data with frequency mapping
- Processing: PDF → Questions → Topic Mapping → Frequency Analysis

POST /api/study-plan/generate
- Accepts: JSON (syllabus, PYQ, preferences)
- Returns: Complete study plan with daily schedule
- Processing: AI analysis → Time allocation → Schedule generation

POST /api/concepts/explain
- Accepts: JSON (topic, subject, context)
- Returns: 3-layer explanation with examples
- Processing: OpenAI API → Structured explanation
```

### 3.3 Database Design

#### 3.3.1 Current SQLite Schema (Implemented)
```sql
-- Users table (implemented)
CREATE TABLE users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    name VARCHAR(255) NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- Activities table (implemented)
CREATE TABLE activities (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id INTEGER NOT NULL,
    type VARCHAR(100) NOT NULL,
    description TEXT,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);
```

#### 3.3.2 Planned StudyPlanner Schema (Not Yet Implemented)
```sql
-- Documents table (planned)
CREATE TABLE documents (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id INTEGER REFERENCES users(id),
    type VARCHAR(50) NOT NULL, -- 'syllabus' or 'pyq'
    filename VARCHAR(255) NOT NULL,
    file_path VARCHAR(500) NOT NULL,
    processed_data JSON,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- Study plans table (planned)
CREATE TABLE study_plans (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id INTEGER REFERENCES users(id),
    syllabus_id INTEGER REFERENCES documents(id),
    pyq_id INTEGER REFERENCES documents(id),
    plan_data JSON NOT NULL,
    mode VARCHAR(50) NOT NULL, -- 'regular' or 'crash'
    exam_date DATE,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- Progress tracking table (planned)
CREATE TABLE progress (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id INTEGER REFERENCES users(id),
    study_plan_id INTEGER REFERENCES study_plans(id),
    topic_name VARCHAR(255) NOT NULL,
    status VARCHAR(50) NOT NULL, -- 'not_started', 'in_progress', 'completed'
    time_spent INTEGER DEFAULT 0, -- minutes
    confidence_score INTEGER DEFAULT 0, -- 1-10
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
);
```

## 4. AI Processing Design

### 4.1 Document Analysis Pipeline
```
PDF Upload → Text Extraction → Content Cleaning → AI Analysis → Structured Output

1. Text Extraction (pdf-parse)
   - Extract raw text from PDF
   - Preserve formatting and structure
   - Handle multi-column layouts

2. Content Cleaning
   - Remove headers/footers
   - Fix encoding issues
   - Normalize whitespace

3. AI Analysis (OpenAI GPT-4)
   - Identify units and topics
   - Extract learning objectives
   - Determine topic relationships

4. Structured Output
   - JSON format with hierarchy
   - Metadata and confidence scores
   - Error handling and validation
```

### 4.2 Study Plan Generation Algorithm
```
Input: Syllabus + PYQ + User Preferences
↓
Topic Priority Calculation:
- PYQ frequency weight (40%)
- Syllabus importance weight (30%)
- Difficulty assessment (20%)
- User preference weight (10%)
↓
Time Allocation:
- Available study days
- Daily study hours
- Topic complexity factors
- Revision time requirements
↓
Schedule Optimization:
- Spaced repetition principles
- Difficulty progression
- Break and rest periods
- Exam proximity adjustments
↓
Output: Daily Study Schedule
```

### 4.3 Crash Mode Logic
```
Crash Mode Activation (< 15 days to exam)
↓
Topic Classification:
- MUST DO: PYQ frequency ≥ 3, High syllabus weight
- OPTIONAL: PYQ frequency = 2, Medium importance
- SKIP: PYQ frequency ≤ 1, Low importance
↓
Time Compression:
- Focus 80% time on MUST DO topics
- Reduce theory depth by 70%
- Increase practice/formula focus
- Eliminate low-priority content
↓
Emergency Schedule:
- Extended daily hours (8-12 hours)
- Intensive revision cycles
- Quick reference materials
- Exam strategy tips
```

## 5. User Experience Design

### 5.1 User Journey Flow
```
Landing Page → Sign Up → Onboarding → Document Upload → Plan Generation → Study Execution → Progress Tracking

1. Discovery (Landing Page)
   - Value proposition presentation
   - Feature demonstrations
   - Social proof and testimonials

2. Onboarding
   - Account creation
   - Preference setting
   - Tutorial walkthrough

3. Document Processing
   - Drag-and-drop upload
   - Processing progress indicators
   - Error handling and retry

4. Plan Customization
   - Exam date selection
   - Study hours configuration
   - Mode selection (Regular/Crash)

5. Study Execution
   - Daily schedule display
   - Topic explanations
   - Progress updates

6. Continuous Improvement
   - Progress analytics
   - Plan adjustments
   - Performance insights
```

### 5.2 Responsive Design Strategy
```
Mobile First Approach:
- Base styles for mobile (320px+)
- Progressive enhancement for tablets (768px+)
- Desktop optimizations (1024px+)
- Large screen adaptations (1440px+)

Breakpoint Strategy:
- sm: 640px (Large phones)
- md: 768px (Tablets)
- lg: 1024px (Laptops)
- xl: 1280px (Desktops)
- 2xl: 1536px (Large screens)
```

## 6. Current Implementation Status

### 6.1 Completed Features ✅
- **Authentication System**: Complete user registration, login, and JWT-based authentication
- **Database Setup**: SQLite database with Sequelize ORM, User and Activity models
- **Frontend Structure**: React + TypeScript + Vite setup with Tailwind CSS
- **Landing Page**: Complete marketing page with features and documentation sections
- **Navigation**: Responsive navbar and routing setup
- **Basic Components**: Dashboard, login/signup forms, and core UI components

### 6.2 In Progress Features 🚧
- **StudyPlanner Components**: Basic component structure exists but needs AI integration
- **File Upload System**: Components exist but need backend PDF processing
- **Database Models**: Need to add Document, StudyPlan, and Progress models

### 6.3 Planned Features 📋
- **AI Integration**: OpenAI API integration for document analysis and plan generation
- **PDF Processing**: PDF-parse library integration for syllabus and PYQ analysis
- **Study Plan Generation**: AI-powered planning algorithms
- **Progress Tracking**: Comprehensive progress monitoring and analytics
- **Concept Explanation**: Multi-layer AI explanations for difficult topics

### 6.4 Technical Debt & Improvements Needed
- **API Endpoints**: Need to implement StudyPlanner-specific routes
- **Error Handling**: Improve error boundaries and user feedback
- **Type Safety**: Add comprehensive TypeScript types for all data structures
- **Testing**: Add unit and integration tests
- **Performance**: Optimize bundle size and implement code splitting
- Session management
- Password reset functionality

Authorization Levels:
- Public: Landing page, documentation
- Authenticated: Dashboard, file upload
- Premium: Advanced features (future)
- Admin: System management (future)
```

## 7. Performance Design

### 7.1 Frontend Optimization
```
Code Splitting:
- Route-based splitting
- Component lazy loading
- Dynamic imports for heavy components

Asset Optimization:
- Image compression and WebP format
- CSS minification and purging
- JavaScript bundling and tree shaking
- CDN integration for static assets

Caching Strategy:
- Browser caching for static assets
- Service worker for offline capability
- API response caching
- Local storage for user preferences
```

### 7.2 Backend Optimization
```
API Performance:
- Response compression (gzip)
- Database query optimization
- Connection pooling
- Caching layer (Redis future)

File Processing:
- Asynchronous PDF processing
- Queue system for heavy operations
- Progress tracking for long operations
- Error recovery mechanisms

Scalability Considerations:
- Horizontal scaling capability
- Load balancing preparation
- Database optimization
- CDN integration readiness
```

## 8. Error Handling Design

### 8.1 Frontend Error Handling
```
Error Boundary Implementation:
- Component-level error catching
- Graceful degradation
- User-friendly error messages
- Error reporting to monitoring service

Validation Strategy:
- Client-side form validation
- Real-time feedback
- Server-side validation backup
- Clear error messaging
```

### 8.2 Backend Error Handling
```
Error Categories:
- Validation errors (400)
- Authentication errors (401)
- Authorization errors (403)
- Not found errors (404)
- Server errors (500)

Error Response Format:
{
  "error": true,
  "message": "User-friendly message",
  "code": "ERROR_CODE",
  "details": "Technical details (dev mode only)"
}
```

## 9. Testing Strategy

### 9.1 Frontend Testing
```
Unit Testing:
- Component testing with React Testing Library
- Hook testing with custom test utilities
- Utility function testing with Jest
- 90%+ code coverage target

Integration Testing:
- API integration testing
- User flow testing
- Cross-browser compatibility testing
- Responsive design testing
```

### 9.2 Backend Testing
```
API Testing:
- Endpoint testing with Supertest
- Database integration testing
- File upload testing
- Error handling testing

Performance Testing:
- Load testing with concurrent users
- File processing performance testing
- Memory usage monitoring
- Response time optimization
```

## 10. Deployment Design

### 10.1 Development Environment
```
Current Setup:
- Frontend: Vite + React + TypeScript
- Backend: Node.js + Express + SQLite
- Package Management: npm
- Environment Configuration: .env files
- Development Tools: ESLint, Tailwind CSS

Local Development Commands:
- Frontend: cd client && npm run dev
- Backend: cd server && npm run dev (with nodemon)
- Database: SQLite with Sequelize ORM

Build Tools:
- Frontend: Vite for fast development and optimized builds
- Backend: Node.js native with ES modules support
- Styling: Tailwind CSS with PostCSS
- Type Safety: TypeScript for frontend
```

### 10.2 Production Deployment
```
Build Process:
- Frontend build optimization
- Backend transpilation
- Environment-specific configurations
- Asset optimization and compression

Deployment Strategy:
- Docker containerization (future)
- Environment variable management
- Database migration scripts
- Health check endpoints

Monitoring:
- Application performance monitoring
- Error tracking and alerting
- User analytics integration
- System resource monitoring
```