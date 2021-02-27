const Sequelize = require('sequelize');

module.exports = new Sequelize('postgres', 'postgres', 'fco9!HFvnxHiyrC!4VVd', {
    host: 'database-1.cu6ovohbzau9.us-east-1.rds.amazonaws.com',
    dialect: 'postgres',
    operatorAliases: false,

    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
});

