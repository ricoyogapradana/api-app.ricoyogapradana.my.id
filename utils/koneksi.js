const { Sequelize } = require('sequelize');

// Option 3: Passing parameters separately (other dialects)
const koneksi = new Sequelize('app', 'root', 'ricoyoga12', {
  host: 'localhost',
  dialect: 'mariadb'
});

try {
    koneksi.authenticate();
    koneksi.sync({ alter: true });
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }

  module.exports = koneksi;