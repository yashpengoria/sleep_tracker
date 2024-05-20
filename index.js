const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv').config();

const sleepRoutes = require('./routes/sleepRoutes');
const errorHandler = require('./middlewares/errorHandler');

const app = express();
app.use(bodyParser.json());
app.use(express.json());
app.use('/sleep', sleepRoutes);
app.use(errorHandler);

const PORT = process.env.PORT;
// const MONGODB_URI = process.env.MONGODB_URI;
const MONGODB_URI = process.env.NODE_ENV === 'test' ? process.env.MONGODB_URI_TEST : process.env.MONGODB_URI;
mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
      .then(() => {
            console.log('Connected to MongoDB');
            if (process.env.NODE_ENV !== 'test') {
                  app.listen(PORT, () => {
                        console.log(`Server is running on port ${PORT}`);
                  });
            }
      })
      .catch(err => {
            console.error('Failed to connect to MongoDB', err);
      });
