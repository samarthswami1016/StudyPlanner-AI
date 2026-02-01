const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Activity = sequelize.define('Activity', {
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    action: {
        type: DataTypes.STRING, // e.g., "Analyzed Syllabus"
        allowNull: false
    },
    details: {
        type: DataTypes.STRING, // e.g., "Data Structures"
        allowNull: true
    },
    type: {
        type: DataTypes.ENUM('syllabus', 'plan', 'pyq', 'crash'),
        allowNull: false
    }
});

module.exports = { Activity };
