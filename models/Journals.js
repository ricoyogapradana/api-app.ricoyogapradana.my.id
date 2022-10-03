const { Sequelize, DataTypes } = require('sequelize');
const koneksi = require('../utils/koneksi');

const Journals =  koneksi.define('tbl_journal', {
  // Model attributes are defined here
  idJournal: {
    type: DataTypes.STRING,
    primaryKey: true
  },
  subjectJournal: {
    type: DataTypes.STRING
  },
  descJournal: {
    type: DataTypes.STRING
  },
  text: {
    type: DataTypes.TEXT
  },
  journalKey: {
    type: DataTypes.STRING
  },
  privateKey: {
    type: DataTypes.STRING
  },
  status: {
    type: DataTypes.ENUM(['waiting', 'proggress', 'pending', 'closed']),
  }
}, {
  // Other model options go here
  freezeTableName: true
});

// `sequelize.define` also returns the model
module.exports = Journals // true