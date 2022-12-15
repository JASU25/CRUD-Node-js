const Sequelize = require('sequelize');

const db = new Sequelize('consultorio', 'root', '',{
    host: process.env.host,
    dialect: 'mysql',
});

module.exports = db;