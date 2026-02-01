# StudyPlanner AI

An intelligent study planning system that analyzes your syllabus and previous year questions (PYQ) to create personalized study plans using AI.

## 🎯 How It Works

StudyPlanner AI uses artificial intelligence to transform your study materials into actionable study plans. Here's the complete workflow:

### 1. Document Analysis Phase
- **Syllabus Upload**: Upload your course syllabus PDF
- **AI Processing**: The system extracts and structures topics, units, and learning objectives
- **PYQ Analysis**: Upload previous year question papers for pattern recognition
- **Topic Mapping**: AI maps PYQ topics to syllabus content to identify high-frequency areas

### 2. Intelligent Planning Phase
- **Priority Calculation**: Topics are ranked based on PYQ frequency and syllabus weightage
- **Time Allocation**: Smart distribution of study hours based on topic difficulty and importance
- **Schedule Generation**: Creates day-by-day study schedules with optimal topic sequencing
- **Adaptive Planning**: Adjusts plans based on available time and exam proximity

### 3. Study Modes

#### Regular Study Mode
- **Timeline**: 30+ days before exam
- **Approach**: Comprehensive coverage with deep understanding
- **Features**: 
  - Detailed topic breakdown
  - Balanced time allocation
  - Regular revision cycles
  - Progress tracking

#### Crash Mode (Backlog Recovery)
- **Timeline**: Less than 15 days before exam
- **Approach**: Strategic topic selection for maximum marks
- **Features**:
  - MUST DO vs SKIP topic classification
  - High-frequency PYQ focus only
  - Formula-based quick learning
  - Minimal theory, maximum practice

### 4. AI-Powered Features

#### Concept Explainer
- **3-Layer Learning**: Basic → Intermediate → Advanced explanations
- **Contextual Examples**: Real-world applications and analogies
- **Visual Learning**: Diagrams and flowcharts for complex topics
- **Quick Reference**: Formulas, key points, and exam tips

#### Smart Analytics
- **Topic Frequency Analysis**: Identifies most important topics from PYQ patterns
- **Difficulty Assessment**: AI evaluates topic complexity
- **Time Estimation**: Predicts realistic study time requirements
- **Progress Tracking**: Monitors completion rates and suggests adjustments

## 🏗️ System Architecture

### Frontend (React + TypeScript + Vite)
```
client/
├── src/
│   ├── components/
│   │   ├── Dashboard.tsx          # Main control panel
│   │   ├── SyllabusUpload.tsx     # PDF upload interface
│   │   ├── PYQAnalysis.tsx        # Question paper analysis
│   │   ├── StudyPlanner.tsx       # Plan creation interface
│   │   ├── ConceptExplainer.tsx   # AI explanation tool
│   │   ├── CrashMode.tsx          # Crash mode interface
│   │   └── Navbar.tsx             # Navigation component
│   ├── pages/
│   │   ├── LandingPage.tsx        # Marketing homepage
│   │   ├── Login.tsx              # User login
│   │   └── Signup.tsx             # User registration
│   ├── App.tsx                    # Main application
│   ├── main.tsx                   # Vite entry point
│   └── axiosConfig.ts             # API client setup
```

### Backend (Node.js + Express + Sequelize)
```
server/
├── routes/
│   ├── authRoutes.js              # Authentication endpoints ✅
│   └── dashboardRoutes.js         # Dashboard endpoints ✅
├── controllers/
│   ├── authController.js          # Auth logic ✅
│   └── dashboardController.js     # Dashboard logic ✅
├── models/
│   ├── User.js                    # User model ✅
│   └── Activity.js                # Activity tracking ✅
├── middleware/
│   ├── authMiddleware.js          # JWT authentication ✅
│   └── errorMiddleware.js         # Error handling ✅
├── config/
│   └── db.js                      # Database config ✅
└── index.js                       # Main server file ✅

Planned StudyPlanner Features (Not Yet Implemented):
├── routes/
│   ├── syllabus.js                # Syllabus processing endpoints 📋
│   ├── pyq.js                     # PYQ analysis endpoints 📋
│   ├── studyPlan.js               # Plan generation endpoints 📋
│   └── concepts.js                # AI explanation endpoints 📋
├── services/
│   ├── syllabusAnalyzer.js        # PDF text extraction & structuring 📋
│   ├── pyqAnalyzer.js             # Question pattern recognition 📋
│   ├── studyPlanGenerator.js      # AI-powered plan creation 📋
│   └── conceptExplainer.js        # Multi-layer explanations 📋
```

