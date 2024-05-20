const sleep = require('../models/sleepModel');

exports.createSleepRecord = async (req, res, next) => {
      try {
            const { userId, hours, timestamp } = req.body;
            if (!userId || !hours || !timestamp) {
                  return res.status(400).json({ error: 'Missing required fields' });
            }
            const sleepRecord = new sleep({ userId, hours, timestamp });
            await sleepRecord.save();
            res.status(201).json(sleepRecord);
      } catch (error) {
            next(error);
      }
};

exports.getSleepRecords = async (req, res, next) => {
      try {
            const { userId } = req.params;
            const records = await sleep.find({ userId }).sort({ timestamp: 1 });
            if (records.length===0) {
                  return res.status(400).json({ error: 'Invalid User ID' });
            }
            res.json(records);
      } catch (error) {
            next(error);
      }
};

exports.deleteSleepRecord = async (req, res, next) => {
      try {
            const { recordId } = req.params;
            const record = await sleep.findByIdAndDelete(recordId);
            if (!record) {
                  return res.status(404).json({ error: 'Record not found, please check for a valid record' });
            }
            res.status(204).end();
      } catch (error) {
            next(error);
      }
};
