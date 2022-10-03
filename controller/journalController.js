const Journals = require('../models/Journals');
const {
    Op
} = require("sequelize");

exports.all = (req, res, next) => {
    Journals.findAll().then(data => {
        res.send(data);
    }).catch(salahnya => {
        res.json({
            status: false,
            pesan: "Gagal tampil: " + salahnya.message,
            data: []
        });
    });
}

exports.findById = (req, res, next) => {
    Journals.findByPk(req.params.idJournal).then(data => {
      res.send(data)
    }).catch(salahnya => {
      res.json({
            status: false,
            pesan: "Gagal tampil: " + salahnya.message,
            data: []
        });
    });
};

exports.findByName = (req, res, next) => {
    Journals.findAll({
      where: {
        // [Op.op]: [
        //   {
            subjectJournal: {
              [Op.startsWith]: req.params.subjectJournal
            }
        //   }
        // ]
      }
    }).then(data => {
      res.json(data)
    }).catch(salahnya => {
      res.json({
        status: false,
        pesan: "Gagal tampil: " + salahnya.message,
        data: []
      });
    });
  };