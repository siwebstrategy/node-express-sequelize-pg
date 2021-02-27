const Sequelize = require('sequelize');
const db = require('../config/database');

const Pipe = db.define('pipe_index', {
    pipe_id: {
        type: Sequelize.INTEGER
    },
    install_date: {
        type: Sequelize.DATE
    },
    life_status: {
        type: Sequelize.STRING
    },
    pipe_length: {
        type: Sequelize.FLOAT
    },
    pipe_diameter: {
        type: Sequelize.INTEGER
    },
    material: {
        type: Sequelize.STRING
    }
}, {
    freezeTableName: true,
    timestamps: false
});

module.exports = Pipe;