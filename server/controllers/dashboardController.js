const { Activity } = require('../models/Activity');
// We will also import other models as we create them (e.g. StudyPlan)

// @desc    Get dashboard stats and recent activity
// @route   GET /api/dashboard
// @access  Private
exports.getDashboardData = async (req, res) => {
    try {
        const userId = req.user.id; // From authMiddleware

        // Fetch recent activity
        const recentActivity = await Activity.findAll({
            where: { userId },
            order: [['createdAt', 'DESC']],
            limit: 5
        });

        // Calculate counts (Mock logic for now until we have full models)
        // In a real app, you'd count actual rows in other tables
        const syllabusCount = await Activity.count({ where: { userId, type: 'syllabus' } });
        const plansCount = await Activity.count({ where: { userId, type: 'plan' } });

        // Mock data for things we don't have yet
        const stats = {
            subjectsAnalyzed: syllabusCount,
            plansCreated: plansCount,
            daysUntilExam: 12, // Placeholder
            completionRate: '68%' // Placeholder
        };

        res.json({
            stats,
            recentActivity
        });
    } catch (error) {
        console.error('Dashboard Error:', error);
        res.status(500).json({ message: 'Server Error' });
    }
};