## 🔄 Data Flow

1. **Input Processing**
   ```
   PDF Upload → Text Extraction → AI Analysis → Structured Data
   ```

2. **Intelligence Layer**
   ```
   Syllabus + PYQ Data → Pattern Recognition → Priority Scoring → Time Allocation
   ```

3. **Plan Generation**
   ```
   User Preferences + AI Analysis → Schedule Creation → Optimization → Final Plan
   ```

4. **Adaptive Learning**
   ```
   Progress Updates → Plan Adjustment → Recommendation Updates → Improved Outcomes
   ```

## 🚀 Key Features

### Smart Document Processing
- **PDF Text Extraction**: Handles complex academic document formats
- **Content Structuring**: Automatically organizes topics into units and subtopics
- **Multi-format Support**: Works with various syllabus and question paper layouts

### AI-Driven Insights
- **Pattern Recognition**: Identifies recurring themes in previous year questions
- **Difficulty Prediction**: Estimates topic complexity based on content analysis
- **Time Optimization**: Calculates optimal study time distribution

### Personalized Planning
- **Custom Schedules**: Adapts to your available study hours and exam timeline
- **Learning Style Adaptation**: Adjusts content depth based on your preferences
- **Progress Synchronization**: Updates plans based on your completion rate

### Emergency Mode Features
- **Rapid Assessment**: Quickly identifies must-know topics for last-minute preparation
- **Strategic Skipping**: Recommends which topics to skip when time is limited
- **Quick Reference Generation**: Creates condensed study materials for rapid review

## 🛠️ Technology Stack

- **Frontend**: React 18, TypeScript, Modern CSS
- **Backend**: Node.js, Express.js, Multer for file handling
- **AI Processing**: OpenAI API integration for intelligent analysis
- **Document Processing**: PDF-parse for text extraction
- **Database**: SQLite for local data storage
- **File Storage**: Local filesystem with organized uploads

## 📊 Sample Workflow

1. **Upload syllabus PDF** → System extracts 8 units with 32 topics
2. **Upload PYQ papers** → AI identifies 15 high-frequency topics
3. **Set exam date** → 45 days available for preparation
4. **Generate plan** → Creates daily schedule with 4 hours/day study time
5. **Start studying** → Use concept explainer for difficult topics
6. **Track progress** → System adjusts remaining schedule based on completion
7. **Final revision** → Automated revision schedule for last 7 days

## 🎯 Success Metrics

- **Coverage Optimization**: Ensures 90%+ syllabus coverage in available time
- **Priority Accuracy**: Focuses 70% of time on high-frequency PYQ topics
- **Time Efficiency**: Reduces study planning time from hours to minutes
- **Adaptive Learning**: Improves recommendations based on user progress patterns

## 🔧 Setup Instructions

1. **Clone the repository**
2. **Install dependencies**: Run `npm install` in both client and server directories
3. **Configure environment**: Set up your OpenAI API key in server/.env
4. **Start development**: Use `npm run dev` to start both frontend and backend
5. **Access application**: Open http://localhost:3000 in your browser

## 📝 Usage Tips

- **Upload Quality**: Use clear, text-based PDFs for best AI analysis results
- **Regular Updates**: Update your progress regularly for accurate plan adjustments
- **Flexible Planning**: Don't hesitate to switch between regular and crash modes as needed
- **Concept Exploration**: Use the 3-layer explainer for topics you find challenging

---

*StudyPlanner AI - Transform your study approach with intelligent planning and AI-powered insights.*