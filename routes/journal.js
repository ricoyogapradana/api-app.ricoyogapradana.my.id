var express = require('express');
var router = express.Router();
var journalController = require('../controller/journalController');

router.get('/', journalController.all);
router.get('/:idJournal', journalController.findById);
router.get('/name/:subjectJournal', journalController.findByName);

module.exports = router;