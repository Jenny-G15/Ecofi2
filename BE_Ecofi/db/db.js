const { Sequelize } = require('sequelize');
    const sequelize = new Sequelize('Ecofi2.0', 'marila', 'Paz12', {
            host: '127.0.0.1',
            dialect: 'mysql'
    });

module.exports = sequelize;
