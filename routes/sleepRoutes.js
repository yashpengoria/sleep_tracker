const express = require('express');
const router = express.Router();
const sleepController = require('../controllers/sleepController');

router.post('/', sleepController.createSleepRecord);
router.get('/:userId', sleepController.getSleepRecords);
router.delete('/:recordId', sleepController.deleteSleepRecord);

module.exports = router;
