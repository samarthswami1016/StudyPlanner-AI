const sequelize = require('./config/db');
const { User } = require('./models/User');

const viewData = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connected to Database.');

        const users = await User.findAll();
        console.log('\n--- USERS ---');
        if (users.length === 0) {
            console.log("No users found.");
        } else {
            console.table(users.map(u => ({
                id: u.id,
                username: u.username,
                email: u.email,
                joined: u.createdAt
            })));
        }

        // You can add Activity view here later
        // const activities = await Activity.findAll();
        // console.table(activities);

    } catch (error) {
        console.error('Error fetching data:', error);
    } finally {
        await sequelize.close();
    }
};

viewData();
